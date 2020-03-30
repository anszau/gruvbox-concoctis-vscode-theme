<p align="center">
   <img width="170" src="https://raw.githubusercontent.com/wheredoesyourmindgo/gruvbox-concoctis/master/images/logo.png" />
</p>

<p align="center">
   <img width="400" src="https://github.com/wheredoesyourmindgo/gruvbox-concoctis/raw/master/images/titleLogo.png" />
</p>

> This VSCode color scheme is a fork of the comprehensive [Noctis](https://github.com/liviuschera/noctis) theme that uses the [_same_](https://raw.githubusercontent.com/wheredoesyourmindgo/gruvbox-concoctis/master/extra/same.gif) color palette from the comprehensible [Gruvbox Material](https://github.com/gruvbox-material/vscode) theme 👍. When compared to Gruvbox and Gruvbox derivatives, this theme maps scopes to the Gruvbox palette dissimilarly to provide alternate syntax highlighting.

<div style="padding-top:16px;padding-bottom:16px;">

All screenshots are shown using the 'mix' palette, and with both the Bold fonts option enabled and the Italic fonts option enabled. See [Configuration Settings](#config) below for more information.

Additionally, all screenshots are shown with VSCode's Semantic Highlighting feature turned off via `"editor.semanticHighlighting.enabled": false`.

<div align="center" style="padding-top:16px;padding-bottom:32px;">

### Dark theme

#### medium contrast

![Dark theme - medium contrast](https://github.com/wheredoesyourmindgo/gruvbox-concoctis/raw/master/images/darkMedium.png)

<div style="padding-top:16px;padding-bottom:16px;"></div>

#### soft contrast

![Dark theme - soft contrast](https://github.com/wheredoesyourmindgo/gruvbox-concoctis/raw/master/images/darkSoft.png)

<div style="padding-top:16px;padding-bottom:16px;"></div>

#### hard contrast

![Dark theme - hard contrast](https://github.com/wheredoesyourmindgo/gruvbox-concoctis/raw/master/images/darkHard.png)

<div style="padding-top:16px;padding-bottom:16px;"></div>

### Light theme

#### medium contrast

![Light theme - medium contrast](https://github.com/wheredoesyourmindgo/gruvbox-concoctis/raw/master/images/lightMedium.png)

<div style="padding-top:16px;padding-bottom:16px;"></div>

#### soft contrast

![Light theme - soft contrast](https://github.com/wheredoesyourmindgo/gruvbox-concoctis/raw/master/images/lightSoft.png)

<div style="padding-top:16px;padding-bottom:16px;"></div>

#### hard contrast

![Light theme - hard contrast](https://github.com/wheredoesyourmindgo/gruvbox-concoctis/raw/master/images/lightHard.png)

</div>

### <a name="config"></a>Configuration Settings

The following options can be toggled via Settings:

#### Use Color Palette

Default: 'material'

Available values: 'material', 'mix', 'original'

```json
{
  "gruvboxConcoctis.usePalette": "original"
}
```

#### Enable Bold Fonts

Default: false

```json
{
  "gruvboxConcoctis.useBoldFont": true
}
```

#### Enable Italic Fonts

Default: true

```json
{
  "gruvboxConcoctis.useItalicFont": true
}
```

#### Selection Background Color

Default: 'neutral'

Available values: "neutral", "aqua", "blue", "green", "grey", "orange", "purple", "red", "yellow"

_Due to the use opacity the difference between "neutral" and "grey" is subtle, while the latter provies a bit more contrast. Consider the latter option while using a Dark variant if more contrast is desired._

```json
{
  "gruvboxConcoctis.selectionColor": "orange"
}
```

### Accessibility Tips

On macOS? Consider [Shifty](https://github.com/thompsonate/Shifty) or something like it. We need 7-9 hours of sleep a night and programming before bed is not helping us.

You may find yourself programming at different times in a given day in various lighting conditions. Sometimes you will be using a big bright desktop display, and other times you may be on a laptop using a much smaller (and likely dimmer) display. Consider [Settings Cycler](https://marketplace.visualstudio.com/items?itemName=hoovercj.vscode-settings-cycler) to quickly find a theme that suits your environment and hardware. See below on how this extension can be used with this theme in particular.

#### Example Settings

**settings.json**

```json
{
  "settings.cycle": [
    {
      "id": "switchTheme",
      "overrideWorkspaceSettings": false,
      "values": [
        {
          "workbench.colorTheme": "gruvboxConcoctis light soft"
        },
        {
          "workbench.colorTheme": "gruvboxConcoctis light medium"
        },
        {
          "workbench.colorTheme": "gruvboxConcoctis light hard"
        },
        {
          "workbench.colorTheme": "gruvboxConcoctis dark soft"
        },
        {
          "workbench.colorTheme": "gruvboxConcoctis dark medium"
        },
        {
          "workbench.colorTheme": "gruvboxConcoctis dark hard"
        }
      ]
    },
    {
      "id": "switchUI",
      "values": [
        {
          "editor.minimap.enabled": true,
          "workbench.statusBar.visible": true,
          "workbench.activityBar.visible": true,
          "breadcrumbs.enabled": true,
          "editor.lineNumbers": "on",
          "editor.folding": true,
          "editor.renderLineHighlight": "gutter",
          "git.decorations.enabled": true,
          "scm.diffDecorations": "all",
          "editor.hideCursorInOverviewRuler": false,
          "gitlens.codeLens.enabled": true,
          "gitlens.currentLine.enabled": true
        },
        {
          "editor.minimap.enabled": false,
          "workbench.statusBar.visible": false,
          "workbench.activityBar.visible": false,
          "breadcrumbs.enabled": false,
          "editor.lineNumbers": "off",
          "editor.folding": false,
          "editor.renderLineHighlight": "none",
          "git.decorations.enabled": false,
          "scm.diffDecorations": "none",
          "editor.hideCursorInOverviewRuler": true,
          "gitlens.codeLens.enabled": false,
          "gitlens.currentLine.enabled": false
        }
      ]
    }
  ]
}
```

**keybindings.json**

```json
[
  {
    "key": "ctrl+shift+t",
    "command": "settings.cycle.switchTheme"
  },
  {
    "key": "ctrl+shift+u",
    "command": "settings.cycle.switchUI"
  }
]
```

### Credits

The font used in screenshots is [Sudo](https://github.com/jenskutilek/sudo-font) by Jens Kutilek.

The font used in this README's title (logo) is [Dona](https://www.harbortype.com/fonts/dona/) from Harbor Type.

<a href="https://www.freepik.com/free-photos-vectors/logo">Logo vector created by roserodionova - www.freepik.com</a>.

As mentioned above, both [Noctis](https://github.com/liviuschera/noctis) & [Gruvbox Material](https://github.com/gruvbox-material/vscode) VSCode themes.
