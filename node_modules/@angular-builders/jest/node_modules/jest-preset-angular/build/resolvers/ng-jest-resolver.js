"use strict";
const ngJestResolver = (path, options) => options.defaultResolver(path, Object.assign(Object.assign({}, options), { packageFilter: (pkg) => (Object.assign(Object.assign({}, pkg), { main: pkg.main || pkg.es2015 || pkg.module })) }));
module.exports = ngJestResolver;
