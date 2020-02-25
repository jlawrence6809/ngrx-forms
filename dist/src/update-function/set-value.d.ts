import { AbstractControlState, FormState } from '../state';
/**
 * This update function takes a value and returns a projection function that
 * sets the value of a form state. Setting the value of a group or array will
 * also update the values of all children including adding and removing
 * children on the fly for added/removed properties/items.
 */
export declare function setValue<TValue>(value: TValue): (state: AbstractControlState<TValue>) => FormState<TValue>;
/**
 * This update function takes a form state and a value and sets the value of
 * the state. Setting the value of a group or array will also update the
 * values of all children including adding and removing children on the fly
 * for added/removed properties/items.
 */
export declare function setValue<TValue>(state: AbstractControlState<TValue>, value: TValue): FormState<TValue>;
