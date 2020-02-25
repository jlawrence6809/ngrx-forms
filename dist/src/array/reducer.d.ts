import { Action } from '@ngrx/store';
import { Actions } from '../actions';
import { FormArrayState } from '../state';
export declare function formArrayReducerInternal<TValue>(state: FormArrayState<TValue>, action: Actions<TValue[]>): FormArrayState<TValue>;
/**
 * This reducer function updates a form array state with actions.
 */
export declare function formArrayReducer<TValue>(state: FormArrayState<TValue> | undefined, action: Action): FormArrayState<TValue>;
