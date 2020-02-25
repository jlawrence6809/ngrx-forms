import { AbstractControlState, FormState } from '../state';
/**
 * This update function takes a name and returns a projection function that
 * marks the async validation for the given name as pending.
 */
export declare function startAsyncValidation(name: string): <TValue>(state: AbstractControlState<TValue>) => FormState<TValue>;
/**
 * This update function takes a form state and a name and marks the async
 * validation for the given name as pending.
 */
export declare function startAsyncValidation<TValue>(state: AbstractControlState<TValue>, name: string): FormState<TValue>;
