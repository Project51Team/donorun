"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAliasImportDeclaration = exports.loadIsReferencedAliasDeclarationPatch = void 0;
const tslib_1 = require("tslib");
const typescript_1 = (0, tslib_1.__importDefault)(require("typescript"));
const patchedReferencedAliasesSymbol = Symbol('patchedReferencedAliases');
function loadIsReferencedAliasDeclarationPatch(context) {
    if (!isTransformationContextWithEmitResolver(context)) {
        throwIncompatibleTransformationContextError();
    }
    const emitResolver = context.getEmitResolver();
    const existingReferencedAliases = emitResolver[patchedReferencedAliasesSymbol];
    if (existingReferencedAliases !== undefined) {
        return existingReferencedAliases;
    }
    const originalIsReferencedAliasDeclaration = emitResolver.isReferencedAliasDeclaration;
    if (originalIsReferencedAliasDeclaration === undefined) {
        throwIncompatibleTransformationContextError();
    }
    const referencedAliases = new Set();
    emitResolver.isReferencedAliasDeclaration = function (node, ...args) {
        if (isAliasImportDeclaration(node) && referencedAliases.has(node)) {
            return true;
        }
        return originalIsReferencedAliasDeclaration.call(emitResolver, node, ...args);
    };
    return emitResolver[patchedReferencedAliasesSymbol] = referencedAliases;
}
exports.loadIsReferencedAliasDeclarationPatch = loadIsReferencedAliasDeclarationPatch;
function isAliasImportDeclaration(node) {
    return typescript_1.default.isImportSpecifier(node) || typescript_1.default.isNamespaceImport(node) || typescript_1.default.isImportClause(node);
}
exports.isAliasImportDeclaration = isAliasImportDeclaration;
function isTransformationContextWithEmitResolver(context) {
    return context.getEmitResolver !== undefined;
}
function throwIncompatibleTransformationContextError() {
    throw Error('Unable to downlevel Angular decorators due to an incompatible TypeScript ' +
        'version.\nIf you recently updated TypeScript and this issue surfaces now, consider ' +
        'downgrading.\n\n' +
        'Please report an issue on the Angular repositories when this issue ' +
        'surfaces and you are using a supposedly compatible TypeScript version.');
}
