import { AbstractControlState, FormState, ValidationErrors } from '../state';
export declare type ValidationFn<TValue> = (value: TValue) => ValidationErrors;
/**
 * This update function takes one or more validation functions and a form
 * state and sets the errors of the state to the result of applying the
 * given validation function(s) to the state's value.
 */
export declare function validate<TValue>(state: AbstractControlState<TValue>, fn: ValidationFn<TValue>, ...rest: ValidationFn<TValue>[]): FormState<TValue>;
/**
 * This update function takes an array of validation functions and a form
 * state and sets the errors of the state to the result of applying the given
 * validation function(s) to the state's value.
 */
export declare function validate<TValue>(state: AbstractControlState<TValue>, rest: ValidationFn<TValue>[]): FormState<TValue>;
/**
 * This update function takes one or more validation functions and returns
 * a projection function that sets the errors of a form state to the result
 * of applying the given validation function(s) to the state's value.
 */
export declare function validate<TValue>(fn: ValidationFn<TValue>, ...rest: ValidationFn<TValue>[]): (state: AbstractControlState<TValue>) => FormState<TValue>;
/**
 * This update function takes an array of validation functions and returns a
 * projection function that sets the errors of a form state to the result of
 * applying the given validation function(s) to the state's value.
 */
export declare function validate<TValue>(rest: ValidationFn<TValue>[]): (state: AbstractControlState<TValue>) => FormState<TValue>;
