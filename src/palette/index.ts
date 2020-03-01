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
import { neutralPalette } from "./original";

export function getPalette() {
  const utils = new Utils();

  const config = utils.getConfiguration();

  if (config.useOriginalPalette) {
    return {
      darkMediumPalette: { ...neutralPalette, ...darkMediumOrigPalette },
      darkSoftPalette: { ...neutralPalette, ...darkSoftOrigPalette },
      darkHardPalette: { ...neutralPalette, ...darkHardOrigPalette },
      lightMediumPalette: { ...neutralPalette, ...lightMediumOrigPalette },
      lightSoftPalette: { ...neutralPalette, ...lightSoftOrigPalette },
      lightHardPalette: { ...neutralPalette, ...lightHardOrigPalette }
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
