package com.ismartcoding.plain.ui.base

import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

@Composable
fun Subtitle(
    text: String,
    modifier: Modifier = Modifier.padding(horizontal = 16.dp),
    color: Color = MaterialTheme.colorScheme.primary,
) {
    Text(
        text = text,
        modifier =
            modifier
                .fillMaxWidth()
                .padding(vertical = 8.dp),
        color = color,
        style = MaterialTheme.typography.labelLarge,
    )
}
