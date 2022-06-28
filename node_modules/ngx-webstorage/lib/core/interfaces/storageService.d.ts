import { Observable } from 'rxjs';
export interface StorageService {
    retrieve(key: string): any;
    store(key: string, value: any): any;
    clear(key?: string): any;
    getStrategyName(): string;
    observe(key: string): Observable<any>;
}
