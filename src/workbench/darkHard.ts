import { getPalette } from "../palette";
import workbenchSyntax from "./workbenchSyntax";

export default syntax =>
  workbenchSyntax(
    getPalette().darkHardPalette,
    "Concoctis - Dark : Hard",
    "dark",
    syntax
  );
