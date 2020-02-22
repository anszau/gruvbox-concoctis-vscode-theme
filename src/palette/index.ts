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
  const darkMediumPalette = config.useOriginalPalette
    ? darkMediumOrigPalette
    : darkMediumMatPalette;
  const darkSoftPalette = config.useOriginalPalette
    ? darkSoftOrigPalette
    : darkSoftMatPalette;
  const darkHardPalette = config.useOriginalPalette
    ? darkHardOrigPalette
    : darkHardMatPalette;
  const lightMediumPalette = config.useOriginalPalette
    ? lightMediumOrigPalette
    : lightMediumMatPalette;
  const lightSoftPalette = config.useOriginalPalette
    ? lightSoftOrigPalette
    : lightSoftMatPalette;
  const lightHardPalette = config.useOriginalPalette
    ? lightHardOrigPalette
    : lightHardMatPalette;
  return {
    darkMediumPalette,
    darkSoftPalette,
    darkHardPalette,
    lightMediumPalette,
    lightSoftPalette,
    lightHardPalette
  };
}
