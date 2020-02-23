import { workspace } from "vscode";
import Utils from "./utils";
import { buildAllThemes } from "./buildAllThemes";
import { THEMES } from "./build";

export function activate() {
  let utils = new Utils();

  // regenerate theme files when user configuration changes
  workspace.onDidChangeConfiguration(event => {
    utils.detectConfigChanges(event, () => {
      buildAllThemes(THEMES);
      utils.promptToReload();
    });
  });

  // regenerate theme files if it's newly installed but the user settings are not default
  if (
    utils.isNewlyInstalled() &&
    !utils.isDefaultConfiguration(utils.getConfiguration())
  ) {
    buildAllThemes(THEMES);
    utils.promptToReload();
  }
}

export function deactivate() {}