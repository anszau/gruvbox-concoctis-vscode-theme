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
  const { useItalicFont, useBoldFont } = config;
  syntaxColors = Object.entries(syntaxColors);
  return SYNTAX.map(element => {
    const name = element.name.toLowerCase();
    syntaxColors.forEach(item => {
      if (name === item[0].toLowerCase()) {
        element.settings.foreground = item[1];
      }
    });
    element.settings.fontStyle = ""; // Always reset fontStyle. Will fix issue with unselecting multiple options.
    if (name === "bold" && useBoldFont) {
      element.settings.fontStyle = "bold";
    }
    if (name === "italic" && useItalicFont) {
      element.settings.fontStyle = "italic";
    }
    if (name === "bold-italic" && (useBoldFont || useItalicFont)) {
      if (useItalicFont && useBoldFont) {
        element.settings.fontStyle = "bold italic";
      } else if (!useItalicFont && useBoldFont) {
        element.settings.fontStyle = "bold";
      } else {
        element.settings.fontStyle = "italic";
      }
    }
    return element;
  });
}
