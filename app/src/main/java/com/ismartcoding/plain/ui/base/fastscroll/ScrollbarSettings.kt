package com.ismartcoding.plain.ui.base.fastscroll

import androidx.compose.animation.core.Easing
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.runtime.Stable
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

@Stable
data class ScrollbarSettings(
    val enabled: Boolean = true,
    val side: ScrollbarLayoutSide = ScrollbarLayoutSide.End,
    val alwaysShowScrollbar: Boolean = false,
    val scrollbarPadding: Dp = 0.dp,
    val thumbThickness: Dp = 12.dp,
    val thumbShape: Shape = CircleShape,
    val thumbMinLength: Float = 0.1f,
    val selectionMode: ScrollbarSelectionMode = ScrollbarSelectionMode.Full,
    val selectionActionable: ScrollbarSelectionActionable = ScrollbarSelectionActionable.Always,
    val hideDelayMillis: Int = 3000,
    val hideDisplacement: Dp = 15.dp,
    val hideEasingAnimation: Easing = FastOutSlowInEasing,
    val durationAnimationMillis: Int = 500,
) {
    companion object {
        val Default = ScrollbarSettings()
    }
}

