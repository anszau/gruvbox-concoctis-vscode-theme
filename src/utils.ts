import { workspace, window, commands } from "vscode";
import { writeFile, existsSync } from "fs";
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
      usePalette: workspaceConfiguration.get("usePalette"),
      useBoldFont: workspaceConfiguration.get("useBoldFont"),
      useItalicFont: workspaceConfiguration.get("useItalicFont"),
      selectionColor: workspaceConfiguration.get("selectionColor")
    };
  }
  private async writeFile(path: string, data: unknown) {
    return new Promise((resolve, reject) => {
      writeFile(path, JSON.stringify(data, null, 2), err =>
        err ? reject(err) : resolve()
      );
    });
  }

  isNewlyInstalled(): boolean {
    const flagPath = join(__dirname, "../temp", "flag.txt");
    if (!existsSync(flagPath)) {
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
      configuration.usePalette !== "material" &&
      configuration.useBoldFont !== true &&
      configuration.useItalicFont === true &&
      configuration.selectionColor === "grey"
    );
  }
}
