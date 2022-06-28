"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDownlevelDecoratorsTransform = void 0;
const tslib_1 = require("tslib");
const typescript_1 = (0, tslib_1.__importDefault)(require("typescript"));
const patch_alias_reference_resolution_1 = require("./patch_alias_reference_resolution");
function isAngularDecorator(decorator, isCore) {
    return isCore || (decorator.import !== null && decorator.import.from === '@angular/core');
}
const DECORATOR_INVOCATION_JSDOC_TYPE = '!Array<{type: !Function, args: (undefined|!Array<?>)}>';
function extractMetadataFromSingleDecorator(decorator, diagnostics) {
    const metadataProperties = [];
    const expr = decorator.expression;
    switch (expr.kind) {
        case typescript_1.default.SyntaxKind.Identifier:
            metadataProperties.push(typescript_1.default.createPropertyAssignment('type', expr));
            break;
        case typescript_1.default.SyntaxKind.CallExpression:
            const call = expr;
            metadataProperties.push(typescript_1.default.createPropertyAssignment('type', call.expression));
            if (call.arguments.length) {
                const args = [];
                for (const arg of call.arguments) {
                    args.push(arg);
                }
                const argsArrayLiteral = typescript_1.default.createArrayLiteral(typescript_1.default.createNodeArray(args, true));
                metadataProperties.push(typescript_1.default.createPropertyAssignment('args', argsArrayLiteral));
            }
            break;
        default:
            diagnostics.push({
                file: decorator.getSourceFile(),
                start: decorator.getStart(),
                length: decorator.getEnd() - decorator.getStart(),
                messageText: `${typescript_1.default.SyntaxKind[decorator.kind]} not implemented in gathering decorator metadata.`,
                category: typescript_1.default.DiagnosticCategory.Error,
                code: 0,
            });
            break;
    }
    return typescript_1.default.createObjectLiteral(metadataProperties);
}
function createCtorParametersClassProperty(diagnostics, entityNameToExpression, ctorParameters, isClosureCompilerEnabled) {
    const params = [];
    for (const ctorParam of ctorParameters) {
        if (!ctorParam.type && ctorParam.decorators.length === 0) {
            params.push(typescript_1.default.createNull());
            continue;
        }
        const paramType = ctorParam.type ?
            typeReferenceToExpression(entityNameToExpression, ctorParam.type) :
            undefined;
        const members = [typescript_1.default.createPropertyAssignment('type', paramType || typescript_1.default.createIdentifier('undefined'))];
        const decorators = [];
        for (const deco of ctorParam.decorators) {
            decorators.push(extractMetadataFromSingleDecorator(deco, diagnostics));
        }
        if (decorators.length) {
            members.push(typescript_1.default.createPropertyAssignment('decorators', typescript_1.default.createArrayLiteral(decorators)));
        }
        params.push(typescript_1.default.createObjectLiteral(members));
    }
    const initializer = typescript_1.default.createArrowFunction(undefined, undefined, [], undefined, typescript_1.default.createToken(typescript_1.default.SyntaxKind.EqualsGreaterThanToken), typescript_1.default.createArrayLiteral(params, true));
    const ctorProp = typescript_1.default.createProperty(undefined, [typescript_1.default.createToken(typescript_1.default.SyntaxKind.StaticKeyword)], 'ctorParameters', undefined, undefined, initializer);
    if (isClosureCompilerEnabled) {
        typescript_1.default.setSyntheticLeadingComments(ctorProp, [
            {
                kind: typescript_1.default.SyntaxKind.MultiLineCommentTrivia,
                text: [
                    `*`,
                    ` * @type {function(): !Array<(null|{`,
                    ` *   type: ?,`,
                    ` *   decorators: (undefined|${DECORATOR_INVOCATION_JSDOC_TYPE}),`,
                    ` * })>}`,
                    ` * @nocollapse`,
                    ` `,
                ].join('\n'),
                pos: -1,
                end: -1,
                hasTrailingNewLine: true,
            },
        ]);
    }
    return ctorProp;
}
function typeReferenceToExpression(entityNameToExpression, node) {
    let kind = node.kind;
    if (typescript_1.default.isLiteralTypeNode(node)) {
        kind = node.literal.kind;
    }
    switch (kind) {
        case typescript_1.default.SyntaxKind.FunctionType:
        case typescript_1.default.SyntaxKind.ConstructorType:
            return typescript_1.default.createIdentifier('Function');
        case typescript_1.default.SyntaxKind.ArrayType:
        case typescript_1.default.SyntaxKind.TupleType:
            return typescript_1.default.createIdentifier('Array');
        case typescript_1.default.SyntaxKind.TypePredicate:
        case typescript_1.default.SyntaxKind.TrueKeyword:
        case typescript_1.default.SyntaxKind.FalseKeyword:
        case typescript_1.default.SyntaxKind.BooleanKeyword:
            return typescript_1.default.createIdentifier('Boolean');
        case typescript_1.default.SyntaxKind.StringLiteral:
        case typescript_1.default.SyntaxKind.StringKeyword:
            return typescript_1.default.createIdentifier('String');
        case typescript_1.default.SyntaxKind.ObjectKeyword:
            return typescript_1.default.createIdentifier('Object');
        case typescript_1.default.SyntaxKind.NumberKeyword:
        case typescript_1.default.SyntaxKind.NumericLiteral:
            return typescript_1.default.createIdentifier('Number');
        case typescript_1.default.SyntaxKind.TypeReference:
            const typeRef = node;
            return entityNameToExpression(typeRef.typeName);
        case typescript_1.default.SyntaxKind.UnionType:
            const childTypeNodes = node
                .types.filter(t => !(typescript_1.default.isLiteralTypeNode(t) && t.literal.kind === typescript_1.default.SyntaxKind.NullKeyword));
            return childTypeNodes.length === 1 ?
                typeReferenceToExpression(entityNameToExpression, childTypeNodes[0]) :
                undefined;
        default:
            return undefined;
    }
}
function symbolIsRuntimeValue(typeChecker, symbol) {
    if (symbol.flags & typescript_1.default.SymbolFlags.Alias) {
        symbol = typeChecker.getAliasedSymbol(symbol);
    }
    return (symbol.flags & typescript_1.default.SymbolFlags.Value & typescript_1.default.SymbolFlags.ConstEnumExcludes) !== 0;
}
function getDownlevelDecoratorsTransform(typeChecker, host, diagnostics, isCore, isClosureCompilerEnabled, skipClassDecorators) {
    function addJSDocTypeAnnotation(node, jsdocType) {
        if (!isClosureCompilerEnabled) {
            return;
        }
        typescript_1.default.setSyntheticLeadingComments(node, [
            {
                kind: typescript_1.default.SyntaxKind.MultiLineCommentTrivia,
                text: `* @type {${jsdocType}} `,
                pos: -1,
                end: -1,
                hasTrailingNewLine: true,
            },
        ]);
    }
    function createDecoratorClassProperty(decoratorList) {
        const modifier = typescript_1.default.createToken(typescript_1.default.SyntaxKind.StaticKeyword);
        const initializer = typescript_1.default.createArrayLiteral(decoratorList, true);
        const prop = typescript_1.default.createProperty(undefined, [modifier], 'decorators', undefined, undefined, initializer);
        addJSDocTypeAnnotation(prop, DECORATOR_INVOCATION_JSDOC_TYPE);
        return prop;
    }
    function createPropDecoratorsClassProperty(diagnostics, properties) {
        const entries = [];
        for (const [name, decorators] of properties.entries()) {
            entries.push(typescript_1.default.createPropertyAssignment(name, typescript_1.default.createArrayLiteral(decorators.map(deco => extractMetadataFromSingleDecorator(deco, diagnostics)))));
        }
        const initializer = typescript_1.default.createObjectLiteral(entries, true);
        const prop = typescript_1.default.createProperty(undefined, [typescript_1.default.createToken(typescript_1.default.SyntaxKind.StaticKeyword)], 'propDecorators', undefined, undefined, initializer);
        addJSDocTypeAnnotation(prop, `!Object<string, ${DECORATOR_INVOCATION_JSDOC_TYPE}>`);
        return prop;
    }
    return (context) => {
        const referencedParameterTypes = (0, patch_alias_reference_resolution_1.loadIsReferencedAliasDeclarationPatch)(context);
        function entityNameToExpression(name) {
            const symbol = typeChecker.getSymbolAtLocation(name);
            if (!symbol || !symbolIsRuntimeValue(typeChecker, symbol) || !symbol.declarations ||
                symbol.declarations.length === 0) {
                return undefined;
            }
            if (typescript_1.default.isQualifiedName(name)) {
                const containerExpr = entityNameToExpression(name.left);
                if (containerExpr === undefined) {
                    return undefined;
                }
                return typescript_1.default.createPropertyAccess(containerExpr, name.right);
            }
            const decl = symbol.declarations[0];
            if ((0, patch_alias_reference_resolution_1.isAliasImportDeclaration)(decl)) {
                referencedParameterTypes.add(decl);
                if (decl.name !== undefined) {
                    return typescript_1.default.getMutableClone(decl.name);
                }
            }
            return typescript_1.default.getMutableClone(name);
        }
        function transformClassElement(element) {
            element = typescript_1.default.visitEachChild(element, decoratorDownlevelVisitor, context);
            const decoratorsToKeep = [];
            const toLower = [];
            const decorators = host.getDecoratorsOfDeclaration(element) || [];
            for (const decorator of decorators) {
                const decoratorNode = decorator.node;
                if (!isAngularDecorator(decorator, isCore)) {
                    decoratorsToKeep.push(decoratorNode);
                    continue;
                }
                toLower.push(decoratorNode);
            }
            if (!toLower.length)
                return [undefined, element, []];
            if (!element.name || !typescript_1.default.isIdentifier(element.name)) {
                diagnostics.push({
                    file: element.getSourceFile(),
                    start: element.getStart(),
                    length: element.getEnd() - element.getStart(),
                    messageText: `Cannot process decorators for class element with non-analyzable name.`,
                    category: typescript_1.default.DiagnosticCategory.Error,
                    code: 0,
                });
                return [undefined, element, []];
            }
            const name = element.name.text;
            const mutable = typescript_1.default.getMutableClone(element);
            mutable.decorators = decoratorsToKeep.length ?
                typescript_1.default.setTextRange(typescript_1.default.createNodeArray(decoratorsToKeep), mutable.decorators) :
                undefined;
            return [name, mutable, toLower];
        }
        function transformConstructor(ctor) {
            ctor = typescript_1.default.visitEachChild(ctor, decoratorDownlevelVisitor, context);
            const newParameters = [];
            const oldParameters = ctor.parameters;
            const parametersInfo = [];
            for (const param of oldParameters) {
                const decoratorsToKeep = [];
                const paramInfo = { decorators: [], type: null };
                const decorators = host.getDecoratorsOfDeclaration(param) || [];
                for (const decorator of decorators) {
                    const decoratorNode = decorator.node;
                    if (!isAngularDecorator(decorator, isCore)) {
                        decoratorsToKeep.push(decoratorNode);
                        continue;
                    }
                    paramInfo.decorators.push(decoratorNode);
                }
                if (param.type) {
                    paramInfo.type = param.type;
                }
                parametersInfo.push(paramInfo);
                const newParam = typescript_1.default.updateParameter(param, decoratorsToKeep.length ? decoratorsToKeep : undefined, param.modifiers, param.dotDotDotToken, param.name, param.questionToken, param.type, param.initializer);
                newParameters.push(newParam);
            }
            const updated = typescript_1.default.updateConstructor(ctor, ctor.decorators, ctor.modifiers, newParameters, ctor.body);
            return [updated, parametersInfo];
        }
        function transformClassDeclaration(classDecl) {
            classDecl = typescript_1.default.getMutableClone(classDecl);
            const newMembers = [];
            const decoratedProperties = new Map();
            let classParameters = null;
            for (const member of classDecl.members) {
                switch (member.kind) {
                    case typescript_1.default.SyntaxKind.PropertyDeclaration:
                    case typescript_1.default.SyntaxKind.GetAccessor:
                    case typescript_1.default.SyntaxKind.SetAccessor:
                    case typescript_1.default.SyntaxKind.MethodDeclaration: {
                        const [name, newMember, decorators] = transformClassElement(member);
                        newMembers.push(newMember);
                        if (name)
                            decoratedProperties.set(name, decorators);
                        continue;
                    }
                    case typescript_1.default.SyntaxKind.Constructor: {
                        const ctor = member;
                        if (!ctor.body)
                            break;
                        const [newMember, parametersInfo] = transformConstructor(member);
                        classParameters = parametersInfo;
                        newMembers.push(newMember);
                        continue;
                    }
                    default:
                        break;
                }
                newMembers.push(typescript_1.default.visitEachChild(member, decoratorDownlevelVisitor, context));
            }
            const decoratorsToKeep = new Set(classDecl.decorators);
            const possibleAngularDecorators = host.getDecoratorsOfDeclaration(classDecl) || [];
            let hasAngularDecorator = false;
            const decoratorsToLower = [];
            for (const decorator of possibleAngularDecorators) {
                const decoratorNode = decorator.node;
                const isNgDecorator = isAngularDecorator(decorator, isCore);
                if (isNgDecorator) {
                    hasAngularDecorator = true;
                }
                if (isNgDecorator && !skipClassDecorators) {
                    decoratorsToLower.push(extractMetadataFromSingleDecorator(decoratorNode, diagnostics));
                    decoratorsToKeep.delete(decoratorNode);
                }
            }
            if (decoratorsToLower.length) {
                newMembers.push(createDecoratorClassProperty(decoratorsToLower));
            }
            if (classParameters) {
                if (hasAngularDecorator || classParameters.some(p => !!p.decorators.length)) {
                    newMembers.push(createCtorParametersClassProperty(diagnostics, entityNameToExpression, classParameters, isClosureCompilerEnabled));
                }
            }
            if (decoratedProperties.size) {
                newMembers.push(createPropDecoratorsClassProperty(diagnostics, decoratedProperties));
            }
            const members = typescript_1.default.setTextRange(typescript_1.default.createNodeArray(newMembers, classDecl.members.hasTrailingComma), classDecl.members);
            return typescript_1.default.updateClassDeclaration(classDecl, decoratorsToKeep.size ? Array.from(decoratorsToKeep) : undefined, classDecl.modifiers, classDecl.name, classDecl.typeParameters, classDecl.heritageClauses, members);
        }
        function decoratorDownlevelVisitor(node) {
            if (typescript_1.default.isClassDeclaration(node)) {
                return transformClassDeclaration(node);
            }
            return typescript_1.default.visitEachChild(node, decoratorDownlevelVisitor, context);
        }
        return (sf) => {
            return typescript_1.default.visitEachChild(sf, decoratorDownlevelVisitor, context);
        };
    };
}
exports.getDownlevelDecoratorsTransform = getDownlevelDecoratorsTransform;
