"use strict";
require('../utils/reflect-metadata');
try {
    !process.execArgv.includes('--experimental-vm-modules')
        ? require('zone.js/bundles/zone-testing-bundle.umd.js')
        : require('zone.js/fesm2015/zone-testing-bundle.min.js');
}
catch (err) {
    require('zone.js/dist/zone');
    require('zone.js/dist/proxy');
    require('zone.js/dist/sync-test');
    require('zone.js/dist/async-test');
    require('zone.js/dist/fake-async-test');
    require('../zone-patch');
}
const getTestBed = require('@angular/core/testing').getTestBed;
const BrowserDynamicTestingModule = require('@angular/platform-browser-dynamic/testing').BrowserDynamicTestingModule;
const platformBrowserDynamicTesting = require('@angular/platform-browser-dynamic/testing')
    .platformBrowserDynamicTesting;
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
