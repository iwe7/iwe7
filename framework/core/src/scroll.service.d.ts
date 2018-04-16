export declare type EasyingFn = (t: number, b: number, c: number, d: number) => number;
export declare class ScrollService {
    private doc;
    constructor(doc: any);
    setScrollTop(el: Element | Window, topValue?: number): void;
    getOffset(el: Element): {
        top: number;
        left: number;
    };
    getScroll(el?: Element | Window, top?: boolean): number;
    scrollTo(containerEl: Element | Window, targetTopValue?: number, easing?: EasyingFn, callback?: () => void): void;
}
