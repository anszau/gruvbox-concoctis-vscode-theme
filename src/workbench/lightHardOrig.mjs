import { lightHardPalette as palette } from "../palette/original/index.mjs";
import produceWorkbenchSyntax from "./util.mjs";

export default syntax =>
  produceWorkbenchSyntax(
    palette,
    "Concoctis - Light : Hard Original",
    "light",
    syntax
  );
