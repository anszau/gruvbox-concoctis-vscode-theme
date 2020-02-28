import { getPalette } from "../palette";
import workbenchSyntax from "../../workbench/workbenchSyntax";

export default syntax =>
  workbenchSyntax(
    getPalette().darkMediumPalette,
    "Concoctis - Dark : Medium",
    "dark",
    syntax
  );
