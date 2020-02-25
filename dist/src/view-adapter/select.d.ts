import { AfterViewInit, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { FormControlState } from '../state';
import { FormViewAdapter } from './view-adapter';
export declare class NgrxSelectViewAdapter implements FormViewAdapter, AfterViewInit {
    private renderer;
    private elementRef;
    private state;
    private optionMap;
    private idCounter;
    private selectedId;
    private value;
    private nativeIdWasSet;
    onChangeFn: (value: any) => void;
    onTouched: () => void;
    ngrxFormControlState: FormControlState<any>;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngAfterViewInit(): void;
    setViewValue(value: any): void;
    onChange({ target }: {
        target: HTMLOptionElement;
    }): void;
    setOnChangeCallback(fn: (value: any) => void): void;
    setOnTouchedCallback(fn: () => void): void;
    setIsDisabled(isDisabled: boolean): void;
    createOptionId(): string;
    updateOptionValue(id: string, value: any): void;
    deregisterOption(id: string): void;
    private getOptionId;
}
export declare class NgrxSelectOption implements OnDestroy {
    private element;
    private renderer;
    private viewAdapter;
    private isInitialized;
    id: string;
    constructor(element: ElementRef, renderer: Renderer2, viewAdapter: NgrxSelectViewAdapter);
    value: any;
    ngOnDestroy(): void;
}
