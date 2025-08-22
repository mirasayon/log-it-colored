import chalk from "chalk";
import { string_format } from "./utils/string-format.js";

export class LogItColored {
    blue = (...content: unknown[]): void => {
        return console.info(chalk.blueBright(string_format(...content)));
    };

    violet = (...content: unknown[]): void => {
        return console.info(chalk.rgb(255, 0, 242)(string_format(...content)));
    };

    slate = (...content: unknown[]): void => {
        return console.info(chalk.rgb(179, 179, 179)(string_format(...content)));
    };

    red = (...content: unknown[]): void => {
        return console.error(chalk.rgb(255, 0, 0)(string_format(...content)));
    };

    /** Raw error output (no coloring) */
    error = (...content: unknown[]): void => {
        return console.error(...content);
    };

    /** Success uses info (colored green) */
    success = (...content: unknown[]): void => {
        return console.info(chalk.green(string_format(...content)));
    };

    sky = (...content: unknown[]): void => {
        return console.info(chalk.rgb(94, 242, 255)(string_format(...content)));
    };

    green = (...content: unknown[]): void => {
        return console.info(chalk.rgb(0, 255, 34)(string_format(...content)));
    };

    yellow = (...content: unknown[]): void => {
        return console.info(chalk.rgb(218, 207, 0)(string_format(...content)));
    };

    gray = (...content: unknown[]): void => {
        return console.info(chalk.rgb(122, 122, 122)(string_format(...content)));
    };

    /** Plain output without coloring */
    raw = (...content: unknown[]): void => {
        return console.info(...content);
    };

    /** Convenience alias */
    log = (...content: unknown[]): void => {
        return this.raw(...content);
    };

    /** Small helper: prints a table when applicable */
    table = (tabularData: any): void => {
        // prefer console.table for arrays/objects; fallback to formatted log
        if (Array.isArray(tabularData) || (tabularData && typeof tabularData === "object")) {
            return console.table(tabularData);
        }
        return this.raw(tabularData);
    };
}
