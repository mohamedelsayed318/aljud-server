import { PluginCommonModule, VendurePlugin } from "@vendure/core";
import { AdminUiExtension } from "@vendure/ui-devkit/compiler";
import path from "path";

@VendurePlugin({
  imports: [PluginCommonModule],
})
export class GreeterPlugin {
  static ui: AdminUiExtension = {
    extensionPath: path.join(__dirname, "ui"),
    providers: ["providers.ts"],
  };
}
