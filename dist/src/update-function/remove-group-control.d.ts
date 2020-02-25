import { FormGroupState, KeyValue } from '../state';
/**
 * This update function takes a name and returns a projection function
 * that removes the child control with the given name from a form group state.
 */
export declare function removeGroupControl<TValue extends KeyValue>(name: keyof TValue): (state: FormGroupState<TValue>) => FormGroupState<TValue>;
/**
 * This update function takes a group form state and a name and removes the
 * child control with the given name from the state.
 */
export declare function removeGroupControl<TValue extends KeyValue>(state: FormGroupState<TValue>, name: keyof TValue): FormGroupState<TValue>;
