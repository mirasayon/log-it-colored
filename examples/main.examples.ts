import { Logger } from "../dist/index.js";

Logger.violet("build complete", { files: 12 });
Logger.red("something went wrong:", "err");
Logger.success("deployed!");
Logger.yellow("yellow!");
