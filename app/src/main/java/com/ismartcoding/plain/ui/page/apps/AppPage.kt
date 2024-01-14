package com.ismartcoding.plain.ui.page.apps


import android.annotation.SuppressLint
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.text.selection.SelectionContainer
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.outlined.Launch
import androidx.compose.material.icons.outlined.DeleteOutline
import androidx.compose.material.icons.outlined.Outbox
import androidx.compose.material.icons.outlined.Settings
import androidx.compose.material.icons.outlined.Share
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.SuggestionChip
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.core.content.pm.PackageInfoCompat
import androidx.navigation.NavHostController
import com.google.accompanist.drawablepainter.rememberDrawablePainter
import com.ismartcoding.plain.R
import com.ismartcoding.plain.features.locale.LocaleHelper
import com.ismartcoding.plain.features.pkg.DPackage
import com.ismartcoding.plain.features.pkg.PackageHelper
import com.ismartcoding.plain.packageManager
import com.ismartcoding.plain.ui.base.*
import com.ismartcoding.plain.ui.helpers.DialogHelper
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import androidx.lifecycle.Lifecycle

@SuppressLint("MissingPermission")
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun AppPage(
    navController: NavHostController,
    id: String,
) {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    var item by remember { mutableStateOf<DPackage?>(null) }
    var groupsButtons by remember { mutableStateOf(listOf<GroupButton>()) }

    val lifecycleEvent = rememberLifecycleEvent()
    LaunchedEffect(lifecycleEvent) {
        if (lifecycleEvent == Lifecycle.Event.ON_RESUME) {
            if (PackageHelper.isUninstalled(id)) {
                navController.popBackStack()
            }
        }
    }

    LaunchedEffect(Unit) {
        scope.launch(Dispatchers.IO) {
            item = PackageHelper.getPackage(id)
            val buttons = mutableListOf<GroupButton>()
            if (PackageHelper.canLaunch(item!!.id)) {
                buttons.add(
                    GroupButton(Icons.AutoMirrored.Outlined.Launch, "Launch") {
                        try {
                            PackageHelper.launch(context, item?.id ?: "")
                        } catch (ex: Exception) {
                            DialogHelper.showMessage(ex)
                        }
                    }
                )
            }
            buttons.add(
                GroupButton(Icons.Outlined.DeleteOutline, "Uninstall") {
                    try {
                        PackageHelper.uninstall(context, item?.id ?: "")
                    } catch (ex: Exception) {
                        DialogHelper.showMessage(ex)
                    }
                }
            )
            buttons.add(
                GroupButton(Icons.Outlined.Settings, "View in settings") {
                    try {
                        PackageHelper.viewInSettings(context, item?.id ?: "")
                    } catch (ex: Exception) {
                        DialogHelper.showMessage(ex)
                    }
                }
            )
            buttons.add(
                GroupButton(Icons.Outlined.Outbox, "Manifest") {

                }
            )
            groupsButtons = buttons
        }
    }

    PScaffold(
        navController,
        topBarTitle = item?.name ?: "",
        actions = {
            PIconButton(
                imageVector = Icons.Outlined.Share,
                contentDescription = stringResource(R.string.share),
                tint = MaterialTheme.colorScheme.onSurface,
            ) {
            }
        },
        content = {
            if (item == null) {
                NoDataColumn(loading = true)
                return@PScaffold
            }
            LazyColumn {
                item {
                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(top = 24.dp),
                        horizontalAlignment = Alignment.CenterHorizontally,
                    ) {
                        if (item != null) {
                            val icon = packageManager.getApplicationIcon(item!!.appInfo)
                            Image(
                                modifier =
                                Modifier
                                    .padding(bottom = 16.dp)
                                    .size(56.dp),
                                painter = rememberDrawablePainter(drawable = icon),
                                contentDescription = item!!.name,
                            )
                            SelectionContainer {
                                Text(
                                    text = item?.id ?: "",
                                    modifier = Modifier
                                        .align(Alignment.CenterHorizontally)
                                        .padding(horizontal = 32.dp),
                                    style = MaterialTheme.typography.titleMedium,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                                )
                            }
                            VerticalSpace(dp = 8.dp)
                            SelectionContainer {
                                Text(
                                    text = LocaleHelper.getStringF(
                                        R.string.version_name_with_code,
                                        "version_name", item?.version ?: "", "version_code", PackageInfoCompat.getLongVersionCode(item!!.packageInfo)
                                    ),
                                    modifier = Modifier
                                        .align(Alignment.CenterHorizontally)
                                        .padding(horizontal = 32.dp),
                                    style = MaterialTheme.typography.titleMedium,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                                )
                            }
                            Row(
                                Modifier
                                    .align(Alignment.CenterHorizontally)
                                    .padding(start = 32.dp, end = 32.dp, top = 8.dp),
                                verticalAlignment = Alignment.CenterVertically,
                            ) {
                                SuggestionChip(onClick = {}, label = {
                                    Text(text = stringResource(id = if (item?.type == "user") R.string.user_app else R.string.system_app))
                                })
                                if (item?.hasLargeHeap == true) {
                                    HorizontalSpace(dp = 8.dp)
                                    SuggestionChip(onClick = {}, label = {
                                        Text(text = stringResource(id = R.string.large_heap))
                                    })
                                }
                            }
                            VerticalSpace(dp = 16.dp)
                            GroupButtons(
                                buttons = groupsButtons
                            )
                        }
                    }
                }
            }
        },
    )
}