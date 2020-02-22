import { existsSync, unlinkSync } from "fs";
import { join } from "path";

/**
 *
 *
 * @param {array} themesArray
 * @returns {array}
 */
export function makeThemePath(themesArray) {
  const PATHS = [];
  themesArray.forEach(theme => {
    const path = join(
      __dirname,
      "..",
      "themes",
      `./${Object.keys(theme)}.json`
    );
    if (existsSync(path)) {
      unlinkSync(path);
    }
    PATHS.push(path);
  });
  return PATHS;
}
