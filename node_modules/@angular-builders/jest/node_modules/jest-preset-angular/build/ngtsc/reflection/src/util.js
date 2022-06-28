"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNamedVariableDeclaration = exports.isNamedFunctionDeclaration = exports.isNamedClassDeclaration = void 0;
const tslib_1 = require("tslib");
const typescript_1 = (0, tslib_1.__importDefault)(require("typescript"));
function isNamedClassDeclaration(node) {
    return typescript_1.default.isClassDeclaration(node) && isIdentifier(node.name);
}
exports.isNamedClassDeclaration = isNamedClassDeclaration;
function isNamedFunctionDeclaration(node) {
    return typescript_1.default.isFunctionDeclaration(node) && isIdentifier(node.name);
}
exports.isNamedFunctionDeclaration = isNamedFunctionDeclaration;
function isNamedVariableDeclaration(node) {
    return typescript_1.default.isVariableDeclaration(node) && isIdentifier(node.name);
}
exports.isNamedVariableDeclaration = isNamedVariableDeclaration;
function isIdentifier(node) {
    return node !== undefined && typescript_1.default.isIdentifier(node);
}
