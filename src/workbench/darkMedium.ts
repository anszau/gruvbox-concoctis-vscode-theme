import { getPalette } from "../palette";
import produceWorkbenchSyntax from "./";

export default syntax =>
  produceWorkbenchSyntax(
    getPalette().darkMediumPalette,
    "Concoctis - Dark : Medium",
    "dark",
    syntax
  );
