import { AbstractControlState, FormState, ValidationErrors } from '../state';
/**
 * This update function takes a form state and a number of error objects and sets the
 * errors of the state.
 */
export declare function setErrors<TValue>(state: AbstractControlState<TValue>, errors: ValidationErrors, ...rest: ValidationErrors[]): FormState<TValue>;
/**
 * This update function takes a form state and an array of error objects and sets the
 * errors of the state.
 */
export declare function setErrors<TValue>(state: AbstractControlState<TValue>, errorsArray: ValidationErrors[]): FormState<TValue>;
/**
 * This update function takes a number of error objects and returns a projection
 * function that sets the errors of a form state.
 */
export declare function setErrors(errors: ValidationErrors, ...rest: ValidationErrors[]): <TValue>(state: AbstractControlState<TValue>) => FormState<TValue>;
/**
 * This update function takes an array of error objects and returns a projection
 * function that sets the errors of a form state.
 */
export declare function setErrors(errorsArray: ValidationErrors[]): <TValue>(state: AbstractControlState<TValue>) => FormState<TValue>;
