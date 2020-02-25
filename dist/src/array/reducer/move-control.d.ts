import { Actions } from '../../actions';
import { FormArrayState } from '../../state';
export declare function move(array: readonly any[], fromIndex: number, toIndex: number): any[];
export declare function moveControlReducer<TValue>(state: FormArrayState<TValue>, action: Actions<TValue[]>): FormArrayState<TValue>;
