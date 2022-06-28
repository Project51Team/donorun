"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructorParametersDownlevelTransform = void 0;
const reflection_1 = require("../ngtsc/reflection");
const downlevel_decorators_transform_1 = require("./downlevel_decorators_transform");
const constructorParametersDownlevelTransform = (program) => {
    const typeChecker = program.getTypeChecker();
    const reflectionHost = new reflection_1.TypeScriptReflectionHost(typeChecker);
    return (0, downlevel_decorators_transform_1.getDownlevelDecoratorsTransform)(typeChecker, reflectionHost, [], false, false, true);
};
exports.constructorParametersDownlevelTransform = constructorParametersDownlevelTransform;
