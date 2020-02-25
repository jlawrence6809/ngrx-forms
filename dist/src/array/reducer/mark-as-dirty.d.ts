import { Actions } from '../../actions';
import { FormArrayState } from '../../state';
export declare function markAsDirtyReducer<TValue>(state: FormArrayState<TValue>, action: Actions<TValue[]>): FormArrayState<TValue>;
