import {
  darkMedium,
  darkHard,
  darkSoft,
  lightHard,
  lightMedium,
  lightSoft
} from "./workbench";
import { buildAllThemes } from "./buildAllThemes";

const THEMES = [
  { darkMedium },
  { lightMedium },
  { darkSoft },
  { lightSoft },
  { darkHard },
  { lightHard }
];

buildAllThemes(THEMES);
