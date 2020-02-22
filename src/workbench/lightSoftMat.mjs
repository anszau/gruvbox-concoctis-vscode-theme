import { lightSoftPalette as palette } from "../palette/material/index.mjs";
import produceWorkbenchSyntax from "./util.mjs";

export default syntax =>
  produceWorkbenchSyntax(
    palette,
    "Concoctis - Light : Soft Material",
    "light",
    syntax
  );
