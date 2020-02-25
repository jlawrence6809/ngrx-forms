import { FormControlState, FormControlValueTypes } from '../state';
/**
 * This update function takes a form control state and marks it as not focused (which
 * will also `.blur()` the form element).
 */
export declare function unfocus<TValue extends FormControlValueTypes>(state: FormControlState<TValue>): FormControlState<TValue>;
