// NOTE: the explicit type declaration for the `TYPE` properties is required
// for the output declarations to properly use the literal string type instead
// of just `string`
var SetValueAction = /** @class */ (function () {
    function SetValueAction(controlId, value) {
        this.controlId = controlId;
        this.value = value;
        this.type = SetValueAction.TYPE;
    }
    SetValueAction.TYPE = 'ngrx/forms/SET_VALUE';
    return SetValueAction;
}());
export { SetValueAction };
var SetErrorsAction = /** @class */ (function () {
    function SetErrorsAction(controlId, errors) {
        this.controlId = controlId;
        this.errors = errors;
        this.type = SetErrorsAction.TYPE;
    }
    SetErrorsAction.TYPE = 'ngrx/forms/SET_ERRORS';
    return SetErrorsAction;
}());
export { SetErrorsAction };
var SetAsyncErrorAction = /** @class */ (function () {
    function SetAsyncErrorAction(controlId, name, value) {
        this.controlId = controlId;
        this.name = name;
        this.value = value;
        this.type = SetAsyncErrorAction.TYPE;
    }
    SetAsyncErrorAction.TYPE = 'ngrx/forms/SET_ASYNC_ERROR';
    return SetAsyncErrorAction;
}());
export { SetAsyncErrorAction };
var ClearAsyncErrorAction = /** @class */ (function () {
    function ClearAsyncErrorAction(controlId, name) {
        this.controlId = controlId;
        this.name = name;
        this.type = ClearAsyncErrorAction.TYPE;
    }
    ClearAsyncErrorAction.TYPE = 'ngrx/forms/CLEAR_ASYNC_ERROR';
    return ClearAsyncErrorAction;
}());
export { ClearAsyncErrorAction };
var StartAsyncValidationAction = /** @class */ (function () {
    function StartAsyncValidationAction(controlId, name) {
        this.controlId = controlId;
        this.name = name;
        this.type = StartAsyncValidationAction.TYPE;
    }
    StartAsyncValidationAction.TYPE = 'ngrx/forms/START_ASYNC_VALIDATION';
    return StartAsyncValidationAction;
}());
export { StartAsyncValidationAction };
var MarkAsDirtyAction = /** @class */ (function () {
    function MarkAsDirtyAction(controlId) {
        this.controlId = controlId;
        this.type = MarkAsDirtyAction.TYPE;
    }
    MarkAsDirtyAction.TYPE = 'ngrx/forms/MARK_AS_DIRTY';
    return MarkAsDirtyAction;
}());
export { MarkAsDirtyAction };
var MarkAsPristineAction = /** @class */ (function () {
    function MarkAsPristineAction(controlId) {
        this.controlId = controlId;
        this.type = MarkAsPristineAction.TYPE;
    }
    MarkAsPristineAction.TYPE = 'ngrx/forms/MARK_AS_PRISTINE';
    return MarkAsPristineAction;
}());
export { MarkAsPristineAction };
var EnableAction = /** @class */ (function () {
    function EnableAction(controlId) {
        this.controlId = controlId;
        this.type = EnableAction.TYPE;
    }
    EnableAction.TYPE = 'ngrx/forms/ENABLE';
    return EnableAction;
}());
export { EnableAction };
var DisableAction = /** @class */ (function () {
    function DisableAction(controlId) {
        this.controlId = controlId;
        this.type = DisableAction.TYPE;
    }
    DisableAction.TYPE = 'ngrx/forms/DISABLE';
    return DisableAction;
}());
export { DisableAction };
var MarkAsTouchedAction = /** @class */ (function () {
    function MarkAsTouchedAction(controlId) {
        this.controlId = controlId;
        this.type = MarkAsTouchedAction.TYPE;
    }
    MarkAsTouchedAction.TYPE = 'ngrx/forms/MARK_AS_TOUCHED';
    return MarkAsTouchedAction;
}());
export { MarkAsTouchedAction };
var MarkAsUntouchedAction = /** @class */ (function () {
    function MarkAsUntouchedAction(controlId) {
        this.controlId = controlId;
        this.type = MarkAsUntouchedAction.TYPE;
    }
    MarkAsUntouchedAction.TYPE = 'ngrx/forms/MARK_AS_UNTOUCHED';
    return MarkAsUntouchedAction;
}());
export { MarkAsUntouchedAction };
var FocusAction = /** @class */ (function () {
    function FocusAction(controlId) {
        this.controlId = controlId;
        this.type = FocusAction.TYPE;
    }
    FocusAction.TYPE = 'ngrx/forms/FOCUS';
    return FocusAction;
}());
export { FocusAction };
var UnfocusAction = /** @class */ (function () {
    function UnfocusAction(controlId) {
        this.controlId = controlId;
        this.type = UnfocusAction.TYPE;
    }
    UnfocusAction.TYPE = 'ngrx/forms/UNFOCUS';
    return UnfocusAction;
}());
export { UnfocusAction };
var MarkAsSubmittedAction = /** @class */ (function () {
    function MarkAsSubmittedAction(controlId) {
        this.controlId = controlId;
        this.type = MarkAsSubmittedAction.TYPE;
    }
    MarkAsSubmittedAction.TYPE = 'ngrx/forms/MARK_AS_SUBMITTED';
    return MarkAsSubmittedAction;
}());
export { MarkAsSubmittedAction };
var MarkAsUnsubmittedAction = /** @class */ (function () {
    function MarkAsUnsubmittedAction(controlId) {
        this.controlId = controlId;
        this.type = MarkAsUnsubmittedAction.TYPE;
    }
    MarkAsUnsubmittedAction.TYPE = 'ngrx/forms/MARK_AS_UNSUBMITTED';
    return MarkAsUnsubmittedAction;
}());
export { MarkAsUnsubmittedAction };
var AddArrayControlAction = /** @class */ (function () {
    function AddArrayControlAction(controlId, value, index) {
        this.controlId = controlId;
        this.value = value;
        this.index = index;
        this.type = AddArrayControlAction.TYPE;
    }
    AddArrayControlAction.TYPE = 'ngrx/forms/ADD_ARRAY_CONTROL';
    return AddArrayControlAction;
}());
export { AddArrayControlAction };
var AddGroupControlAction = /** @class */ (function () {
    function AddGroupControlAction(controlId, name, value) {
        this.controlId = controlId;
        this.name = name;
        this.value = value;
        this.type = AddGroupControlAction.TYPE;
    }
    AddGroupControlAction.TYPE = 'ngrx/forms/ADD_GROUP_CONTROL';
    return AddGroupControlAction;
}());
export { AddGroupControlAction };
var RemoveArrayControlAction = /** @class */ (function () {
    function RemoveArrayControlAction(controlId, index) {
        this.controlId = controlId;
        this.index = index;
        this.type = RemoveArrayControlAction.TYPE;
    }
    RemoveArrayControlAction.TYPE = 'ngrx/forms/REMOVE_ARRAY_CONTROL';
    return RemoveArrayControlAction;
}());
export { RemoveArrayControlAction };
var SwapArrayControlAction = /** @class */ (function () {
    function SwapArrayControlAction(controlId, fromIndex, toIndex) {
        this.controlId = controlId;
        this.fromIndex = fromIndex;
        this.toIndex = toIndex;
        this.type = SwapArrayControlAction.TYPE;
    }
    SwapArrayControlAction.TYPE = 'ngrx/forms/SWAP_ARRAY_CONTROL';
    return SwapArrayControlAction;
}());
export { SwapArrayControlAction };
var MoveArrayControlAction = /** @class */ (function () {
    function MoveArrayControlAction(controlId, fromIndex, toIndex) {
        this.controlId = controlId;
        this.fromIndex = fromIndex;
        this.toIndex = toIndex;
        this.type = MoveArrayControlAction.TYPE;
    }
    MoveArrayControlAction.TYPE = 'ngrx/forms/MOVE_ARRAY_CONTROL';
    return MoveArrayControlAction;
}());
export { MoveArrayControlAction };
var RemoveGroupControlAction = /** @class */ (function () {
    function RemoveGroupControlAction(controlId, name) {
        this.controlId = controlId;
        this.name = name;
        this.type = RemoveGroupControlAction.TYPE;
    }
    RemoveGroupControlAction.TYPE = 'ngrx/forms/REMOVE_CONTROL';
    return RemoveGroupControlAction;
}());
export { RemoveGroupControlAction };
var SetUserDefinedPropertyAction = /** @class */ (function () {
    function SetUserDefinedPropertyAction(controlId, name, value) {
        this.controlId = controlId;
        this.name = name;
        this.value = value;
        this.type = SetUserDefinedPropertyAction.TYPE;
    }
    SetUserDefinedPropertyAction.TYPE = 'ngrx/forms/SET_USER_DEFINED_PROPERTY';
    return SetUserDefinedPropertyAction;
}());
export { SetUserDefinedPropertyAction };
var ResetAction = /** @class */ (function () {
    function ResetAction(controlId) {
        this.controlId = controlId;
        this.type = ResetAction.TYPE;
    }
    ResetAction.TYPE = 'ngrx/forms/RESET';
    return ResetAction;
}());
export { ResetAction };
export function isNgrxFormsAction(action) {
    return !!action.type && action.type.startsWith('ngrx/forms/');
}
export var ALL_NGRX_FORMS_ACTION_TYPES = [
    SetValueAction.TYPE,
    SetErrorsAction.TYPE,
    SetAsyncErrorAction.TYPE,
    ClearAsyncErrorAction.TYPE,
    StartAsyncValidationAction.TYPE,
    MarkAsDirtyAction.TYPE,
    MarkAsPristineAction.TYPE,
    EnableAction.TYPE,
    DisableAction.TYPE,
    MarkAsTouchedAction.TYPE,
    MarkAsUntouchedAction.TYPE,
    FocusAction.TYPE,
    UnfocusAction.TYPE,
    MarkAsSubmittedAction.TYPE,
    MarkAsUnsubmittedAction.TYPE,
    AddGroupControlAction.TYPE,
    RemoveGroupControlAction.TYPE,
    AddArrayControlAction.TYPE,
    RemoveArrayControlAction.TYPE,
    SetUserDefinedPropertyAction.TYPE,
    ResetAction.TYPE,
    SwapArrayControlAction.TYPE,
    MoveArrayControlAction.TYPE,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSw0RUFBNEU7QUFDNUUsOEVBQThFO0FBQzlFLG1CQUFtQjtBQUVuQjtJQUlFLHdCQUNrQixTQUE0QixFQUM1QixLQUFhO1FBRGIsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUp0QixTQUFJLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQztJQUtoQyxDQUFDO0lBTlcsbUJBQUksR0FBMkIsc0JBQXNCLENBQUM7SUFPeEUscUJBQUM7Q0FBQSxBQVJELElBUUM7U0FSWSxjQUFjO0FBVTNCO0lBSUUseUJBQ2tCLFNBQTRCLEVBQzVCLE1BQXdCO1FBRHhCLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBSmpDLFNBQUksR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDO0lBS2pDLENBQUM7SUFOVyxvQkFBSSxHQUE0Qix1QkFBdUIsQ0FBQztJQU8xRSxzQkFBQztDQUFBLEFBUkQsSUFRQztTQVJZLGVBQWU7QUFVNUI7SUFJRSw2QkFDa0IsU0FBNEIsRUFDNUIsSUFBWSxFQUNaLEtBQVU7UUFGVixjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUM1QixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osVUFBSyxHQUFMLEtBQUssQ0FBSztRQUxuQixTQUFJLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDO0lBTXJDLENBQUM7SUFQVyx3QkFBSSxHQUFpQyw0QkFBNEIsQ0FBQztJQVFwRiwwQkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLG1CQUFtQjtBQVdoQztJQUlFLCtCQUNrQixTQUE0QixFQUM1QixJQUFZO1FBRFosY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFDNUIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUpyQixTQUFJLEdBQUcs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bXBvcnQgeyBLZXlWYWx1ZSwgTmdyeEZvcm1Db250cm9sSWQsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICcuL3N0YXRlJztcblxuLy8gTk9URTogdGhlIGV4cGxpY2l0IHR5cGUgZGVjbGFyYXRpb24gZm9yIHRoZSBgVFlQRWAgcHJvcGVydGllcyBpcyByZXF1aXJlZFxuLy8gZm9yIHRoZSBvdXRwdXQgZGVjbGFyYXRpb25zIHRvIHByb3Blcmx5IHVzZSB0aGUgbGl0ZXJhbCBzdHJpbmcgdHlwZSBpbnN0ZWFkXG4vLyBvZiBqdXN0IGBzdHJpbmdgXG5cbmV4cG9ydCBjbGFzcyBTZXRWYWx1ZUFjdGlvbjxUVmFsdWU+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgc3RhdGljIHJlYWRvbmx5IFRZUEU6ICduZ3J4L2Zvcm1zL1NFVF9WQUxVRScgPSAnbmdyeC9mb3Jtcy9TRVRfVkFMVUUnO1xuICByZWFkb25seSB0eXBlID0gU2V0VmFsdWVBY3Rpb24uVFlQRTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29udHJvbElkOiBOZ3J4Rm9ybUNvbnRyb2xJZCxcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmFsdWU6IFRWYWx1ZSxcbiAgKSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldEVycm9yc0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHN0YXRpYyByZWFkb25seSBUWVBFOiAnbmdyeC9mb3Jtcy9TRVRfRVJST1JTJyA9ICduZ3J4L2Zvcm1zL1NFVF9FUlJPUlMnO1xuICByZWFkb25seSB0eXBlID0gU2V0RXJyb3JzQWN0aW9uLlRZUEU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbnRyb2xJZDogTmdyeEZvcm1Db250cm9sSWQsXG4gICAgcHVibGljIHJlYWRvbmx5IGVycm9yczogVmFsaWRhdGlvbkVycm9ycyxcbiAgKSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldEFzeW5jRXJyb3JBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICBzdGF0aWMgcmVhZG9ubHkgVFlQRTogJ25ncngvZm9ybXMvU0VUX0FTWU5DX0VSUk9SJyA9ICduZ3J4L2Zvcm1zL1NFVF9BU1lOQ19FUlJPUic7XG4gIHJlYWRvbmx5IHR5cGUgPSBTZXRBc3luY0Vycm9yQWN0aW9uLlRZUEU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbnRyb2xJZDogTmdyeEZvcm1Db250cm9sSWQsXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmFsdWU6IGFueSxcbiAgKSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIENsZWFyQXN5bmNFcnJvckFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHN0YXRpYyByZWFkb25seSBUWVBFOiAnbmdyeC9mb3Jtcy9DTEVBUl9BU1lOQ19FUlJPUicgPSAnbmdyeC9mb3Jtcy9DTEVBUl9BU1lOQ19FUlJPUic7XG4gIHJlYWRvbmx5IHR5cGUgPSBDbGVhckFzeW5jRXJyb3JBY3Rpb24uVFlQRTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29udHJvbElkOiBOZ3J4Rm9ybUNvbnRyb2xJZCxcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nLFxuICApIHsgfVxufVxuXG5leHBvcnQgY2xhc3MgU3RhcnRBc3luY1ZhbGlkYXRpb25BY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICBzdGF0aWMgcmVhZG9ubHkgVFlQRTogJ25ncngvZm9ybXMvU1RBUlRfQVNZTkNfVkFMSURBVElPTicgPSAnbmdyeC9mb3Jtcy9TVEFSVF9BU1lOQ19WQUxJREFUSU9OJztcbiAgcmVhZG9ubHkgdHlwZSA9IFN0YXJ0QXN5bmNWYWxpZGF0aW9uQWN0aW9uLlRZUEU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbnRyb2xJZDogTmdyeEZvcm1Db250cm9sSWQsXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZyxcbiAgKSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hcmtBc0RpcnR5QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgc3RhdGljIHJlYWRvbmx5IFRZUEU6ICduZ3J4L2Zvcm1zL01BUktfQVNfRElSVFknID0gJ25ncngvZm9ybXMvTUFSS19BU19ESVJUWSc7XG4gIHJlYWRvbmx5IHR5cGUgPSBNYXJrQXNEaXJ0eUFjdGlvbi5UWVBFO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBjb250cm9sSWQ6IE5ncnhGb3JtQ29udHJvbElkLFxuICApIHsgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFya0FzUHJpc3RpbmVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICBzdGF0aWMgcmVhZG9ubHkgVFlQRTogJ25ncngvZm9ybXMvTUFSS19BU19QUklTVElORScgPSAnbmdyeC9mb3Jtcy9NQVJLX0FTX1BSSVNUSU5FJztcbiAgcmVhZG9ubHkgdHlwZSA9IE1hcmtBc1ByaXN0aW5lQWN0aW9uLlRZUEU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbnRyb2xJZDogTmdyeEZvcm1Db250cm9sSWQsXG4gICkgeyB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbmFibGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICBzdGF0aWMgcmVhZG9ubHkgVFlQRTogJ25ncngvZm9ybXMvRU5BQkxFJyA9ICduZ3J4L2Zvcm1zL0VOQUJMRSc7XG4gIHJlYWRvbmx5IHR5cGUgPSBFbmFibGVBY3Rpb24uVFlQRTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29udHJvbElkOiBOZ3J4Rm9ybUNvbnRyb2xJZCxcbiAgKSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIERpc2FibGVBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICBzdGF0aWMgcmVhZG9ubHkgVFlQRTogJ25ncngvZm9ybXMvRElTQUJMRScgPSAnbmdyeC9mb3Jtcy9ESVNBQkxFJztcbiAgcmVhZG9ubHkgdHlwZSA9IERpc2FibGVBY3Rpb24uVFlQRTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29udHJvbElkOiBOZ3J4Rm9ybUNvbnRyb2xJZCxcbiAgKSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hcmtBc1RvdWNoZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICBzdGF0aWMgcmVhZG9ubHkgVFlQRTogJ25ncngvZm9ybXMvTUFSS19BU19UT1VDSEVEJyA9ICduZ3J4L2Zvcm1zL01BUktfQVNfVE9VQ0hFRCc7XG4gIHJlYWRvbmx5IHR5cGUgPSBNYXJrQXNUb3VjaGVkQWN0aW9uLlRZUEU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbnRyb2xJZDogTmdyeEZvcm1Db250cm9sSWQsXG4gICkgeyB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXJrQXNVbnRvdWNoZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICBzdGF0aWMgcmVhZG9ubHkgVFlQRTogJ25ncngvZm9ybXMvTUFSS19BU19VTlRPVUNIRUQnID0gJ25ncngvZm9ybXMvTUFSS19BU19VTlRPVUNIRUQnO1xuICByZWFkb25seSB0eXBlID0gTWFya0FzVW50b3VjaGVkQWN0aW9uLlRZUEU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbnRyb2xJZDogTmdyeEZvcm1Db250cm9sSWQsXG4gICkgeyB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb2N1c0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHN0YXRpYyByZWFkb25seSBUWVBFOiAnbmdyeC9mb3Jtcy9GT0NVUycgPSAnbmdyeC9mb3Jtcy9GT0NVUyc7XG4gIHJlYWRvbmx5IHR5cGUgPSBGb2N1c0FjdGlvbi5UWVBFO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBjb250cm9sSWQ6IE5ncnhGb3JtQ29udHJvbElkLFxuICApIHsgfVxufVxuXG5leHBvcnQgY2xhc3MgVW5mb2N1c0FjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHN0YXRpYyByZWFkb25seSBUWVBFOiAnbmdyeC9mb3Jtcy9VTkZPQ1VTJyA9ICduZ3J4L2Zvcm1zL1VORk9DVVMnO1xuICByZWFkb25seSB0eXBlID0gVW5mb2N1c0FjdGlvbi5UWVBFO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBjb250cm9sSWQ6IE5ncnhGb3JtQ29udHJvbElkLFxuICApIHsgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFya0FzU3VibWl0dGVkQWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgc3RhdGljIHJlYWRvbmx5IFRZUEU6ICduZ3J4L2Zvcm1zL01BUktfQVNfU1VCTUlUVEVEJyA9ICduZ3J4L2Zvcm1zL01BUktfQVNfU1VCTUlUVEVEJztcbiAgcmVhZG9ubHkgdHlwZSA9IE1hcmtBc1N1Ym1pdHRlZEFjdGlvbi5UWVBFO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBjb250cm9sSWQ6IE5ncnhGb3JtQ29udHJvbElkLFxuICApIHsgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFya0FzVW5zdWJtaXR0ZWRBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICBzdGF0aWMgcmVhZG9ubHkgVFlQRTogJ25ncngvZm9ybXMvTUFSS19BU19VTlNVQk1JVFRFRCcgPSAnbmdyeC9mb3Jtcy9NQVJLX0FTX1VOU1VCTUlUVEVEJztcbiAgcmVhZG9ubHkgdHlwZSA9IE1hcmtBc1Vuc3VibWl0dGVkQWN0aW9uLlRZUEU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbnRyb2xJZDogTmdyeEZvcm1Db250cm9sSWQsXG4gICkgeyB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRBcnJheUNvbnRyb2xBY3Rpb248VFZhbHVlPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHN0YXRpYyByZWFkb25seSBUWVBFOiAnbmdyeC9mb3Jtcy9BRERfQVJSQVlfQ09OVFJPTCcgPSAnbmdyeC9mb3Jtcy9BRERfQVJSQVlfQ09OVFJPTCc7XG4gIHJlYWRvbmx5IHR5cGUgPSBBZGRBcnJheUNvbnRyb2xBY3Rpb24uVFlQRTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29udHJvbElkOiBOZ3J4Rm9ybUNvbnRyb2xJZCxcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmFsdWU6IFRWYWx1ZSxcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW5kZXg/OiBudW1iZXIsXG4gICkgeyB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRHcm91cENvbnRyb2xBY3Rpb248VFZhbHVlIGV4dGVuZHMgS2V5VmFsdWUsIFRDb250cm9sS2V5IGV4dGVuZHMga2V5b2YgVFZhbHVlID0ga2V5b2YgVFZhbHVlPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHN0YXRpYyByZWFkb25seSBUWVBFOiAnbmdyeC9mb3Jtcy9BRERfR1JPVVBfQ09OVFJPTCcgPSAnbmdyeC9mb3Jtcy9BRERfR1JPVVBfQ09OVFJPTCc7XG4gIHJlYWRvbmx5IHR5cGUgPSBBZGRHcm91cENvbnRyb2xBY3Rpb24uVFlQRTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29udHJvbElkOiBOZ3J4Rm9ybUNvbnRyb2xJZCxcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZToga2V5b2YgVFZhbHVlLFxuICAgIHB1YmxpYyByZWFkb25seSB2YWx1ZTogVFZhbHVlW1RDb250cm9sS2V5XSxcbiAgKSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZUFycmF5Q29udHJvbEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHN0YXRpYyByZWFkb25seSBUWVBFOiAnbmdyeC9mb3Jtcy9SRU1PVkVfQVJSQVlfQ09OVFJPTCcgPSAnbmdyeC9mb3Jtcy9SRU1PVkVfQVJSQVlfQ09OVFJPTCc7XG4gIHJlYWRvbmx5IHR5cGUgPSBSZW1vdmVBcnJheUNvbnRyb2xBY3Rpb24uVFlQRTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29udHJvbElkOiBOZ3J4Rm9ybUNvbnRyb2xJZCxcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW5kZXg6IG51bWJlcixcbiAgKSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIFN3YXBBcnJheUNvbnRyb2xBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICBzdGF0aWMgcmVhZG9ubHkgVFlQRTogJ25ncngvZm9ybXMvU1dBUF9BUlJBWV9DT05UUk9MJyA9ICduZ3J4L2Zvcm1zL1NXQVBfQVJSQVlfQ09OVFJPTCc7XG4gIHJlYWRvbmx5IHR5cGUgPSBTd2FwQXJyYXlDb250cm9sQWN0aW9uLlRZUEU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbnRyb2xJZDogTmdyeEZvcm1Db250cm9sSWQsXG4gICAgcHVibGljIHJlYWRvbmx5IGZyb21JbmRleDogbnVtYmVyLFxuICAgIHB1YmxpYyByZWFkb25seSB0b0luZGV4OiBudW1iZXJcbiAgKSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vdmVBcnJheUNvbnRyb2xBY3Rpb24gaW1wbGVtZW50cyBBY3Rpb24ge1xuICBzdGF0aWMgcmVhZG9ubHkgVFlQRTogJ25ncngvZm9ybXMvTU9WRV9BUlJBWV9DT05UUk9MJyA9ICduZ3J4L2Zvcm1zL01PVkVfQVJSQVlfQ09OVFJPTCc7XG4gIHJlYWRvbmx5IHR5cGUgPSBNb3ZlQXJyYXlDb250cm9sQWN0aW9uLlRZUEU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbnRyb2xJZDogTmdyeEZvcm1Db250cm9sSWQsXG4gICAgcHVibGljIHJlYWRvbmx5IGZyb21JbmRleDogbnVtYmVyLFxuICAgIHB1YmxpYyByZWFkb25seSB0b0luZGV4OiBudW1iZXJcbiAgKSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZUdyb3VwQ29udHJvbEFjdGlvbjxUVmFsdWU+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgc3RhdGljIHJlYWRvbmx5IFRZUEU6ICduZ3J4L2Zvcm1zL1JFTU9WRV9DT05UUk9MJyA9ICduZ3J4L2Zvcm1zL1JFTU9WRV9DT05UUk9MJztcbiAgcmVhZG9ubHkgdHlwZSA9IFJlbW92ZUdyb3VwQ29udHJvbEFjdGlvbi5UWVBFO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBjb250cm9sSWQ6IE5ncnhGb3JtQ29udHJvbElkLFxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBrZXlvZiBUVmFsdWUsXG4gICkgeyB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRVc2VyRGVmaW5lZFByb3BlcnR5QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgc3RhdGljIHJlYWRvbmx5IFRZUEU6ICduZ3J4L2Zvcm1zL1NFVF9VU0VSX0RFRklORURfUFJPUEVSVFknID0gJ25ncngvZm9ybXMvU0VUX1VTRVJfREVGSU5FRF9QUk9QRVJUWSc7XG4gIHJlYWRvbmx5IHR5cGUgPSBTZXRVc2VyRGVmaW5lZFByb3BlcnR5QWN0aW9uLlRZUEU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbnRyb2xJZDogTmdyeEZvcm1Db250cm9sSWQsXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmFsdWU6IGFueSxcbiAgKSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgc3RhdGljIHJlYWRvbmx5IFRZUEU6ICduZ3J4L2Zvcm1zL1JFU0VUJyA9ICduZ3J4L2Zvcm1zL1JFU0VUJztcbiAgcmVhZG9ubHkgdHlwZSA9IFJlc2V0QWN0aW9uLlRZUEU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbnRyb2xJZDogTmdyeEZvcm1Db250cm9sSWQsXG4gICkgeyB9XG59XG5cbmV4cG9ydCB0eXBlIEFjdGlvbnM8VFZhbHVlPiA9XG4gIHwgU2V0VmFsdWVBY3Rpb248VFZhbHVlPlxuICB8IFNldEVycm9yc0FjdGlvblxuICB8IFNldEFzeW5jRXJyb3JBY3Rpb25cbiAgfCBDbGVhckFzeW5jRXJyb3JBY3Rpb25cbiAgfCBTdGFydEFzeW5jVmFsaWRhdGlvbkFjdGlvblxuICB8IE1hcmtBc0RpcnR5QWN0aW9uXG4gIHwgTWFya0FzUHJpc3RpbmVBY3Rpb25cbiAgfCBFbmFibGVBY3Rpb25cbiAgfCBEaXNhYmxlQWN0aW9uXG4gIHwgTWFya0FzVG91Y2hlZEFjdGlvblxuICB8IE1hcmtBc1VudG91Y2hlZEFjdGlvblxuICB8IEZvY3VzQWN0aW9uXG4gIHwgVW5mb2N1c0FjdGlvblxuICB8IE1hcmtBc1N1Ym1pdHRlZEFjdGlvblxuICB8IE1hcmtBc1Vuc3VibWl0dGVkQWN0aW9uXG4gIHwgQWRkR3JvdXBDb250cm9sQWN0aW9uPFRWYWx1ZT5cbiAgfCBSZW1vdmVHcm91cENvbnRyb2xBY3Rpb248VFZhbHVlPlxuICB8IEFkZEFycmF5Q29udHJvbEFjdGlvbjxhbnk+XG4gIHwgUmVtb3ZlQXJyYXlDb250cm9sQWN0aW9uXG4gIHwgU2V0VXNlckRlZmluZWRQcm9wZXJ0eUFjdGlvblxuICB8IFJlc2V0QWN0aW9uXG4gIHwgU3dhcEFycmF5Q29udHJvbEFjdGlvblxuICB8IE1vdmVBcnJheUNvbnRyb2xBY3Rpb25cbiAgO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNOZ3J4Rm9ybXNBY3Rpb24oYWN0aW9uOiBBY3Rpb24pIHtcbiAgcmV0dXJuICEhYWN0aW9uLnR5cGUgJiYgYWN0aW9uLnR5cGUuc3RhcnRzV2l0aCgnbmdyeC9mb3Jtcy8nKTtcbn1cblxuZXhwb3J0IGNvbnN0IEFMTF9OR1JYX0ZPUk1TX0FDVElPTl9UWVBFUzogQWN0aW9uczxhbnk+Wyd0eXBlJ11bXSA9IFtcbiAgU2V0VmFsdWVBY3Rpb24uVFlQRSxcbiAgU2V0RXJyb3JzQWN0aW9uLlRZUEUsXG4gIFNldEFzeW5jRXJyb3JBY3Rpb24uVFlQRSxcbiAgQ2xlYXJBc3luY0Vycm9yQWN0aW9uLlRZUEUsXG4gIFN0YXJ0QXN5bmNWYWxpZGF0aW9uQWN0aW9uLlRZUEUsXG4gIE1hcmtBc0RpcnR5QWN0aW9uLlRZUEUsXG4gIE1hcmtBc1ByaXN0aW5lQWN0aW9uLlRZUEUsXG4gIEVuYWJsZUFjdGlvbi5UWVBFLFxuICBEaXNhYmxlQWN0aW9uLlRZUEUsXG4gIE1hcmtBc1RvdWNoZWRBY3Rpb24uVFlQRSxcbiAgTWFya0FzVW50b3VjaGVkQWN0aW9uLlRZUEUsXG4gIEZvY3VzQWN0aW9uLlRZUEUsXG4gIFVuZm9jdXNBY3Rpb24uVFlQRSxcbiAgTWFya0FzU3VibWl0dGVkQWN0aW9uLlRZUEUsXG4gIE1hcmtBc1Vuc3VibWl0dGVkQWN0aW9uLlRZUEUsXG4gIEFkZEdyb3VwQ29udHJvbEFjdGlvbi5UWVBFLFxuICBSZW1vdmVHcm91cENvbnRyb2xBY3Rpb24uVFlQRSxcbiAgQWRkQXJyYXlDb250cm9sQWN0aW9uLlRZUEUsXG4gIFJlbW92ZUFycmF5Q29udHJvbEFjdGlvbi5UWVBFLFxuICBTZXRVc2VyRGVmaW5lZFByb3BlcnR5QWN0aW9uLlRZUEUsXG4gIFJlc2V0QWN0aW9uLlRZUEUsXG4gIFN3YXBBcnJheUNvbnRyb2xBY3Rpb24uVFlQRSxcbiAgTW92ZUFycmF5Q29udHJvbEFjdGlvbi5UWVBFLFxuXTtcbiJdfQ==