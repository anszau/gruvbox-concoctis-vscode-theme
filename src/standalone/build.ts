import {
  darkMedium,
  darkHard,
  darkSoft,
  lightHard,
  lightMedium,
  lightSoft
} from "./workbench";
import { buildAllThemes } from "./buildAllThemes";

export const THEMES = [
  { darkMedium },
  { lightMedium },
  { darkSoft },
  { lightSoft },
  { darkHard },
  { lightHard }
];

if (typeof buildAllThemes === "function") {
  buildAllThemes(THEMES);
}
