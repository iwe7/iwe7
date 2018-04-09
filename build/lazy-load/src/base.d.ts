import { Type } from '@angular/core';
export declare abstract class LazyComponentModuleBase {
    abstract getComponentByName(key: string): Type<any>;
}
