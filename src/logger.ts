import chalk from "chalk";
import { string_format } from "./utils/string-format.js";

export class LogItWithColor {
    blue = (...content: unknown[]) => {
        return console.info(chalk.blueBright(string_format(...content)));
    };

    violet = (...content: unknown[]) => {
        return console.info(chalk.rgb(255, 0, 242)(string_format(...content)));
    };

    slate = (...content: unknown[]) => {
        return console.info(chalk.rgb(179, 179, 179)(string_format(...content)));
    };

    red = (...content: unknown[]) => {
        return console.error(chalk.rgb(255, 0, 0)(string_format(...content)));
    };

    /** Raw error output (no coloring) */
    error = (...content: unknown[]) => {
        return console.error(...content);
    };

    /** Success uses info (colored green) */
    success = (...content: unknown[]) => {
        return console.info(chalk.green(string_format(...content)));
    };

    sky = (...content: unknown[]) => {
        return console.info(chalk.rgb(94, 242, 255)(string_format(...content)));
    };

    green = (...content: unknown[]) => {
        return console.info(chalk.rgb(0, 255, 34)(string_format(...content)));
    };

    yellow = (...content: unknown[]) => {
        return console.info(chalk.rgb(218, 207, 0)(string_format(...content)));
    };

    gray = (...content: unknown[]) => {
        return console.info(chalk.rgb(122, 122, 122)(string_format(...content)));
    };

    /** Plain output without coloring */
    raw = (...content: unknown[]) => {
        return console.info(...content);
    };

    /** Convenience alias */
    log = (...content: unknown[]) => {
        return this.raw(...content);
    };

    /** Small helper: prints a table when applicable */
    table = (value: unknown) => {
        // prefer console.table for arrays/objects; fallback to formatted log
        if (Array.isArray(value) || (value && typeof value === "object")) {
            // @ts-ignore: console.table exists in Node env
            return console.table(value as any);
        }
        return this.raw(value);
    };
}
