import { AbstractControlState, FormState } from '../state';
/**
 * This update function takes a name and a value and returns a projection
 * function that sets a user-defined property on a form state.
 */
export declare function setUserDefinedProperty(name: string, value: any): <TValue>(state: AbstractControlState<TValue>) => FormState<TValue>;
/**
 * This update function takes a form state, a name, and a value and sets
 * a user-defined property on the state.
 */
export declare function setUserDefinedProperty<TValue>(state: AbstractControlState<TValue>, name: string, value: any): FormState<TValue>;
