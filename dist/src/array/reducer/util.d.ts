import { Actions } from '../../actions';
import { FormArrayState, FormGroupState, FormState } from '../../state';
export declare function dispatchActionPerChild<TValue>(controls: readonly FormState<TValue>[], actionCreator: (controlId: string) => Actions<TValue>): readonly FormState<TValue>[];
export declare function childReducer<TValue>(state: FormArrayState<TValue>, action: Actions<TValue[]>): FormArrayState<TValue>;
export declare function updateIdRecursiveForGroup<TValue>(state: FormGroupState<TValue>, newId: string): FormGroupState<TValue>;
export declare function updateIdRecursiveForArray<TValue>(state: FormArrayState<TValue>, newId: string): FormArrayState<TValue>;
export declare function updateIdRecursive<TValue>(state: FormState<TValue>, newId: string): FormState<TValue>;
