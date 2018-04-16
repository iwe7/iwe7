import { OnChanges, SimpleChanges, ChangeDetectorRef, OnInit, OnDestroy, Injector, EventEmitter } from '@angular/core';
import { Subscription, BehaviorSubject, Subject } from 'rxjs';
import { CacheMemoryService, SubscribersService } from 'iwe7/cache';
export declare abstract class Iwe7Base<T> implements OnChanges, OnInit, OnDestroy {
    injector: Injector;
    _props: T;
    instance: Iwe7Base<T>;
    props: BehaviorSubject<T>;
    __events: Subject<{
        type: string;
        selector?: string;
        data?: any;
    }>;
    eventsEmit: EventEmitter<any>;
    private needDestory;
    cd: ChangeDetectorRef;
    memory: CacheMemoryService<any>;
    __subscribers: SubscribersService;
    __id: string;
    constructor(injector: Injector);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * 注销
     */
    ngOnDestroy(): void;
    ngOnInit(): void;
    setProps(props: BehaviorSubject<T>): void;
    setData(res: T): void;
    __sub: Subscription;
    __propsHandler(): void;
    getProps(): T;
    __addSub(sub: Subscription): void;
    __getUuid(): string;
    onPropsChange(res: T): void;
}
