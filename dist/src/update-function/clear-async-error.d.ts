import { AbstractControlState, FormState } from '../state';
/**
 * This update function takes a name and returns a projection function that
 * clears the async error with the given name.
 */
export declare function clearAsyncError(name: string): <TValue>(state: AbstractControlState<TValue>) => FormState<TValue>;
/**
 * This update function takes a form state and a name, and clears the async
 * error with the given name.
 */
export declare function clearAsyncError<TValue>(state: AbstractControlState<TValue>, name: string): FormState<TValue>;
