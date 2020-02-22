import { darkMediumPalette as palette } from "../palette/original/index.mjs";
import produceWorkbenchSyntax from "./util.mjs";

export default syntax =>
  produceWorkbenchSyntax(
    palette,
    "Concoctis - Dark : Medium Original",
    "dark",
    syntax
  );
