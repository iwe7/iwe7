import { ViewContainerRef, OnInit, EventEmitter } from '@angular/core';
export declare class GetViewRefDirective implements OnInit {
    view: ViewContainerRef;
    getViewRef: EventEmitter<ViewContainerRef>;
    constructor(view: ViewContainerRef);
    ngOnInit(): void;
}
