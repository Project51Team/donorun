"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgJestConfig = void 0;
const config_set_1 = require("ts-jest/dist/config/config-set");
class NgJestConfig extends config_set_1.ConfigSet {
    _resolveTsConfig(compilerOptions, resolvedConfigFile) {
        var _a, _b, _c, _d;
        const result = super._resolveTsConfig(compilerOptions, resolvedConfigFile);
        result.options.enableIvy = true;
        result.options.noEmitOnError = false;
        result.options.suppressOutputPathCheck = true;
        result.options.allowEmptyCodegenFiles = false;
        result.options.annotationsAs = 'decorators';
        result.options.enableResourceInlining = false;
        result.options.allowJs = true;
        const ts = this.compilerModule;
        const scriptTarget = (_a = result.options.target) !== null && _a !== void 0 ? _a : (_b = ts.ScriptTarget) === null || _b === void 0 ? void 0 : _b.ES2015;
        if (scriptTarget > ((_c = ts.ScriptTarget) === null || _c === void 0 ? void 0 : _c.ES2016)) {
            result.options.target = (_d = ts.ScriptTarget) === null || _d === void 0 ? void 0 : _d.ES2015;
        }
        return result;
    }
}
exports.NgJestConfig = NgJestConfig;
