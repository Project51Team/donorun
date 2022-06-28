"use strict";
const METADATA_KEY_PARAMTYPES = 'design:paramtypes';
global.globalThis = global.globalThis || undefined;
const globalRef = globalThis || global;
const reflect = globalRef['Reflect'];
const metadataValueStore = new WeakMap();
if (!reflect.metadata && !reflect.getOwnMetadata) {
    reflect.metadata =
        (metadataKey, metadataValue) => (target, key) => {
            if (metadataKey === METADATA_KEY_PARAMTYPES && key === undefined) {
                metadataValueStore.set(target, metadataValue);
            }
        };
    reflect.getOwnMetadata = (metadata, target, key) => {
        if (metadata === METADATA_KEY_PARAMTYPES && key === undefined && metadataValueStore.has(target)) {
            return metadataValueStore.get(target);
        }
    };
}
