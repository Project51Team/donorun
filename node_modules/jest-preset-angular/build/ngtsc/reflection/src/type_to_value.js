"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeNodeToValueExpr = exports.typeToValue = void 0;
const tslib_1 = require("tslib");
const typescript_1 = (0, tslib_1.__importDefault)(require("typescript"));
function typeToValue(typeNode, checker) {
    if (typeNode === null) {
        return missingType();
    }
    if (!typescript_1.default.isTypeReferenceNode(typeNode)) {
        return unsupportedType(typeNode);
    }
    const symbols = resolveTypeSymbols(typeNode, checker);
    if (symbols === null) {
        return unknownReference(typeNode);
    }
    const { local, decl } = symbols;
    if (decl.valueDeclaration === undefined || decl.flags & typescript_1.default.SymbolFlags.ConstEnum) {
        let typeOnlyDecl = null;
        if (decl.declarations !== undefined && decl.declarations.length > 0) {
            typeOnlyDecl = decl.declarations[0];
        }
        return noValueDeclaration(typeNode, typeOnlyDecl);
    }
    const firstDecl = local.declarations && local.declarations[0];
    if (firstDecl !== undefined) {
        if (typescript_1.default.isImportClause(firstDecl) && firstDecl.name !== undefined) {
            if (firstDecl.isTypeOnly) {
                return typeOnlyImport(typeNode, firstDecl);
            }
            return {
                kind: 0,
                expression: firstDecl.name,
                defaultImportStatement: firstDecl.parent,
            };
        }
        else if (typescript_1.default.isImportSpecifier(firstDecl)) {
            if (firstDecl.isTypeOnly) {
                return typeOnlyImport(typeNode, firstDecl);
            }
            if (firstDecl.parent.parent.isTypeOnly) {
                return typeOnlyImport(typeNode, firstDecl.parent.parent);
            }
            const importedName = (firstDecl.propertyName || firstDecl.name).text;
            const [_localName, ...nestedPath] = symbols.symbolNames;
            const moduleName = extractModuleName(firstDecl.parent.parent.parent);
            return {
                kind: 1,
                valueDeclaration: decl.valueDeclaration,
                moduleName,
                importedName,
                nestedPath
            };
        }
        else if (typescript_1.default.isNamespaceImport(firstDecl)) {
            if (firstDecl.parent.isTypeOnly) {
                return typeOnlyImport(typeNode, firstDecl.parent);
            }
            if (symbols.symbolNames.length === 1) {
                return namespaceImport(typeNode, firstDecl.parent);
            }
            const [_ns, importedName, ...nestedPath] = symbols.symbolNames;
            const moduleName = extractModuleName(firstDecl.parent.parent);
            return {
                kind: 1,
                valueDeclaration: decl.valueDeclaration,
                moduleName,
                importedName,
                nestedPath
            };
        }
    }
    const expression = typeNodeToValueExpr(typeNode);
    if (expression !== null) {
        return {
            kind: 0,
            expression,
            defaultImportStatement: null,
        };
    }
    else {
        return unsupportedType(typeNode);
    }
}
exports.typeToValue = typeToValue;
function unsupportedType(typeNode) {
    return {
        kind: 2,
        reason: { kind: 5, typeNode },
    };
}
function noValueDeclaration(typeNode, decl) {
    return {
        kind: 2,
        reason: { kind: 1, typeNode, decl },
    };
}
function typeOnlyImport(typeNode, node) {
    return {
        kind: 2,
        reason: { kind: 2, typeNode, node },
    };
}
function unknownReference(typeNode) {
    return {
        kind: 2,
        reason: { kind: 3, typeNode },
    };
}
function namespaceImport(typeNode, importClause) {
    return {
        kind: 2,
        reason: { kind: 4, typeNode, importClause },
    };
}
function missingType() {
    return {
        kind: 2,
        reason: { kind: 0 },
    };
}
function typeNodeToValueExpr(node) {
    if (typescript_1.default.isTypeReferenceNode(node)) {
        return entityNameToValue(node.typeName);
    }
    else {
        return null;
    }
}
exports.typeNodeToValueExpr = typeNodeToValueExpr;
function resolveTypeSymbols(typeRef, checker) {
    const typeName = typeRef.typeName;
    const typeRefSymbol = checker.getSymbolAtLocation(typeName);
    if (typeRefSymbol === undefined) {
        return null;
    }
    let local = typeRefSymbol;
    let leftMost = typeName;
    const symbolNames = [];
    while (typescript_1.default.isQualifiedName(leftMost)) {
        symbolNames.unshift(leftMost.right.text);
        leftMost = leftMost.left;
    }
    symbolNames.unshift(leftMost.text);
    if (leftMost !== typeName) {
        const localTmp = checker.getSymbolAtLocation(leftMost);
        if (localTmp !== undefined) {
            local = localTmp;
        }
    }
    let decl = typeRefSymbol;
    if (typeRefSymbol.flags & typescript_1.default.SymbolFlags.Alias) {
        decl = checker.getAliasedSymbol(typeRefSymbol);
    }
    return { local, decl, symbolNames };
}
function entityNameToValue(node) {
    if (typescript_1.default.isQualifiedName(node)) {
        const left = entityNameToValue(node.left);
        return left !== null ? typescript_1.default.createPropertyAccess(left, node.right) : null;
    }
    else if (typescript_1.default.isIdentifier(node)) {
        return typescript_1.default.getMutableClone(node);
    }
    else {
        return null;
    }
}
function extractModuleName(node) {
    if (!typescript_1.default.isStringLiteral(node.moduleSpecifier)) {
        throw new Error('not a module specifier');
    }
    return node.moduleSpecifier.text;
}
