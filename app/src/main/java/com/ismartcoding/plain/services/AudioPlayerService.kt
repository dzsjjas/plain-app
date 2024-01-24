package com.ismartcoding.plain.services

import android.app.PendingIntent
import android.content.Intent
import android.net.Uri
import androidx.annotation.OptIn
import androidx.media3.common.AudioAttributes
import androidx.media3.common.C
import androidx.media3.common.MediaItem
import androidx.media3.common.Player
import androidx.media3.common.util.UnstableApi
import androidx.media3.datasource.DefaultDataSource
import androidx.media3.exoplayer.DefaultRenderersFactory
import androidx.media3.exoplayer.ExoPlayer
import androidx.media3.exoplayer.source.DefaultMediaSourceFactory
import androidx.media3.extractor.DefaultExtractorsFactory
import androidx.media3.extractor.mp3.Mp3Extractor
import androidx.media3.session.LibraryResult
import androidx.media3.session.MediaLibraryService
import androidx.media3.session.MediaSession
import com.google.common.util.concurrent.Futures
import com.google.common.util.concurrent.ListenableFuture
import com.ismartcoding.lib.helpers.CoroutinesHelper.coMain
import com.ismartcoding.lib.helpers.CoroutinesHelper.withIO
import com.ismartcoding.lib.logcat.LogCat
import com.ismartcoding.plain.MainApp
import com.ismartcoding.plain.data.preference.AudioPlayingPreference
import com.ismartcoding.plain.features.audio.AudioAction
import com.ismartcoding.plain.features.audio.AudioPlayer
import com.ismartcoding.plain.features.audio.AudioServiceAction
import java.io.File

@OptIn(UnstableApi::class)
class AudioPlayerService : MediaLibraryService() {

    private lateinit var player: Player
    private lateinit var session: MediaLibrarySession
    private val listener = object : Player.Listener {

        override fun onEvents(player: Player, events: Player.Events) {
            val eventItems = mutableListOf<Int>()
            for (i in 0 until events.size()) {
                eventItems.add(events.get(i))
            }
            LogCat.d("onEvents: ${eventItems.joinToString(",")}")
            if (events.contains(Player.EVENT_MEDIA_ITEM_TRANSITION)) {
                LogCat.d("onEvents: EVENT_MEDIA_ITEM_TRANSITION, pendingQuit: ${AudioPlayer.pendingQuit}")
                if (AudioPlayer.pendingQuit) {
                    AudioPlayer.pendingQuit = false
                    AudioPlayer.pause()
                    return
                }
                coMain {
                    val context = MainApp.instance
                    val mediaItem = player.currentMediaItem
                    if (mediaItem == null) {
                        withIO { AudioPlayingPreference.putAsync(context, "") }
                        return@coMain
                    }
                    withIO { AudioPlayingPreference.putAsync(context, mediaItem.mediaId) }
                    AudioPlayer.setChangedNotify(AudioAction.MEDIA_ITEM_TRANSITION)
                }
            } else if (events.contains(Player.EVENT_IS_PLAYING_CHANGED)) {
                LogCat.d("onEvents: EVENT_IS_PLAYING_CHANGED")
                AudioPlayer.setChangedNotify(AudioAction.PLAYBACK_STATE_CHANGED)
            } else if (events.contains(Player.EVENT_PLAYBACK_STATE_CHANGED)) {
                LogCat.d("onEvents: EVENT_PLAYBACK_STATE_CHANGED")
                AudioPlayer.setChangedNotify(AudioAction.PLAYBACK_STATE_CHANGED)
            }
        }
    }

    override fun onCreate() {
        super.onCreate()

        val attributes = AudioAttributes.Builder().setContentType(C.AUDIO_CONTENT_TYPE_MUSIC).setUsage(C.USAGE_MEDIA).build()
        val dataSourceFactory = DefaultDataSource.Factory(this)
        val extractorsFactory = DefaultExtractorsFactory()
        extractorsFactory.setConstantBitrateSeekingAlwaysEnabled(false)
        extractorsFactory.setMp3ExtractorFlags(Mp3Extractor.FLAG_ENABLE_INDEX_SEEKING)
        val mediaSourceFactory = DefaultMediaSourceFactory(dataSourceFactory, extractorsFactory)
        player = ExoPlayer.Builder(applicationContext)
            .setMediaSourceFactory(mediaSourceFactory)
            .setAudioAttributes(
                attributes, true
            )
            .setHandleAudioBecomingNoisy(true).setRenderersFactory(
                DefaultRenderersFactory(this).setExtensionRendererMode(
                    DefaultRenderersFactory.EXTENSION_RENDERER_MODE_PREFER
                )
            ).build()

        player.addListener(listener)

        val s = MediaLibrarySession.Builder(this, player, object : MediaLibrarySession.Callback {
        }).setId(packageName)
        packageManager?.getLaunchIntentForPackage(packageName)?.let { sessionIntent ->
            s.setSessionActivity(
                PendingIntent.getActivity(
                    this, 0, sessionIntent, PendingIntent.FLAG_IMMUTABLE
                )
            )
        }
        session = s.build()
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        super.onStartCommand(intent, flags, startId)
        if (intent?.action != null) {
            LogCat.d("onStartCommand: ${intent.action}")
        }
        when (intent?.action) {
            AudioServiceAction.QUIT.name -> {
                AudioPlayer.pause()
            }

            AudioServiceAction.PENDING_QUIT.name -> {
                AudioPlayer.pendingQuit = true
            }
        }
        return START_NOT_STICKY
    }

    override fun onGetSession(controllerInfo: MediaSession.ControllerInfo): MediaLibrarySession {
        return session
    }

    override fun onTaskRemoved(rootIntent: Intent) {
        super.onTaskRemoved(rootIntent)
        stopSelf()
    }

    override fun onDestroy() {
        super.onDestroy()
        releaseMediaSession()
    }

    private fun releaseMediaSession() {
        session.run {
            release()
            player.stop()
            player.release()
            AudioPlayer.release()
        }
    }
}
