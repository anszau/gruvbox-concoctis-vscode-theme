export default function(palette, name, type, tokenColors) {
  return {
    name,
    type,
    colors: {
      // ---------------------------
      // Editor Base Colors
      // ---------------------------
      "selection.background": `${palette.fg}C7`,
      descriptionForeground: palette.fg1,
      errorForeground: `${palette.red}FF`, // 100%
      "widget.shadow": "#00000044",
      "editor.background": palette.bg,
      "editor.foreground": palette.fg,
      "editorLineNumber.foreground": palette.bg8,
      "editorLineNumber.activeForeground": palette.fg1, // What does this do?
      "editorCursor.foreground": `${palette.fg}`,
      // ---------------------------
      // Badge
      // ---------------------------
      "badge.background": palette.yellow,
      "badge.foreground": palette.bg0,
      // ---------------------------
      // Activity Bar
      // ---------------------------
      "activityBar.background": palette.bg,
      "activityBar.dropBackground": palette.bg,
      "activityBar.foreground": palette.grey0,
      "activityBar.inactiveForeground": palette.bg8,
      "activityBar.border": palette.bg0,
      "activityBarBadge.background": palette.yellow,
      "activityBarBadge.foreground": palette.bg0,
      "activityBar.activeBackground": `${palette.fg}26`,
      "activityBar.activeBorder": palette.yellow,
      // ---------------------------
      // Sidebar
      // ---------------------------
      "sideBar.background": palette.bg1,
      "sideBar.foreground": `${palette.grey1}FF`, // 100%,
      "sideBar.border": palette.bg0,
      "sideBar.dropBackground": palette.bg1,
      "sideBarTitle.foreground": `${palette.grey1}FF`, // 100%,
      "sideBarSectionHeader.background": palette.bg4,
      "sideBarSectionHeader.foreground": `${palette.grey1}FF`, // 100%,
      "sideBarSectionHeader.border": palette.bg0,
      // ---------------------------
      // Status Bar
      // ---------------------------
      "statusBar.background": palette.bg1,
      "statusBar.foreground": palette.grey0,
      "statusBar.border": palette.bg0,
      "statusBar.debuggingBackground": `${palette.red}`,
      "statusBar.debuggingForeground": palette.bg,
      "statusBar.debuggingBorder": `${palette.red}`,
      "statusBar.noFolderForeground": palette.grey1,
      "statusBar.noFolderBackground": palette.bg1,
      "statusBar.noFolderBorder": palette.bg1,
      "statusBarItem.activeBackground": `${palette.bg4}a0`,
      "statusBarItem.hoverBackground": palette.bg2,
      "statusBarItem.prominentBackground": `${palette.grey2}`,
      "statusBarItem.prominentHoverBackground": `${palette.grey1}`,
      // ---------------------------
      // Button
      // ---------------------------
      "button.background": `${palette.grey2}`,
      "button.foreground": palette.bg,
      "button.hoverBackground": `${palette.grey1}`,
      // ---------------------------
      // Dropdown
      // ---------------------------
      "dropdown.background": `${palette.bg4}`,
      "dropdown.border": `${palette.bg4}`,
      "dropdown.foreground": palette.grey1,
      // ---------------------------
      // Editor Marker Navigation
      // ---------------------------
      "editorMarkerNavigation.background": `${palette.bg2}`,
      "editorMarkerNavigationError.background": `${palette.red}FF`,
      "editorMarkerNavigationWarning.background": `${palette.yellow}`,
      "editorMarkerNavigationInfo.background": `${palette.aqua}`,
      // ---------------------------
      // Errors and warnings
      // ---------------------------
      "editorError.border": palette.bg,
      "editorError.foreground": `${palette.red}FF`,
      "editorWarning.border": palette.bg,
      "editorWarning.foreground": palette.orange,
      "editorInfo.border": palette.bg,
      "editorInfo.foreground": palette.yellow,
      "editorHint.border": palette.bg,
      "editorHint.foreground": `${palette.blue}FF`,
      // ---------------------------
      // Editor Groups and Tabs
      // ---------------------------
      "editorGroup.emptyBackground": palette.bg,
      "editorGroup.border": palette.bg0,
      "editorGroup.dropBackground": `${palette.bg5}60`,
      // ---------------------------
      // Editor Group Header
      // ---------------------------
      "editorGroupHeader.noTabsBackground": palette.bg2,
      "editorGroupHeader.tabsBackground": palette.bg2,
      "editorGroupHeader.tabsBorder": palette.bg2,
      // ---------------------------
      // Editor Tabs
      // ---------------------------
      "tab.activeBackground": palette.bg,
      "tab.unfocusedActiveBackground": palette.bg,
      "tab.activeForeground": palette.yellow,
      "tab.border": palette.bg2,
      "tab.inactiveBackground": palette.bg2,
      "tab.inactiveForeground": palette.grey1,
      "tab.unfocusedActiveForeground": palette.grey1,
      "tab.unfocusedInactiveForeground": palette.grey1,
      "tab.activeBorderTop": palette.yellow,
      "tab.activeModifiedBorder": `${palette.blue}FF`,
      "tab.activeBorder": palette.bg,
      "tab.unfocusedActiveBorder": palette.bg,
      "tab.unfocusedHoverBackground": `${palette.bg9}21`,
      // ---------------------------
      // Text Colors
      // ---------------------------
      "textBlockQuote.background": palette.bg1,
      "textBlockQuote.border": `${palette.grey2}`,
      "textCodeBlock.background": palette.bg1,
      "textLink.activeForeground": palette.yellow,
      "textLink.foreground": palette.yellow,
      "textPreformat.foreground": palette.bg1,
      "textSeparator.foreground": palette.bg1,
      // ---------------------------
      // Welcome Page
      // ---------------------------
      "walkThrough.embeddedEditorBackground": palette.bg1,
      "welcomePage.buttonBackground": palette.bg1,
      "welcomePage.buttonHoverBackground": `${palette.bg2}a0`,
      // ---------------------------
      // Input Control
      // ---------------------------
      "input.background": `${palette.bg}80`,
      "input.border": `${palette.bg4}`,
      "input.foreground": `${palette.fg}`,
      "input.placeholderForeground": palette.grey1,
      "inputOption.activeBorder": palette.grey0,
      "inputValidation.errorBorder": `${palette.red}`,
      "inputValidation.errorBackground": `${palette.darkRed}`,
      "inputValidation.errorForeground": `${palette.fg}`,
      "inputValidation.infoBorder": `${palette.blue}`,
      "inputValidation.infoBackground": `${palette.darkBlue}`,
      "inputValidation.infoForeground": `${palette.fg}`,
      "inputValidation.warningBorder": `${palette.yellow}`,
      "inputValidation.warningBackground": `${palette.darkYellow}`,
      "inputValidation.warningForeground": `${palette.fg}`,
      // ---------------------------
      // Editor Widgets
      // ---------------------------
      "editorWidget.background": `${palette.bg4}`,
      "editorWidget.border": palette.bg0,
      "editorHoverWidget.background": `${palette.bg4}`,
      "editorHoverWidget.border": palette.bg0,
      "editorSuggestWidget.background": `${palette.bg4}`,
      "editorSuggestWidget.border": palette.bg0,
      "editorSuggestWidget.foreground": palette.grey1,
      "editorSuggestWidget.highlightForeground": palette.yellow,
      "editorSuggestWidget.selectedBackground": `${palette.bg5}`,
      // ---------------------------
      // Gutter
      // ---------------------------
      "editorGutter.background": palette.bg,
      "editorGutter.addedBackground": `${palette.darkGreen}a0`,
      "editorGutter.deletedBackground": `${palette.red}FF`,
      "editorGutter.modifiedBackground": `${palette.darkBlue}a0`,
      // ---------------------------
      // Selection Colors
      // ---------------------------
      "editor.selectionBackground": `${palette.bg9}44`,
      "editor.selectionHighlightBackground": `${palette.bg7}78`,
      "editor.inactiveSelectionBackground": `${palette.fg}55`,
      "editor.wordHighlightStrongBackground": `${palette.darkAqua}30`,
      "editor.wordHighlightBackground":  `${palette.bg4}b0`,
      "editor.findMatchBackground": `${palette.darkRed}40`,
      "editor.findMatchHighlightBackground": `${palette.darkAqua}40`,
      "editor.findRangeHighlightBackground": `${palette.darkPurple}40`,
      "editor.hoverHighlightBackground": `${palette.bg9}3f`,
      "editor.lineHighlightBackground": `${palette.bg3}80`,
      "editor.lineHighlightBorder": palette.bg4,
      "editor.rangeHighlightBackground": `${palette.darkBlue}30`,
      "editorLink.activeForeground": `${palette.green}`,
      "editorWhitespace.foreground": `${palette.bg8}`,
      "editorIndentGuide.background": `${palette.bg4}FF`,
      "editorIndentGuide.activeBackground": `${palette.bg7}FF`,
      "editorBracketMatch.background": `${palette.bg9}22`,
      "editorBracketMatch.border": palette.grey0,
      "editorRuler.foreground": `${palette.darkPurple}`,
      // ---------------------------
      // Code Lens
      // ---------------------------
      "editorCodeLens.foreground": `${palette.grey1}`,
      // ---------------------------
      // Integrated Terminal Colors
      // ---------------------------
      "terminal.ansiBlack": `${palette.bg7}`,
      "terminal.ansiRed": `${palette.red}`,
      "terminal.ansiGreen": `${palette.green}`,
      "terminal.ansiYellow": `${palette.yellow}`,
      "terminal.ansiBlue": `${palette.blue}`,
      "terminal.ansiMagenta": `${palette.purple}`,
      "terminal.ansiCyan": `${palette.aqua}`,
      "terminal.ansiWhite": palette.fg,
      "terminal.ansiBrightBlack": `${palette.bg7}`,
      "terminal.ansiBrightRed": `${palette.red}`,
      "terminal.ansiBrightGreen": `${palette.green}`,
      "terminal.ansiBrightYellow": `${palette.yellow}`,
      "terminal.ansiBrightBlue": `${palette.blue}`,
      "terminal.ansiBrightMagenta": `${palette.purple}`,
      "terminal.ansiBrightCyan": `${palette.aqua}`,
      "terminal.ansiBrightWhite": `${palette.fg}`,
      "terminal.background": palette.bg,
      "terminal.foreground": palette.fg,
      "terminalCursor.background": palette.bg,
      "terminalCursor.foreground": palette.fg,
      // ---------------------------
      // Merge Conflicts
      // ---------------------------
      "merge.border": "#05252900",
      "merge.currentContentBackground": "#85f1fFF2",
      "merge.currentHeaderBackground": "#85f1ff44",
      "merge.incomingContentBackground": "#9d92FF22",
      "merge.incomingHeaderBackground": "#9d92FF44",
      "merge.commonContentBackground": "#ffc18022",
      "merge.commonHeaderBackground": "#ffc18044",
      "editorOverviewRuler.currentContentForeground": "#85f1ff44",
      "editorOverviewRuler.incomingContentForeground": "#9d92FF44",
      "editorOverviewRuler.commonContentForeground": "#ffc18044",
      "editorOverviewRuler.border": palette.bg,
      // ---------------------------
      // Notification Colors
      // ---------------------------
      "notificationCenter.border": `${palette.bg4}`,
      "notificationCenterHeader.foreground": palette.grey1,
      "notificationCenterHeader.background": `${palette.bg4}`,
      "notificationToast.border": `${palette.bg4}`,
      "notifications.foreground": `${palette.fg}`,
      "notifications.background": `${palette.bg4}`,
      "notifications.border": `${palette.bg4}`,
      "notificationLink.foreground": palette.grey1,
      // ---------------------------
      // Diff
      // ---------------------------
      "diffEditor.insertedTextBackground": `${palette.darkAqua}20`,
      "diffEditor.removedTextBackground": `${palette.darkRed}20`,
      // ---------------------------
      // Debug
      // ---------------------------
      "debugToolBar.background": palette.bg1,
      "debugExceptionWidget.background": palette.bg1,
      "debugExceptionWidget.border": palette.bg,
      // ---------------------------
      // Extensions
      // ---------------------------
      "extensionButton.prominentForeground": palette.bg,
      "extensionButton.prominentBackground": `${palette.grey2}`,
      "extensionButton.prominentHoverBackground": `${palette.grey1}`,
      focusBorder: `${palette.bg4}`,
      foreground: palette.fg,
      // ---------------------------
      // Panel
      // ---------------------------
      "panel.background": palette.bg,
      "panel.border": `${palette.bg1}`,
      "panelTitle.activeBorder": `${palette.grey1}`,
      "panelTitle.activeForeground": palette.yellow,
      "panelTitle.inactiveForeground": palette.grey1,
      // ---------------------------
      // Peek View Colors
      // ---------------------------
      "peekView.border": palette.grey0,
      "peekViewEditor.background": "#002124",
      "peekViewEditor.matchHighlightBackground": "#00718079",
      "peekViewEditor.matchHighlightBorder": "#007180cc",
      "peekViewEditorGutter.background": "#002124",
      "peekViewResult.background": palette.bg1,
      "peekViewResult.fileForeground": "#e4b781",
      "peekViewResult.lineForeground": palette.grey1,
      "peekViewResult.matchHighlightBackground": `${palette.bg4}`,
      "peekViewResult.selectionBackground": `${palette.bg4}`,
      "peekViewResult.selectionForeground": palette.grey1,
      "peekViewTitle.background": palette.bg1,
      "peekViewTitleDescription.foreground": palette.grey1,
      "peekViewTitleLabel.foreground": "#e4b781",
      // ---------------------------
      // Progress Bar
      // ---------------------------
      "progressBar.background": palette.yellow,
      // ---------------------------
      // Scroll Bar
      // ---------------------------
      "scrollbar.shadow": "#00000044",
      "scrollbarSlider.activeBackground": `${palette.bg9}ad`,
      "scrollbarSlider.background": `${palette.bg9}80`, // 50%
      "scrollbarSlider.hoverBackground": `${palette.bg9}62`,
      // ---------------------------
      // Git status colors in File Explorer
      // ---------------------------
      "gitDecoration.addedResourceForeground": `${palette.green}`,
      "gitDecoration.modifiedResourceForeground": `${palette.blue}`,
      "gitDecoration.deletedResourceForeground": `${palette.red}`,
      "gitDecoration.untrackedResourceForeground": palette.yellow,
      "gitDecoration.ignoredResourceForeground": `${palette.grey2}`,
      "gitDecoration.conflictingResourceForeground": `${palette.purple}a0`,
      "gitDecoration.submoduleResourceForeground": `${palette.orange}a0`,
      // ---------------------------
      // Quick Picker
      // ---------------------------
      "pickerGroup.border": `${palette.fg0}1a`,
      "pickerGroup.foreground": palette.grey0,
      // ---------------------------
      // Lists and Trees
      // ---------------------------
      "list.activeSelectionBackground": `${palette.bg3}80`,
      "list.activeSelectionForeground": `${palette.fg0}`,
      "list.dropBackground": `${palette.bg2}80`,
      "list.focusBackground":`${palette.bg3}80`,
      "list.focusForeground": `${palette.fg0}`,
      "list.highlightForeground": palette.yellow,
      "list.hoverBackground": `${palette.bg}00`,
      "list.hoverForeground": `${palette.fg0}`,
      "list.inactiveFocusBackground": `${palette.bg3}80`,
      "list.inactiveSelectionBackground": `${palette.bg3}80`,
      "list.inactiveSelectionForeground":  `${palette.grey2}`,
      "list.errorForeground": `${palette.red}`,
      "list.warningForeground": `${palette.yellow}`,
      "listFilterWidget.background": `${palette.bg}00`,
      "listFilterWidget.outline": `${palette.blue}FF`,
      "listFilterWidget.noMatchesOutline": `${palette.red}FF`,
      "tree.indentGuidesStroke": `${palette.grey0}`,

      // ---------------------------
      // Settings Editor Colors
      // ---------------------------
      "settings.headerForeground": palette.fg,
      "settings.modifiedItemIndicator": "#15ac31",
      "settings.dropdownListBorder": `${palette.fg}88`,
      "settings.dropdownBackground": `${palette.bg4}`,
      "settings.dropdownForeground": "#0cc",
      "settings.dropdownBorder": `${palette.bg4}`,
      "settings.checkboxBackground": `${palette.bg4}`,
      "settings.checkboxForeground": "#0cc",
      "settings.checkboxBorder": `${palette.bg4}`,
      "settings.textInputBackground": `${palette.bg4}`,
      "settings.textInputForeground": "#0cc",
      "settings.textInputBorder": `${palette.bg4}`,
      "settings.numberInputBackground": palette.bg1,
      "settings.numberInputForeground": "#7060eb",
      "settings.numberInputBorder": palette.bg1,
      // ---------------------------
      // Breadcrumbs
      // ---------------------------
      "breadcrumb.foreground": palette.grey1,
      "breadcrumb.background": palette.bg,
      "breadcrumb.focusForeground": palette.yellow,
      "breadcrumb.activeSelectionForeground": `${palette.fg}`,
      "breadcrumbPicker.background": `${palette.bg4}`,
      // ---------------------------
      // Title bar
      // Note: These colors are currently only supported on macOS.
      // ---------------------------
      "titleBar.activeBackground": palette.bg1,
      "titleBar.activeForeground": palette.fg,
      "titleBar.inactiveBackground": palette.bg1,
      "titleBar.inactiveForeground": palette.grey1,
      // ---------------------------
      // Custom title bar and menus
      // Note: These colors are currently only supported on Windows and Linux.
      // ---------------------------
      "menu.background": `${palette.bg4}`,
      "menu.foreground": palette.grey1,
      "menu.selectionBackground": "#0b515b",
      "menu.selectionForeground": palette.yellow,
      "menu.selectionBorder": "#0b515b",
      "menu.separatorBackground": palette.yellow,
      "menubar.selectionBackground": "#0b515b",
      "menubar.selectionForeground": palette.yellow,
      "menubar.selectionBorder": "#0b515b",
      // ---------------------------
      // Snippets
      // ---------------------------
      "editor.snippetTabstopHighlightBackground": "#03181b",
      "editor.snippetTabstopHighlightBorder": "#042124",
      "editor.snippetFinalTabstopHighlightBackground": "#03181b",
      "editor.snippetFinalTabstopHighlightBorder": "#042124",
      // ---------------------------
      // Minimap
      // ---------------------------
      "minimap.findMatchHighlight": `${palette.darkAqua}CC`,
      "minimap.errorHighlight": `${palette.darkRed}80`,
      "minimap.warningHighlight": `${palette.darkYellow}80`,
      "minimapGutter.addedBackground": `${palette.darkGreen}a0`,
      "minimapGutter.modifiedBackground": `${palette.darkBlue}a0`,
      "minimapGutter.deletedBackground": `${palette.darkRed}a0`
    },
    tokenColors 
  };
}
