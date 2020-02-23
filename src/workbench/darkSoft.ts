import { getPalette } from "../palette";
import workbenchSyntax from "./workbenchSyntax";

export default syntax =>
  workbenchSyntax(
    getPalette().darkSoftPalette,
    "Concoctis - Dark : Soft",
    "dark",
    syntax
  );
