import { getPalette } from "../palette";
import workbenchSyntax from "../../workbench/workbenchSyntax";

export default syntax =>
  workbenchSyntax(
    getPalette().lightHardPalette,
    "Concoctis - Light : Hard",
    "light",
    syntax
  );
