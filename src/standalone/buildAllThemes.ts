import { getColors } from "./colors";
import { makeThemePath } from "../makeThemePath";
import { buildTheme } from "./buildTheme";
/**
 *
 *
 * @param {array} themesArray
 * @returns {void}
 */
const buildAllThemes = themesArray => {
  const THEMES_PATH = makeThemePath(themesArray);
  const colors = getColors();
  themesArray.forEach(theme => {
    let themeEntries = Object.entries(theme);
    let themeName = themeEntries[0][0];
    let themeWorkbench = themeEntries[0][1];
    THEMES_PATH.find(path => {
      if (path.includes(themeName)) {
        buildTheme(path, colors[themeName], themeWorkbench, themeName);
      }
    });
  });
};

export { buildAllThemes };
