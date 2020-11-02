import {getPalette} from './palette'

function producePalette(palette) {
  return {
    comment: palette.grey1,
    comment_emphasis: palette.grey2,
    text: palette.fg,
    keyword: palette.red,
    variable: palette.fg,
    annotation: palette.fg1,
    constant: palette.yellow,
    tag: palette.orange,
    string: palette.green,
    stringInterpolated: palette.darkGreen,
    number: palette.purple,
    function: palette.aqua,
    support: palette.blue,
    misc: palette.aqua,
    invalid: palette.red
  }
}

export function getColors() {
  const {
    lightMediumPalette,
    darkMediumPalette,
    darkSoftPalette,
    lightSoftPalette,
    lightHardPalette,
    darkHardPalette
  } = getPalette()
  return {
    darkMedium: producePalette(darkMediumPalette),
    lightMedium: producePalette(lightMediumPalette),
    darkSoft: producePalette(darkSoftPalette),
    lightSoft: producePalette(lightSoftPalette),
    darkHard: producePalette(darkHardPalette),
    lightHard: producePalette(lightHardPalette)
  }
}
