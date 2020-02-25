import { Actions } from '../../actions';
import { FormGroupState, KeyValue } from '../../state';
export declare function setUserDefinedPropertyReducer<TValue extends KeyValue>(state: FormGroupState<TValue>, action: Actions<TValue>): FormGroupState<TValue>;
