import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { FormControlState } from '../state';
import { FormViewAdapter } from './view-adapter';
export declare class NgrxNumberViewAdapter implements FormViewAdapter, AfterViewInit {
    private renderer;
    private elementRef;
    private state;
    private nativeIdWasSet;
    onChange: (value: any) => void;
    onTouched: () => void;
    ngrxFormControlState: FormControlState<any>;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngAfterViewInit(): void;
    setViewValue(value: any): void;
    setOnChangeCallback(fn: (value: any) => void): void;
    setOnTouchedCallback(fn: () => void): void;
    setIsDisabled(isDisabled: boolean): void;
    handleInput({ target }: {
        target: HTMLInputElement;
    }): void;
}
