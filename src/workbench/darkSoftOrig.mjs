import { darkSoftPalette as palette } from "../palette/original/index.mjs";
import produceWorkbenchSyntax from "./util.mjs";

export default syntax =>
  produceWorkbenchSyntax(
    palette,
    "Concoctis - Dark : Soft Original",
    "dark",
    syntax
  );
