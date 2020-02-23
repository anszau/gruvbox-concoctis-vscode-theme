import Utils from "../utils";
import darkMediumMatPalette from "./material/darkMedium";
import lightMediumMatPalette from "./material/lightMedium";
import darkSoftMatPalette from "./material/darkSoft";
import lightSoftMatPalette from "./material/lightSoft";
import darkHardMatPalette from "./material/darkHard";
import lightHardMatPalette from "./material/lightHard";
import darkMediumOrigPalette from "./original/darkMedium";
import lightMediumOrigPalette from "./original/lightMedium";
import darkSoftOrigPalette from "./original/darkSoft";
import lightSoftOrigPalette from "./original/lightSoft";
import darkHardOrigPalette from "./original/darkHard";
import lightHardOrigPalette from "./original/lightHard";

export function getPalette() {
  const utils = new Utils();

  const config = utils.getConfiguration();

  if (config.useOriginalPalette) {
    return {
      darkMediumPalette: darkMediumOrigPalette,
      darkSoftPalette: darkSoftOrigPalette,
      darkHardPalette: darkHardOrigPalette,
      lightMediumPalette: lightMediumOrigPalette,
      lightSoftPalette: lightSoftOrigPalette,
      lightHardPalette: lightHardOrigPalette
    };
  }
  return {
    darkMediumPalette: darkMediumMatPalette,
    darkSoftPalette: darkSoftMatPalette,
    darkHardPalette: darkHardMatPalette,
    lightMediumPalette: lightMediumMatPalette,
    lightSoftPalette: lightSoftMatPalette,
    lightHardPalette: lightHardMatPalette
  };
}
