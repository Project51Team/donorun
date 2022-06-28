import { FactoryProvider, InjectionToken } from '@angular/core';
import { WebStorage } from './interfaces/webStorage';
export declare const LOCAL_STORAGE: InjectionToken<WebStorage>;
export declare function getLocalStorage(): Storage;
export declare const LocalStorageProvider: FactoryProvider;
export declare const SESSION_STORAGE: InjectionToken<WebStorage>;
export declare function getSessionStorage(): Storage;
export declare const SessionStorageProvider: FactoryProvider;
