import { getPalette } from "../palette";
import produceWorkbenchSyntax from "./";

export default syntax =>
  produceWorkbenchSyntax(
    getPalette().darkHardPalette,
    "Concoctis - Dark : Hard",
    "dark",
    syntax
  );
