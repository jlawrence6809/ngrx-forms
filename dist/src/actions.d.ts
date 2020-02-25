import { Action } from '@ngrx/store';
import { KeyValue, NgrxFormControlId, ValidationErrors } from './state';
export declare class SetValueAction<TValue> implements Action {
    readonly controlId: NgrxFormControlId;
    readonly value: TValue;
    static readonly TYPE: 'ngrx/forms/SET_VALUE';
    readonly type: "ngrx/forms/SET_VALUE";
    constructor(controlId: NgrxFormControlId, value: TValue);
}
export declare class SetErrorsAction implements Action {
    readonly controlId: NgrxFormControlId;
    readonly errors: ValidationErrors;
    static readonly TYPE: 'ngrx/forms/SET_ERRORS';
    readonly type: "ngrx/forms/SET_ERRORS";
    constructor(controlId: NgrxFormControlId, errors: ValidationErrors);
}
export declare class SetAsyncErrorAction implements Action {
    readonly controlId: NgrxFormControlId;
    readonly name: string;
    readonly value: any;
    static readonly TYPE: 'ngrx/forms/SET_ASYNC_ERROR';
    readonly type: "ngrx/forms/SET_ASYNC_ERROR";
    constructor(controlId: NgrxFormControlId, name: string, value: any);
}
export declare class ClearAsyncErrorAction implements Action {
    readonly controlId: NgrxFormControlId;
    readonly name: string;
    static readonly TYPE: 'ngrx/forms/CLEAR_ASYNC_ERROR';
    readonly type: "ngrx/forms/CLEAR_ASYNC_ERROR";
    constructor(controlId: NgrxFormControlId, name: string);
}
export declare class StartAsyncValidationAction implements Action {
    readonly controlId: NgrxFormControlId;
    readonly name: string;
    static readonly TYPE: 'ngrx/forms/START_ASYNC_VALIDATION';
    readonly type: "ngrx/forms/START_ASYNC_VALIDATION";
    constructor(controlId: NgrxFormControlId, name: string);
}
export declare class MarkAsDirtyAction implements Action {
    readonly controlId: NgrxFormControlId;
    static readonly TYPE: 'ngrx/forms/MARK_AS_DIRTY';
    readonly type: "ngrx/forms/MARK_AS_DIRTY";
    constructor(controlId: NgrxFormControlId);
}
export declare class MarkAsPristineAction implements Action {
    readonly controlId: NgrxFormControlId;
    static readonly TYPE: 'ngrx/forms/MARK_AS_PRISTINE';
    readonly type: "ngrx/forms/MARK_AS_PRISTINE";
    constructor(controlId: NgrxFormControlId);
}
export declare class EnableAction implements Action {
    readonly controlId: NgrxFormControlId;
    static readonly TYPE: 'ngrx/forms/ENABLE';
    readonly type: "ngrx/forms/ENABLE";
    constructor(controlId: NgrxFormControlId);
}
export declare class DisableAction implements Action {
    readonly controlId: NgrxFormControlId;
    static readonly TYPE: 'ngrx/forms/DISABLE';
    readonly type: "ngrx/forms/DISABLE";
    constructor(controlId: NgrxFormControlId);
}
export declare class MarkAsTouchedAction implements Action {
    readonly controlId: NgrxFormControlId;
    static readonly TYPE: 'ngrx/forms/MARK_AS_TOUCHED';
    readonly type: "ngrx/forms/MARK_AS_TOUCHED";
    constructor(controlId: NgrxFormControlId);
}
export declare class MarkAsUntouchedAction implements Action {
    readonly controlId: NgrxFormControlId;
    static readonly TYPE: 'ngrx/forms/MARK_AS_UNTOUCHED';
    readonly type: "ngrx/forms/MARK_AS_UNTOUCHED";
    constructor(controlId: NgrxFormControlId);
}
export declare class FocusAction implements Action {
    readonly controlId: NgrxFormControlId;
    static readonly TYPE: 'ngrx/forms/FOCUS';
    readonly type: "ngrx/forms/FOCUS";
    constructor(controlId: NgrxFormControlId);
}
export declare class UnfocusAction implements Action {
    readonly controlId: NgrxFormControlId;
    static readonly TYPE: 'ngrx/forms/UNFOCUS';
    readonly type: "ngrx/forms/UNFOCUS";
    constructor(controlId: NgrxFormControlId);
}
export declare class MarkAsSubmittedAction implements Action {
    readonly controlId: NgrxFormControlId;
    static readonly TYPE: 'ngrx/forms/MARK_AS_SUBMITTED';
    readonly type: "ngrx/forms/MARK_AS_SUBMITTED";
    constructor(controlId: NgrxFormControlId);
}
export declare class MarkAsUnsubmittedAction implements Action {
    readonly controlId: NgrxFormControlId;
    static readonly TYPE: 'ngrx/forms/MARK_AS_UNSUBMITTED';
    readonly type: "ngrx/forms/MARK_AS_UNSUBMITTED";
    constructor(controlId: NgrxFormControlId);
}
export declare class AddArrayControlAction<TValue> implements Action {
    readonly controlId: NgrxFormControlId;
    readonly value: TValue;
    readonly index?: number | undefined;
    static readonly TYPE: 'ngrx/forms/ADD_ARRAY_CONTROL';
    readonly type: "ngrx/forms/ADD_ARRAY_CONTROL";
    constructor(controlId: NgrxFormControlId, value: TValue, index?: number | undefined);
}
export declare class AddGroupControlAction<TValue extends KeyValue, TControlKey extends keyof TValue = keyof TValue> implements Action {
    readonly controlId: NgrxFormControlId;
    readonly name: keyof TValue;
    readonly value: TValue[TControlKey];
    static readonly TYPE: 'ngrx/forms/ADD_GROUP_CONTROL';
    readonly type: "ngrx/forms/ADD_GROUP_CONTROL";
    constructor(controlId: NgrxFormControlId, name: keyof TValue, value: TValue[TControlKey]);
}
export declare class RemoveArrayControlAction implements Action {
    readonly controlId: NgrxFormControlId;
    readonly index: number;
    static readonly TYPE: 'ngrx/forms/REMOVE_ARRAY_CONTROL';
    readonly type: "ngrx/forms/REMOVE_ARRAY_CONTROL";
    constructor(controlId: NgrxFormControlId, index: number);
}
export declare class SwapArrayControlAction implements Action {
    readonly controlId: NgrxFormControlId;
    readonly fromIndex: number;
    readonly toIndex: number;
    static readonly TYPE: 'ngrx/forms/SWAP_ARRAY_CONTROL';
    readonly type: "ngrx/forms/SWAP_ARRAY_CONTROL";
    constructor(controlId: NgrxFormControlId, fromIndex: number, toIndex: number);
}
export declare class MoveArrayControlAction implements Action {
    readonly controlId: NgrxFormControlId;
    readonly fromIndex: number;
    readonly toIndex: number;
    static readonly TYPE: 'ngrx/forms/MOVE_ARRAY_CONTROL';
    readonly type: "ngrx/forms/MOVE_ARRAY_CONTROL";
    constructor(controlId: NgrxFormControlId, fromIndex: number, toIndex: number);
}
export declare class RemoveGroupControlAction<TValue> implements Action {
    readonly controlId: NgrxFormControlId;
    readonly name: keyof TValue;
    static readonly TYPE: 'ngrx/forms/REMOVE_CONTROL';
    readonly type: "ngrx/forms/REMOVE_CONTROL";
    constructor(controlId: NgrxFormControlId, name: keyof TValue);
}
export declare class SetUserDefinedPropertyAction implements Action {
    readonly controlId: NgrxFormControlId;
    readonly name: string;
    readonly value: any;
    static readonly TYPE: 'ngrx/forms/SET_USER_DEFINED_PROPERTY';
    readonly type: "ngrx/forms/SET_USER_DEFINED_PROPERTY";
    constructor(controlId: NgrxFormControlId, name: string, value: any);
}
export declare class ResetAction implements Action {
    readonly controlId: NgrxFormControlId;
    static readonly TYPE: 'ngrx/forms/RESET';
    readonly type: "ngrx/forms/RESET";
    constructor(controlId: NgrxFormControlId);
}
export declare type Actions<TValue> = SetValueAction<TValue> | SetErrorsAction | SetAsyncErrorAction | ClearAsyncErrorAction | StartAsyncValidationAction | MarkAsDirtyAction | MarkAsPristineAction | EnableAction | DisableAction | MarkAsTouchedAction | MarkAsUntouchedAction | FocusAction | UnfocusAction | MarkAsSubmittedAction | MarkAsUnsubmittedAction | AddGroupControlAction<TValue> | RemoveGroupControlAction<TValue> | AddArrayControlAction<any> | RemoveArrayControlAction | SetUserDefinedPropertyAction | ResetAction | SwapArrayControlAction | MoveArrayControlAction;
export declare function isNgrxFormsAction(action: Action): boolean;
export declare const ALL_NGRX_FORMS_ACTION_TYPES: Actions<any>['type'][];
