import { AbstractControlState, FormState } from '../state';
/**
 * This update function takes a name and a value and returns a projection
 * function that sets the async error for the given name to the given value.
 * It also marks the validation for the name as not pending anymore if it
 * was pending.
 */
export declare function setAsyncError(name: string, value: any): <TValue>(state: AbstractControlState<TValue>) => FormState<TValue>;
/**
 * This update function takes a form state, a name, and a value and sets the
 * async error for the given name to the given value. It also marks the
 * validation for the name as not pending anymore if it was pending.
 */
export declare function setAsyncError<TValue>(state: AbstractControlState<TValue>, name: string, value: any): FormState<TValue>;
