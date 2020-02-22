import { darkSoftPalette as palette } from "../palette/material/index.mjs";
import produceWorkbenchSyntax from "./util.mjs";

export default syntax =>
  produceWorkbenchSyntax(
    palette,
    "Concoctis - Dark : Soft Material",
    "dark",
    syntax
  );
