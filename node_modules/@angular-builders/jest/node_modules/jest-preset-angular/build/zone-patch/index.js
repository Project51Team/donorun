"use strict";
if (Zone === undefined) {
    throw new Error('Missing: Zone (zone.js)');
}
if (jest === undefined) {
    throw new Error('Missing: jest.\n' +
        'This patch must be included in a script called with ' +
        '`setupTestFrameworkScriptFile` in Jest config.');
}
if (jest['__zone_patch__'] === true) {
    throw new Error("'jest' has already been patched with 'Zone'.");
}
jest['__zone_patch__'] = true;
const SyncTestZoneSpec = Zone['SyncTestZoneSpec'];
const ProxyZoneSpec = Zone['ProxyZoneSpec'];
if (SyncTestZoneSpec === undefined) {
    throw new Error('Missing: SyncTestZoneSpec (zone.js/dist/sync-test)');
}
if (ProxyZoneSpec === undefined) {
    throw new Error('Missing: ProxyZoneSpec (zone.js/dist/proxy.js)');
}
const env = global;
const ambientZone = Zone.current;
const syncZone = ambientZone.fork(new SyncTestZoneSpec('jest.describe'));
function wrapDescribeInZone(describeBody) {
    return function (...args) {
        return syncZone.run(describeBody, null, args);
    };
}
const testProxyZone = ambientZone.fork(new ProxyZoneSpec());
function wrapTestInZone(testBody) {
    if (testBody === undefined) {
        return;
    }
    const wrappedFunc = function () {
        return testProxyZone.run(testBody, null, arguments);
    };
    try {
        Object.defineProperty(wrappedFunc, 'length', {
            configurable: true,
            writable: true,
            enumerable: false,
        });
        wrappedFunc.length = testBody.length;
    }
    catch (e) {
        return testBody.length === 0
            ? () => testProxyZone.run(testBody, null)
            : (done) => testProxyZone.run(testBody, null, [done]);
    }
    return wrappedFunc;
}
const bindDescribe = (originalJestFn) => function (...eachArgs) {
    return function (...args) {
        args[1] = wrapDescribeInZone(args[1]);
        return originalJestFn.apply(this, eachArgs).apply(this, args);
    };
};
const bindTest = (originalJestFn) => function (...eachArgs) {
    return function (...args) {
        args[1] = wrapTestInZone(args[1]);
        return originalJestFn.apply(this, eachArgs).apply(this, args);
    };
};
['xdescribe', 'fdescribe', 'describe'].forEach((methodName) => {
    const originaljestFn = env[methodName];
    env[methodName] = function (...args) {
        args[1] = wrapDescribeInZone(args[1]);
        return originaljestFn.apply(this, args);
    };
    env[methodName].each = bindDescribe(originaljestFn.each);
    if (methodName === 'describe') {
        env[methodName].only = env['fdescribe'];
        env[methodName].skip = env['xdescribe'];
    }
});
['xit', 'fit', 'xtest', 'test', 'it'].forEach((methodName) => {
    const originaljestFn = env[methodName];
    env[methodName] = function (...args) {
        args[1] = wrapTestInZone(args[1]);
        return originaljestFn.apply(this, args);
    };
    env[methodName].each = bindTest(originaljestFn.each);
    if (methodName === 'test' || methodName === 'it') {
        env[methodName].only = env['fit'];
        env[methodName].skip = env['xit'];
        env[methodName].todo = function (...args) {
            return originaljestFn.todo.apply(this, args);
        };
    }
});
['beforeEach', 'afterEach', 'beforeAll', 'afterAll'].forEach((methodName) => {
    const originaljestFn = env[methodName];
    env[methodName] = function (...args) {
        args[0] = wrapTestInZone(args[0]);
        return originaljestFn.apply(this, args);
    };
});
