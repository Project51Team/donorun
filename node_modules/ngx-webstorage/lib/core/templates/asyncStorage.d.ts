import { StorageStrategy } from '../interfaces/storageStrategy';
import { Observable } from 'rxjs';
import { StorageService } from '../interfaces/storageService';
export declare class AsyncStorage implements StorageService {
    protected strategy: StorageStrategy<any>;
    constructor(strategy: StorageStrategy<any>);
    retrieve(key: string): Observable<any>;
    store(key: string, value: any): Observable<any>;
    clear(key?: string): Observable<void>;
    getStrategyName(): string;
    observe(key: string): Observable<any>;
}
