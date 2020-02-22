import { darkHardPalette as palette } from "../palette/material/index.mjs";
import produceWorkbenchSyntax from "./util.mjs";

export default syntax =>
  produceWorkbenchSyntax(
    palette,
    "Concoctis - Dark : Hard Material",
    "dark",
    syntax
  );
