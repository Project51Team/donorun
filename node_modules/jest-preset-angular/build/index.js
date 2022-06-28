"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ng_jest_transformer_1 = require("./ng-jest-transformer");
exports.default = {
    createTransformer: () => new ng_jest_transformer_1.NgJestTransformer(),
};
