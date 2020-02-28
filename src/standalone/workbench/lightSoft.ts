import { getPalette } from "../palette";
import workbenchSyntax from "../../workbench/workbenchSyntax";

export default syntax =>
  workbenchSyntax(
    getPalette().lightSoftPalette,
    "Concoctis - Light : Soft",
    "light",
    syntax
  );
