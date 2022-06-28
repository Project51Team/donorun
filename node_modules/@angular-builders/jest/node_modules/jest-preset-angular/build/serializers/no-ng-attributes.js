"use strict";
const pretty_format_1 = require("pretty-format");
const jestDOMElementSerializer = pretty_format_1.plugins.DOMElement;
const attributesToRemovePatterns = ['ng-reflect', '_nghost', '_ngcontent', 'ng-version'];
const attributesToClean = {
    class: [/^(?:mat|cdk|ng).*-\w*\d+-\d+$/, /^ng-star-inserted$/],
    id: [/^(?:mat|cdk|ng).*-\d+$/],
    for: [/^(?:mat|cdk|ng).*-\d+$/],
    'aria-owns': [/^(?:mat|cdk|ng).*-\d+$/],
    'aria-labelledby': [/^(?:mat|cdk|ng).*-\d+$/],
    'aria-controls': [/^(?:mat|cdk|ng).*-\d+$/],
};
const hasAttributesToRemove = (attribute) => attributesToRemovePatterns.some((removePattern) => attribute.name.startsWith(removePattern));
const hasAttributesToClean = (attribute) => Object.keys(attributesToClean).some((removePatternKey) => attribute.name === removePatternKey);
const serialize = (node, ...rest) => {
    const nodeCopy = node.cloneNode(true);
    Object.values(nodeCopy.attributes)
        .filter(hasAttributesToRemove)
        .forEach((attribute) => nodeCopy.attributes.removeNamedItem(attribute.name));
    Object.values(nodeCopy.attributes)
        .filter(hasAttributesToClean)
        .forEach((attribute) => {
        attribute.value = attribute.value
            .split(' ')
            .filter((attrValue) => !attributesToClean[attribute.name].some((attributeCleanRegex) => attributeCleanRegex.test(attrValue)))
            .join(' ');
        if (attribute.value === '') {
            nodeCopy.attributes.removeNamedItem(attribute.name);
        }
        else {
            nodeCopy.attributes.setNamedItem(attribute);
        }
    });
    return jestDOMElementSerializer.serialize(nodeCopy, ...rest);
};
const serializeTestFn = (val) => !!val.attributes &&
    Object.values(val.attributes).some((attribute) => hasAttributesToRemove(attribute) || hasAttributesToClean(attribute));
const test = (val) => !!val && jestDOMElementSerializer.test(val) && serializeTestFn(val);
module.exports = {
    serialize,
    test,
};
