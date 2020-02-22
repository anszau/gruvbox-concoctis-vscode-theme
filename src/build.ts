import darkMedium from "./workbench/darkMedium";
import lightMedium from "./workbench/lightMedium";
import darkSoft from "./workbench/darkSoft";
import lightSoft from "./workbench/lightSoft";
import darkHard from "./workbench/darkHard";
import lightHard from "./workbench/lightHard";
import { buildAllThemes } from "./buildAllThemes";

export const THEMES = [
  { darkMedium },
  { lightMedium },
  { darkSoft },
  { lightSoft },
  { darkHard },
  { lightHard }
];

buildAllThemes && buildAllThemes(THEMES);
