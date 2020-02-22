import darkMediumMat from "./workbench/darkMediumMat.mjs";
import lightMediumMat from "./workbench/lightMediumMat.mjs";
import darkSoftMat from "./workbench/darkSoftMat.mjs";
import lightSoftMat from "./workbench/lightSoftMat.mjs";
import darkHardMat from "./workbench/darkHardMat.mjs";
import lightHardMat from "./workbench/lightHardMat.mjs";
import { buildAllThemes } from "./buildAllThemes.mjs";

export const THEMES = [
   { darkMediumMat},
   { lightMediumMat},
   { darkSoftMat},
   { lightSoftMat},
   { darkHardMat},
   { lightHardMat},
];


buildAllThemes(THEMES);
