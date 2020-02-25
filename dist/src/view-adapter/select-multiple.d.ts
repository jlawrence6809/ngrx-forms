import { AfterViewInit, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormControlState } from '../state';
import { FormViewAdapter } from './view-adapter';
export declare class NgrxSelectMultipleViewAdapter implements FormViewAdapter, AfterViewInit {
    private renderer;
    private elementRef;
    private state;
    private options;
    private optionValues;
    private idCounter;
    private selectedIds;
    private nativeIdWasSet;
    onChangeFn: (value: any) => void;
    onTouched: () => void;
    ngrxFormControlState: FormControlState<any>;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngAfterViewInit(): void;
    setViewValue(value: any): void;
    onChange(): void;
    setOnChangeCallback(fn: (value: any) => void): void;
    setOnTouchedCallback(fn: () => void): void;
    setIsDisabled(isDisabled: boolean): void;
    registerOption(option: NgrxSelectMultipleOption): string;
    updateOptionValue(id: string, value: any): void;
    deregisterOption(id: string): void;
    private getOptionId;
}
export declare class NgrxSelectMultipleOption implements OnInit, OnDestroy {
    private element;
    private renderer;
    private viewAdapter;
    id: string;
    constructor(element: ElementRef, renderer: Renderer2, viewAdapter: NgrxSelectMultipleViewAdapter);
    value: any;
    isSelected: boolean;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
