import { Action } from '@ngrx/store';
import { Actions } from '../actions';
import { FormControlState, FormControlValueTypes } from '../state';
export declare function formControlReducerInternal<TValue extends FormControlValueTypes>(state: FormControlState<TValue>, action: Actions<TValue>): FormControlState<TValue>;
/**
 * This reducer function updates a form control state with actions.
 */
export declare function formControlReducer<TValue extends FormControlValueTypes>(state: FormControlState<TValue> | undefined, action: Action): FormControlState<TValue>;
