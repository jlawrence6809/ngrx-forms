import { FormArrayState } from '../state';
/**
 * This update function takes a value and optionally an index and returns a projection function
 * that adds a child control at the given index or at the end of a form array state.
 */
export declare function addArrayControl<TValue>(value: TValue, index?: number): (state: FormArrayState<TValue>) => FormArrayState<TValue>;
/**
 * This update function takes an array form state, a value, and optionally an index and adds a
 * child control at the given index or at the end of the state.
 */
export declare function addArrayControl<TValue>(state: FormArrayState<TValue>, value: TValue, index?: number): FormArrayState<TValue>;
