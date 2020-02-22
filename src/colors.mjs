import {
  darkMediumPalette,
  lightMediumPalette,
  darkSoftPalette,
  lightSoftPalette,
  darkHardPalette,
  lightHardPalette,
} from "./palette/material/index.mjs";

function producePalette(palette) {
  return {
    comment: palette.grey1,
    text: palette.fg,
    keyword: palette.purple,
    variable: palette.fg0,
    annotation: palette.fg1,
    constant: palette.yellow,
    tag: palette.orange,
    string: palette.green,
    stringInterpolated: palette.green,
    number: palette.red,
    function: palette.aqua,
    // support: palette.yellow,
    support: palette.fg0,
    misc: palette.blue,
    invalid: palette.red
  };
}

export default {
  darkMediumMat: producePalette(darkMediumPalette),
  lightMediumMat: producePalette(lightMediumPalette),
  darkSoftMat: producePalette(darkSoftPalette),
  lightSoftMat: producePalette(lightSoftPalette),
  darkHardMat: producePalette(darkHardPalette),
  lightHardMat: producePalette(lightHardPalette)
};
