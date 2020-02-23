import { getPalette } from "../palette";
import workbenchSyntax from "./workbenchSyntax";

export default syntax =>
  workbenchSyntax(
    getPalette().lightMediumPalette,
    "Concoctis - Light : Medium",
    "light",
    syntax
  );
