"use strict";
const HTML_ELEMENT_REGEXP = /Comment/;
const test = (value) => (value === null || value === void 0 ? void 0 : value.nodeType) === 8 && value.constructor !== undefined && HTML_ELEMENT_REGEXP.test(value.constructor.name);
const serialize = () => '';
module.exports = {
    serialize,
    test,
};
