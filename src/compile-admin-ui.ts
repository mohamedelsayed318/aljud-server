import { compileUiExtensions, setBranding } from "@vendure/ui-devkit/compiler";
import * as path from "path";

compileUiExtensions({
  outputPath: path.join(__dirname, "../admin-ui"),
  extensions: [
    {
      translations: {
        ar: path.join(__dirname, "../translations/ar.json"),
      },
    },
    {
      globalStyles: [
        path.join(__dirname, "../theme/default.scss"),
        path.join(__dirname, "../theme/dark.scss"),
      ],
    },
    setBranding({
      largeLogoPath: path.join(__dirname, "../images/logo.png"),
      smallLogoPath: path.join(__dirname, "../images/logo.png"),
      faviconPath: path.join(__dirname, "../images/logo.png"),
    }),
  ],
})
  .compile?.()
  .then(() => {
    process.exit(0);
  });
