import { FormControlState, FormControlValueTypes } from '../state';
/**
 * This update function takes a form control state and marks it as focused (which
 * will also `.focus()` the form element).
 */
export declare function focus<TValue extends FormControlValueTypes>(state: FormControlState<TValue>): FormControlState<TValue>;
