import _chalk from "chalk";
import { LogItWithColor } from "#/logger.js";

/** You can just use `chalk` itself
 * @see https://www.npmjs.com/package/chalk
 */
export const chalk = _chalk;

/** Minimal color-only logger */
export const Logger = new LogItWithColor();
export type Logger = LogItWithColor;
