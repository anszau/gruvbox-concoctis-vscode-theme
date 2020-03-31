import Utils from "../utils";
import darkMediumMatPalette from "./material/darkMedium";
import lightMediumMatPalette from "./material/lightMedium";
import darkSoftMatPalette from "./material/darkSoft";
import lightSoftMatPalette from "./material/lightSoft";
import darkHardMatPalette from "./material/darkHard";
import lightHardMatPalette from "./material/lightHard";
import darkMediumMixPalette from "./mix/darkMedium";
import lightMediumMixPalette from "./mix/lightMedium";
import darkSoftMixPalette from "./mix/darkSoft";
import lightSoftMixPalette from "./mix/lightSoft";
import darkHardMixPalette from "./mix/darkHard";
import lightHardMixPalette from "./mix/lightHard";
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
  const { selectionColor, usePalette } = config;

  if (usePalette === "original") {
    return {
      darkMediumPalette: {
        ...neutralPalette,
        ...darkMediumOrigPalette,
        selectionColor
      },
      darkSoftPalette: {
        ...neutralPalette,
        ...darkSoftOrigPalette,
        selectionColor
      },
      darkHardPalette: {
        ...neutralPalette,
        ...darkHardOrigPalette,
        selectionColor
      },
      lightMediumPalette: {
        ...neutralPalette,
        ...lightMediumOrigPalette,
        selectionColor
      },
      lightSoftPalette: {
        ...neutralPalette,
        ...lightSoftOrigPalette,
        selectionColor
      },
      lightHardPalette: {
        ...neutralPalette,
        ...lightHardOrigPalette,
        selectionColor
      }
    };
  } else if (usePalette === "mix") {
    return {
      darkMediumPalette: { ...darkMediumMixPalette, selectionColor },
      darkSoftPalette: { ...darkSoftMixPalette, selectionColor },
      darkHardPalette: { ...darkHardMixPalette, selectionColor },
      lightMediumPalette: { ...lightMediumMixPalette, selectionColor },
      lightSoftPalette: { ...lightSoftMixPalette, selectionColor },
      lightHardPalette: { ...lightHardMixPalette, selectionColor }
    };
  } else {
    return {
      darkMediumPalette: { ...darkMediumMatPalette, selectionColor },
      darkSoftPalette: { ...darkSoftMatPalette, selectionColor },
      darkHardPalette: { ...darkHardMatPalette, selectionColor },
      lightMediumPalette: { ...lightMediumMatPalette, selectionColor },
      lightSoftPalette: { ...lightSoftMatPalette, selectionColor },
      lightHardPalette: { ...lightHardMatPalette, selectionColor }
    };
  }
}
