import { AbstractControlState, FormArrayState, FormControlState, FormControlValueTypes, FormGroupState, FormState } from '../state';
/**
 * This update function takes a form control state and marks it as submitted.
 */
export declare function markAsSubmitted<TValue extends FormControlValueTypes>(state: FormControlState<TValue>): FormControlState<TValue>;
/**
 * This update function takes a form array state and marks it and all of its children as submitted.
 */
export declare function markAsSubmitted<TValue>(state: FormArrayState<TValue>): FormArrayState<TValue>;
/**
 * This update function takes a form group state and marks it and all of its children as submitted.
 */
export declare function markAsSubmitted<TValue>(state: FormGroupState<TValue>): FormGroupState<TValue>;
/**
 * This update function takes a state and marks it as submitted. For groups and arrays this also marks
 * all children as submitted.
 */
export declare function markAsSubmitted<TValue>(state: AbstractControlState<TValue>): FormState<TValue>;
