import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ActionsSubject } from '@ngrx/store';
import { Actions } from '../actions';
import { FormControlState, FormControlValueTypes } from '../state';
import { FormViewAdapter } from '../view-adapter/view-adapter';
import { NgrxValueConverter } from './value-converter';
export interface Document {
    activeElement: any;
}
export declare enum NGRX_UPDATE_ON_TYPE {
    CHANGE = "change",
    BLUR = "blur",
    NEVER = "never"
}
export declare class NgrxFormControlDirective<TStateValue extends FormControlValueTypes, TViewValue = TStateValue> implements AfterViewInit, OnInit {
    private el;
    private dom;
    private actionsSubject;
    private isInitialized;
    private focusTrackingIsEnabled;
    ngrxFormControlState: FormControlState<TStateValue>;
    ngrxUpdateOn: NGRX_UPDATE_ON_TYPE;
    ngrxEnableFocusTracking: boolean;
    ngrxValueConverter: NgrxValueConverter<TViewValue, TStateValue>;
    readonly focusRegionStartAttr: "" | null;
    state: FormControlState<TStateValue>;
    private viewAdapter;
    private viewValue;
    private stateValue;
    constructor(el: ElementRef, dom: Document | null, actionsSubject: ActionsSubject | null, viewAdapters: FormViewAdapter[], valueAccessors: ControlValueAccessor[]);
    updateViewIfControlIdChanged(newState: FormControlState<TStateValue>, oldState: FormControlState<TStateValue> | undefined): void;
    updateViewIfValueChanged(newState: FormControlState<TStateValue>, _: FormControlState<TStateValue> | undefined): void;
    updateViewIfIsDisabledChanged(newState: FormControlState<TStateValue>, oldState: FormControlState<TStateValue> | undefined): void;
    updateViewIfIsFocusedChanged(newState: FormControlState<TStateValue>, oldState: FormControlState<TStateValue> | undefined): void;
    protected dispatchAction(action: Actions<TStateValue>): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onFocusChange(): void;
}
