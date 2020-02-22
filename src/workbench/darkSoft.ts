import { getPalette } from "../palette";
import produceWorkbenchSyntax from "./";

export default syntax =>
  produceWorkbenchSyntax(
    getPalette().darkSoftPalette,
    "Concoctis - Dark : Soft",
    "dark",
    syntax
  );
