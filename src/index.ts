import _chalk from "chalk";
import { LogItColored } from "#/logger.js";

/** You can just use `chalk` itself
 * @see https://www.npmjs.com/package/chalk
 */
export const chalk = _chalk;

/** Minimal color-only logger */
export const Logger = new LogItColored();
