import darkMediumMat from "./workbench/darkMediumMat.mjs";
import lightMediumMat from "./workbench/lightMediumMat.mjs";
import darkSoftMat from "./workbench/darkSoftMat.mjs";
import lightSoftMat from "./workbench/lightSoftMat.mjs";
import darkHardMat from "./workbench/darkHardMat.mjs";
import lightHardMat from "./workbench/lightHardMat.mjs";
import darkHardOrig from "./workbench/darkHardOrig.mjs";
import darkMediumOrig from "./workbench/darkMediumOrig.mjs";
import darkSoftOrig from "./workbench/darkSoftOrig.mjs";
import lightHardOrig from "./workbench/lightHardOrig.mjs";
import lightMediumOrig from "./workbench/lightMediumOrig.mjs";
import lightSoftOrig from "./workbench/lightSoftOrig.mjs";
import { buildAllThemes } from "./buildAllThemes.mjs";

export const THEMES = [
  { darkMediumMat },
  { lightMediumMat },
  { darkSoftMat },
  { lightSoftMat },
  { darkHardMat },
  { lightHardMat },
  { darkHardOrig },
  { darkMediumOrig },
  { darkSoftOrig },
  { lightHardOrig },
  { lightMediumOrig },
  { lightSoftOrig }
];

buildAllThemes(THEMES);
