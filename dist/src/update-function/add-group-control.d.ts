import { FormGroupState, KeyValue } from '../state';
/**
 * This update function takes a name and a value and returns a projection function
 * that adds a child control with the given name and value to a form group state.
 */
export declare function addGroupControl<TValue extends KeyValue, TControlKey extends keyof TValue = keyof TValue>(name: TControlKey, value: TValue[TControlKey]): (state: FormGroupState<TValue>) => FormGroupState<TValue>;
/**
 * This update function takes a form group state, a name, and a value, and adds a child
 * control with the given name and value to the form group state.
 */
export declare function addGroupControl<TValue extends KeyValue, TControlKey extends keyof TValue = keyof TValue>(state: FormGroupState<TValue>, name: TControlKey, value: TValue[TControlKey]): FormGroupState<TValue>;
