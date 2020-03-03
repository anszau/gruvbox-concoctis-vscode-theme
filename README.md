<p align="center">
   <img width="170" src="https://raw.githubusercontent.com/wheredoesyourmindgo/gruvbox-concoctis/master/images/logo.png" />
</p>

<p align="center">
   <img width="400" src="https://github.com/wheredoesyourmindgo/gruvbox-concoctis/raw/master/images/titleLogo.png" />
</p>

> This VSCode color scheme is a fork of the comprehensive [Noctis](https://github.com/liviuschera/noctis) theme that uses the [_same_](https://raw.githubusercontent.com/wheredoesyourmindgo/gruvbox-concoctis/master/extra/same.gif) color palette from the comprehensible [Gruvbox Material](https://github.com/gruvbox-material/vscode) theme 👍.

<div align="center" style="padding-top:32px;padding-bottom:32px;">

### Dark theme - medium contrast

![Dark theme - medium contrast](https://github.com/wheredoesyourmindgo/gruvbox-concoctis/raw/master/images/dark.png)

<div style="padding-top:16px;padding-bottom:16px;"></div>

### Light theme - medium contrast

![Light theme - medium contrast](https://github.com/wheredoesyourmindgo/gruvbox-concoctis/raw/master/images/light.png)

### Dark theme - medium contrast

Original Gruvbox palette w/ bold fonts

![Dark theme - medium contrast - original palette](https://github.com/wheredoesyourmindgo/gruvbox-concoctis/raw/master/images/darkOrig.png)

<div style="padding-top:16px;padding-bottom:16px;"></div>

### Light theme - medium contrast

Original Gruvbox palette w/ bold fonts

![Light theme - medium contrast - original palette](https://github.com/wheredoesyourmindgo/gruvbox-concoctis/raw/master/images/lightOrig.png)

</div>

### Configuration Settings

The following options can be toggled via Settings:

#### Use original Gruvbox palette

Default: false

```json
{
  "gruvboxConcoctis.useOriginalPalette": true
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
          "editor.hideCursorInOverviewRuler": false
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
          "editor.hideCursorInOverviewRuler": true
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

The font used in screenshots 1 & 2 is [Cascadia Code](https://github.com/microsoft/cascadia-code).

The font used in screenshots 3 & 4 is [PragmataPro](https://www.fsd.it/shop/fonts/pragmatapro/).

<a href="https://www.freepik.com/free-photos-vectors/logo">Logo vector created by roserodionova - www.freepik.com</a>.

As mentioned above, both [Noctis](https://github.com/liviuschera/noctis) & [Gruvbox Material](https://github.com/gruvbox-material/vscode) VSCode themes.
