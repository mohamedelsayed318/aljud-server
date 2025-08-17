import { bootstrap } from "@vendure/core";
import { populate } from "@vendure/core/cli";
import { config } from "./vendure-config";
import { initialData } from "./initial-data";
import path from "path";

const productsCsvFile = path.join(__dirname, "./products.csv");

populate(() => bootstrap(config), initialData, productsCsvFile)
  .then((app) => app.close())
  .then(
    () => process.exit(0),
    (err) => {
      console.log(err);
      process.exit(1);
    }
  );
