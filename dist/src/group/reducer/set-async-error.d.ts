import { Actions } from '../../actions';
import { FormGroupState, KeyValue } from '../../state';
export declare function setAsyncErrorReducer<TValue extends KeyValue>(state: FormGroupState<TValue>, action: Actions<TValue>): FormGroupState<TValue>;
