import { OnChanges, SimpleChanges, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
export declare class BaseComponent implements OnChanges, OnInit, OnDestroy {
    cd: ChangeDetectorRef;
    props: Observable<any>;
    needDestory: boolean;
    constructor(cd: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * 注销
     */
    ngOnDestroy(): void;
    ngOnInit(): void;
    setProps(props: Observable<any>): void;
    private __propsHandler();
}
