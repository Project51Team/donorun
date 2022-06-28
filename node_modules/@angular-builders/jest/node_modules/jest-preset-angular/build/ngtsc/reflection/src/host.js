"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isConcreteDeclaration = exports.KnownDeclaration = exports.ClassMemberKind = exports.isDecoratorIdentifier = exports.Decorator = void 0;
const tslib_1 = require("tslib");
const typescript_1 = (0, tslib_1.__importDefault)(require("typescript"));
exports.Decorator = {
    nodeForError: (decorator) => {
        if (decorator.node !== null) {
            return decorator.node;
        }
        else {
            return decorator.synthesizedFor;
        }
    },
};
function isDecoratorIdentifier(exp) {
    return typescript_1.default.isIdentifier(exp) ||
        typescript_1.default.isPropertyAccessExpression(exp) && typescript_1.default.isIdentifier(exp.expression) &&
            typescript_1.default.isIdentifier(exp.name);
}
exports.isDecoratorIdentifier = isDecoratorIdentifier;
var ClassMemberKind;
(function (ClassMemberKind) {
    ClassMemberKind[ClassMemberKind["Constructor"] = 0] = "Constructor";
    ClassMemberKind[ClassMemberKind["Getter"] = 1] = "Getter";
    ClassMemberKind[ClassMemberKind["Setter"] = 2] = "Setter";
    ClassMemberKind[ClassMemberKind["Property"] = 3] = "Property";
    ClassMemberKind[ClassMemberKind["Method"] = 4] = "Method";
})(ClassMemberKind = exports.ClassMemberKind || (exports.ClassMemberKind = {}));
var KnownDeclaration;
(function (KnownDeclaration) {
    KnownDeclaration[KnownDeclaration["JsGlobalObject"] = 0] = "JsGlobalObject";
    KnownDeclaration[KnownDeclaration["TsHelperAssign"] = 1] = "TsHelperAssign";
    KnownDeclaration[KnownDeclaration["TsHelperSpread"] = 2] = "TsHelperSpread";
    KnownDeclaration[KnownDeclaration["TsHelperSpreadArrays"] = 3] = "TsHelperSpreadArrays";
    KnownDeclaration[KnownDeclaration["TsHelperSpreadArray"] = 4] = "TsHelperSpreadArray";
    KnownDeclaration[KnownDeclaration["TsHelperRead"] = 5] = "TsHelperRead";
})(KnownDeclaration = exports.KnownDeclaration || (exports.KnownDeclaration = {}));
function isConcreteDeclaration(decl) {
    return decl.kind === 0;
}
exports.isConcreteDeclaration = isConcreteDeclaration;
