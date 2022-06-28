"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceResources = void 0;
const tslib_1 = require("tslib");
const typescript_1 = (0, tslib_1.__importDefault)(require("typescript"));
const constants_1 = require("../constants");
const shouldTransform = (fileName) => !fileName.endsWith('.ngfactory.ts') && !fileName.endsWith('.ngstyle.ts');
function replaceResources({ program }) {
    return (context) => {
        const typeChecker = program.getTypeChecker();
        const resourceImportDeclarations = [];
        const moduleKind = context.getCompilerOptions().module;
        const visitNode = (node) => {
            if (typescript_1.default.isClassDeclaration(node)) {
                const decorators = typescript_1.default.visitNodes(node.decorators, (node) => typescript_1.default.isDecorator(node)
                    ? visitDecorator(context.factory, node, typeChecker, resourceImportDeclarations, moduleKind)
                    : node);
                return context.factory.updateClassDeclaration(node, decorators, node.modifiers, node.name, node.typeParameters, node.heritageClauses, node.members);
            }
            return typescript_1.default.visitEachChild(node, visitNode, context);
        };
        return (sourceFile) => {
            if (!shouldTransform(sourceFile.fileName)) {
                return sourceFile;
            }
            const updatedSourceFile = typescript_1.default.visitNode(sourceFile, visitNode);
            if (resourceImportDeclarations.length) {
                return context.factory.updateSourceFile(updatedSourceFile, typescript_1.default.setTextRange(context.factory.createNodeArray([...resourceImportDeclarations, ...updatedSourceFile.statements]), updatedSourceFile.statements));
            }
            return updatedSourceFile;
        };
    };
}
exports.replaceResources = replaceResources;
function visitDecorator(nodeFactory, node, typeChecker, resourceImportDeclarations, moduleKind) {
    if (!isComponentDecorator(node, typeChecker)) {
        return node;
    }
    if (!typescript_1.default.isCallExpression(node.expression)) {
        return node;
    }
    const decoratorFactory = node.expression;
    const args = decoratorFactory.arguments;
    if (args.length !== 1 || !typescript_1.default.isObjectLiteralExpression(args[0])) {
        return node;
    }
    const objectExpression = args[0];
    const styleReplacements = [];
    let properties = typescript_1.default.visitNodes(objectExpression.properties, (node) => typescript_1.default.isObjectLiteralElementLike(node)
        ? visitComponentMetadata(nodeFactory, node, resourceImportDeclarations, moduleKind)
        : node);
    if (styleReplacements.length) {
        const styleProperty = nodeFactory.createPropertyAssignment(nodeFactory.createIdentifier(constants_1.STYLES), nodeFactory.createArrayLiteralExpression(styleReplacements));
        properties = nodeFactory.createNodeArray([...properties, styleProperty]);
    }
    return nodeFactory.updateDecorator(node, nodeFactory.updateCallExpression(decoratorFactory, decoratorFactory.expression, decoratorFactory.typeArguments, [
        nodeFactory.updateObjectLiteralExpression(objectExpression, properties),
    ]));
}
function visitComponentMetadata(nodeFactory, node, resourceImportDeclarations, moduleKind) {
    if (!typescript_1.default.isPropertyAssignment(node) || typescript_1.default.isComputedPropertyName(node.name)) {
        return node;
    }
    const name = node.name.text;
    switch (name) {
        case 'moduleId':
            return undefined;
        case constants_1.TEMPLATE_URL:
            const url = getResourceUrl(node.initializer);
            if (!url) {
                return node;
            }
            const importName = createResourceImport(nodeFactory, url, resourceImportDeclarations, moduleKind);
            if (!importName) {
                return node;
            }
            return nodeFactory.updatePropertyAssignment(node, nodeFactory.createIdentifier(constants_1.TEMPLATE), importName);
        case constants_1.STYLES:
        case constants_1.STYLE_URLS:
            if (!typescript_1.default.isArrayLiteralExpression(node.initializer)) {
                return node;
            }
            return undefined;
        default:
            return node;
    }
}
function getResourceUrl(node) {
    if (!typescript_1.default.isStringLiteral(node) && !typescript_1.default.isNoSubstitutionTemplateLiteral(node)) {
        return null;
    }
    return `${/^\.?\.\//.test(node.text) ? '' : './'}${node.text}`;
}
function isComponentDecorator(node, typeChecker) {
    if (!typescript_1.default.isDecorator(node)) {
        return false;
    }
    const origin = getDecoratorOrigin(node, typeChecker);
    return !!(origin && origin.module === '@angular/core' && origin.name === constants_1.COMPONENT);
}
function createResourceImport(nodeFactory, url, resourceImportDeclarations, moduleKind = typescript_1.default.ModuleKind.ES2015) {
    const urlLiteral = nodeFactory.createStringLiteral(url);
    if (moduleKind < typescript_1.default.ModuleKind.ES2015) {
        return nodeFactory.createCallExpression(nodeFactory.createIdentifier(constants_1.REQUIRE), [], [urlLiteral]);
    }
    else {
        const importName = typescript_1.default.createIdentifier(`__NG_CLI_RESOURCE__${resourceImportDeclarations.length}`);
        const importDeclaration = nodeFactory.createImportDeclaration(undefined, undefined, nodeFactory.createImportClause(false, importName, undefined), urlLiteral);
        resourceImportDeclarations.push(importDeclaration);
        return importName;
    }
}
function getDecoratorOrigin(decorator, typeChecker) {
    if (!typescript_1.default.isCallExpression(decorator.expression)) {
        return null;
    }
    let identifier;
    let name = '';
    if (typescript_1.default.isPropertyAccessExpression(decorator.expression.expression)) {
        identifier = decorator.expression.expression.expression;
        name = decorator.expression.expression.name.text;
    }
    else if (typescript_1.default.isIdentifier(decorator.expression.expression)) {
        identifier = decorator.expression.expression;
    }
    else {
        return null;
    }
    const symbol = typeChecker.getSymbolAtLocation(identifier);
    if (symbol && symbol.declarations && symbol.declarations.length > 0) {
        const declaration = symbol.declarations[0];
        let module;
        if (typescript_1.default.isImportSpecifier(declaration)) {
            name = (declaration.propertyName || declaration.name).text;
            module = declaration.parent.parent.parent.moduleSpecifier.text;
        }
        else if (typescript_1.default.isNamespaceImport(declaration)) {
            module = declaration.parent.parent.moduleSpecifier.text;
        }
        else if (typescript_1.default.isImportClause(declaration)) {
            name = declaration.name.text;
            module = declaration.parent.moduleSpecifier.text;
        }
        else {
            return null;
        }
        return { name, module };
    }
    return null;
}
