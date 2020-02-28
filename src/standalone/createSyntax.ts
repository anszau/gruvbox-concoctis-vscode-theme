import SYNTAX from "../syntax";
/**
 *
 *
 * @param {object} syntaxColors
 * @returns {object}
 */
export function createSyntax(syntaxColors) {
  syntaxColors = Object.entries(syntaxColors);
  SYNTAX.map(element => {
    const name = element.name.toLowerCase();
    syntaxColors.forEach(item => {
      if (name === item[0].toLowerCase()) {
        element.settings.foreground = item[1];
      }
    });
    if (name === "italic" || name === "bold-italic") {
      element.settings.fontStyle = "italic";
    }
  });
  return SYNTAX;
}
