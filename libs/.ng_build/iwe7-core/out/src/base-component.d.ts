import { OnChanges, SimpleChanges, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
export declare abstract class Iwe7Base<T> implements OnChanges, OnInit, OnDestroy {
    cd: ChangeDetectorRef;
    props: Observable<T>;
    needDestory: boolean;
    constructor(cd: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * 注销
     */
    ngOnDestroy(): void;
    ngOnInit(): void;
    setProps(props: Observable<T>): void;
    private __propsHandler();
    abstract onPropsChange(res: T): void;
}
