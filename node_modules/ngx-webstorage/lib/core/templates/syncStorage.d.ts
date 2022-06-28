import { StorageStrategy } from '../interfaces/storageStrategy';
import { StorageService } from '../interfaces/storageService';
import { Observable } from 'rxjs';
export declare class SyncStorage implements StorageService {
    protected strategy: StorageStrategy<any>;
    constructor(strategy: StorageStrategy<any>);
    retrieve(key: string): any;
    store(key: string, value: any): any;
    clear(key?: string): void;
    getStrategyName(): string;
    observe(key: string): Observable<any>;
}
