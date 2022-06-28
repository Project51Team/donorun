import { logging } from '@angular-devkit/core';
/**
 * check for TS node registration
 * @param file: file name or file directory are allowed
 * @todo tsNodeRegistration: require ts-node if file extension is TypeScript
 */
export declare function tsNodeRegister(file: string, tsConfig: string, logger: logging.LoggerApi): void;
/**
 * Loads CJS and ESM modules based on extension
 * @param path path to the module
 * @returns
 */
export declare function loadModule<T>(path: string): Promise<T>;
