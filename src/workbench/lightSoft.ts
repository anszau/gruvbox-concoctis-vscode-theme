import { getPalette } from "../palette";
import produceWorkbenchSyntax from "./";

export default syntax =>
  produceWorkbenchSyntax(
    getPalette().lightSoftPalette,
    "Concoctis - Light : Soft",
    "light",
    syntax
  );
