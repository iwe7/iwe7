import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
export interface IcssInterface {
    [key: string]: Observable<any>;
}
export declare class IcssService {
    state: any;
    constructor();
    init(ob: IcssInterface, ele?: ElementRef): Observable<{}>;
    getState(key?: string): any;
    private parse(val);
    private styledash(target);
    vendorPrefix(): any;
}
