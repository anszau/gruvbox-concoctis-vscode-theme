import { getPalette } from "../palette";
import workbenchSyntax from "../../workbench/workbenchSyntax";

export default syntax =>
  workbenchSyntax(
    getPalette().lightMediumPalette,
    "Concoctis - Light : Medium",
    "light",
    syntax
  );
