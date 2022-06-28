"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransforms = exports.indexHtmlTransformFactory = exports.customWebpackConfigTransformFactory = void 0;
const core_1 = require("@angular-devkit/core");
const custom_webpack_builder_1 = require("./custom-webpack-builder");
const utils_1 = require("./utils");
const customWebpackConfigTransformFactory = (options, { workspaceRoot, target, logger }) => browserWebpackConfig => {
    return custom_webpack_builder_1.CustomWebpackBuilder.buildWebpackConfig((0, core_1.normalize)(workspaceRoot), options.customWebpackConfig, browserWebpackConfig, options, target, logger);
};
exports.customWebpackConfigTransformFactory = customWebpackConfigTransformFactory;
const indexHtmlTransformFactory = ({ indexTransform, tsConfig }, { workspaceRoot, target, logger }) => {
    if (!indexTransform)
        return null;
    (0, utils_1.tsNodeRegister)(indexTransform, `${(0, core_1.getSystemPath)((0, core_1.normalize)(workspaceRoot))}/${tsConfig}`, logger);
    return (indexHtml) => __awaiter(void 0, void 0, void 0, function* () {
        const transform = yield (0, utils_1.loadModule)(`${(0, core_1.getSystemPath)((0, core_1.normalize)(workspaceRoot))}/${indexTransform}`);
        return transform(target, indexHtml);
    });
};
exports.indexHtmlTransformFactory = indexHtmlTransformFactory;
const getTransforms = (options, context) => ({
    webpackConfiguration: (0, exports.customWebpackConfigTransformFactory)(options, context),
    indexHtml: (0, exports.indexHtmlTransformFactory)(options, context),
});
exports.getTransforms = getTransforms;
//# sourceMappingURL=transform-factories.js.map