import { AfterViewInit, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormControlState } from '../state';
import { FormViewAdapter } from './view-adapter';
export declare class NgrxRadioViewAdapter implements FormViewAdapter, OnInit, AfterViewInit {
    private renderer;
    private elementRef;
    private state;
    private nativeNameWasSet;
    value: any;
    ngrxFormControlState: FormControlState<any>;
    private latestValue;
    private isChecked;
    onChange: () => void;
    onTouched: () => void;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    setViewValue(value: any): void;
    setOnChangeCallback(fn: (_: any) => void): void;
    setOnTouchedCallback(fn: () => void): void;
    setIsDisabled(isDisabled: boolean): void;
}
