import SYNTAX from "./syntax";
import Utils from "./utils";
/**
 *
 *
 * @param {object} syntaxColors
 * @returns {object}
 */
export function createSyntax(syntaxColors) {
  const utils = new Utils();
  const config = utils.getConfiguration();
  syntaxColors = Object.entries(syntaxColors);
  SYNTAX.map(element => {
    const name = element.name.toLowerCase();
    syntaxColors.forEach(item => {
      if (name === item[0].toLowerCase()) {
        element.settings.foreground = item[1];
      }
    });
    if (name === "bold" && config.useBoldFont) {
      element.settings.fontStyle = "bold";
    }
    if (name === "italic" && config.useItalicFont) {
      element.settings.fontStyle = "italic";
    }
    if (
      name === "bold-italic" &&
      (config.useBoldFont || config.useItalicFont)
    ) {
      if (config.useItalicFont && config.useBoldFont) {
        element.settings.fontStyle = "bold italic";
      } else if (!config.useItalicFont && config.useBoldFont) {
        element.settings.fontStyle = "bold";
      } else {
        element.settings.fontStyle = "italic";
      }
    }
  });
  return SYNTAX;
}
