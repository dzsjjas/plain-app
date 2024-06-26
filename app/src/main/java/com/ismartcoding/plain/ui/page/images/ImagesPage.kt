package com.ismartcoding.plain.ui.page.images

import android.app.Activity
import androidx.activity.compose.BackHandler
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.slideInVertically
import androidx.compose.animation.slideOutVertically
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.combinedClickable
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.GridItemSpan
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.lazy.grid.rememberLazyGridState
import androidx.compose.foundation.rememberScrollState
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.Folder
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.platform.LocalView
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavHostController
import com.ismartcoding.lib.channel.receiveEventHandler
import com.ismartcoding.lib.extensions.isGestureInteractionMode
import com.ismartcoding.lib.helpers.CoroutinesHelper.withIO
import com.ismartcoding.plain.R
import com.ismartcoding.plain.data.DMediaBucket
import com.ismartcoding.plain.enums.AppFeatureType
import com.ismartcoding.plain.features.PermissionsResultEvent
import com.ismartcoding.plain.features.locale.LocaleHelper
import com.ismartcoding.plain.features.media.CastPlayer
import com.ismartcoding.plain.preference.ImageGridCellsPerRowPreference
import com.ismartcoding.plain.preference.ImageSortByPreference
import com.ismartcoding.plain.ui.base.ActionButtonMoreWithMenu
import com.ismartcoding.plain.ui.base.ActionButtonSearch
import com.ismartcoding.plain.ui.base.BottomSpace
import com.ismartcoding.plain.ui.base.HorizontalSpace
import com.ismartcoding.plain.ui.base.NavigationBackIcon
import com.ismartcoding.plain.ui.base.NavigationCloseIcon
import com.ismartcoding.plain.ui.base.NeedPermissionColumn
import com.ismartcoding.plain.ui.base.NoDataColumn
import com.ismartcoding.plain.ui.base.PDropdownMenuItemCast
import com.ismartcoding.plain.ui.base.PDropdownMenuItemCellsPerRow
import com.ismartcoding.plain.ui.base.PDropdownMenuItemSelect
import com.ismartcoding.plain.ui.base.PDropdownMenuItemSort
import com.ismartcoding.plain.ui.base.PDropdownMenuItemTags
import com.ismartcoding.plain.ui.base.PFilterChip
import com.ismartcoding.plain.ui.base.PIconButton
import com.ismartcoding.plain.ui.base.PMiniOutlineButton
import com.ismartcoding.plain.ui.base.PScaffold
import com.ismartcoding.plain.ui.base.PTopAppBar
import com.ismartcoding.plain.ui.base.RadioDialog
import com.ismartcoding.plain.ui.base.RadioDialogOption
import com.ismartcoding.plain.ui.base.dragselect.DragSelectState
import com.ismartcoding.plain.ui.base.dragselect.gridDragSelect
import com.ismartcoding.plain.ui.base.dragselect.rememberDragSelectState
import com.ismartcoding.plain.ui.base.fastscroll.LazyVerticalGridScrollbar
import com.ismartcoding.plain.ui.base.pullrefresh.LoadMoreRefreshContent
import com.ismartcoding.plain.ui.base.pullrefresh.PullToRefresh
import com.ismartcoding.plain.ui.base.pullrefresh.RefreshContentState
import com.ismartcoding.plain.ui.base.pullrefresh.rememberRefreshLayoutState
import com.ismartcoding.plain.ui.components.CastDialog
import com.ismartcoding.plain.ui.components.FileSortDialog
import com.ismartcoding.plain.ui.components.ImageGridItem
import com.ismartcoding.plain.ui.components.ListSearchBar
import com.ismartcoding.plain.ui.components.mediaviewer.previewer.MediaPreviewer
import com.ismartcoding.plain.ui.components.mediaviewer.previewer.rememberPreviewerState
import com.ismartcoding.plain.ui.extensions.navigateMediaFolders
import com.ismartcoding.plain.ui.extensions.navigateTags
import com.ismartcoding.plain.ui.extensions.reset
import com.ismartcoding.plain.ui.models.CastViewModel
import com.ismartcoding.plain.ui.models.MediaFoldersViewModel
import com.ismartcoding.plain.ui.models.ImagesViewModel
import com.ismartcoding.plain.ui.models.TagsViewModel
import com.ismartcoding.plain.ui.models.enterSearchMode
import com.ismartcoding.plain.ui.models.exitSearchMode
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch

@OptIn(ExperimentalMaterial3Api::class, ExperimentalFoundationApi::class)
@Composable
fun ImagesPage(
    navController: NavHostController,
    bucketId: String,
    viewModel: ImagesViewModel = viewModel(),
    tagsViewModel: TagsViewModel = viewModel(),
    bucketViewModel: MediaFoldersViewModel = viewModel(),
    castViewModel: CastViewModel = viewModel(),
) {
    val context = LocalContext.current
    val view = LocalView.current
    val window = (view.context as Activity).window
    val itemsState by viewModel.itemsFlow.collectAsState()
    val bucketsState by bucketViewModel.itemsFlow.collectAsState()
    val configuration = LocalConfiguration.current

    val bucketsMap = remember(bucketsState) {
        derivedStateOf {
            bucketsState.associateBy { it.id }
        }
    }

    val previewerState = rememberPreviewerState()
    val tagsState by tagsViewModel.itemsFlow.collectAsState()
    val tagsMapState by tagsViewModel.tagsMapFlow.collectAsState()
    val scope = rememberCoroutineScope()
    val filtersScrollState = rememberScrollState()
    var hasPermission by remember {
        mutableStateOf(AppFeatureType.FILES.hasPermission(context))
    }

    val gridState = rememberLazyGridState()
    val scrollBehavior = TopAppBarDefaults.enterAlwaysScrollBehavior(canScroll = { gridState.firstVisibleItemIndex > 0 })

    var cellsPerRow by remember { mutableIntStateOf(ImageGridCellsPerRowPreference.default) }
    val density = LocalDensity.current
    val imageWidthPx = remember(cellsPerRow) {
        density.run { ((configuration.screenWidthDp.dp - ((cellsPerRow - 1) * 2).dp) / cellsPerRow).toPx().toInt() }
    }
    val dragSelectState = rememberDragSelectState(lazyGridState = gridState)
    var showCellsPerRowDialog by remember { mutableStateOf(false) }

    val events by remember { mutableStateOf<MutableList<Job>>(arrayListOf()) }

    val topRefreshLayoutState =
        rememberRefreshLayoutState {
            scope.launch {
                withIO {
                    viewModel.loadAsync(context, tagsViewModel)
                    bucketViewModel.loadAsync(context)
                }
                setRefreshState(RefreshContentState.Finished)
            }
        }

    LaunchedEffect(Unit) {
        viewModel.bucketId.value = bucketId
        tagsViewModel.dataType.value = viewModel.dataType
        bucketViewModel.dataType.value = viewModel.dataType
        if (hasPermission) {
            scope.launch(Dispatchers.IO) {
                cellsPerRow = ImageGridCellsPerRowPreference.getAsync(context)
                viewModel.sortBy.value = ImageSortByPreference.getValueAsync(context)
                viewModel.loadAsync(context, tagsViewModel)
                bucketViewModel.loadAsync(context)
            }
        }
        events.add(
            receiveEventHandler<PermissionsResultEvent> {
                hasPermission = AppFeatureType.FILES.hasPermission(context)
                scope.launch(Dispatchers.IO) {
                    viewModel.sortBy.value = ImageSortByPreference.getValueAsync(context)
                    viewModel.loadAsync(context, tagsViewModel)
                }
            })
    }

    val insetsController = WindowCompat.getInsetsController(window, view)
    LaunchedEffect(dragSelectState.selectMode, (previewerState.visible && !context.isGestureInteractionMode())) {
        if (dragSelectState.selectMode || (previewerState.visible && !context.isGestureInteractionMode())) {
            insetsController.hide(WindowInsetsCompat.Type.navigationBars())
        } else {
            insetsController.show(WindowInsetsCompat.Type.navigationBars())
        }
    }

    val onSearch: (String) -> Unit = {
        viewModel.searchActive.value = false
        viewModel.showLoading.value = true
        scope.launch(Dispatchers.IO) {
            viewModel.loadAsync(context, tagsViewModel)
        }
    }

    DisposableEffect(Unit) {
        onDispose {
            insetsController.show(WindowInsetsCompat.Type.navigationBars())
            events.forEach { it.cancel() }
            events.clear()
        }
    }

    BackHandler {
        if (previewerState.visible) {
            scope.launch {
                previewerState.closeTransform()
            }
        } else if (dragSelectState.selectMode) {
            dragSelectState.exitSelectMode()
        } else if (castViewModel.castMode.value) {
            castViewModel.exitCastMode()
        } else if (viewModel.showSearchBar.value) {
            if (!viewModel.searchActive.value || viewModel.queryText.value.isEmpty()) {
                viewModel.exitSearchMode()
                onSearch("")
            }
        } else {
            navController.popBackStack()
        }
    }

    if (showCellsPerRowDialog) {
        RadioDialog(
            title = stringResource(R.string.cells_per_row),
            options = IntRange(2, 10).map { value ->
                RadioDialogOption(
                    text = value.toString(),
                    selected = value == cellsPerRow,
                ) {
                    scope.launch(Dispatchers.IO) {
                        ImageGridCellsPerRowPreference.putAsync(context, value)
                        cellsPerRow = value
                    }
                }
            },
        ) {
            showCellsPerRowDialog = false
        }
    }

    ViewImageBottomSheet(viewModel, tagsViewModel, tagsMapState, tagsState, dragSelectState)

    if (viewModel.showSortDialog.value) {
        FileSortDialog(viewModel.sortBy, onSelected = {
            scope.launch(Dispatchers.IO) {
                ImageSortByPreference.putAsync(context, it)
                viewModel.sortBy.value = it
                viewModel.loadAsync(context, tagsViewModel)
            }
        }, onDismiss = {
            viewModel.showSortDialog.value = false
        })
    }

    CastDialog(castViewModel)

    PScaffold(
        modifier = Modifier.nestedScroll(scrollBehavior.nestedScrollConnection),
        topBar = {
            if (viewModel.showSearchBar.value) {
                ListSearchBar(
                    viewModel = viewModel,
                    onSearch = onSearch
                )
                return@PScaffold
            }
            PTopAppBar(
                modifier = Modifier.combinedClickable(onClick = {}, onDoubleClick = {
                    scope.launch {
                        gridState.scrollToItem(0)
                    }
                }),
                navController = navController,
                navigationIcon = {
                    if (dragSelectState.selectMode) {
                        NavigationCloseIcon {
                            dragSelectState.exitSelectMode()
                        }
                    } else if (castViewModel.castMode.value) {
                        NavigationCloseIcon {
                            castViewModel.exitCastMode()
                        }
                    } else {
                        NavigationBackIcon {
                            navController.popBackStack()
                        }
                    }
                },
                title = getPageTitle(viewModel, castViewModel, bucketsMap.value[bucketId], dragSelectState),
                scrollBehavior = scrollBehavior,
                actions = {
                    if (!hasPermission) {
                        return@PTopAppBar
                    }
                    if (castViewModel.castMode.value) {
                        return@PTopAppBar
                    }
                    if (dragSelectState.selectMode) {
                        PMiniOutlineButton(
                            text = stringResource(if (dragSelectState.isAllSelected(itemsState)) R.string.unselect_all else R.string.select_all),
                            onClick = {
                                dragSelectState.toggleSelectAll(itemsState)
                            },
                        )
                        HorizontalSpace(dp = 8.dp)
                    } else {
                        ActionButtonSearch {
                            viewModel.enterSearchMode()
                        }
                        if (viewModel.bucketId.value.isEmpty()) {
                            PIconButton(
                                icon = Icons.Outlined.Folder,
                                contentDescription = stringResource(R.string.folders),
                                tint = MaterialTheme.colorScheme.onSurface,
                            ) {
                                navController.navigateMediaFolders(viewModel.dataType)
                            }
                        }
                        ActionButtonMoreWithMenu { dismiss ->
                            PDropdownMenuItemSelect(onClick = {
                                dismiss()
                                dragSelectState.enterSelectMode()
                            })
                            PDropdownMenuItemTags(onClick = {
                                dismiss()
                                navController.navigateTags(viewModel.dataType)
                            })
                            PDropdownMenuItemSort(onClick = {
                                dismiss()
                                viewModel.showSortDialog.value = true
                            })
                            PDropdownMenuItemCast(onClick = {
                                dismiss()
                                castViewModel.showCastDialog.value = true
                            })
                            PDropdownMenuItemCellsPerRow(onClick = {
                                dismiss()
                                showCellsPerRowDialog = true
                            })
                        }
                    }
                },
            )
        },
        bottomBar = {
            AnimatedVisibility(
                visible = dragSelectState.showBottomActions(),
                enter = slideInVertically { it },
                exit = slideOutVertically { it }) {
                FilesSelectModeBottomActions(viewModel, tagsViewModel, tagsState, dragSelectState)
            }
        },
    ) {
        if (!hasPermission) {
            NeedPermissionColumn(AppFeatureType.FILES.getPermission()!!)
            return@PScaffold
        }

        if (!dragSelectState.selectMode) {
            Row(
                modifier = Modifier
                    .padding(horizontal = 16.dp)
                    .horizontalScroll(filtersScrollState),
                horizontalArrangement = Arrangement.spacedBy(8.dp),
            ) {
                PFilterChip(
                    selected = !viewModel.trash.value && viewModel.tag.value == null,
                    onClick = {
                        viewModel.trash.value = false
                        viewModel.tag.value = null
                        scope.launch {
                            scrollBehavior.reset()
                            gridState.scrollToItem(0)
                        }
                        scope.launch(Dispatchers.IO) {
                            viewModel.loadAsync(context, tagsViewModel)
                        }
                    },
                    label = { Text(stringResource(id = R.string.all) + " (${viewModel.total.value})") }
                )
//                PFilterChip(
//                    selected = viewModel.trash.value,
//                    onClick = {
//                        viewModel.trash.value = true
//                        viewModel.tag.value = null
//                scope.launch {
//                    scrollBehavior.reset()
//                    gridState.scrollToItem(0)
//                }
//                        scope.launch(Dispatchers.IO) {
//                            viewModel.loadAsync(context, tagsViewModel)
//                        }
//                    },
//                    label = { Text(stringResource(id = R.string.trash) + " (${viewModel.totalTrash.value})") }
//                )
                tagsState.forEach { tag ->
                    PFilterChip(
                        selected = viewModel.tag.value?.id == tag.id,
                        onClick = {
                            viewModel.trash.value = false
                            viewModel.tag.value = tag
                            scope.launch {
                                scrollBehavior.reset()
                                gridState.scrollToItem(0)
                            }
                            scope.launch(Dispatchers.IO) {
                                viewModel.loadAsync(context, tagsViewModel)
                            }
                        },
                        label = { Text(if (viewModel.bucketId.value.isNotEmpty() || viewModel.queryText.value.isNotEmpty()) tag.name else "${tag.name} (${tag.count})") }
                    )
                }
            }
        }

        PullToRefresh(
            refreshLayoutState = topRefreshLayoutState,
        ) {
            AnimatedVisibility(
                visible = true,
                enter = fadeIn(),
                exit = fadeOut()
            ) {
                if (itemsState.isNotEmpty()) {
                    LazyVerticalGridScrollbar(
                        state = gridState,
                    ) {
                        LazyVerticalGrid(
                            columns = GridCells.Fixed(cellsPerRow),
                            state = gridState,
                            modifier = Modifier
                                .fillMaxSize()
                                .gridDragSelect(
                                    items = itemsState,
                                    state = dragSelectState,
                                ),
                            horizontalArrangement = Arrangement.spacedBy(2.dp),
                            verticalArrangement = Arrangement.spacedBy(2.dp),
                        ) {
                            items(itemsState,
                                key = {
                                    it.id
                                },
                                contentType = {
                                    "image"
                                },
                                span = {
                                    GridItemSpan(1)
                                }) { m ->
                                ImageGridItem(
                                    modifier = Modifier
                                        .animateItemPlacement(),
                                    viewModel,
                                    castViewModel,
                                    m,
                                    showSize = cellsPerRow < 6,
                                    previewerState,
                                    dragSelectState,
                                    imageWidthPx,
                                )
                            }
                            item(
                                span = { GridItemSpan(maxLineSpan) },
                                key = "loadMore"
                            ) {
                                if (itemsState.isNotEmpty() && !viewModel.noMore.value) {
                                    LaunchedEffect(Unit) {
                                        scope.launch(Dispatchers.IO) {
                                            withIO { viewModel.moreAsync(context, tagsViewModel) }
                                        }
                                    }
                                }
                                LoadMoreRefreshContent(viewModel.noMore.value)
                            }
                            item(
                                span = { GridItemSpan(maxLineSpan) },
                                key = "bottomSpace"
                            ) {
                                BottomSpace()
                            }
                        }
                    }
                } else {
                    NoDataColumn(loading = viewModel.showLoading.value, search = viewModel.showSearchBar.value)
                }
            }
        }
    }
    MediaPreviewer(
        state = previewerState,
        tagsViewModel = tagsViewModel,
        tagsMap = tagsMapState,
        tagsState = tagsState,
        onRenamed = {
            scope.launch(Dispatchers.IO) {
                viewModel.loadAsync(context, tagsViewModel)
            }
        },
        deleteAction = { item ->
            scope.launch(Dispatchers.IO) {
                viewModel.delete(context, setOf(item.mediaId))
                previewerState.closeTransform()
            }
        },
    )
}

@Composable
fun getPageTitle(viewModel: ImagesViewModel, castViewModel: CastViewModel, bucket: DMediaBucket?, dragSelectState: DragSelectState): String {
    val imageName = bucket?.name ?: stringResource(id = R.string.images)
    return if (castViewModel.castMode.value) {
        stringResource(id = R.string.cast_mode) + " - " + CastPlayer.currentDevice?.description?.device?.friendlyName
    } else if (dragSelectState.selectMode) {
        LocaleHelper.getStringF(R.string.x_selected, "count", dragSelectState.selectedIds.size)
    } else if (viewModel.tag.value != null) {
        imageName + " - " + viewModel.tag.value!!.name
    } else if (viewModel.trash.value) {
        stringResource(id = R.string.images) + " - " + stringResource(id = R.string.trash)
    } else {
        imageName
    }
}
