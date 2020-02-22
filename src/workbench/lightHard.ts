import { getPalette } from "../palette";
import produceWorkbenchSyntax from "./";

export default syntax =>
  produceWorkbenchSyntax(
    getPalette().lightHardPalette,
    "Concoctis - Light : Hard",
    "light",
    syntax
  );
