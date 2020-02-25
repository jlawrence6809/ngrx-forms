import { Actions } from '../../actions';
import { FormGroupControls, FormGroupState, KeyValue } from '../../state';
export declare function dispatchActionPerChild<TValue extends KeyValue>(controls: FormGroupControls<TValue>, actionCreator: (controlId: string) => Actions<TValue>): FormGroupControls<TValue>;
export declare function childReducer<TValue extends KeyValue>(state: FormGroupState<TValue>, action: Actions<TValue>): FormGroupState<TValue>;
