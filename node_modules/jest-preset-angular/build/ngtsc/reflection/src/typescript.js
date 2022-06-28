"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reflectObjectLiteral = exports.findMember = exports.filterToMembersWithDecorator = exports.reflectTypeEntityToDeclaration = exports.reflectIdentifierOfDeclaration = exports.reflectNameOfDeclaration = exports.TypeScriptReflectionHost = void 0;
const tslib_1 = require("tslib");
const typescript_1 = (0, tslib_1.__importDefault)(require("typescript"));
const host_1 = require("./host");
const type_to_value_1 = require("./type_to_value");
const util_1 = require("./util");
class TypeScriptReflectionHost {
    constructor(checker) {
        this.checker = checker;
    }
    getDecoratorsOfDeclaration(declaration) {
        if (declaration.decorators === undefined || declaration.decorators.length === 0) {
            return null;
        }
        return declaration.decorators.map(decorator => this._reflectDecorator(decorator))
            .filter((dec) => dec !== null);
    }
    getMembersOfClass(clazz) {
        const tsClazz = castDeclarationToClassOrDie(clazz);
        return tsClazz.members.map(member => this._reflectMember(member))
            .filter((member) => member !== null);
    }
    getConstructorParameters(clazz) {
        const tsClazz = castDeclarationToClassOrDie(clazz);
        const isDeclaration = tsClazz.getSourceFile().isDeclarationFile;
        const ctor = tsClazz.members.find((member) => typescript_1.default.isConstructorDeclaration(member) && (isDeclaration || member.body !== undefined));
        if (ctor === undefined) {
            return null;
        }
        return ctor.parameters.map(node => {
            const name = parameterName(node.name);
            const decorators = this.getDecoratorsOfDeclaration(node);
            let originalTypeNode = node.type || null;
            let typeNode = originalTypeNode;
            if (typeNode && typescript_1.default.isUnionTypeNode(typeNode)) {
                let childTypeNodes = typeNode.types.filter(childTypeNode => !(typescript_1.default.isLiteralTypeNode(childTypeNode) &&
                    childTypeNode.literal.kind === typescript_1.default.SyntaxKind.NullKeyword));
                if (childTypeNodes.length === 1) {
                    typeNode = childTypeNodes[0];
                }
            }
            const typeValueReference = (0, type_to_value_1.typeToValue)(typeNode, this.checker);
            return {
                name,
                nameNode: node.name,
                typeValueReference,
                typeNode: originalTypeNode,
                decorators,
            };
        });
    }
    getImportOfIdentifier(id) {
        const directImport = this.getDirectImportOfIdentifier(id);
        if (directImport !== null) {
            return directImport;
        }
        else if (typescript_1.default.isQualifiedName(id.parent) && id.parent.right === id) {
            return this.getImportOfNamespacedIdentifier(id, getQualifiedNameRoot(id.parent));
        }
        else if (typescript_1.default.isPropertyAccessExpression(id.parent) && id.parent.name === id) {
            return this.getImportOfNamespacedIdentifier(id, getFarLeftIdentifier(id.parent));
        }
        else {
            return null;
        }
    }
    getExportsOfModule(node) {
        if (!typescript_1.default.isSourceFile(node)) {
            throw new Error(`getExportsOfModule() called on non-SourceFile in TS code`);
        }
        const symbol = this.checker.getSymbolAtLocation(node);
        if (symbol === undefined) {
            return null;
        }
        const map = new Map();
        this.checker.getExportsOfModule(symbol).forEach(exportSymbol => {
            const decl = this.getDeclarationOfSymbol(exportSymbol, null);
            if (decl !== null) {
                map.set(exportSymbol.name, decl);
            }
        });
        return map;
    }
    isClass(node) {
        return (0, util_1.isNamedClassDeclaration)(node);
    }
    hasBaseClass(clazz) {
        return this.getBaseClassExpression(clazz) !== null;
    }
    getBaseClassExpression(clazz) {
        if (!(typescript_1.default.isClassDeclaration(clazz) || typescript_1.default.isClassExpression(clazz)) ||
            clazz.heritageClauses === undefined) {
            return null;
        }
        const extendsClause = clazz.heritageClauses.find(clause => clause.token === typescript_1.default.SyntaxKind.ExtendsKeyword);
        if (extendsClause === undefined) {
            return null;
        }
        const extendsType = extendsClause.types[0];
        if (extendsType === undefined) {
            return null;
        }
        return extendsType.expression;
    }
    getDeclarationOfIdentifier(id) {
        let symbol = this.checker.getSymbolAtLocation(id);
        if (symbol === undefined) {
            return null;
        }
        return this.getDeclarationOfSymbol(symbol, id);
    }
    getDefinitionOfFunction(node) {
        if (!typescript_1.default.isFunctionDeclaration(node) && !typescript_1.default.isMethodDeclaration(node) &&
            !typescript_1.default.isFunctionExpression(node)) {
            return null;
        }
        return {
            node,
            body: node.body !== undefined ? Array.from(node.body.statements) : null,
            parameters: node.parameters.map(param => {
                const name = parameterName(param.name);
                const initializer = param.initializer || null;
                return { name, node: param, initializer };
            }),
        };
    }
    getGenericArityOfClass(clazz) {
        if (!typescript_1.default.isClassDeclaration(clazz)) {
            return null;
        }
        return clazz.typeParameters !== undefined ? clazz.typeParameters.length : 0;
    }
    getVariableValue(declaration) {
        return declaration.initializer || null;
    }
    getDtsDeclaration(_) {
        return null;
    }
    getInternalNameOfClass(clazz) {
        return clazz.name;
    }
    getAdjacentNameOfClass(clazz) {
        return clazz.name;
    }
    isStaticallyExported(decl) {
        let topLevel = decl;
        if (typescript_1.default.isVariableDeclaration(decl) && typescript_1.default.isVariableDeclarationList(decl.parent)) {
            topLevel = decl.parent.parent;
        }
        if (topLevel.modifiers !== undefined &&
            topLevel.modifiers.some(modifier => modifier.kind === typescript_1.default.SyntaxKind.ExportKeyword)) {
            return true;
        }
        if (topLevel.parent === undefined || !typescript_1.default.isSourceFile(topLevel.parent)) {
            return false;
        }
        const localExports = this.getLocalExportedDeclarationsOfSourceFile(decl.getSourceFile());
        return localExports.has(decl);
    }
    getDirectImportOfIdentifier(id) {
        const symbol = this.checker.getSymbolAtLocation(id);
        if (symbol === undefined || symbol.declarations === undefined ||
            symbol.declarations.length !== 1) {
            return null;
        }
        const decl = symbol.declarations[0];
        const importDecl = getContainingImportDeclaration(decl);
        if (importDecl === null) {
            return null;
        }
        if (!typescript_1.default.isStringLiteral(importDecl.moduleSpecifier)) {
            return null;
        }
        return { from: importDecl.moduleSpecifier.text, name: getExportedName(decl, id) };
    }
    getImportOfNamespacedIdentifier(id, namespaceIdentifier) {
        if (namespaceIdentifier === null) {
            return null;
        }
        const namespaceSymbol = this.checker.getSymbolAtLocation(namespaceIdentifier);
        if (!namespaceSymbol || namespaceSymbol.declarations === undefined) {
            return null;
        }
        const declaration = namespaceSymbol.declarations.length === 1 ? namespaceSymbol.declarations[0] : null;
        if (!declaration) {
            return null;
        }
        const namespaceDeclaration = typescript_1.default.isNamespaceImport(declaration) ? declaration : null;
        if (!namespaceDeclaration) {
            return null;
        }
        const importDeclaration = namespaceDeclaration.parent.parent;
        if (!typescript_1.default.isStringLiteral(importDeclaration.moduleSpecifier)) {
            return null;
        }
        return {
            from: importDeclaration.moduleSpecifier.text,
            name: id.text,
        };
    }
    getDeclarationOfSymbol(symbol, originalId) {
        let valueDeclaration = undefined;
        if (symbol.valueDeclaration !== undefined) {
            valueDeclaration = symbol.valueDeclaration;
        }
        else if (symbol.declarations !== undefined && symbol.declarations.length > 0) {
            valueDeclaration = symbol.declarations[0];
        }
        if (valueDeclaration !== undefined && typescript_1.default.isShorthandPropertyAssignment(valueDeclaration)) {
            const shorthandSymbol = this.checker.getShorthandAssignmentValueSymbol(valueDeclaration);
            if (shorthandSymbol === undefined) {
                return null;
            }
            return this.getDeclarationOfSymbol(shorthandSymbol, originalId);
        }
        else if (valueDeclaration !== undefined && typescript_1.default.isExportSpecifier(valueDeclaration)) {
            const targetSymbol = this.checker.getExportSpecifierLocalTargetSymbol(valueDeclaration);
            if (targetSymbol === undefined) {
                return null;
            }
            return this.getDeclarationOfSymbol(targetSymbol, originalId);
        }
        const importInfo = originalId && this.getImportOfIdentifier(originalId);
        const viaModule = importInfo !== null && importInfo.from !== null && !importInfo.from.startsWith('.') ?
            importInfo.from :
            null;
        while (symbol.flags & typescript_1.default.SymbolFlags.Alias) {
            symbol = this.checker.getAliasedSymbol(symbol);
        }
        if (symbol.valueDeclaration !== undefined) {
            return {
                node: symbol.valueDeclaration,
                known: null,
                viaModule,
                identity: null,
                kind: 0,
            };
        }
        else if (symbol.declarations !== undefined && symbol.declarations.length > 0) {
            return {
                node: symbol.declarations[0],
                known: null,
                viaModule,
                identity: null,
                kind: 0,
            };
        }
        else {
            return null;
        }
    }
    _reflectDecorator(node) {
        let decoratorExpr = node.expression;
        let args = null;
        if (typescript_1.default.isCallExpression(decoratorExpr)) {
            args = Array.from(decoratorExpr.arguments);
            decoratorExpr = decoratorExpr.expression;
        }
        if (!(0, host_1.isDecoratorIdentifier)(decoratorExpr)) {
            return null;
        }
        const decoratorIdentifier = typescript_1.default.isIdentifier(decoratorExpr) ? decoratorExpr : decoratorExpr.name;
        const importDecl = this.getImportOfIdentifier(decoratorIdentifier);
        return {
            name: decoratorIdentifier.text,
            identifier: decoratorExpr,
            import: importDecl,
            node,
            args,
        };
    }
    _reflectMember(node) {
        let kind = null;
        let value = null;
        let name = null;
        let nameNode = null;
        if (typescript_1.default.isPropertyDeclaration(node)) {
            kind = host_1.ClassMemberKind.Property;
            value = node.initializer || null;
        }
        else if (typescript_1.default.isGetAccessorDeclaration(node)) {
            kind = host_1.ClassMemberKind.Getter;
        }
        else if (typescript_1.default.isSetAccessorDeclaration(node)) {
            kind = host_1.ClassMemberKind.Setter;
        }
        else if (typescript_1.default.isMethodDeclaration(node)) {
            kind = host_1.ClassMemberKind.Method;
        }
        else if (typescript_1.default.isConstructorDeclaration(node)) {
            kind = host_1.ClassMemberKind.Constructor;
        }
        else {
            return null;
        }
        if (typescript_1.default.isConstructorDeclaration(node)) {
            name = 'constructor';
        }
        else if (typescript_1.default.isIdentifier(node.name)) {
            name = node.name.text;
            nameNode = node.name;
        }
        else if (typescript_1.default.isStringLiteral(node.name)) {
            name = node.name.text;
            nameNode = node.name;
        }
        else {
            return null;
        }
        const decorators = this.getDecoratorsOfDeclaration(node);
        const isStatic = node.modifiers !== undefined &&
            node.modifiers.some(mod => mod.kind === typescript_1.default.SyntaxKind.StaticKeyword);
        return {
            node,
            implementation: node,
            kind,
            type: node.type || null,
            name,
            nameNode,
            decorators,
            value,
            isStatic,
        };
    }
    getLocalExportedDeclarationsOfSourceFile(file) {
        const cacheSf = file;
        if (cacheSf[LocalExportedDeclarations] !== undefined) {
            return cacheSf[LocalExportedDeclarations];
        }
        const exportSet = new Set();
        cacheSf[LocalExportedDeclarations] = exportSet;
        const sfSymbol = this.checker.getSymbolAtLocation(cacheSf);
        if (sfSymbol === undefined || sfSymbol.exports === undefined) {
            return exportSet;
        }
        const iter = sfSymbol.exports.values();
        let item = iter.next();
        while (item.done !== true) {
            let exportedSymbol = item.value;
            if (exportedSymbol.flags & typescript_1.default.SymbolFlags.Alias) {
                exportedSymbol = this.checker.getAliasedSymbol(exportedSymbol);
            }
            if (exportedSymbol.valueDeclaration !== undefined &&
                exportedSymbol.valueDeclaration.getSourceFile() === file) {
                exportSet.add(exportedSymbol.valueDeclaration);
            }
            item = iter.next();
        }
        return exportSet;
    }
}
exports.TypeScriptReflectionHost = TypeScriptReflectionHost;
function reflectNameOfDeclaration(decl) {
    const id = reflectIdentifierOfDeclaration(decl);
    return id && id.text || null;
}
exports.reflectNameOfDeclaration = reflectNameOfDeclaration;
function reflectIdentifierOfDeclaration(decl) {
    if (typescript_1.default.isClassDeclaration(decl) || typescript_1.default.isFunctionDeclaration(decl)) {
        return decl.name || null;
    }
    else if (typescript_1.default.isVariableDeclaration(decl)) {
        if (typescript_1.default.isIdentifier(decl.name)) {
            return decl.name;
        }
    }
    return null;
}
exports.reflectIdentifierOfDeclaration = reflectIdentifierOfDeclaration;
function reflectTypeEntityToDeclaration(type, checker) {
    let realSymbol = checker.getSymbolAtLocation(type);
    if (realSymbol === undefined) {
        throw new Error(`Cannot resolve type entity ${type.getText()} to symbol`);
    }
    while (realSymbol.flags & typescript_1.default.SymbolFlags.Alias) {
        realSymbol = checker.getAliasedSymbol(realSymbol);
    }
    let node = null;
    if (realSymbol.valueDeclaration !== undefined) {
        node = realSymbol.valueDeclaration;
    }
    else if (realSymbol.declarations !== undefined && realSymbol.declarations.length === 1) {
        node = realSymbol.declarations[0];
    }
    else {
        throw new Error(`Cannot resolve type entity symbol to declaration`);
    }
    if (typescript_1.default.isQualifiedName(type)) {
        if (!typescript_1.default.isIdentifier(type.left)) {
            throw new Error(`Cannot handle qualified name with non-identifier lhs`);
        }
        const symbol = checker.getSymbolAtLocation(type.left);
        if (symbol === undefined || symbol.declarations === undefined ||
            symbol.declarations.length !== 1) {
            throw new Error(`Cannot resolve qualified type entity lhs to symbol`);
        }
        const decl = symbol.declarations[0];
        if (typescript_1.default.isNamespaceImport(decl)) {
            const clause = decl.parent;
            const importDecl = clause.parent;
            if (!typescript_1.default.isStringLiteral(importDecl.moduleSpecifier)) {
                throw new Error(`Module specifier is not a string`);
            }
            return { node, from: importDecl.moduleSpecifier.text };
        }
        else if (typescript_1.default.isModuleDeclaration(decl)) {
            return { node, from: null };
        }
        else {
            throw new Error(`Unknown import type?`);
        }
    }
    else {
        return { node, from: null };
    }
}
exports.reflectTypeEntityToDeclaration = reflectTypeEntityToDeclaration;
function filterToMembersWithDecorator(members, name, module) {
    return members.filter(member => !member.isStatic)
        .map(member => {
        if (member.decorators === null) {
            return null;
        }
        const decorators = member.decorators.filter(dec => {
            if (dec.import !== null) {
                return dec.import.name === name && (module === undefined || dec.import.from === module);
            }
            else {
                return dec.name === name && module === undefined;
            }
        });
        if (decorators.length === 0) {
            return null;
        }
        return { member, decorators };
    })
        .filter((value) => value !== null);
}
exports.filterToMembersWithDecorator = filterToMembersWithDecorator;
function findMember(members, name, isStatic = false) {
    return members.find(member => member.isStatic === isStatic && member.name === name) || null;
}
exports.findMember = findMember;
function reflectObjectLiteral(node) {
    const map = new Map();
    node.properties.forEach(prop => {
        if (typescript_1.default.isPropertyAssignment(prop)) {
            const name = propertyNameToString(prop.name);
            if (name === null) {
                return;
            }
            map.set(name, prop.initializer);
        }
        else if (typescript_1.default.isShorthandPropertyAssignment(prop)) {
            map.set(prop.name.text, prop.name);
        }
        else {
            return;
        }
    });
    return map;
}
exports.reflectObjectLiteral = reflectObjectLiteral;
function castDeclarationToClassOrDie(declaration) {
    if (!typescript_1.default.isClassDeclaration(declaration)) {
        throw new Error(`Reflecting on a ${typescript_1.default.SyntaxKind[declaration.kind]} instead of a ClassDeclaration.`);
    }
    return declaration;
}
function parameterName(name) {
    if (typescript_1.default.isIdentifier(name)) {
        return name.text;
    }
    else {
        return null;
    }
}
function propertyNameToString(node) {
    if (typescript_1.default.isIdentifier(node) || typescript_1.default.isStringLiteral(node) || typescript_1.default.isNumericLiteral(node)) {
        return node.text;
    }
    else {
        return null;
    }
}
function getQualifiedNameRoot(qualifiedName) {
    while (typescript_1.default.isQualifiedName(qualifiedName.left)) {
        qualifiedName = qualifiedName.left;
    }
    return typescript_1.default.isIdentifier(qualifiedName.left) ? qualifiedName.left : null;
}
function getFarLeftIdentifier(propertyAccess) {
    while (typescript_1.default.isPropertyAccessExpression(propertyAccess.expression)) {
        propertyAccess = propertyAccess.expression;
    }
    return typescript_1.default.isIdentifier(propertyAccess.expression) ? propertyAccess.expression : null;
}
function getContainingImportDeclaration(node) {
    return typescript_1.default.isImportSpecifier(node) ? node.parent.parent.parent :
        typescript_1.default.isNamespaceImport(node) ? node.parent.parent : null;
}
function getExportedName(decl, originalId) {
    return typescript_1.default.isImportSpecifier(decl) ?
        (decl.propertyName !== undefined ? decl.propertyName : decl.name).text :
        originalId.text;
}
const LocalExportedDeclarations = Symbol('LocalExportedDeclarations');
