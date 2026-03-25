declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
    [key: string]: any;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    constructor(vars?: any);
    static create(vars?: any): ScrollSmoother;
    paused(value?: boolean): boolean | ScrollSmoother;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    [key: string]: any;
  }
}
