import { Action } from '@ngrx/store';
import { Actions } from '../actions';
import { FormGroupState, KeyValue } from '../state';
export declare function formGroupReducerInternal<TValue extends KeyValue>(state: FormGroupState<TValue>, action: Actions<TValue>): FormGroupState<TValue>;
/**
 * This reducer function updates a form group state with actions.
 */
export declare function formGroupReducer<TValue extends KeyValue>(state: FormGroupState<TValue> | undefined, action: Action): FormGroupState<TValue>;
