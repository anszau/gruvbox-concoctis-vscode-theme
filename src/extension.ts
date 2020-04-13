import {workspace} from 'vscode'
import Utils from './utils'
import {buildAllThemes} from './buildAllThemes'
import {themes} from './themes'

export function activate() {
  let utils = new Utils()

  // regenerate theme files when user configuration changes
  workspace.onDidChangeConfiguration((event) => {
    utils.detectConfigChanges(event, () => {
      buildAllThemes(themes)
      utils.promptToReload()
    })
  })

  // regenerate theme files and prompt for reload if it's newly installed but the user settings are not default
  if (
    utils.isNewlyInstalled() &&
    !utils.isDefaultConfiguration(utils.getConfiguration())
  ) {
    buildAllThemes(themes)
    utils.promptToReload()
  }
}

export function deactivate() {}
