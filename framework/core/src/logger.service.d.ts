import { InjectionToken } from '@angular/core';
export declare class LoggerService {
    private isShow;
    constructor(isShow: boolean);
    log(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    info(...args: any[]): void;
    debug(...args: any[]): void;
}
export declare function iwe7LoggerShow(): boolean;
export declare const IWE7_LOGGER_SHOW: InjectionToken<boolean>;
