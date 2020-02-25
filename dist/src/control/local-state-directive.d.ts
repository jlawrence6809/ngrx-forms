import { ElementRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Actions } from '../actions';
import { FormControlValueTypes } from '../state';
import { FormViewAdapter } from '../view-adapter/view-adapter';
import { Document, NgrxFormControlDirective } from './directive';
export declare class NgrxLocalFormControlDirective<TStateValue extends FormControlValueTypes, TViewValue = TStateValue> extends NgrxFormControlDirective<TStateValue, TViewValue> {
    ngrxFormsAction: EventEmitter<Actions<TStateValue>>;
    constructor(el: ElementRef, dom: Document | null, viewAdapters: FormViewAdapter[], valueAccessors: ControlValueAccessor[]);
    protected dispatchAction(action: Actions<TStateValue>): void;
}
