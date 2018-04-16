import { InjectionToken, Injector } from '@angular/core';
export declare const Iwe7Colors: InjectionToken<{
    default: {
        color: string;
        bg: string;
    };
    disabled: {
        bg: string;
        color: string;
    };
    light: {
        bg: string;
        color: string;
    };
    outline: {
        bg: string;
        color: string;
    };
    primary: {
        bg: string;
        color: string;
    };
}>;
export declare class Iwe7ColorsService {
    injector: Injector;
    constructor(injector: Injector);
    getColor(key: string): any;
    getRandomColor(): string;
}
