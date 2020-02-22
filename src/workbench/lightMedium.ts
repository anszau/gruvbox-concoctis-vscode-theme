import { getPalette } from "../palette";
import produceWorkbenchSyntax from "./";

export default syntax =>
  produceWorkbenchSyntax(
    getPalette().lightMediumPalette,
    "Concoctis - Light : Medium",
    "light",
    syntax
  );
