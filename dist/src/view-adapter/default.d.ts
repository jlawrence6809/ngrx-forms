import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { FormControlState } from '../state';
import { FormViewAdapter } from './view-adapter';
export interface Navigator {
    userAgent: string;
}
export declare class NgrxDefaultViewAdapter implements FormViewAdapter, AfterViewInit {
    private renderer;
    private elementRef;
    private platformId;
    private state;
    private nativeIdWasSet;
    onChange: (value: any) => void;
    onTouched: () => void;
    ngrxFormControlState: FormControlState<any>;
    /** Whether the user is creating a composition string (IME events). */
    private isComposing;
    private isCompositionSupported;
    constructor(renderer: Renderer2, elementRef: ElementRef, platformId?: string | null, navigator?: Navigator | null);
    ngAfterViewInit(): void;
    setViewValue(value: any): void;
    setOnChangeCallback(fn: (value: any) => void): void;
    setOnTouchedCallback(fn: () => void): void;
    setIsDisabled(isDisabled: boolean): void;
    handleInput({ target }: {
        target: HTMLInputElement;
    }): void;
    compositionStart(): void;
    compositionEnd({ target }: {
        target: HTMLInputElement;
    }): void;
}
