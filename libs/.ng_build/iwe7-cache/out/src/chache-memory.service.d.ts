import { Subject, Observable } from 'rxjs';
export declare abstract class CacheMemory<T> {
    data: Map<string, any>;
    data$: Subject<Map<string, any>>;
    constructor();
    onChange(): Observable<Map<string, any>>;
    init(data: any): void;
    get(key: string): T;
    set(key: string, val: any): this;
    delete(key: string): this;
    clear(): this;
    has(key: string): boolean;
    forEach(callbackfn: (value: any, key: string, map: Map<string, any>) => void): this;
    saveToLocalStorage(key: string): void;
    initFromLoacalStorage(key: string): this;
}
export declare class CacheMemoryService<T> extends CacheMemory<T> {
    name: string;
    constructor();
}
