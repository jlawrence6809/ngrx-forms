import { Actions } from '../../actions';
import { FormControlState, FormControlValueTypes } from '../../state';
export declare function focusReducer<TValue extends FormControlValueTypes>(state: FormControlState<TValue>, action: Actions<TValue>): FormControlState<TValue>;
