import * as tslib_1 from 'tslib';
import { __read, __assign, __spread, __decorate, __metadata, __param, __values, __extends } from 'tslib';
import { InjectionToken, HostListener, Input, Directive, forwardRef, Renderer2, ElementRef, Optional, Inject, PLATFORM_ID, Host, HostBinding, Self, EventEmitter, Output, NgModule } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ActionsSubject } from '@ngrx/store';

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
var SetErrorsAction = /** @class */ (function () {
    function SetErrorsAction(controlId, errors) {
        this.controlId = controlId;
        this.errors = errors;
        this.type = SetErrorsAction.TYPE;
    }
    SetErrorsAction.TYPE = 'ngrx/forms/SET_ERRORS';
    return SetErrorsAction;
}());
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
var ClearAsyncErrorAction = /** @class */ (function () {
    function ClearAsyncErrorAction(controlId, name) {
        this.controlId = controlId;
        this.name = name;
        this.type = ClearAsyncErrorAction.TYPE;
    }
    ClearAsyncErrorAction.TYPE = 'ngrx/forms/CLEAR_ASYNC_ERROR';
    return ClearAsyncErrorAction;
}());
var StartAsyncValidationAction = /** @class */ (function () {
    function StartAsyncValidationAction(controlId, name) {
        this.controlId = controlId;
        this.name = name;
        this.type = StartAsyncValidationAction.TYPE;
    }
    StartAsyncValidationAction.TYPE = 'ngrx/forms/START_ASYNC_VALIDATION';
    return StartAsyncValidationAction;
}());
var MarkAsDirtyAction = /** @class */ (function () {
    function MarkAsDirtyAction(controlId) {
        this.controlId = controlId;
        this.type = MarkAsDirtyAction.TYPE;
    }
    MarkAsDirtyAction.TYPE = 'ngrx/forms/MARK_AS_DIRTY';
    return MarkAsDirtyAction;
}());
var MarkAsPristineAction = /** @class */ (function () {
    function MarkAsPristineAction(controlId) {
        this.controlId = controlId;
        this.type = MarkAsPristineAction.TYPE;
    }
    MarkAsPristineAction.TYPE = 'ngrx/forms/MARK_AS_PRISTINE';
    return MarkAsPristineAction;
}());
var EnableAction = /** @class */ (function () {
    function EnableAction(controlId) {
        this.controlId = controlId;
        this.type = EnableAction.TYPE;
    }
    EnableAction.TYPE = 'ngrx/forms/ENABLE';
    return EnableAction;
}());
var DisableAction = /** @class */ (function () {
    function DisableAction(controlId) {
        this.controlId = controlId;
        this.type = DisableAction.TYPE;
    }
    DisableAction.TYPE = 'ngrx/forms/DISABLE';
    return DisableAction;
}());
var MarkAsTouchedAction = /** @class */ (function () {
    function MarkAsTouchedAction(controlId) {
        this.controlId = controlId;
        this.type = MarkAsTouchedAction.TYPE;
    }
    MarkAsTouchedAction.TYPE = 'ngrx/forms/MARK_AS_TOUCHED';
    return MarkAsTouchedAction;
}());
var MarkAsUntouchedAction = /** @class */ (function () {
    function MarkAsUntouchedAction(controlId) {
        this.controlId = controlId;
        this.type = MarkAsUntouchedAction.TYPE;
    }
    MarkAsUntouchedAction.TYPE = 'ngrx/forms/MARK_AS_UNTOUCHED';
    return MarkAsUntouchedAction;
}());
var FocusAction = /** @class */ (function () {
    function FocusAction(controlId) {
        this.controlId = controlId;
        this.type = FocusAction.TYPE;
    }
    FocusAction.TYPE = 'ngrx/forms/FOCUS';
    return FocusAction;
}());
var UnfocusAction = /** @class */ (function () {
    function UnfocusAction(controlId) {
        this.controlId = controlId;
        this.type = UnfocusAction.TYPE;
    }
    UnfocusAction.TYPE = 'ngrx/forms/UNFOCUS';
    return UnfocusAction;
}());
var MarkAsSubmittedAction = /** @class */ (function () {
    function MarkAsSubmittedAction(controlId) {
        this.controlId = controlId;
        this.type = MarkAsSubmittedAction.TYPE;
    }
    MarkAsSubmittedAction.TYPE = 'ngrx/forms/MARK_AS_SUBMITTED';
    return MarkAsSubmittedAction;
}());
var MarkAsUnsubmittedAction = /** @class */ (function () {
    function MarkAsUnsubmittedAction(controlId) {
        this.controlId = controlId;
        this.type = MarkAsUnsubmittedAction.TYPE;
    }
    MarkAsUnsubmittedAction.TYPE = 'ngrx/forms/MARK_AS_UNSUBMITTED';
    return MarkAsUnsubmittedAction;
}());
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
var RemoveArrayControlAction = /** @class */ (function () {
    function RemoveArrayControlAction(controlId, index) {
        this.controlId = controlId;
        this.index = index;
        this.type = RemoveArrayControlAction.TYPE;
    }
    RemoveArrayControlAction.TYPE = 'ngrx/forms/REMOVE_ARRAY_CONTROL';
    return RemoveArrayControlAction;
}());
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
var RemoveGroupControlAction = /** @class */ (function () {
    function RemoveGroupControlAction(controlId, name) {
        this.controlId = controlId;
        this.name = name;
        this.type = RemoveGroupControlAction.TYPE;
    }
    RemoveGroupControlAction.TYPE = 'ngrx/forms/REMOVE_CONTROL';
    return RemoveGroupControlAction;
}());
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
var ResetAction = /** @class */ (function () {
    function ResetAction(controlId) {
        this.controlId = controlId;
        this.type = ResetAction.TYPE;
    }
    ResetAction.TYPE = 'ngrx/forms/RESET';
    return ResetAction;
}());
function isNgrxFormsAction(action) {
    return !!action.type && action.type.startsWith('ngrx/forms/');
}
var ALL_NGRX_FORMS_ACTION_TYPES = [
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

function isBoxed(value) {
    return !!value && value.__boxed === '';
}
function box(value) {
    return {
        __boxed: '',
        value: value,
    };
}
function unbox(value) {
    if (['string', 'boolean', 'number', 'undefined'].indexOf(typeof value) >= 0 || value === null) {
        return value;
    }
    if (isBoxed(value)) {
        return value.value;
    }
    if (Array.isArray(value)) {
        return value.map(unbox);
    }
    return Object.keys(value).reduce(function (a, k) {
        var _a;
        return Object.assign(a, (_a = {}, _a[k] = unbox(value[k]), _a));
    }, {});
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
function deepEquals(_1, _2) {
    var _3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _3[_i - 2] = arguments[_i];
    }
    var i;
    var l;
    var leftChain;
    var rightChain;
    function compare2Objects(x, y) {
        var p;
        // remember that NaN === NaN returns false
        // and isNaN(undefined) returns true
        if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
            return true;
        }
        // Compare primitives and functions.
        // Check if both arguments link to the same object.
        // Especially useful on the step where we compare prototypes
        if (x === y) {
            return true;
        }
        // Works in case when functions are created in constructor.
        // Comparing dates is a common scenario. Another built-ins?
        // We can even handle functions passed across iframes
        if ((typeof x === 'function' && typeof y === 'function') ||
            (x instanceof Date && y instanceof Date) ||
            (x instanceof RegExp && y instanceof RegExp) ||
            (x instanceof String && y instanceof String) ||
            (x instanceof Number && y instanceof Number)) {
            return x.toString() === y.toString();
        }
        // At last checking prototypes as good as we can
        if (!(x instanceof Object && y instanceof Object)) {
            return false;
        }
        if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
            return false;
        }
        if (x.constructor !== y.constructor) {
            return false;
        }
        // Check for infinitive linking loops
        if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
            return false;
        }
        // Quick checking of one object being a subset of another.
        for (p in y) {
            if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                return false;
            }
            else if (typeof y[p] !== typeof x[p]) {
                return false;
            }
        }
        // tslint:disable:forin
        for (p in x) {
            if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                return false;
            }
            switch (typeof (x[p])) {
                case 'object':
                case 'function':
                    leftChain.push(x);
                    rightChain.push(y);
                    if (!compare2Objects(x[p], y[p])) {
                        return false;
                    }
                    leftChain.pop();
                    rightChain.pop();
                    break;
                default:
                    if (x[p] !== y[p]) {
                        return false;
                    }
                    break;
            }
        }
        return true;
    }
    if (arguments.length <= 1) {
        throw new Error('Need two or more arguments to compare');
    }
    for (i = 1, l = arguments.length; i < l; i++) {
        leftChain = [];
        rightChain = [];
        if (!compare2Objects(arguments[0], arguments[i])) {
            return false;
        }
    }
    return true;
}

/**
 * This function determines if a value is a form state.
 */
function isFormState(state) {
    return !!state && state.hasOwnProperty('id') && state.hasOwnProperty('value') && state.hasOwnProperty('errors');
}
/**
 * This function determines if a value is an array state.
 */
function isArrayState(state) {
    return isFormState(state) && state.hasOwnProperty('controls') && Array.isArray(state.controls);
}
/**
 * This function determines if a value is a group state.
 */
function isGroupState(state) {
    return isFormState(state) && state.hasOwnProperty('controls') && !Array.isArray(state.controls) && typeof state.controls !== 'function';
}
function createChildState(id, childValue) {
    if (isBoxed(childValue)) {
        return createFormControlState(id, childValue);
    }
    if (childValue !== null && Array.isArray(childValue)) {
        return createFormArrayState(id, childValue);
    }
    if (childValue !== null && typeof childValue === 'object') {
        return createFormGroupState(id, childValue);
    }
    return createFormControlState(id, childValue);
}
function verifyFormControlValueIsValid(value) {
    if (value === null || ['string', 'number', 'boolean', 'undefined'].indexOf(typeof value) >= 0) {
        return value;
    }
    if (!isBoxed(value)) {
        var errorMsg = 'Form control states only support undefined, null, string, number, and boolean values as well as boxed values';
        throw new Error(errorMsg + "; got " + JSON.stringify(value) + " of type " + typeof value); // `;
    }
    if (value.value === null || ['string', 'number', 'boolean', 'undefined'].indexOf(typeof value.value) >= 0) {
        return value;
    }
    var serialized = JSON.stringify(value);
    var deserialized = JSON.parse(serialized);
    if (deepEquals(value, deserialized)) {
        return value;
    }
    throw new Error("A form control value must be serializable (i.e. value === JSON.parse(JSON.stringify(value))), got: " + JSON.stringify(value));
}
/**
 * This function creates a form control state with an ID and a value.
 */
function createFormControlState(id, value) {
    return {
        id: id,
        value: verifyFormControlValueIsValid(value),
        errors: {},
        pendingValidations: [],
        isValidationPending: false,
        isValid: true,
        isInvalid: false,
        isEnabled: true,
        isDisabled: false,
        isDirty: false,
        isPristine: true,
        isTouched: false,
        isUntouched: true,
        isSubmitted: false,
        isUnsubmitted: true,
        isFocused: false,
        isUnfocused: true,
        userDefinedProperties: {},
    };
}
function getFormGroupValue(controls, originalValue) {
    var hasChanged = Object.keys(originalValue).length !== Object.keys(controls).length;
    var newValue = Object.keys(controls).reduce(function (res, key) {
        hasChanged = hasChanged || originalValue[key] !== controls[key].value;
        res[key] = controls[key].value;
        return res;
    }, {});
    return hasChanged ? newValue : originalValue;
}
function getFormGroupErrors(controls, originalErrors) {
    var hasChanged = false;
    var groupErrors = Object.keys(originalErrors)
        .filter(function (key) { return !key.startsWith('_'); })
        .reduce(function (res, key) {
        var _a;
        return Object.assign(res, (_a = {}, _a[key] = originalErrors[key], _a));
    }, {});
    var newErrors = Object.keys(controls).reduce(function (res, key) {
        var _a;
        var controlErrors = controls[key].errors;
        if (!isEmpty(controlErrors)) {
            hasChanged = hasChanged || originalErrors["_" + key] !== controlErrors;
            Object.assign(res, (_a = {}, _a["_" + key] = controls[key].errors, _a));
        }
        else {
            hasChanged = hasChanged || originalErrors.hasOwnProperty("_" + key);
        }
        return res;
    }, groupErrors);
    hasChanged = hasChanged || Object.keys(originalErrors).length !== Object.keys(newErrors).length;
    return hasChanged ? newErrors : originalErrors;
}
function computeGroupState(id, controls, value, errors, pendingValidations, userDefinedProperties, flags) {
    value = getFormGroupValue(controls, value);
    errors = getFormGroupErrors(controls, errors);
    var isValid = isEmpty(errors);
    var isDirty = flags.wasOrShouldBeDirty || Object.keys(controls).some(function (key) { return controls[key].isDirty; });
    var isEnabled = flags.wasOrShouldBeEnabled || Object.keys(controls).some(function (key) { return controls[key].isEnabled; });
    var isTouched = flags.wasOrShouldBeTouched || Object.keys(controls).some(function (key) { return controls[key].isTouched; });
    var isSubmitted = flags.wasOrShouldBeSubmitted || Object.keys(controls).some(function (key) { return controls[key].isSubmitted; });
    var isValidationPending = pendingValidations.length > 0 || Object.keys(controls).some(function (key) { return controls[key].isValidationPending; });
    return {
        id: id,
        value: value,
        errors: errors,
        pendingValidations: pendingValidations,
        isValidationPending: isValidationPending,
        isValid: isValid,
        isInvalid: !isValid,
        isEnabled: isEnabled,
        isDisabled: !isEnabled,
        isDirty: isDirty,
        isPristine: !isDirty,
        isTouched: isTouched,
        isUntouched: !isTouched,
        isSubmitted: isSubmitted,
        isUnsubmitted: !isSubmitted,
        userDefinedProperties: userDefinedProperties,
        controls: controls,
    };
}
/**
 * This function creates a form group state with an ID and a value.
 * From the value the shape of the group state is inferred, i.e.
 * object properties are inferred as form groups, array properties
 * are inferred as form arrays, and primitive properties are inferred
 * as form controls.
 */
function createFormGroupState(id, initialValue) {
    var controls = Object.keys(initialValue)
        .map(function (key) { return [key, createChildState(id + "." + key, initialValue[key])]; })
        .reduce(function (res, _a) {
        var _b;
        var _c = __read(_a, 2), controlId = _c[0], state = _c[1];
        return Object.assign(res, (_b = {}, _b[controlId] = state, _b));
    }, {});
    return computeGroupState(id, controls, initialValue, {}, [], {}, { wasOrShouldBeEnabled: true });
}
function getFormArrayValue(controls, originalValue) {
    var hasChanged = Object.keys(originalValue).length !== Object.keys(controls).length;
    var newValue = controls.map(function (state, i) {
        hasChanged = hasChanged || originalValue[i] !== state.value;
        return state.value;
    });
    return hasChanged ? newValue : originalValue;
}
function getFormArrayErrors(controls, originalErrors) {
    var hasChanged = false;
    var groupErrors = Object.keys(originalErrors)
        .filter(function (key) { return !key.startsWith('_'); })
        .reduce(function (res, key) {
        var _a;
        return Object.assign(res, (_a = {}, _a[key] = originalErrors[key], _a));
    }, {});
    var newErrors = controls.reduce(function (res, state, i) {
        var _a;
        var controlErrors = state.errors;
        if (!isEmpty(controlErrors)) {
            hasChanged = hasChanged || originalErrors["_" + i] !== controlErrors;
            Object.assign(res, (_a = {}, _a["_" + i] = controlErrors, _a));
        }
        else {
            hasChanged = hasChanged || originalErrors.hasOwnProperty("_" + i);
        }
        return res;
    }, groupErrors);
    hasChanged = hasChanged || Object.keys(originalErrors).length !== Object.keys(newErrors).length;
    return hasChanged ? newErrors : originalErrors;
}
function computeArrayState(id, inferredControls, value, errors, pendingValidations, userDefinedProperties, flags) {
    var controls = inferredControls;
    value = getFormArrayValue(controls, value);
    errors = getFormArrayErrors(controls, errors);
    var isValid = isEmpty(errors);
    var isDirty = flags.wasOrShouldBeDirty || controls.some(function (state) { return state.isDirty; });
    var isEnabled = flags.wasOrShouldBeEnabled || controls.some(function (state) { return state.isEnabled; });
    var isTouched = flags.wasOrShouldBeTouched || controls.some(function (state) { return state.isTouched; });
    var isSubmitted = flags.wasOrShouldBeSubmitted || controls.some(function (state) { return state.isSubmitted; });
    var isValidationPending = pendingValidations.length > 0 || controls.some(function (state) { return state.isValidationPending; });
    return {
        id: id,
        value: value,
        errors: errors,
        pendingValidations: pendingValidations,
        isValidationPending: isValidationPending,
        isValid: isValid,
        isInvalid: !isValid,
        isEnabled: isEnabled,
        isDisabled: !isEnabled,
        isDirty: isDirty,
        isPristine: !isDirty,
        isTouched: isTouched,
        isUntouched: !isTouched,
        isSubmitted: isSubmitted,
        isUnsubmitted: !isSubmitted,
        userDefinedProperties: userDefinedProperties,
        controls: inferredControls,
    };
}
/**
 * This function creates a form array state with an ID and a value.
 * From the value the shape of the array state is inferred, i.e.
 * object values are inferred as form groups, array values
 * are inferred as form arrays, and primitive values are inferred
 * as form controls.
 */
function createFormArrayState(id, initialValue) {
    var controls = initialValue
        .map(function (value, i) { return createChildState(id + "." + i, value); });
    return computeArrayState(id, controls, initialValue, {}, [], {}, { wasOrShouldBeEnabled: true });
}

function clearAsyncErrorReducer(state, action) {
    if (action.type !== ClearAsyncErrorAction.TYPE) {
        return state;
    }
    var name = "$" + action.name;
    var errors = state.errors;
    if (errors.hasOwnProperty(name)) {
        errors = __assign({}, state.errors);
        delete errors[name];
    }
    var pendingValidations = state.pendingValidations.filter(function (v) { return v !== action.name; });
    var isValid = isEmpty(errors);
    if (errors === state.errors && isValid === state.isValid && pendingValidations.length === state.pendingValidations.length) {
        return state;
    }
    return __assign({}, state, { isValid: isValid, isInvalid: !isValid, errors: errors,
        pendingValidations: pendingValidations, isValidationPending: pendingValidations.length > 0 });
}

function disableReducer(state, action) {
    if (action.type !== DisableAction.TYPE) {
        return state;
    }
    if (state.isDisabled) {
        return state;
    }
    return __assign({}, state, { isEnabled: false, isDisabled: true, isValid: true, isInvalid: false, errors: {}, pendingValidations: [], isValidationPending: false });
}

function enableReducer(state, action) {
    if (action.type !== EnableAction.TYPE) {
        return state;
    }
    if (state.isEnabled) {
        return state;
    }
    return __assign({}, state, { isEnabled: true, isDisabled: false });
}

function focusReducer(state, action) {
    if (action.type !== FocusAction.TYPE) {
        return state;
    }
    if (state.isFocused) {
        return state;
    }
    return __assign({}, state, { isFocused: true, isUnfocused: false });
}

function markAsDirtyReducer(state, action) {
    if (action.type !== MarkAsDirtyAction.TYPE) {
        return state;
    }
    if (state.isDirty) {
        return state;
    }
    return __assign({}, state, { isDirty: true, isPristine: false });
}

function markAsPristineReducer(state, action) {
    if (action.type !== MarkAsPristineAction.TYPE) {
        return state;
    }
    if (state.isPristine) {
        return state;
    }
    return __assign({}, state, { isDirty: false, isPristine: true });
}

function markAsSubmittedReducer(state, action) {
    if (action.type !== MarkAsSubmittedAction.TYPE) {
        return state;
    }
    if (state.isSubmitted) {
        return state;
    }
    return __assign({}, state, { isSubmitted: true, isUnsubmitted: false });
}

function markAsTouchedReducer(state, action) {
    if (action.type !== MarkAsTouchedAction.TYPE) {
        return state;
    }
    if (state.isTouched) {
        return state;
    }
    return __assign({}, state, { isTouched: true, isUntouched: false });
}

function markAsUnsubmittedReducer(state, action) {
    if (action.type !== MarkAsUnsubmittedAction.TYPE) {
        return state;
    }
    if (state.isUnsubmitted) {
        return state;
    }
    return __assign({}, state, { isSubmitted: false, isUnsubmitted: true });
}

function markAsUntouchedReducer(state, action) {
    if (action.type !== MarkAsUntouchedAction.TYPE) {
        return state;
    }
    if (state.isUntouched) {
        return state;
    }
    return __assign({}, state, { isTouched: false, isUntouched: true });
}

function resetReducer(state, action) {
    if (action.type !== ResetAction.TYPE) {
        return state;
    }
    if (state.isPristine && state.isUntouched && state.isUnsubmitted) {
        return state;
    }
    return __assign({}, state, { isDirty: false, isPristine: true, isTouched: false, isUntouched: true, isSubmitted: false, isUnsubmitted: true });
}

function setAsyncErrorReducer(state, action) {
    var _a;
    if (action.type !== SetAsyncErrorAction.TYPE) {
        return state;
    }
    if (state.isDisabled) {
        return state;
    }
    var name = "$" + action.name;
    var value = action.value;
    if (deepEquals(state.errors[name], action.value)) {
        value = state.errors[name];
    }
    var errors = __assign({}, state.errors, (_a = {}, _a[name] = value, _a));
    var pendingValidations = state.pendingValidations.filter(function (v) { return v !== action.name; });
    return __assign({}, state, { isValid: false, isInvalid: true, errors: errors,
        pendingValidations: pendingValidations, isValidationPending: pendingValidations.length > 0 });
}

function setErrorsReducer(state, action) {
    if (action.type !== SetErrorsAction.TYPE) {
        return state;
    }
    if (state.isDisabled) {
        return state;
    }
    if (state.errors === action.errors) {
        return state;
    }
    if (deepEquals(state.errors, action.errors)) {
        return state;
    }
    if (!action.errors || typeof action.errors !== 'object' || Array.isArray(action.errors)) {
        throw new Error("Control errors must be an object; got " + action.errors); // `;
    }
    if (Object.keys(action.errors).some(function (key) { return key.startsWith('$'); })) {
        throw new Error("Control errors must not use $ as a prefix; got " + JSON.stringify(action.errors)); // `;
    }
    var asyncErrors = Object.keys(state.errors)
        .filter(function (key) { return key.startsWith('$'); })
        .reduce(function (res, key) {
        var _a;
        return Object.assign(res, (_a = {}, _a[key] = state.errors[key], _a));
    }, {});
    var newErrors = isEmpty(asyncErrors) ? action.errors : Object.assign(asyncErrors, action.errors);
    var isValid = isEmpty(newErrors);
    return __assign({}, state, { isValid: isValid, isInvalid: !isValid, errors: newErrors });
}

function setUserDefinedPropertyReducer(state, action) {
    var _a;
    if (action.type !== SetUserDefinedPropertyAction.TYPE) {
        return state;
    }
    if (state.userDefinedProperties[action.name] === action.value) {
        return state;
    }
    return __assign({}, state, { userDefinedProperties: __assign({}, state.userDefinedProperties, (_a = {}, _a[action.name] = action.value, _a)) });
}

function setValueReducer(state, action) {
    if (action.type !== SetValueAction.TYPE) {
        return state;
    }
    if (state.value === action.value) {
        return state;
    }
    return __assign({}, state, { value: verifyFormControlValueIsValid(action.value) });
}

function startAsyncValidationReducer(state, action) {
    if (action.type !== StartAsyncValidationAction.TYPE) {
        return state;
    }
    if (state.pendingValidations.indexOf(action.name) >= 0) {
        return state;
    }
    return __assign({}, state, { pendingValidations: __spread(state.pendingValidations, [action.name]), isValidationPending: true });
}

function unfocusReducer(state, action) {
    if (action.type !== UnfocusAction.TYPE) {
        return state;
    }
    if (state.isUnfocused) {
        return state;
    }
    return __assign({}, state, { isFocused: false, isUnfocused: true });
}

function formControlReducerInternal(state, action) {
    if (isGroupState(state) || isArrayState(state)) {
        throw new Error('The state must be a control state');
    }
    if (action.controlId !== state.id) {
        return state;
    }
    state = setValueReducer(state, action);
    state = setErrorsReducer(state, action);
    state = startAsyncValidationReducer(state, action);
    state = setAsyncErrorReducer(state, action);
    state = clearAsyncErrorReducer(state, action);
    state = enableReducer(state, action);
    state = disableReducer(state, action);
    state = focusReducer(state, action);
    state = unfocusReducer(state, action);
    state = markAsDirtyReducer(state, action);
    state = markAsPristineReducer(state, action);
    state = markAsTouchedReducer(state, action);
    state = markAsUntouchedReducer(state, action);
    state = markAsSubmittedReducer(state, action);
    state = markAsUnsubmittedReducer(state, action);
    state = setUserDefinedPropertyReducer(state, action);
    state = resetReducer(state, action);
    return state;
}
/**
 * This reducer function updates a form control state with actions.
 */
function formControlReducer(state, action) {
    if (!state) {
        throw new Error('The control state must be defined!');
    }
    return formControlReducerInternal(state, action);
}

function dispatchActionPerChild(controls, actionCreator) {
    var hasChanged = false;
    var newControls = controls
        .map(function (state) {
        var newState = formStateReducer(state, actionCreator(state.id));
        hasChanged = hasChanged || state !== newState;
        return newState;
    });
    return hasChanged ? newControls : controls;
}
function callChildReducers(controls, action) {
    var hasChanged = false;
    var newControls = controls
        .map(function (state) {
        var newState = formStateReducer(state, action);
        hasChanged = hasChanged || state !== newState;
        return newState;
    });
    return hasChanged ? newControls : controls;
}
function childReducer(state, action) {
    var controls = callChildReducers(state.controls, action);
    if (state.controls === controls) {
        return state;
    }
    return computeArrayState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}
function updateIdRecursiveForGroup(state, newId) {
    var controls = Object.keys(state.controls)
        .reduce(function (agg, key) {
        var _a;
        return Object.assign(agg, (_a = {},
            _a[key] = updateIdRecursive(state.controls[key], newId + "." + key),
            _a));
    }, {});
    return __assign({}, state, { id: newId, controls: controls });
}
function updateIdRecursiveForArray(state, newId) {
    var controls = state.controls.map(function (c, i) { return updateIdRecursive(c, newId + "." + i); });
    return __assign({}, state, { id: newId, controls: controls });
}
function updateIdRecursive(state, newId) {
    if (state.id === newId) {
        return state;
    }
    if (isGroupState(state)) {
        return updateIdRecursiveForGroup(state, newId);
    }
    if (isArrayState(state)) {
        return updateIdRecursiveForArray(state, newId);
    }
    return __assign({}, state, { id: newId });
}

function addControlReducer(state, action) {
    if (action.type !== AddArrayControlAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    var index = action.index === undefined ? state.controls.length : action.index;
    if (index > state.controls.length || index < 0) {
        throw new Error("Index " + index + " is out of bounds for array '" + state.id + "' with length " + state.controls.length + "!");
    }
    var controls = __spread(state.controls);
    controls.splice(index, 0, createChildState(state.id + "." + index, action.value));
    controls = controls.map(function (c, i) { return updateIdRecursive(c, state.id + "." + i); });
    return computeArrayState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: true,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function clearAsyncErrorReducer$1(state, action) {
    if (action.type !== ClearAsyncErrorAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    var name = "$" + action.name;
    var errors = state.errors;
    if (state.errors.hasOwnProperty(name)) {
        errors = __assign({}, state.errors);
        delete errors[name];
    }
    var pendingValidations = state.pendingValidations.filter(function (v) { return v !== action.name; });
    if (errors === state.errors && pendingValidations.length === state.pendingValidations.length) {
        return state;
    }
    return computeArrayState(state.id, state.controls, state.value, errors, pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function disableReducer$1(state, action) {
    if (action.type !== DisableAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (state.isDisabled) {
        return state;
    }
    return computeArrayState(state.id, dispatchActionPerChild(state.controls, function (controlId) { return new DisableAction(controlId); }), state.value, {}, [], state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: false,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function enableReducer$1(state, action) {
    if (action.type !== EnableAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    var controls = dispatchActionPerChild(state.controls, function (controlId) { return new EnableAction(controlId); });
    if (controls === state.controls && state.isEnabled) {
        return state;
    }
    return computeArrayState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: true,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function markAsDirtyReducer$1(state, action) {
    if (action.type !== MarkAsDirtyAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    var controls = dispatchActionPerChild(state.controls, function (controlId) { return new MarkAsDirtyAction(controlId); });
    if (controls === state.controls) {
        return state;
    }
    return computeArrayState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: true,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function markAsPristineReducer$1(state, action) {
    if (action.type !== MarkAsPristineAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (state.isPristine) {
        return state;
    }
    return computeArrayState(state.id, dispatchActionPerChild(state.controls, function (controlId) { return new MarkAsPristineAction(controlId); }), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: false,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function markAsSubmittedReducer$1(state, action) {
    if (action.type !== MarkAsSubmittedAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    var controls = dispatchActionPerChild(state.controls, function (controlId) { return new MarkAsSubmittedAction(controlId); });
    if (controls === state.controls) {
        return state;
    }
    return computeArrayState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: true,
    });
}

function markAsTouchedReducer$1(state, action) {
    if (action.type !== MarkAsTouchedAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    var controls = dispatchActionPerChild(state.controls, function (controlId) { return new MarkAsTouchedAction(controlId); });
    if (controls === state.controls) {
        return state;
    }
    return computeArrayState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: true,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function markAsUnsubmittedReducer$1(state, action) {
    if (action.type !== MarkAsUnsubmittedAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (state.isUnsubmitted) {
        return state;
    }
    return computeArrayState(state.id, dispatchActionPerChild(state.controls, function (controlId) { return new MarkAsUnsubmittedAction(controlId); }), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: false,
    });
}

function markAsUntouchedReducer$1(state, action) {
    if (action.type !== MarkAsUntouchedAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (state.isUntouched) {
        return state;
    }
    return computeArrayState(state.id, dispatchActionPerChild(state.controls, function (controlId) { return new MarkAsUntouchedAction(controlId); }), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: false,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function move(array, fromIndex, toIndex) {
    var item = array[fromIndex];
    var length = array.length;
    if (fromIndex > toIndex) {
        return __spread(array.slice(0, toIndex), [
            item
        ], array.slice(toIndex, fromIndex), array.slice(fromIndex + 1, length));
    }
    else {
        var targetIndex = toIndex + 1;
        return __spread(array.slice(0, fromIndex), array.slice(fromIndex + 1, targetIndex), [
            item
        ], array.slice(targetIndex, length));
    }
}
function moveControlReducer(state, action) {
    if (action.type !== MoveArrayControlAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    var fromIndex = action.fromIndex;
    var toIndex = action.toIndex;
    if (fromIndex === toIndex) {
        return state;
    }
    if (fromIndex < 0 || toIndex < 0) {
        throw new Error("fromIndex " + fromIndex + " or toIndex " + fromIndex + " was negative");
    }
    if (fromIndex >= state.controls.length || toIndex >= state.controls.length) {
        throw new Error("fromIndex " + fromIndex + " or toIndex " + toIndex + " is out of bounds with the length of the controls " + state.controls.length);
    }
    var controls = move(state.controls, fromIndex, toIndex);
    controls = controls.map(function (c, i) { return updateIdRecursive(c, state.id + "." + i); });
    return computeArrayState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: true,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function removeControlReducer(state, action) {
    if (action.type !== RemoveArrayControlAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (action.index >= state.controls.length || action.index < 0) {
        throw new Error("Index " + action.index + " is out of bounds for array '" + state.id + "' with length " + state.controls.length + "!");
    }
    var index = action.index;
    var controls = state.controls.filter(function (_, i) { return i !== index; }).map(function (c, i) { return updateIdRecursive(c, state.id + "." + i); });
    return computeArrayState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: true,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function resetReducer$1(state, action) {
    if (action.type !== ResetAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (state.isPristine && state.isUntouched && state.isUnsubmitted) {
        return state;
    }
    return computeArrayState(state.id, dispatchActionPerChild(state.controls, function (controlId) { return new ResetAction(controlId); }), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: false,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: false,
        wasOrShouldBeSubmitted: false,
    });
}

function setAsyncErrorReducer$1(state, action) {
    var _a;
    if (action.type !== SetAsyncErrorAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (state.isDisabled) {
        return state;
    }
    var name = "$" + action.name;
    var value = action.value;
    if (deepEquals(state.errors[name], action.value)) {
        value = state.errors[name];
    }
    var errors = __assign({}, state.errors, (_a = {}, _a[name] = value, _a));
    var pendingValidations = state.pendingValidations.filter(function (v) { return v !== action.name; });
    return computeArrayState(state.id, state.controls, state.value, errors, pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function setErrorsReducer$1(state, action) {
    if (action.type !== SetErrorsAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (state.isDisabled) {
        return state;
    }
    if (state.errors === action.errors) {
        return state;
    }
    if (deepEquals(state.errors, action.errors)) {
        return state;
    }
    if (!action.errors || typeof action.errors !== 'object' || Array.isArray(action.errors)) {
        throw new Error("Control errors must be an object; got " + action.errors);
    }
    if (Object.keys(action.errors).some(function (key) { return key.startsWith('_'); })) {
        throw new Error("Control errors must not use underscore as a prefix; got " + JSON.stringify(action.errors));
    }
    if (Object.keys(action.errors).some(function (key) { return key.startsWith('$'); })) {
        throw new Error("Control errors must not use $ as a prefix; got " + JSON.stringify(action.errors));
    }
    var childAndAsyncErrors = Object.keys(state.errors)
        .filter(function (key) { return key.startsWith('_') || key.startsWith('$'); })
        .reduce(function (res, key) {
        var _a;
        return Object.assign(res, (_a = {}, _a[key] = state.errors[key], _a));
    }, {});
    var newErrors = Object.assign(childAndAsyncErrors, action.errors);
    return computeArrayState(state.id, state.controls, state.value, newErrors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function setUserDefinedPropertyReducer$1(state, action) {
    var _a;
    if (action.type !== SetUserDefinedPropertyAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (state.userDefinedProperties[action.name] === action.value) {
        return state;
    }
    return __assign({}, state, { userDefinedProperties: __assign({}, state.userDefinedProperties, (_a = {}, _a[action.name] = action.value, _a)) });
}

function setValueReducer$1(state, action) {
    if (action.type !== SetValueAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (state.value === action.value) {
        return state;
    }
    if (action.value instanceof Date) {
        throw new Error('Date values are not supported. Please used serialized strings instead.');
    }
    var value = action.value;
    var controls = value
        .map(function (v, i) {
        if (!state.controls[i]) {
            return createChildState(state.id + "." + i, v);
        }
        return formStateReducer(state.controls[i], new SetValueAction(state.controls[i].id, v));
    });
    return computeArrayState(state.id, controls, value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function startAsyncValidationReducer$1(state, action) {
    if (action.type !== StartAsyncValidationAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (state.pendingValidations.indexOf(action.name) >= 0) {
        return state;
    }
    var pendingValidations = __spread(state.pendingValidations, [action.name]);
    return computeArrayState(state.id, state.controls, state.value, state.errors, pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function swapArrayValues(a, i, j) {
    var _a;
    var n = __spread(a);
    _a = __read([n[j], n[i]], 2), n[i] = _a[0], n[j] = _a[1];
    return n;
}
function swapControlReducer(state, action) {
    if (action.type !== SwapArrayControlAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    var fromIndex = action.fromIndex;
    var toIndex = action.toIndex;
    if (fromIndex === toIndex) {
        return state;
    }
    if (fromIndex < 0 || toIndex < 0) {
        throw new Error("fromIndex " + fromIndex + " or toIndex " + fromIndex + " was negative");
    }
    if (fromIndex >= state.controls.length || toIndex >= state.controls.length) {
        throw new Error("fromIndex " + fromIndex + " or toIndex " + toIndex + " is out of bounds with the length of the controls " + state.controls.length);
    }
    var controls = swapArrayValues(state.controls, fromIndex, toIndex);
    controls = controls.map(function (c, i) { return (i >= fromIndex || i >= toIndex) ? updateIdRecursive(c, state.id + "." + i) : c; });
    return computeArrayState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: true,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function formArrayReducerInternal(state, action) {
    if (!isArrayState(state)) {
        throw new Error('The state must be an array state');
    }
    if (!isNgrxFormsAction(action)) {
        return state;
    }
    if (!action.controlId.startsWith(state.id)) {
        return state;
    }
    switch (action.type) {
        case FocusAction.TYPE:
        case UnfocusAction.TYPE:
        case AddGroupControlAction.TYPE:
        case RemoveGroupControlAction.TYPE:
            return childReducer(state, action);
        default:
            break;
    }
    state = setValueReducer$1(state, action);
    state = setErrorsReducer$1(state, action);
    state = startAsyncValidationReducer$1(state, action);
    state = setAsyncErrorReducer$1(state, action);
    state = clearAsyncErrorReducer$1(state, action);
    state = enableReducer$1(state, action);
    state = disableReducer$1(state, action);
    state = markAsDirtyReducer$1(state, action);
    state = markAsPristineReducer$1(state, action);
    state = markAsTouchedReducer$1(state, action);
    state = markAsUntouchedReducer$1(state, action);
    state = markAsSubmittedReducer$1(state, action);
    state = markAsUnsubmittedReducer$1(state, action);
    state = setUserDefinedPropertyReducer$1(state, action);
    state = resetReducer$1(state, action);
    state = addControlReducer(state, action);
    state = removeControlReducer(state, action);
    state = swapControlReducer(state, action);
    state = moveControlReducer(state, action);
    return state;
}
/**
 * This reducer function updates a form array state with actions.
 */
function formArrayReducer(state, action) {
    if (!state) {
        throw new Error('The array state must be defined!');
    }
    return formArrayReducerInternal(state, action);
}

function formStateReducer(state, action) {
    if (!state) {
        throw new Error('The form state must be defined!');
    }
    if (!isFormState(state)) {
        throw new Error("state must be a form state, got " + state);
    }
    if (isGroupState(state)) {
        return formGroupReducer(state, action);
    }
    if (isArrayState(state)) {
        return formArrayReducer(state, action);
    }
    return formControlReducer(state, action);
}
/**
 * This function creates a reducer function that first applies an action to the state
 * and afterwards applies all given update functions one after another to the resulting
 * form state. However, the update functions are only applied if the form state changed
 * as result of applying the action. If you need the update functions to be applied
 * regardless of whether the state changed (e.g. because the update function closes
 * over variables that may change independently of the form state) you can simply apply
 * the update manually (e.g. `updateFunction(formStateReducer(state, action))`).
 *
 * The following (contrived) example uses this function to create a reducer that after
 * each action validates the child control `name` to be required and sets the child
 * control `email`'s value to be `''` if the name is invalid.
 *
```typescript
interface FormValue {
  name: string;
  email: string;
}

const updateFormState = updateGroup<FormValue>(
  {
    name: validate(required),
  },
  {
    email: (email, parentGroup) =>
      parentGroup.controls.name.isInvalid
        ? setValue('', email)
        : email,
  },
);

const reducer = createFormStateReducerWithUpdate<FormValue>(updateFormState);
```
 */
function createFormStateReducerWithUpdate(updateFnOrUpdateFnArr) {
    var updateFnArr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        updateFnArr[_i - 1] = arguments[_i];
    }
    updateFnArr = __spread((Array.isArray(updateFnOrUpdateFnArr) ? updateFnOrUpdateFnArr : [updateFnOrUpdateFnArr]), updateFnArr);
    return function (state, action) {
        var newState = formStateReducer(state, action);
        return newState === state ? state : updateFnArr.reduce(function (s, f) { return f(s); }, newState);
    };
}
function reduceNestedFormState(state, key, action) {
    var _a;
    var value = state[key];
    if (!isFormState(value)) {
        return state;
    }
    return __assign({}, state, (_a = {}, _a[key] = formStateReducer(value, action), _a));
}
function reduceNestedFormStates(state, action) {
    return Object.keys(state).reduce(function (s, key) { return reduceNestedFormState(s, key, action); }, state);
}
/**
 * This function returns an object that can be passed to ngrx's `createReducer`
 * function (available starting with ngrx version 8). By doing this all form
 * state properties on the state will be updated whenever necessary (i.e.
 * whenever an ngrx-forms action is dispatched).
 *
 * To manually update a form state (e.g. to validate it) use
 * `wrapReducerWithFormStateUpdate`.
 */
function onNgrxForms() {
    return {
        reducer: function (state, action) { return reduceNestedFormStates(state, action); },
        types: ALL_NGRX_FORMS_ACTION_TYPES,
    };
}
/**
 * Define a reducer for a ngrx-forms action. This functions works the same as
 * ngrx's `on` except that you provide the ngrx-forms action class instead of
 * your action creator as a parameter.
 */
function onNgrxFormsAction(actionCons, reducer) {
    return {
        reducer: function (state, action) { return reducer(reduceNestedFormStates(state, action), action); },
        types: [actionCons.TYPE],
    };
}
/**
 * This function wraps a reducer and returns another reducer that first calls
 * the given reducer and then calls the given update function for the form state
 * that is specified by the form state locator function.
 *
 * The update function is passed the form state and the updated containing state
 * as parameters.
 */
function wrapReducerWithFormStateUpdate(reducer, formStateLocator, updateFn) {
    return function (state, action) {
        var _a;
        var updatedState = reducer(state, action);
        var formState = formStateLocator(updatedState);
        var formStateKey = Object.keys(updatedState).find(function (key) { return updatedState[key] === formState; });
        var updatedFormState = updateFn(formState, updatedState);
        if (updatedFormState === formState) {
            return updatedState;
        }
        return __assign({}, updatedState, (_a = {}, _a[formStateKey] = updatedFormState, _a));
    };
}

function dispatchActionPerChild$1(controls, actionCreator) {
    var hasChanged = false;
    var newControls = Object.keys(controls)
        .reduce(function (c, key) {
        var _a;
        Object.assign(c, (_a = {}, _a[key] = formStateReducer(controls[key], actionCreator(controls[key].id)), _a));
        hasChanged = hasChanged || c[key] !== controls[key];
        return c;
    }, {});
    return hasChanged ? newControls : controls;
}
function callChildReducers$1(controls, action) {
    var hasChanged = false;
    var newControls = Object.keys(controls)
        .map(function (key) { return [key, formStateReducer(controls[key], action)]; })
        .reduce(function (res, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], state = _c[1];
        hasChanged = hasChanged || state !== controls[key];
        return Object.assign(res, (_b = {}, _b[key] = state, _b));
    }, {});
    return hasChanged ? newControls : controls;
}
function childReducer$1(state, action) {
    var controls = callChildReducers$1(state.controls, action);
    if (state.controls === controls) {
        return state;
    }
    return computeGroupState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function addControlReducer$1(state, action) {
    var _a;
    if (action.type !== AddGroupControlAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer$1(state, action);
    }
    if (state.controls.hasOwnProperty(action.name)) {
        throw new Error("Group '" + state.id + "' already has child control '" + action.name + "'!"); // `;
    }
    var controls = Object.assign({}, state.controls, (_a = {},
        _a[action.name] = createChildState(state.id + "." + action.name, action.value),
        _a));
    return computeGroupState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: true,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function clearAsyncErrorReducer$2(state, action) {
    if (action.type !== ClearAsyncErrorAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer$1(state, action);
    }
    var name = "$" + action.name;
    var errors = state.errors;
    if (errors.hasOwnProperty(name)) {
        errors = __assign({}, state.errors);
        delete errors[name];
    }
    var pendingValidations = state.pendingValidations.filter(function (v) { return v !== action.name; });
    if (errors === state.errors && pendingValidations.length === state.pendingValidations.length) {
        return state;
    }
    return computeGroupState(state.id, state.controls, state.value, errors, pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function disableReducer$2(state, action) {
    if (action.type !== DisableAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer$1(state, action);
    }
    if (state.isDisabled) {
        return state;
    }
    return computeGroupState(state.id, dispatchActionPerChild$1(state.controls, function (controlId) { return new DisableAction(controlId); }), state.value, {}, [], state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: false,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function enableReducer$2(state, action) {
    if (action.type !== EnableAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer$1(state, action);
    }
    var controls = dispatchActionPerChild$1(state.controls, function (controlId) { return new EnableAction(controlId); });
    if (controls === state.controls) {
        return state;
    }
    return computeGroupState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: true,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function markAsDirtyReducer$2(state, action) {
    if (action.type !== MarkAsDirtyAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer$1(state, action);
    }
    var controls = dispatchActionPerChild$1(state.controls, function (controlId) { return new MarkAsDirtyAction(controlId); });
    if (controls === state.controls) {
        return state;
    }
    return computeGroupState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: true,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function markAsPristineReducer$2(state, action) {
    if (action.type !== MarkAsPristineAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer$1(state, action);
    }
    if (state.isPristine) {
        return state;
    }
    return computeGroupState(state.id, dispatchActionPerChild$1(state.controls, function (controlId) { return new MarkAsPristineAction(controlId); }), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: false,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function markAsSubmittedReducer$2(state, action) {
    if (action.type !== MarkAsSubmittedAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer$1(state, action);
    }
    var controls = dispatchActionPerChild$1(state.controls, function (controlId) { return new MarkAsSubmittedAction(controlId); });
    if (controls === state.controls) {
        return state;
    }
    return computeGroupState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: true,
    });
}

function markAsTouchedReducer$2(state, action) {
    if (action.type !== MarkAsTouchedAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer$1(state, action);
    }
    var controls = dispatchActionPerChild$1(state.controls, function (controlId) { return new MarkAsTouchedAction(controlId); });
    if (controls === state.controls) {
        return state;
    }
    return computeGroupState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: true,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function markAsUnsubmittedReducer$2(state, action) {
    if (action.type !== MarkAsUnsubmittedAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer$1(state, action);
    }
    if (state.isUnsubmitted) {
        return state;
    }
    return computeGroupState(state.id, dispatchActionPerChild$1(state.controls, function (controlId) { return new MarkAsUnsubmittedAction(controlId); }), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: false,
    });
}

function markAsUntouchedReducer$2(state, action) {
    if (action.type !== MarkAsUntouchedAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer$1(state, action);
    }
    if (state.isUntouched) {
        return state;
    }
    return computeGroupState(state.id, dispatchActionPerChild$1(state.controls, function (controlId) { return new MarkAsUntouchedAction(controlId); }), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: false,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function removeControlReducer$1(state, action) {
    if (action.type !== RemoveGroupControlAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer$1(state, action);
    }
    if (!state.controls.hasOwnProperty(action.name)) {
        throw new Error("Group '" + state.id + "' does not have child control '" + action.name + "'!"); // `;
    }
    var controls = Object.assign({}, state.controls);
    delete controls[action.name];
    return computeGroupState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: true,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function resetReducer$2(state, action) {
    if (action.type !== ResetAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer$1(state, action);
    }
    if (state.isPristine && state.isUntouched && state.isUnsubmitted) {
        return state;
    }
    return computeGroupState(state.id, dispatchActionPerChild$1(state.controls, function (controlId) { return new ResetAction(controlId); }), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: false,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: false,
        wasOrShouldBeSubmitted: false,
    });
}

function setAsyncErrorReducer$2(state, action) {
    var _a;
    if (action.type !== SetAsyncErrorAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer$1(state, action);
    }
    if (state.isDisabled) {
        return state;
    }
    var name = "$" + action.name;
    var value = action.value;
    if (deepEquals(state.errors[name], action.value)) {
        value = state.errors[name];
    }
    var errors = __assign({}, state.errors, (_a = {}, _a[name] = value, _a));
    var pendingValidations = state.pendingValidations.filter(function (v) { return v !== action.name; });
    return computeGroupState(state.id, state.controls, state.value, errors, pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function setErrorsReducer$2(state, action) {
    if (action.type !== SetErrorsAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer$1(state, action);
    }
    if (state.isDisabled) {
        return state;
    }
    if (state.errors === action.errors) {
        return state;
    }
    if (deepEquals(state.errors, action.errors)) {
        return state;
    }
    if (!action.errors || typeof action.errors !== 'object' || Array.isArray(action.errors)) {
        throw new Error("Control errors must be an object; got " + action.errors); // `;
    }
    if (Object.keys(action.errors).some(function (key) { return key.startsWith('_'); })) {
        throw new Error("Control errors must not use underscore as a prefix; got " + JSON.stringify(action.errors)); // `;
    }
    if (Object.keys(action.errors).some(function (key) { return key.startsWith('$'); })) {
        throw new Error("Control errors must not use $ as a prefix; got " + JSON.stringify(action.errors)); // `;
    }
    var childAndAsyncErrors = Object.keys(state.errors)
        .filter(function (key) { return key.startsWith('_') || key.startsWith('$'); })
        .reduce(function (res, key) {
        var _a;
        return Object.assign(res, (_a = {}, _a[key] = state.errors[key], _a));
    }, {});
    var newErrors = Object.assign(childAndAsyncErrors, action.errors);
    return computeGroupState(state.id, state.controls, state.value, newErrors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function setUserDefinedPropertyReducer$2(state, action) {
    var _a;
    if (action.type !== SetUserDefinedPropertyAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer$1(state, action);
    }
    if (state.userDefinedProperties[action.name] === action.value) {
        return state;
    }
    return __assign({}, state, { userDefinedProperties: __assign({}, state.userDefinedProperties, (_a = {}, _a[action.name] = action.value, _a)) });
}

function setValueReducer$2(state, action) {
    if (action.type !== SetValueAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer$1(state, action);
    }
    if (state.value === action.value) {
        return state;
    }
    if (action.value instanceof Date) {
        throw new Error('Date values are not supported. Please used serialized strings instead.');
    }
    var value = action.value;
    if (isBoxed(value)) {
        value = unbox(value);
    }
    var controls = Object.keys(value)
        .reduce(function (c, key) {
        var _a, _b;
        // tslint:disable-next-line:prefer-conditional-expression
        if (!state.controls[key]) {
            Object.assign(c, (_a = {}, _a[key] = createChildState(state.id + "." + key, value[key]), _a));
        }
        else {
            Object.assign(c, (_b = {}, _b[key] = formStateReducer(state.controls[key], new SetValueAction(state.controls[key].id, value[key])), _b));
        }
        return c;
    }, {});
    return computeGroupState(state.id, controls, value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function startAsyncValidationReducer$2(state, action) {
    if (action.type !== StartAsyncValidationAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer$1(state, action);
    }
    if (state.pendingValidations.indexOf(action.name) >= 0) {
        return state;
    }
    var pendingValidations = __spread(state.pendingValidations, [action.name]);
    return computeGroupState(state.id, state.controls, state.value, state.errors, pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function formGroupReducerInternal(state, action) {
    if (!isGroupState(state)) {
        throw new Error('The state must be a group state');
    }
    if (!isNgrxFormsAction(action)) {
        return state;
    }
    if (!action.controlId.startsWith(state.id)) {
        return state;
    }
    switch (action.type) {
        case FocusAction.TYPE:
        case UnfocusAction.TYPE:
        case AddArrayControlAction.TYPE:
        case RemoveArrayControlAction.TYPE:
            return childReducer$1(state, action);
        default:
            break;
    }
    state = setValueReducer$2(state, action);
    state = setErrorsReducer$2(state, action);
    state = startAsyncValidationReducer$2(state, action);
    state = setAsyncErrorReducer$2(state, action);
    state = clearAsyncErrorReducer$2(state, action);
    state = enableReducer$2(state, action);
    state = disableReducer$2(state, action);
    state = markAsDirtyReducer$2(state, action);
    state = markAsPristineReducer$2(state, action);
    state = markAsTouchedReducer$2(state, action);
    state = markAsUntouchedReducer$2(state, action);
    state = markAsSubmittedReducer$2(state, action);
    state = markAsUnsubmittedReducer$2(state, action);
    state = addControlReducer$1(state, action);
    state = removeControlReducer$1(state, action);
    state = setUserDefinedPropertyReducer$2(state, action);
    state = resetReducer$2(state, action);
    return state;
}
/**
 * This reducer function updates a form group state with actions.
 */
function formGroupReducer(state, action) {
    if (!state) {
        throw new Error('The group state must be defined!');
    }
    return formGroupReducerInternal(state, action);
}

function abstractControlReducer(state, action) {
    if (isArrayState(state)) {
        return formArrayReducer(state, action);
    }
    if (isGroupState(state)) {
        return formGroupReducer(state, action);
    }
    return formControlReducer(state, action);
}
function compose() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (t) { return fns.reduce(function (res, f) { return f(res); }, t); };
}
function ensureState(state) {
    if (!state) {
        throw new Error('state must not be undefined!');
    }
    return state;
}

function updateArrayControlsState(filterFn, updateFn) {
    return function (state) {
        var hasChanged = false;
        var newControls = state.controls.map(function (control, idx) {
            if (!filterFn(control, idx)) {
                return control;
            }
            var newControl = updateFn(control, state);
            hasChanged = hasChanged || newControl !== control;
            return newControl;
        });
        return hasChanged ? newControls : state.controls;
    };
}
function updateArraySingle(filterFn, updateFn) {
    return function (state) {
        var newControls = updateArrayControlsState(filterFn, updateFn)(state);
        return newControls !== state.controls
            ? computeArrayState(state.id, newControls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
                wasOrShouldBeDirty: state.isDirty,
                wasOrShouldBeEnabled: state.isEnabled,
                wasOrShouldBeTouched: state.isTouched,
                wasOrShouldBeSubmitted: state.isSubmitted,
            })
            : state;
    };
}
function updateArrayWithFilter(stateOrFilterFunction, filterFunctionOrFunctionOrFunctionArray, updateFnOrUpdateFnArr) {
    var rest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        rest[_i - 3] = arguments[_i];
    }
    if (isArrayState(stateOrFilterFunction)) {
        var filterFn_1 = filterFunctionOrFunctionOrFunctionArray;
        var updateFnArr_1 = Array.isArray(updateFnOrUpdateFnArr) ? updateFnOrUpdateFnArr : [updateFnOrUpdateFnArr];
        return updateFnArr_1.concat.apply(updateFnArr_1, __spread(rest)).reduce(function (s, updateFn) { return updateArraySingle(filterFn_1, updateFn)(s); }, stateOrFilterFunction);
    }
    var updateFnArr = Array.isArray(filterFunctionOrFunctionOrFunctionArray)
        ? filterFunctionOrFunctionOrFunctionArray
        : [filterFunctionOrFunctionOrFunctionArray];
    updateFnArr = updateFnOrUpdateFnArr === undefined ? updateFnArr : updateFnArr.concat(updateFnOrUpdateFnArr);
    return function (s) { return updateArrayWithFilter(ensureState(s), stateOrFilterFunction, updateFnArr.concat(rest)); };
}
function updateArray(stateOrFunctionOrFunctionArray, updateFnOrUpdateFnArr) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    if (isArrayState(stateOrFunctionOrFunctionArray)) {
        var updateFnArr_2 = Array.isArray(updateFnOrUpdateFnArr) ? updateFnOrUpdateFnArr : [updateFnOrUpdateFnArr];
        return updateFnArr_2.concat.apply(updateFnArr_2, __spread(rest)).reduce(function (s, updateFn) { return updateArraySingle(function () { return true; }, updateFn)(s); }, stateOrFunctionOrFunctionArray);
    }
    var updateFnArr = Array.isArray(stateOrFunctionOrFunctionArray) ? stateOrFunctionOrFunctionArray : [stateOrFunctionOrFunctionArray];
    updateFnArr = updateFnOrUpdateFnArr === undefined ? updateFnArr : updateFnArr.concat(updateFnOrUpdateFnArr);
    return function (s) { return updateArray(ensureState(s), updateFnArr.concat(rest)); };
}

function updateGroupControlsState(updateFns) {
    return function (state) {
        var hasChanged = false;
        var newControls = Object.keys(state.controls).reduce(function (res, key) {
            var _a, _b;
            var control = state.controls[key];
            Object.assign(res, (_a = {}, _a[key] = control, _a));
            if (updateFns.hasOwnProperty(key)) {
                var newControl = updateFns[key](control, state);
                hasChanged = hasChanged || newControl !== control;
                Object.assign(res, (_b = {}, _b[key] = newControl, _b));
            }
            return res;
        }, {});
        return hasChanged ? newControls : state.controls;
    };
}
function updateGroupSingle(updateFns) {
    return function (state) {
        var newControls = updateGroupControlsState(updateFns)(state);
        return newControls !== state.controls
            ? computeGroupState(state.id, newControls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
                wasOrShouldBeDirty: state.isDirty,
                wasOrShouldBeEnabled: state.isEnabled,
                wasOrShouldBeTouched: state.isTouched,
                wasOrShouldBeSubmitted: state.isSubmitted,
            })
            : state;
    };
}
function updateGroup(stateOrUpdateFnOrUpdateFnArray, updateFnOrUpdateFnArr) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    if (isGroupState(stateOrUpdateFnOrUpdateFnArray)) {
        var updateFnArr_1 = Array.isArray(updateFnOrUpdateFnArr) ? updateFnOrUpdateFnArr : [updateFnOrUpdateFnArr];
        return updateFnArr_1.concat.apply(updateFnArr_1, __spread(rest)).reduce(function (s, updateFn) { return updateGroupSingle(updateFn)(s); }, stateOrUpdateFnOrUpdateFnArray);
    }
    var updateFnArr = Array.isArray(stateOrUpdateFnOrUpdateFnArray) ? stateOrUpdateFnOrUpdateFnArray : [stateOrUpdateFnOrUpdateFnArray];
    updateFnArr = updateFnOrUpdateFnArr === undefined ? updateFnArr : updateFnArr.concat(updateFnOrUpdateFnArr);
    return function (s) { return updateGroup(ensureState(s), updateFnArr.concat(rest)); };
}

function updateRecursiveSingle(parent, updateFn) {
    return function (state) {
        if (isGroupState(state)) {
            var updateFunctions = Object.keys(state.controls).reduce(function (agg, key) {
                var _a;
                return Object.assign(agg, (_a = {},
                    _a[key] = function (s, p) { return updateRecursiveSingle(p, updateFn)(s); },
                    _a));
            }, {});
            state = updateGroup(updateFunctions)(state);
            return updateFn(state, parent);
        }
        if (isArrayState(state)) {
            state = updateArray(function (s, p) { return updateRecursiveSingle(p, updateFn)(s); })(state);
            return updateFn(state, parent);
        }
        return updateFn(state, parent);
    };
}
function updateRecursive(stateOrFunctionOrFunctionArray, updateFnOrUpdateFnArr) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    if (isFormState(stateOrFunctionOrFunctionArray)) {
        var updateFnArr_1 = Array.isArray(updateFnOrUpdateFnArr) ? updateFnOrUpdateFnArr : [updateFnOrUpdateFnArr];
        return updateFnArr_1.concat.apply(updateFnArr_1, __spread(rest)).reduce(function (s, updateFn) { return updateRecursiveSingle(stateOrFunctionOrFunctionArray, updateFn)(s); }, stateOrFunctionOrFunctionArray);
    }
    var updateFnArr = Array.isArray(stateOrFunctionOrFunctionArray) ? stateOrFunctionOrFunctionArray : [stateOrFunctionOrFunctionArray];
    updateFnArr = updateFnOrUpdateFnArr === undefined ? updateFnArr : updateFnArr.concat(updateFnOrUpdateFnArr);
    return function (s) { return updateRecursive(ensureState(s), updateFnArr.concat(rest)); };
}

function setValue(valueOrState, value) {
    if (isFormState(valueOrState)) {
        return abstractControlReducer(valueOrState, new SetValueAction(valueOrState.id, value));
    }
    return function (s) { return setValue(ensureState(s), valueOrState); };
}

function setErrors(errorsOrErrorsArrayOrState, errorsOrErrorsArray) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    if (isFormState(errorsOrErrorsArrayOrState)) {
        var errorsArray_1 = Array.isArray(errorsOrErrorsArray) ? errorsOrErrorsArray : [errorsOrErrorsArray];
        var errors = errorsArray_1.concat.apply(errorsArray_1, __spread(rest)).reduce(function (agg, err) { return Object.assign(agg, err); }, {});
        return formStateReducer(errorsOrErrorsArrayOrState, new SetErrorsAction(errorsOrErrorsArrayOrState.id, errors));
    }
    var errorsArray = Array.isArray(errorsOrErrorsArrayOrState) ? errorsOrErrorsArrayOrState : [errorsOrErrorsArrayOrState];
    errorsArray = errorsOrErrorsArray === undefined ? errorsArray : errorsArray.concat(errorsOrErrorsArray);
    return function (s) { return setErrors(ensureState(s), errorsArray.concat(rest)); };
}

function validate(stateOrFunctionOrFunctionArray, functionOrFunctionArr) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    if (isFormState(stateOrFunctionOrFunctionArray)) {
        var functionArr = Array.isArray(functionOrFunctionArr) ? functionOrFunctionArr : [functionOrFunctionArr];
        var errors = functionArr.concat.apply(functionArr, __spread(rest)).reduce(function (agg, validationFn) { return Object.assign(agg, validationFn(stateOrFunctionOrFunctionArray.value)); }, {});
        return formStateReducer(stateOrFunctionOrFunctionArray, new SetErrorsAction(stateOrFunctionOrFunctionArray.id, errors));
    }
    var updateFnArr = Array.isArray(stateOrFunctionOrFunctionArray) ? stateOrFunctionOrFunctionArray : [stateOrFunctionOrFunctionArray];
    updateFnArr = functionOrFunctionArr === undefined ? updateFnArr : updateFnArr.concat(functionOrFunctionArr);
    return function (s) { return validate(ensureState(s), updateFnArr.concat(rest)); };
}

function enable(state) {
    return abstractControlReducer(state, new EnableAction(state.id));
}

function disable(state) {
    return abstractControlReducer(state, new DisableAction(state.id));
}

function markAsDirty(state) {
    return abstractControlReducer(state, new MarkAsDirtyAction(state.id));
}

function markAsPristine(state) {
    return abstractControlReducer(state, new MarkAsPristineAction(state.id));
}

function markAsTouched(state) {
    return abstractControlReducer(state, new MarkAsTouchedAction(state.id));
}

function markAsUntouched(state) {
    return abstractControlReducer(state, new MarkAsUntouchedAction(state.id));
}

function markAsSubmitted(state) {
    return abstractControlReducer(state, new MarkAsSubmittedAction(state.id));
}

function markAsUnsubmitted(state) {
    return abstractControlReducer(state, new MarkAsUnsubmittedAction(state.id));
}

/**
 * This update function takes a form control state and marks it as focused (which
 * will also `.focus()` the form element).
 */
function focus(state) {
    return formControlReducer(state, new FocusAction(state.id));
}

/**
 * This update function takes a form control state and marks it as not focused (which
 * will also `.blur()` the form element).
 */
function unfocus(state) {
    return formControlReducer(state, new UnfocusAction(state.id));
}

function addArrayControl(valueOrState, indexOrValue, index) {
    if (isArrayState(valueOrState)) {
        return formArrayReducer(valueOrState, new AddArrayControlAction(valueOrState.id, indexOrValue, index));
    }
    return function (s) { return addArrayControl(ensureState(s), valueOrState, indexOrValue); };
}

function addGroupControl(nameOrState, valueOrName, value) {
    if (isGroupState(nameOrState)) {
        return formGroupReducer(nameOrState, new AddGroupControlAction(nameOrState.id, valueOrName, value));
    }
    return function (s) { return addGroupControl(ensureState(s), nameOrState, valueOrName); };
}

function removeArrayControl(indexOrState, index) {
    if (isArrayState(indexOrState)) {
        return formArrayReducer(indexOrState, new RemoveArrayControlAction(indexOrState.id, index));
    }
    return function (s) { return removeArrayControl(ensureState(s), indexOrState); };
}

function removeGroupControl(nameOrState, name) {
    if (isGroupState(nameOrState)) {
        return formGroupReducer(nameOrState, new RemoveGroupControlAction(nameOrState.id, name));
    }
    return function (s) { return removeGroupControl(ensureState(s), nameOrState); };
}

function setUserDefinedProperty(nameOrState, valueOrName, value) {
    if (isFormState(nameOrState)) {
        return formStateReducer(nameOrState, new SetUserDefinedPropertyAction(nameOrState.id, valueOrName, value));
    }
    return function (s) { return setUserDefinedProperty(ensureState(s), nameOrState, valueOrName); };
}

function reset(state) {
    return abstractControlReducer(state, new ResetAction(state.id));
}

function startAsyncValidation(nameOrState, name) {
    if (isFormState(nameOrState)) {
        return abstractControlReducer(nameOrState, new StartAsyncValidationAction(nameOrState.id, name));
    }
    return function (s) { return startAsyncValidation(ensureState(s), nameOrState); };
}

function setAsyncError(nameOrState, nameOrValue, value) {
    if (isFormState(nameOrState)) {
        return abstractControlReducer(nameOrState, new SetAsyncErrorAction(nameOrState.id, nameOrValue, value));
    }
    return function (s) { return setAsyncError(ensureState(s), nameOrState, nameOrValue); };
}

function clearAsyncError(nameOrState, name) {
    if (isFormState(nameOrState)) {
        return abstractControlReducer(nameOrState, new ClearAsyncErrorAction(nameOrState.id, name));
    }
    return function (s) { return clearAsyncError(ensureState(s), nameOrState); };
}

/**
 * Used to provide a {@link FormViewAdapter} for form elements.
 */
var NGRX_FORM_VIEW_ADAPTER = new InjectionToken('NgrxFormViewAdapter');

// tslint:disable:directive-class-suffix
var NgrxCheckboxViewAdapter = /** @class */ (function () {
    function NgrxCheckboxViewAdapter(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nativeIdWasSet = false;
        this.onChange = function () { return void 0; };
        this.onTouched = function () { return void 0; };
    }
    NgrxCheckboxViewAdapter_1 = NgrxCheckboxViewAdapter;
    Object.defineProperty(NgrxCheckboxViewAdapter.prototype, "ngrxFormControlState", {
        set: function (value) {
            if (!value) {
                throw new Error('The control state must not be undefined!');
            }
            this.state = value;
            var nativeId = this.elementRef.nativeElement.id;
            var shouldSetNativeId = value.id !== nativeId && this.nativeIdWasSet;
            if (shouldSetNativeId) {
                this.renderer.setProperty(this.elementRef.nativeElement, 'id', value.id);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgrxCheckboxViewAdapter.prototype.ngAfterViewInit = function () {
        var nativeId = this.elementRef.nativeElement.id;
        var shouldSetNativeId = this.state.id !== nativeId && !nativeId;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', this.state.id);
            this.nativeIdWasSet = true;
        }
    };
    NgrxCheckboxViewAdapter.prototype.setViewValue = function (value) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'checked', value);
    };
    NgrxCheckboxViewAdapter.prototype.setOnChangeCallback = function (fn) {
        this.onChange = fn;
    };
    NgrxCheckboxViewAdapter.prototype.setOnTouchedCallback = function (fn) {
        this.onTouched = fn;
    };
    NgrxCheckboxViewAdapter.prototype.setIsDisabled = function (isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    };
    NgrxCheckboxViewAdapter.prototype.handleInput = function (_a) {
        var target = _a.target;
        this.onChange(target.checked);
    };
    var NgrxCheckboxViewAdapter_1;
    __decorate([
        HostListener('blur'),
        __metadata("design:type", Function)
    ], NgrxCheckboxViewAdapter.prototype, "onTouched", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NgrxCheckboxViewAdapter.prototype, "ngrxFormControlState", null);
    __decorate([
        HostListener('change', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NgrxCheckboxViewAdapter.prototype, "handleInput", null);
    NgrxCheckboxViewAdapter = NgrxCheckboxViewAdapter_1 = __decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'input[type=checkbox][ngrxFormControlState]',
            providers: [{
                    provide: NGRX_FORM_VIEW_ADAPTER,
                    useExisting: forwardRef(function () { return NgrxCheckboxViewAdapter_1; }),
                    multi: true,
                }],
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], NgrxCheckboxViewAdapter);
    return NgrxCheckboxViewAdapter;
}());

/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function isAndroid(navigator) {
    return /android (\d+)/.test(navigator.userAgent.toLowerCase());
}
// tslint:disable:directive-class-suffix
// tslint:disable:directive-selector
// TODO: since this directive has a side-effect (setting the element's id attribute)
// it should not blacklist other types of inputs but instead it should somehow figure
// out whether it is the "active" view adapter and only perform its side effects if it
// is active
var NgrxDefaultViewAdapter = /** @class */ (function () {
    function NgrxDefaultViewAdapter(renderer, elementRef, platformId, 
    // we use a special injection string that should never exist at runtime to allow mocking this dependency for testing
    navigator) {
        if (platformId === void 0) { platformId = null; }
        if (navigator === void 0) { navigator = null; }
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.platformId = platformId;
        this.nativeIdWasSet = false;
        this.onChange = function () { return void 0; };
        this.onTouched = function () { return void 0; };
        /** Whether the user is creating a composition string (IME events). */
        this.isComposing = false;
        this.isCompositionSupported = isPlatformBrowser(this.platformId || '') && !isAndroid(navigator || window.navigator);
    }
    NgrxDefaultViewAdapter_1 = NgrxDefaultViewAdapter;
    Object.defineProperty(NgrxDefaultViewAdapter.prototype, "ngrxFormControlState", {
        set: function (value) {
            if (!value) {
                throw new Error('The control state must not be undefined!');
            }
            this.state = value;
            var nativeId = this.elementRef.nativeElement.id;
            var shouldSetNativeId = value.id !== nativeId && this.nativeIdWasSet;
            if (shouldSetNativeId) {
                this.renderer.setProperty(this.elementRef.nativeElement, 'id', value.id);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgrxDefaultViewAdapter.prototype.ngAfterViewInit = function () {
        var nativeId = this.elementRef.nativeElement.id;
        var shouldSetNativeId = this.state.id !== nativeId && !nativeId;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', this.state.id);
            this.nativeIdWasSet = true;
        }
    };
    NgrxDefaultViewAdapter.prototype.setViewValue = function (value) {
        var normalizedValue = value == null ? '' : value;
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
    };
    NgrxDefaultViewAdapter.prototype.setOnChangeCallback = function (fn) {
        this.onChange = fn;
    };
    NgrxDefaultViewAdapter.prototype.setOnTouchedCallback = function (fn) {
        this.onTouched = fn;
    };
    NgrxDefaultViewAdapter.prototype.setIsDisabled = function (isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    };
    NgrxDefaultViewAdapter.prototype.handleInput = function (_a) {
        var target = _a.target;
        if (this.isCompositionSupported && this.isComposing) {
            return;
        }
        this.onChange(target.value);
    };
    NgrxDefaultViewAdapter.prototype.compositionStart = function () {
        this.isComposing = true;
    };
    NgrxDefaultViewAdapter.prototype.compositionEnd = function (_a) {
        var target = _a.target;
        this.isComposing = false;
        if (this.isCompositionSupported) {
            this.onChange(target.value);
        }
    };
    var NgrxDefaultViewAdapter_1;
    __decorate([
        HostListener('blur'),
        __metadata("design:type", Function)
    ], NgrxDefaultViewAdapter.prototype, "onTouched", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NgrxDefaultViewAdapter.prototype, "ngrxFormControlState", null);
    __decorate([
        HostListener('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NgrxDefaultViewAdapter.prototype, "handleInput", null);
    __decorate([
        HostListener('compositionstart'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NgrxDefaultViewAdapter.prototype, "compositionStart", null);
    __decorate([
        HostListener('compositionend', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NgrxDefaultViewAdapter.prototype, "compositionEnd", null);
    NgrxDefaultViewAdapter = NgrxDefaultViewAdapter_1 = __decorate([
        Directive({
            selector: 'input:not([type=checkbox]):not([type=number]):not([type=radio]):not([type=range])[ngrxFormControlState],textarea[ngrxFormControlState]',
            providers: [{
                    provide: NGRX_FORM_VIEW_ADAPTER,
                    useExisting: forwardRef(function () { return NgrxDefaultViewAdapter_1; }),
                    multi: true,
                }],
        }),
        __param(2, Optional()), __param(2, Inject(PLATFORM_ID)),
        __param(3, Optional()), __param(3, Inject('ngrx-forms/never')),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef, Object, Object])
    ], NgrxDefaultViewAdapter);
    return NgrxDefaultViewAdapter;
}());

// tslint:disable:directive-class-suffix
var NgrxNumberViewAdapter = /** @class */ (function () {
    function NgrxNumberViewAdapter(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nativeIdWasSet = false;
        this.onChange = function () { return void 0; };
        this.onTouched = function () { return void 0; };
    }
    NgrxNumberViewAdapter_1 = NgrxNumberViewAdapter;
    Object.defineProperty(NgrxNumberViewAdapter.prototype, "ngrxFormControlState", {
        set: function (value) {
            if (!value) {
                throw new Error('The control state must not be undefined!');
            }
            this.state = value;
            var nativeId = this.elementRef.nativeElement.id;
            var shouldSetNativeId = value.id !== nativeId && this.nativeIdWasSet;
            if (shouldSetNativeId) {
                this.renderer.setProperty(this.elementRef.nativeElement, 'id', value.id);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgrxNumberViewAdapter.prototype.ngAfterViewInit = function () {
        var nativeId = this.elementRef.nativeElement.id;
        var shouldSetNativeId = this.state.id !== nativeId && !nativeId;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', this.state.id);
            this.nativeIdWasSet = true;
        }
    };
    NgrxNumberViewAdapter.prototype.setViewValue = function (value) {
        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
        var normalizedValue = value === null ? '' : value;
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
    };
    NgrxNumberViewAdapter.prototype.setOnChangeCallback = function (fn) {
        this.onChange = fn;
    };
    NgrxNumberViewAdapter.prototype.setOnTouchedCallback = function (fn) {
        this.onTouched = fn;
    };
    NgrxNumberViewAdapter.prototype.setIsDisabled = function (isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    };
    NgrxNumberViewAdapter.prototype.handleInput = function (_a) {
        var target = _a.target;
        var value = target.value;
        this.onChange(value === '' ? null : parseFloat(value));
    };
    var NgrxNumberViewAdapter_1;
    __decorate([
        HostListener('blur'),
        __metadata("design:type", Function)
    ], NgrxNumberViewAdapter.prototype, "onTouched", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NgrxNumberViewAdapter.prototype, "ngrxFormControlState", null);
    __decorate([
        HostListener('change', ['$event']),
        HostListener('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NgrxNumberViewAdapter.prototype, "handleInput", null);
    NgrxNumberViewAdapter = NgrxNumberViewAdapter_1 = __decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'input[type=number][ngrxFormControlState]',
            providers: [{
                    provide: NGRX_FORM_VIEW_ADAPTER,
                    useExisting: forwardRef(function () { return NgrxNumberViewAdapter_1; }),
                    multi: true,
                }],
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], NgrxNumberViewAdapter);
    return NgrxNumberViewAdapter;
}());

// tslint:disable:directive-class-suffix
var NgrxSelectViewAdapter = /** @class */ (function () {
    function NgrxSelectViewAdapter(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.optionMap = {};
        this.idCounter = 0;
        this.selectedId = null;
        this.value = undefined;
        this.nativeIdWasSet = false;
        this.onChangeFn = function () { return void 0; };
        this.onTouched = function () { return void 0; };
    }
    NgrxSelectViewAdapter_1 = NgrxSelectViewAdapter;
    Object.defineProperty(NgrxSelectViewAdapter.prototype, "ngrxFormControlState", {
        set: function (value) {
            if (!value) {
                throw new Error('The control state must not be undefined!');
            }
            this.state = value;
            var nativeId = this.elementRef.nativeElement.id;
            var shouldSetNativeId = value.id !== nativeId && this.nativeIdWasSet;
            if (shouldSetNativeId) {
                this.renderer.setProperty(this.elementRef.nativeElement, 'id', value.id);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgrxSelectViewAdapter.prototype.ngAfterViewInit = function () {
        var nativeId = this.elementRef.nativeElement.id;
        var shouldSetNativeId = this.state.id !== nativeId && !nativeId;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', this.state.id);
            this.nativeIdWasSet = true;
        }
    };
    NgrxSelectViewAdapter.prototype.setViewValue = function (value) {
        this.value = value;
        this.selectedId = this.getOptionId(value);
        if (this.selectedId === null) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'selectedIndex', -1);
        }
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', this.selectedId);
    };
    NgrxSelectViewAdapter.prototype.onChange = function (_a) {
        var target = _a.target;
        this.selectedId = target.value;
        var value = this.optionMap[this.selectedId];
        this.value = value;
        this.onChangeFn(value);
    };
    NgrxSelectViewAdapter.prototype.setOnChangeCallback = function (fn) {
        this.onChangeFn = fn;
    };
    NgrxSelectViewAdapter.prototype.setOnTouchedCallback = function (fn) {
        this.onTouched = fn;
    };
    NgrxSelectViewAdapter.prototype.setIsDisabled = function (isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    };
    NgrxSelectViewAdapter.prototype.createOptionId = function () {
        var id = this.idCounter.toString();
        this.idCounter += 1;
        return id;
    };
    NgrxSelectViewAdapter.prototype.updateOptionValue = function (id, value) {
        this.optionMap[id] = value;
        if (this.selectedId === id) {
            this.onChangeFn(value);
        }
        else if (value === this.value) {
            this.setViewValue(value);
        }
    };
    NgrxSelectViewAdapter.prototype.deregisterOption = function (id) {
        delete this.optionMap[id];
    };
    NgrxSelectViewAdapter.prototype.getOptionId = function (value) {
        var e_1, _a;
        try {
            for (var _b = __values(Array.from(Object.keys(this.optionMap))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var id = _c.value;
                if (this.optionMap[id] === value) {
                    return id;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    var NgrxSelectViewAdapter_1;
    __decorate([
        HostListener('blur'),
        __metadata("design:type", Function)
    ], NgrxSelectViewAdapter.prototype, "onTouched", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NgrxSelectViewAdapter.prototype, "ngrxFormControlState", null);
    __decorate([
        HostListener('change', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NgrxSelectViewAdapter.prototype, "onChange", null);
    NgrxSelectViewAdapter = NgrxSelectViewAdapter_1 = __decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'select:not([multiple])[ngrxFormControlState]',
            providers: [{
                    provide: NGRX_FORM_VIEW_ADAPTER,
                    useExisting: forwardRef(function () { return NgrxSelectViewAdapter_1; }),
                    multi: true,
                }],
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], NgrxSelectViewAdapter);
    return NgrxSelectViewAdapter;
}());
var ɵ0 = function () { return ''; }, ɵ1 = function () { return void 0; }, ɵ2 = function () { return void 0; };
var NULL_VIEW_ADAPTER = {
    createOptionId: ɵ0,
    deregisterOption: ɵ1,
    updateOptionValue: ɵ2,
};
var ɵ3 = function () { return void 0; };
var NULL_RENDERER = {
    setProperty: ɵ3,
};
var NgrxSelectOption = /** @class */ (function () {
    function NgrxSelectOption(element, renderer, viewAdapter) {
        this.element = element;
        this.renderer = renderer;
        this.viewAdapter = viewAdapter;
        this.isInitialized = false;
        this.renderer = viewAdapter ? renderer : NULL_RENDERER;
        this.viewAdapter = viewAdapter || NULL_VIEW_ADAPTER;
        this.id = this.viewAdapter.createOptionId();
    }
    Object.defineProperty(NgrxSelectOption.prototype, "value", {
        set: function (value) {
            // this cannot be done inside ngOnInit since the value property
            // must be already set when the option value is updated in the view
            // adapter and the initial binding of 'value' happens before
            // ngOnInit runs
            if (!this.isInitialized) {
                this.isInitialized = true;
                this.renderer.setProperty(this.element.nativeElement, 'value', this.id);
            }
            this.viewAdapter.updateOptionValue(this.id, value);
        },
        enumerable: true,
        configurable: true
    });
    NgrxSelectOption.prototype.ngOnDestroy = function () {
        this.viewAdapter.deregisterOption(this.id);
    };
    __decorate([
        Input('value'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NgrxSelectOption.prototype, "value", null);
    NgrxSelectOption = __decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'option',
        }),
        __param(2, Host()), __param(2, Optional()),
        __metadata("design:paramtypes", [ElementRef,
            Renderer2,
            NgrxSelectViewAdapter])
    ], NgrxSelectOption);
    return NgrxSelectOption;
}());

// tslint:disable:directive-class-suffix
var NgrxSelectMultipleViewAdapter = /** @class */ (function () {
    function NgrxSelectMultipleViewAdapter(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.options = {};
        this.optionValues = {};
        this.idCounter = 0;
        this.selectedIds = [];
        this.nativeIdWasSet = false;
        this.onChangeFn = function () { return void 0; };
        this.onTouched = function () { return void 0; };
    }
    NgrxSelectMultipleViewAdapter_1 = NgrxSelectMultipleViewAdapter;
    Object.defineProperty(NgrxSelectMultipleViewAdapter.prototype, "ngrxFormControlState", {
        set: function (value) {
            if (!value) {
                throw new Error('The control state must not be undefined!');
            }
            this.state = value;
            var nativeId = this.elementRef.nativeElement.id;
            var shouldSetNativeId = value.id !== nativeId && this.nativeIdWasSet;
            if (shouldSetNativeId) {
                this.renderer.setProperty(this.elementRef.nativeElement, 'id', value.id);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgrxSelectMultipleViewAdapter.prototype.ngAfterViewInit = function () {
        var nativeId = this.elementRef.nativeElement.id;
        var shouldSetNativeId = this.state.id !== nativeId && !nativeId;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', this.state.id);
            this.nativeIdWasSet = true;
        }
    };
    NgrxSelectMultipleViewAdapter.prototype.setViewValue = function (value) {
        var _this = this;
        if (value === null) {
            value = [];
        }
        if (!Array.isArray(value)) {
            throw new Error("the value provided to a NgrxSelectMultipleViewAdapter must be null or an array; got " + value + " of type " + typeof value); // `
        }
        this.selectedIds = value.map(function (v) { return _this.getOptionId(v); }).filter(function (id) { return id !== null; }).map(function (id) { return id; });
        Object.keys(this.options).forEach(function (id) { return _this.options[id].isSelected = _this.selectedIds.indexOf(id) >= 0; });
    };
    NgrxSelectMultipleViewAdapter.prototype.onChange = function () {
        var _this = this;
        this.selectedIds = Object.keys(this.options).filter(function (id) { return _this.options[id].isSelected; });
        var value = this.selectedIds.map(function (id) { return _this.optionValues[id]; });
        this.onChangeFn(value);
    };
    NgrxSelectMultipleViewAdapter.prototype.setOnChangeCallback = function (fn) {
        this.onChangeFn = fn;
    };
    NgrxSelectMultipleViewAdapter.prototype.setOnTouchedCallback = function (fn) {
        this.onTouched = fn;
    };
    NgrxSelectMultipleViewAdapter.prototype.setIsDisabled = function (isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    };
    NgrxSelectMultipleViewAdapter.prototype.registerOption = function (option) {
        var id = this.idCounter.toString();
        this.options[id] = option;
        this.idCounter += 1;
        return id;
    };
    NgrxSelectMultipleViewAdapter.prototype.updateOptionValue = function (id, value) {
        this.optionValues[id] = value;
        if (this.selectedIds.indexOf(id) >= 0) {
            this.onChange();
        }
    };
    NgrxSelectMultipleViewAdapter.prototype.deregisterOption = function (id) {
        delete this.options[id];
        delete this.optionValues[id];
    };
    NgrxSelectMultipleViewAdapter.prototype.getOptionId = function (value) {
        var e_1, _a;
        try {
            for (var _b = __values(Array.from(Object.keys(this.optionValues))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var id = _c.value;
                if (this.optionValues[id] === value) {
                    return id;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    var NgrxSelectMultipleViewAdapter_1;
    __decorate([
        HostListener('blur'),
        __metadata("design:type", Function)
    ], NgrxSelectMultipleViewAdapter.prototype, "onTouched", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NgrxSelectMultipleViewAdapter.prototype, "ngrxFormControlState", null);
    __decorate([
        HostListener('change'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NgrxSelectMultipleViewAdapter.prototype, "onChange", null);
    NgrxSelectMultipleViewAdapter = NgrxSelectMultipleViewAdapter_1 = __decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'select[multiple][ngrxFormControlState]',
            providers: [{
                    provide: NGRX_FORM_VIEW_ADAPTER,
                    useExisting: forwardRef(function () { return NgrxSelectMultipleViewAdapter_1; }),
                    multi: true,
                }],
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], NgrxSelectMultipleViewAdapter);
    return NgrxSelectMultipleViewAdapter;
}());
var ɵ0$1 = function () { return ''; }, ɵ1$1 = function () { return void 0; }, ɵ2$1 = function () { return void 0; };
var NULL_VIEW_ADAPTER$1 = {
    registerOption: ɵ0$1,
    deregisterOption: ɵ1$1,
    updateOptionValue: ɵ2$1,
};
var ɵ3$1 = function () { return void 0; };
var NULL_RENDERER$1 = {
    setProperty: ɵ3$1,
};
var NgrxSelectMultipleOption = /** @class */ (function () {
    function NgrxSelectMultipleOption(element, renderer, viewAdapter) {
        this.element = element;
        this.renderer = renderer;
        this.viewAdapter = viewAdapter;
        this.renderer = viewAdapter ? renderer : NULL_RENDERER$1;
        this.viewAdapter = viewAdapter || NULL_VIEW_ADAPTER$1;
        this.id = this.viewAdapter.registerOption(this);
    }
    Object.defineProperty(NgrxSelectMultipleOption.prototype, "value", {
        set: function (value) {
            this.viewAdapter.updateOptionValue(this.id, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxSelectMultipleOption.prototype, "isSelected", {
        get: function () {
            return this.element.nativeElement.selected;
        },
        set: function (selected) {
            this.renderer.setProperty(this.element.nativeElement, 'selected', selected);
        },
        enumerable: true,
        configurable: true
    });
    NgrxSelectMultipleOption.prototype.ngOnInit = function () {
        this.renderer.setProperty(this.element.nativeElement, 'value', this.id);
    };
    NgrxSelectMultipleOption.prototype.ngOnDestroy = function () {
        this.viewAdapter.deregisterOption(this.id);
    };
    __decorate([
        Input('value'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NgrxSelectMultipleOption.prototype, "value", null);
    NgrxSelectMultipleOption = __decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'option',
        }),
        __param(2, Host()), __param(2, Optional()),
        __metadata("design:paramtypes", [ElementRef,
            Renderer2,
            NgrxSelectMultipleViewAdapter])
    ], NgrxSelectMultipleOption);
    return NgrxSelectMultipleOption;
}());

var ɵ0$2 = function () { return void 0; };
// tslint:disable:directive-class-suffix
var NULL_RENDERER$2 = {
    setProperty: ɵ0$2,
};
/**
 * This directive is necessary to restore the default behaviour of Angular
 * when an `option` is used without an **ngrx-forms** form state. Since it
 * is not possible to select an element with a selector that considers its
 * parent the `option` directives for `select` and `select[multiple]` will
 * always be applied and therefore overriding the `[value]` binding which
 * disabled Angular's normal behaviour. This directive restores this
 * behaviour if no `select` or `select[multiple]` view adapter is found.
 * This is not a perfect solution since it may interfere with other
 * directives that try to set the `[value]` but that is very unlikely.
 */
var NgrxFallbackSelectOption = /** @class */ (function () {
    function NgrxFallbackSelectOption(element, renderer, viewAdapter, multipleViewAdapter) {
        this.element = element;
        this.renderer = renderer;
        this.renderer = viewAdapter || multipleViewAdapter ? NULL_RENDERER$2 : renderer;
    }
    Object.defineProperty(NgrxFallbackSelectOption.prototype, "value", {
        set: function (value) {
            this.renderer.setProperty(this.element.nativeElement, 'value', value);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input('value'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NgrxFallbackSelectOption.prototype, "value", null);
    NgrxFallbackSelectOption = __decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'option',
        }),
        __param(2, Host()), __param(2, Optional()),
        __param(3, Host()), __param(3, Optional()),
        __metadata("design:paramtypes", [ElementRef,
            Renderer2,
            NgrxSelectViewAdapter,
            NgrxSelectMultipleViewAdapter])
    ], NgrxFallbackSelectOption);
    return NgrxFallbackSelectOption;
}());

// tslint:disable:directive-class-suffix
var NgrxRadioViewAdapter = /** @class */ (function () {
    function NgrxRadioViewAdapter(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nativeNameWasSet = false;
        this.onChange = function () { return void 0; };
        this.onTouched = function () { return void 0; };
    }
    NgrxRadioViewAdapter_1 = NgrxRadioViewAdapter;
    Object.defineProperty(NgrxRadioViewAdapter.prototype, "value", {
        set: function (val) {
            if (val !== this.latestValue) {
                this.latestValue = val;
                if (this.isChecked) {
                    this.onChange();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxRadioViewAdapter.prototype, "ngrxFormControlState", {
        set: function (value) {
            if (!value) {
                throw new Error('The control state must not be undefined!');
            }
            this.state = value;
            var nativeName = this.elementRef.nativeElement.name;
            var shouldSetNativeName = value.id !== nativeName && this.nativeNameWasSet;
            if (shouldSetNativeName) {
                this.renderer.setProperty(this.elementRef.nativeElement, 'name', value.id);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgrxRadioViewAdapter.prototype.ngOnInit = function () {
        this.isChecked = this.elementRef.nativeElement.checked;
    };
    NgrxRadioViewAdapter.prototype.ngAfterViewInit = function () {
        var nativeName = this.elementRef.nativeElement.name;
        var shouldSetNativeName = this.state.id !== nativeName && !nativeName;
        if (shouldSetNativeName) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'name', this.state.id);
            this.nativeNameWasSet = true;
        }
    };
    NgrxRadioViewAdapter.prototype.setViewValue = function (value) {
        this.isChecked = value === this.latestValue;
        this.renderer.setProperty(this.elementRef.nativeElement, 'checked', this.isChecked);
    };
    NgrxRadioViewAdapter.prototype.setOnChangeCallback = function (fn) {
        var _this = this;
        this.onChange = function () { return fn(_this.latestValue); };
    };
    NgrxRadioViewAdapter.prototype.setOnTouchedCallback = function (fn) {
        this.onTouched = fn;
    };
    NgrxRadioViewAdapter.prototype.setIsDisabled = function (isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    };
    var NgrxRadioViewAdapter_1;
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NgrxRadioViewAdapter.prototype, "value", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NgrxRadioViewAdapter.prototype, "ngrxFormControlState", null);
    __decorate([
        HostListener('change'),
        __metadata("design:type", Function)
    ], NgrxRadioViewAdapter.prototype, "onChange", void 0);
    __decorate([
        HostListener('blur'),
        __metadata("design:type", Function)
    ], NgrxRadioViewAdapter.prototype, "onTouched", void 0);
    NgrxRadioViewAdapter = NgrxRadioViewAdapter_1 = __decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'input[type=radio][ngrxFormControlState]',
            providers: [{
                    provide: NGRX_FORM_VIEW_ADAPTER,
                    useExisting: forwardRef(function () { return NgrxRadioViewAdapter_1; }),
                    multi: true,
                }],
        }),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef])
    ], NgrxRadioViewAdapter);
    return NgrxRadioViewAdapter;
}());

// tslint:disable:directive-class-suffix
var NgrxRangeViewAdapter = /** @class */ (function () {
    function NgrxRangeViewAdapter(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nativeIdWasSet = false;
        this.onChange = function () { return void 0; };
        this.onTouched = function () { return void 0; };
    }
    NgrxRangeViewAdapter_1 = NgrxRangeViewAdapter;
    Object.defineProperty(NgrxRangeViewAdapter.prototype, "ngrxFormControlState", {
        set: function (value) {
            if (!value) {
                throw new Error('The control state must not be undefined!');
            }
            this.state = value;
            var nativeId = this.elementRef.nativeElement.id;
            var shouldSetNativeId = value.id !== nativeId && this.nativeIdWasSet;
            if (shouldSetNativeId) {
                this.renderer.setProperty(this.elementRef.nativeElement, 'id', value.id);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgrxRangeViewAdapter.prototype.ngAfterViewInit = function () {
        var nativeId = this.elementRef.nativeElement.id;
        var shouldSetNativeId = this.state.id !== nativeId && !nativeId;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', this.state.id);
            this.nativeIdWasSet = true;
        }
    };
    NgrxRangeViewAdapter.prototype.setViewValue = function (value) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', parseFloat(value));
    };
    NgrxRangeViewAdapter.prototype.setOnChangeCallback = function (fn) {
        this.onChange = fn;
    };
    NgrxRangeViewAdapter.prototype.setOnTouchedCallback = function (fn) {
        this.onTouched = fn;
    };
    NgrxRangeViewAdapter.prototype.setIsDisabled = function (isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    };
    NgrxRangeViewAdapter.prototype.handleInput = function (_a) {
        var target = _a.target;
        var value = target.value;
        this.onChange(value === '' ? null : parseFloat(value));
    };
    var NgrxRangeViewAdapter_1;
    __decorate([
        HostListener('blur'),
        __metadata("design:type", Function)
    ], NgrxRangeViewAdapter.prototype, "onTouched", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NgrxRangeViewAdapter.prototype, "ngrxFormControlState", null);
    __decorate([
        HostListener('change', ['$event']),
        HostListener('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NgrxRangeViewAdapter.prototype, "handleInput", null);
    NgrxRangeViewAdapter = NgrxRangeViewAdapter_1 = __decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'input[type=range][ngrxFormControlState]',
            providers: [{
                    provide: NGRX_FORM_VIEW_ADAPTER,
                    useExisting: forwardRef(function () { return NgrxRangeViewAdapter_1; }),
                    multi: true,
                }],
        }),
        __metadata("design:paramtypes", [Renderer2, ElementRef])
    ], NgrxRangeViewAdapter);
    return NgrxRangeViewAdapter;
}());

var BUILTIN_ADAPTERS = [
    NgrxCheckboxViewAdapter,
    NgrxRangeViewAdapter,
    NgrxNumberViewAdapter,
    NgrxSelectViewAdapter,
    NgrxSelectMultipleViewAdapter,
    NgrxRadioViewAdapter,
];
function isBuiltInViewAdapter(viewAdapter) {
    return BUILTIN_ADAPTERS.some(function (a) { return viewAdapter.constructor === a; });
}
function selectViewAdapter(viewAdapters) {
    if (!viewAdapters) {
        throw new Error('No view adapter matches!');
    }
    var defaultAdapter;
    var builtinAdapter;
    var customAdapter;
    viewAdapters.forEach(function (v) {
        if (v.constructor === NgrxDefaultViewAdapter) {
            defaultAdapter = v;
        }
        else if (isBuiltInViewAdapter(v)) {
            if (builtinAdapter) {
                throw new Error('More than one built-in view adapter matches!');
            }
            builtinAdapter = v;
        }
        else {
            if (customAdapter) {
                throw new Error('More than one custom view adapter matches!');
            }
            customAdapter = v;
        }
    });
    if (customAdapter) {
        return customAdapter;
    }
    if (builtinAdapter) {
        return builtinAdapter;
    }
    if (defaultAdapter) {
        return defaultAdapter;
    }
    throw new Error('No valid view adapter!');
}

var ɵ0$3 = function (date) { return date === null ? null : date.toISOString(); }, ɵ1$2 = function (s) { return s === null ? null : new Date(Date.parse(s)); }, ɵ2$2 = function (value) { return value === null ? null : JSON.stringify(value); }, ɵ3$2 = function (s) { return s === null ? null : JSON.parse(s); };
// tslint:disable-next-line:variable-name
var NgrxValueConverters = {
    default: function () {
        return {
            convertViewToStateValue: function (value) { return typeof value === 'object' && value !== null ? box(value) : value; },
            convertStateToViewValue: unbox,
        };
    },
    dateToISOString: {
        convertViewToStateValue: ɵ0$3,
        convertStateToViewValue: ɵ1$2,
    },
    objectToJSON: {
        convertViewToStateValue: ɵ2$2,
        convertStateToViewValue: ɵ3$2,
    },
};

var NGRX_UPDATE_ON_TYPE;
(function (NGRX_UPDATE_ON_TYPE) {
    NGRX_UPDATE_ON_TYPE["CHANGE"] = "change";
    NGRX_UPDATE_ON_TYPE["BLUR"] = "blur";
    NGRX_UPDATE_ON_TYPE["NEVER"] = "never";
})(NGRX_UPDATE_ON_TYPE || (NGRX_UPDATE_ON_TYPE = {}));
var ControlValueAccessorAdapter = /** @class */ (function () {
    function ControlValueAccessorAdapter(valueAccessor) {
        this.valueAccessor = valueAccessor;
    }
    ControlValueAccessorAdapter.prototype.setViewValue = function (value) {
        this.valueAccessor.writeValue(value);
    };
    ControlValueAccessorAdapter.prototype.setOnChangeCallback = function (fn) {
        this.valueAccessor.registerOnChange(fn);
    };
    ControlValueAccessorAdapter.prototype.setOnTouchedCallback = function (fn) {
        this.valueAccessor.registerOnTouched(fn);
    };
    ControlValueAccessorAdapter.prototype.setIsDisabled = function (isDisabled) {
        if (this.valueAccessor.setDisabledState) {
            this.valueAccessor.setDisabledState(isDisabled);
        }
    };
    return ControlValueAccessorAdapter;
}());
var NgrxFormControlDirective = /** @class */ (function () {
    function NgrxFormControlDirective(el, 
    // for the dom parameter the `null` type must be last to ensure that in the compiled output
    // there is no reference to the Document type to support non-browser platforms
    dom, actionsSubject, viewAdapters, valueAccessors) {
        this.el = el;
        this.dom = dom;
        this.actionsSubject = actionsSubject;
        this.isInitialized = false;
        this.focusTrackingIsEnabled = false;
        this.ngrxUpdateOn = NGRX_UPDATE_ON_TYPE.CHANGE;
        this.ngrxValueConverter = NgrxValueConverters.default();
        viewAdapters = viewAdapters || [];
        valueAccessors = valueAccessors || [];
        if (valueAccessors.length > 1) {
            throw new Error('More than one custom control value accessor matches!');
        }
        this.viewAdapter = valueAccessors.length > 0
            ? new ControlValueAccessorAdapter(valueAccessors[0])
            : selectViewAdapter(viewAdapters);
    }
    Object.defineProperty(NgrxFormControlDirective.prototype, "ngrxFormControlState", {
        set: function (newState) {
            if (!newState) {
                throw new Error('The control state must not be undefined!');
            }
            var oldState = this.state;
            this.state = newState;
            if (this.isInitialized) {
                this.updateViewIfControlIdChanged(newState, oldState);
                this.updateViewIfValueChanged(newState, oldState);
                this.updateViewIfIsDisabledChanged(newState, oldState);
                this.updateViewIfIsFocusedChanged(newState, oldState);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxFormControlDirective.prototype, "ngrxEnableFocusTracking", {
        set: function (value) {
            if (value && !this.dom) {
                throw new Error('focus tracking is only supported on the browser platform');
            }
            this.focusTrackingIsEnabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxFormControlDirective.prototype, "focusRegionStartAttr", {
        // TODO: move this into a separate directive
        // automatically apply the attribute that's used by the CDK to set initial focus
        get: function () {
            return this.state && this.state.isFocused ? '' : null;
        },
        enumerable: true,
        configurable: true
    });
    NgrxFormControlDirective.prototype.updateViewIfControlIdChanged = function (newState, oldState) {
        if (oldState && newState.id === oldState.id) {
            return;
        }
        this.stateValue = newState.value;
        this.viewValue = this.ngrxValueConverter.convertStateToViewValue(this.stateValue);
        this.viewAdapter.setViewValue(this.viewValue);
        if (this.viewAdapter.setIsDisabled) {
            this.viewAdapter.setIsDisabled(newState.isDisabled);
        }
    };
    NgrxFormControlDirective.prototype.updateViewIfValueChanged = function (newState, _) {
        if (newState.value === this.stateValue) {
            return;
        }
        this.stateValue = newState.value;
        this.viewValue = this.ngrxValueConverter.convertStateToViewValue(newState.value);
        this.viewAdapter.setViewValue(this.viewValue);
    };
    NgrxFormControlDirective.prototype.updateViewIfIsDisabledChanged = function (newState, oldState) {
        if (!this.viewAdapter.setIsDisabled) {
            return;
        }
        if (oldState && newState.isDisabled === oldState.isDisabled) {
            return;
        }
        this.viewAdapter.setIsDisabled(newState.isDisabled);
    };
    NgrxFormControlDirective.prototype.updateViewIfIsFocusedChanged = function (newState, oldState) {
        if (!this.focusTrackingIsEnabled) {
            return;
        }
        if (oldState && newState.isFocused === oldState.isFocused) {
            return;
        }
        if (newState.isFocused) {
            this.el.nativeElement.focus();
        }
        else {
            this.el.nativeElement.blur();
        }
    };
    NgrxFormControlDirective.prototype.dispatchAction = function (action) {
        if (this.actionsSubject !== null) {
            this.actionsSubject.next(action);
        }
        else {
            throw new Error('ActionsSubject must be present in order to dispatch actions!');
        }
    };
    NgrxFormControlDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.state) {
            throw new Error('The form state must not be undefined!');
        }
        this.isInitialized = true;
        this.updateViewIfControlIdChanged(this.state, undefined);
        this.updateViewIfValueChanged(this.state, undefined);
        this.updateViewIfIsDisabledChanged(this.state, undefined);
        this.updateViewIfIsFocusedChanged(this.state, undefined);
        var dispatchMarkAsDirtyAction = function () {
            if (_this.state.isPristine) {
                _this.dispatchAction(new MarkAsDirtyAction(_this.state.id));
            }
        };
        var dispatchSetValueAction = function () {
            _this.stateValue = _this.ngrxValueConverter.convertViewToStateValue(_this.viewValue);
            if (_this.stateValue !== _this.state.value) {
                _this.dispatchAction(new SetValueAction(_this.state.id, _this.stateValue));
                dispatchMarkAsDirtyAction();
            }
        };
        this.viewAdapter.setOnChangeCallback(function (viewValue) {
            _this.viewValue = viewValue;
            if (_this.ngrxUpdateOn === NGRX_UPDATE_ON_TYPE.CHANGE) {
                dispatchSetValueAction();
            }
        });
        this.viewAdapter.setOnTouchedCallback(function () {
            if (!_this.state.isTouched && _this.ngrxUpdateOn !== NGRX_UPDATE_ON_TYPE.NEVER) {
                _this.dispatchAction(new MarkAsTouchedAction(_this.state.id));
            }
            if (_this.ngrxUpdateOn === NGRX_UPDATE_ON_TYPE.BLUR) {
                dispatchSetValueAction();
            }
        });
    };
    NgrxFormControlDirective.prototype.ngAfterViewInit = function () {
        // we need to update the view again after it was initialized since some
        // controls depend on child elements for setting the value (e.g. selects)
        this.viewAdapter.setViewValue(this.viewValue);
        if (this.viewAdapter.setIsDisabled) {
            this.viewAdapter.setIsDisabled(this.state.isDisabled);
        }
    };
    NgrxFormControlDirective.prototype.onFocusChange = function () {
        if (!this.focusTrackingIsEnabled) {
            return;
        }
        var isControlFocused = this.el.nativeElement === this.dom.activeElement;
        if (isControlFocused !== this.state.isFocused) {
            this.dispatchAction(isControlFocused ? new FocusAction(this.state.id) : new UnfocusAction(this.state.id));
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NgrxFormControlDirective.prototype, "ngrxFormControlState", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NgrxFormControlDirective.prototype, "ngrxUpdateOn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], NgrxFormControlDirective.prototype, "ngrxEnableFocusTracking", null);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NgrxFormControlDirective.prototype, "ngrxValueConverter", void 0);
    __decorate([
        HostBinding('attr.cdk-focus-region-start'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NgrxFormControlDirective.prototype, "focusRegionStartAttr", null);
    __decorate([
        HostListener('focusin'),
        HostListener('focusout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NgrxFormControlDirective.prototype, "onFocusChange", null);
    NgrxFormControlDirective = __decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: ':not([ngrxFormsAction])[ngrxFormControlState]',
        }),
        __param(1, Optional()), __param(1, Inject(DOCUMENT)),
        __param(2, Optional()), __param(2, Inject(ActionsSubject)),
        __param(3, Self()), __param(3, Optional()), __param(3, Inject(NGRX_FORM_VIEW_ADAPTER)),
        __param(4, Self()), __param(4, Optional()), __param(4, Inject(NG_VALUE_ACCESSOR)),
        __metadata("design:paramtypes", [ElementRef, Object, Object, Array, Array])
    ], NgrxFormControlDirective);
    return NgrxFormControlDirective;
}());

var NgrxLocalFormControlDirective = /** @class */ (function (_super) {
    __extends(NgrxLocalFormControlDirective, _super);
    function NgrxLocalFormControlDirective(el, dom, viewAdapters, valueAccessors) {
        var _this = _super.call(this, el, dom, null, viewAdapters, valueAccessors) || this;
        _this.ngrxFormsAction = new EventEmitter();
        return _this;
    }
    NgrxLocalFormControlDirective.prototype.dispatchAction = function (action) {
        this.ngrxFormsAction.emit(action);
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NgrxLocalFormControlDirective.prototype, "ngrxFormsAction", void 0);
    NgrxLocalFormControlDirective = __decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: '[ngrxFormControlState][ngrxFormsAction]',
        }),
        __param(1, Optional()), __param(1, Inject(DOCUMENT)),
        __param(2, Self()), __param(2, Optional()), __param(2, Inject(NGRX_FORM_VIEW_ADAPTER)),
        __param(3, Self()), __param(3, Optional()), __param(3, Inject(NG_VALUE_ACCESSOR)),
        __metadata("design:paramtypes", [ElementRef, Object, Array, Array])
    ], NgrxLocalFormControlDirective);
    return NgrxLocalFormControlDirective;
}(NgrxFormControlDirective));

var NgrxFormDirective = /** @class */ (function () {
    function NgrxFormDirective(actionsSubject) {
        this.actionsSubject = actionsSubject;
        this.actionsSubject = actionsSubject;
    }
    NgrxFormDirective.prototype.dispatchAction = function (action) {
        if (this.actionsSubject !== null) {
            this.actionsSubject.next(action);
        }
        else {
            throw new Error('ActionsSubject must be present in order to dispatch actions!');
        }
    };
    NgrxFormDirective.prototype.ngOnInit = function () {
        if (!this.state) {
            throw new Error('The form state must not be undefined!');
        }
    };
    NgrxFormDirective.prototype.onSubmit = function (event) {
        event.preventDefault();
        if (this.state.isUnsubmitted) {
            this.dispatchAction(new MarkAsSubmittedAction(this.state.id));
        }
    };
    __decorate([
        Input('ngrxFormState'),
        __metadata("design:type", Object)
    ], NgrxFormDirective.prototype, "state", void 0);
    __decorate([
        HostListener('submit', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NgrxFormDirective.prototype, "onSubmit", null);
    NgrxFormDirective = __decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'form:not([ngrxFormsAction])[ngrxFormState]',
        }),
        __param(0, Optional()), __param(0, Inject(ActionsSubject)),
        __metadata("design:paramtypes", [Object])
    ], NgrxFormDirective);
    return NgrxFormDirective;
}());

var NgrxLocalFormDirective = /** @class */ (function (_super) {
    __extends(NgrxLocalFormDirective, _super);
    function NgrxLocalFormDirective() {
        var _this = _super.call(this, null) || this;
        _this.ngrxFormsAction = new EventEmitter();
        return _this;
    }
    NgrxLocalFormDirective.prototype.dispatchAction = function (action) {
        this.ngrxFormsAction.emit(action);
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NgrxLocalFormDirective.prototype, "ngrxFormsAction", void 0);
    NgrxLocalFormDirective = __decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'form[ngrxFormState][ngrxFormsAction]',
        }),
        __metadata("design:paramtypes", [])
    ], NgrxLocalFormDirective);
    return NgrxLocalFormDirective;
}(NgrxFormDirective));

/**
 * Lists the available status class names based on the property
 * they are depending on.
 */
var NGRX_STATUS_CLASS_NAMES = {
    isValid: 'ngrx-forms-valid',
    isInvalid: 'ngrx-forms-invalid',
    isDirty: 'ngrx-forms-dirty',
    isPristine: 'ngrx-forms-pristine',
    isTouched: 'ngrx-forms-touched',
    isUntouched: 'ngrx-forms-untouched',
    isSubmitted: 'ngrx-forms-submitted',
    isUnsubmitted: 'ngrx-forms-unsubmitted',
    isValidationPending: 'ngrx-forms-validation-pending',
};
var NgrxStatusCssClassesDirective = /** @class */ (function () {
    function NgrxStatusCssClassesDirective() {
    }
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "ngrxFormControlState", {
        set: function (state) {
            this.state = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "ngrxFormState", {
        set: function (state) {
            this.state = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "isValid", {
        get: function () {
            return this.state.isValid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "isInvalid", {
        get: function () {
            return this.state.isInvalid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "isDirty", {
        get: function () {
            return this.state.isDirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "isPristine", {
        get: function () {
            return this.state.isPristine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "isTouched", {
        get: function () {
            return this.state.isTouched;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "isUntouched", {
        get: function () {
            return this.state.isUntouched;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "isSubmitted", {
        get: function () {
            return this.state.isSubmitted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "isUnsubmitted", {
        get: function () {
            return this.state.isUnsubmitted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "isValidationPending", {
        get: function () {
            return this.state.isValidationPending;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NgrxStatusCssClassesDirective.prototype, "ngrxFormControlState", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NgrxStatusCssClassesDirective.prototype, "ngrxFormState", null);
    __decorate([
        HostBinding("class." + NGRX_STATUS_CLASS_NAMES.isValid),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NgrxStatusCssClassesDirective.prototype, "isValid", null);
    __decorate([
        HostBinding("class." + NGRX_STATUS_CLASS_NAMES.isInvalid),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NgrxStatusCssClassesDirective.prototype, "isInvalid", null);
    __decorate([
        HostBinding("class." + NGRX_STATUS_CLASS_NAMES.isDirty),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NgrxStatusCssClassesDirective.prototype, "isDirty", null);
    __decorate([
        HostBinding("class." + NGRX_STATUS_CLASS_NAMES.isPristine),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NgrxStatusCssClassesDirective.prototype, "isPristine", null);
    __decorate([
        HostBinding("class." + NGRX_STATUS_CLASS_NAMES.isTouched),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NgrxStatusCssClassesDirective.prototype, "isTouched", null);
    __decorate([
        HostBinding("class." + NGRX_STATUS_CLASS_NAMES.isUntouched),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NgrxStatusCssClassesDirective.prototype, "isUntouched", null);
    __decorate([
        HostBinding("class." + NGRX_STATUS_CLASS_NAMES.isSubmitted),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NgrxStatusCssClassesDirective.prototype, "isSubmitted", null);
    __decorate([
        HostBinding("class." + NGRX_STATUS_CLASS_NAMES.isUnsubmitted),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NgrxStatusCssClassesDirective.prototype, "isUnsubmitted", null);
    __decorate([
        HostBinding("class." + NGRX_STATUS_CLASS_NAMES.isValidationPending),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], NgrxStatusCssClassesDirective.prototype, "isValidationPending", null);
    NgrxStatusCssClassesDirective = __decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'form[ngrxFormState],[ngrxFormControlState]',
        })
    ], NgrxStatusCssClassesDirective);
    return NgrxStatusCssClassesDirective;
}());

var exportsAndDeclarations = [
    NgrxFormControlDirective,
    NgrxLocalFormControlDirective,
    NgrxFormDirective,
    NgrxLocalFormDirective,
    NgrxCheckboxViewAdapter,
    NgrxDefaultViewAdapter,
    NgrxNumberViewAdapter,
    NgrxRadioViewAdapter,
    NgrxRangeViewAdapter,
    NgrxSelectMultipleOption,
    NgrxSelectMultipleViewAdapter,
    NgrxSelectOption,
    NgrxSelectViewAdapter,
    NgrxFallbackSelectOption,
    NgrxStatusCssClassesDirective,
];
var NgrxFormsModule = /** @class */ (function () {
    function NgrxFormsModule() {
    }
    NgrxFormsModule = __decorate([
        NgModule({
            declarations: exportsAndDeclarations,
            exports: exportsAndDeclarations,
        })
    ], NgrxFormsModule);
    return NgrxFormsModule;
}());

/**
 * ngrx-forms
 * Proper integration of forms in Angular applications using Ngrx
 * Written by Jonathan Ziller.
 * MIT license.
 * https://github.com/MrWolfZ/ngrx-forms
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ALL_NGRX_FORMS_ACTION_TYPES, AddArrayControlAction, AddGroupControlAction, ClearAsyncErrorAction, DisableAction, EnableAction, FocusAction, MarkAsDirtyAction, MarkAsPristineAction, MarkAsSubmittedAction, MarkAsTouchedAction, MarkAsUnsubmittedAction, MarkAsUntouchedAction, MoveArrayControlAction, NGRX_FORM_VIEW_ADAPTER, NGRX_STATUS_CLASS_NAMES, NgrxCheckboxViewAdapter, NgrxDefaultViewAdapter, NgrxFallbackSelectOption, NgrxFormControlDirective, NgrxFormDirective, NgrxFormsModule, NgrxLocalFormControlDirective, NgrxLocalFormDirective, NgrxNumberViewAdapter, NgrxRadioViewAdapter, NgrxRangeViewAdapter, NgrxSelectMultipleOption, NgrxSelectMultipleViewAdapter, NgrxSelectOption, NgrxSelectViewAdapter, NgrxStatusCssClassesDirective, NgrxValueConverters, RemoveArrayControlAction, RemoveGroupControlAction, ResetAction, SetAsyncErrorAction, SetErrorsAction, SetUserDefinedPropertyAction, SetValueAction, StartAsyncValidationAction, SwapArrayControlAction, UnfocusAction, addArrayControl, addGroupControl, box, clearAsyncError, compose, createFormArrayState, createFormControlState, createFormGroupState, createFormStateReducerWithUpdate, disable, enable, focus, formArrayReducer, formControlReducer, formGroupReducer, formStateReducer, isArrayState, isBoxed, isGroupState, isNgrxFormsAction, markAsDirty, markAsPristine, markAsSubmitted, markAsTouched, markAsUnsubmitted, markAsUntouched, onNgrxForms, onNgrxFormsAction, removeArrayControl, removeGroupControl, reset, setAsyncError, setErrors, setUserDefinedProperty, setValue, startAsyncValidation, unbox, unfocus, updateArray, updateArrayWithFilter, updateGroup, updateRecursive, validate, wrapReducerWithFormStateUpdate, isFormState as ɵa, verifyFormControlValueIsValid as ɵb, abstractControlReducer as ɵc };
//# sourceMappingURL=ngrx-forms.js.map
