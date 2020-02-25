import { Actions } from '../../actions';
import { FormGroupState, KeyValue } from '../../state';
export declare function markAsDirtyReducer<TValue extends KeyValue>(state: FormGroupState<TValue>, action: Actions<TValue>): FormGroupState<TValue>;
