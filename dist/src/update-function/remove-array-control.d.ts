import { FormArrayState } from '../state';
/**
 * This update function takes an index and returns a projection function
 * that removes the child control at the given index from a form array state.
 */
export declare function removeArrayControl(index: number): <TValue>(state: FormArrayState<TValue>) => FormArrayState<TValue>;
/**
 * This update function takes an array form state and an index and removes the
 * child control at the given index from the state.
 */
export declare function removeArrayControl<TValue>(state: FormArrayState<TValue>, index: number): FormArrayState<TValue>;
