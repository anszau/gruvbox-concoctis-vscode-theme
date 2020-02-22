import { workspace, window, commands } from "vscode";
import * as fs from "fs";
import { join } from "path";

export default class Utils {
  detectConfigChanges(event, onConfigChange) {
    if (event.affectsConfiguration("gruvboxConcoctis")) {
      onConfigChange();
    }
  }
  getConfiguration() {
    let workspaceConfiguration = workspace.getConfiguration("gruvboxConcoctis");
    return {
      useOriginalPalette: workspaceConfiguration.get("useOriginalPalette"),
      useBoldFont: workspaceConfiguration.get("useBoldFont"),
      useItalicFont: workspaceConfiguration.get("useItalicFont")
    };
  }
  private async writeFile(path: string, data: unknown) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, JSON.stringify(data, null, 2), err =>
        err ? reject(err) : resolve()
      );
    });
  }

  isNewlyInstalled(): boolean {
    const flagPath = join(__dirname, "../temp", "flag.txt");
    if (!fs.existsSync(flagPath)) {
      this.writeFile(flagPath, "");
      return true;
    } else {
      return false;
    }
  }

  promptToReload() {
    const action = "Reload";
    window
      .showInformationMessage("Reload required.", action)
      .then(selectedAction => {
        if (selectedAction === action) {
          commands.executeCommand("workbench.action.reloadWindow");
        }
      });
  }

  isDefaultConfiguration(configuration) {
    return (
      configuration.useOriginalPalette !== true &&
      configuration.useBoldFont !== true &&
      configuration.useItalicFont === true
    );
  }
}
