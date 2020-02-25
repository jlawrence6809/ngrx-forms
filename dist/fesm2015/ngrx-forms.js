import { InjectionToken, HostListener, Input, Directive, forwardRef, Renderer2, ElementRef, Optional, Inject, PLATFORM_ID, Host, HostBinding, Self, EventEmitter, Output, NgModule } from '@angular/core';
import { __decorate, __metadata, __param } from 'tslib';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ActionsSubject } from '@ngrx/store';

// NOTE: the explicit type declaration for the `TYPE` properties is required
// for the output declarations to properly use the literal string type instead
// of just `string`
class SetValueAction {
    constructor(controlId, value) {
        this.controlId = controlId;
        this.value = value;
        this.type = SetValueAction.TYPE;
    }
}
SetValueAction.TYPE = 'ngrx/forms/SET_VALUE';
class SetErrorsAction {
    constructor(controlId, errors) {
        this.controlId = controlId;
        this.errors = errors;
        this.type = SetErrorsAction.TYPE;
    }
}
SetErrorsAction.TYPE = 'ngrx/forms/SET_ERRORS';
class SetAsyncErrorAction {
    constructor(controlId, name, value) {
        this.controlId = controlId;
        this.name = name;
        this.value = value;
        this.type = SetAsyncErrorAction.TYPE;
    }
}
SetAsyncErrorAction.TYPE = 'ngrx/forms/SET_ASYNC_ERROR';
class ClearAsyncErrorAction {
    constructor(controlId, name) {
        this.controlId = controlId;
        this.name = name;
        this.type = ClearAsyncErrorAction.TYPE;
    }
}
ClearAsyncErrorAction.TYPE = 'ngrx/forms/CLEAR_ASYNC_ERROR';
class StartAsyncValidationAction {
    constructor(controlId, name) {
        this.controlId = controlId;
        this.name = name;
        this.type = StartAsyncValidationAction.TYPE;
    }
}
StartAsyncValidationAction.TYPE = 'ngrx/forms/START_ASYNC_VALIDATION';
class MarkAsDirtyAction {
    constructor(controlId) {
        this.controlId = controlId;
        this.type = MarkAsDirtyAction.TYPE;
    }
}
MarkAsDirtyAction.TYPE = 'ngrx/forms/MARK_AS_DIRTY';
class MarkAsPristineAction {
    constructor(controlId) {
        this.controlId = controlId;
        this.type = MarkAsPristineAction.TYPE;
    }
}
MarkAsPristineAction.TYPE = 'ngrx/forms/MARK_AS_PRISTINE';
class EnableAction {
    constructor(controlId) {
        this.controlId = controlId;
        this.type = EnableAction.TYPE;
    }
}
EnableAction.TYPE = 'ngrx/forms/ENABLE';
class DisableAction {
    constructor(controlId) {
        this.controlId = controlId;
        this.type = DisableAction.TYPE;
    }
}
DisableAction.TYPE = 'ngrx/forms/DISABLE';
class MarkAsTouchedAction {
    constructor(controlId) {
        this.controlId = controlId;
        this.type = MarkAsTouchedAction.TYPE;
    }
}
MarkAsTouchedAction.TYPE = 'ngrx/forms/MARK_AS_TOUCHED';
class MarkAsUntouchedAction {
    constructor(controlId) {
        this.controlId = controlId;
        this.type = MarkAsUntouchedAction.TYPE;
    }
}
MarkAsUntouchedAction.TYPE = 'ngrx/forms/MARK_AS_UNTOUCHED';
class FocusAction {
    constructor(controlId) {
        this.controlId = controlId;
        this.type = FocusAction.TYPE;
    }
}
FocusAction.TYPE = 'ngrx/forms/FOCUS';
class UnfocusAction {
    constructor(controlId) {
        this.controlId = controlId;
        this.type = UnfocusAction.TYPE;
    }
}
UnfocusAction.TYPE = 'ngrx/forms/UNFOCUS';
class MarkAsSubmittedAction {
    constructor(controlId) {
        this.controlId = controlId;
        this.type = MarkAsSubmittedAction.TYPE;
    }
}
MarkAsSubmittedAction.TYPE = 'ngrx/forms/MARK_AS_SUBMITTED';
class MarkAsUnsubmittedAction {
    constructor(controlId) {
        this.controlId = controlId;
        this.type = MarkAsUnsubmittedAction.TYPE;
    }
}
MarkAsUnsubmittedAction.TYPE = 'ngrx/forms/MARK_AS_UNSUBMITTED';
class AddArrayControlAction {
    constructor(controlId, value, index) {
        this.controlId = controlId;
        this.value = value;
        this.index = index;
        this.type = AddArrayControlAction.TYPE;
    }
}
AddArrayControlAction.TYPE = 'ngrx/forms/ADD_ARRAY_CONTROL';
class AddGroupControlAction {
    constructor(controlId, name, value) {
        this.controlId = controlId;
        this.name = name;
        this.value = value;
        this.type = AddGroupControlAction.TYPE;
    }
}
AddGroupControlAction.TYPE = 'ngrx/forms/ADD_GROUP_CONTROL';
class RemoveArrayControlAction {
    constructor(controlId, index) {
        this.controlId = controlId;
        this.index = index;
        this.type = RemoveArrayControlAction.TYPE;
    }
}
RemoveArrayControlAction.TYPE = 'ngrx/forms/REMOVE_ARRAY_CONTROL';
class SwapArrayControlAction {
    constructor(controlId, fromIndex, toIndex) {
        this.controlId = controlId;
        this.fromIndex = fromIndex;
        this.toIndex = toIndex;
        this.type = SwapArrayControlAction.TYPE;
    }
}
SwapArrayControlAction.TYPE = 'ngrx/forms/SWAP_ARRAY_CONTROL';
class MoveArrayControlAction {
    constructor(controlId, fromIndex, toIndex) {
        this.controlId = controlId;
        this.fromIndex = fromIndex;
        this.toIndex = toIndex;
        this.type = MoveArrayControlAction.TYPE;
    }
}
MoveArrayControlAction.TYPE = 'ngrx/forms/MOVE_ARRAY_CONTROL';
class RemoveGroupControlAction {
    constructor(controlId, name) {
        this.controlId = controlId;
        this.name = name;
        this.type = RemoveGroupControlAction.TYPE;
    }
}
RemoveGroupControlAction.TYPE = 'ngrx/forms/REMOVE_CONTROL';
class SetUserDefinedPropertyAction {
    constructor(controlId, name, value) {
        this.controlId = controlId;
        this.name = name;
        this.value = value;
        this.type = SetUserDefinedPropertyAction.TYPE;
    }
}
SetUserDefinedPropertyAction.TYPE = 'ngrx/forms/SET_USER_DEFINED_PROPERTY';
class ResetAction {
    constructor(controlId) {
        this.controlId = controlId;
        this.type = ResetAction.TYPE;
    }
}
ResetAction.TYPE = 'ngrx/forms/RESET';
function isNgrxFormsAction(action) {
    return !!action.type && action.type.startsWith('ngrx/forms/');
}
const ALL_NGRX_FORMS_ACTION_TYPES = [
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
        value,
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
    return Object.keys(value).reduce((a, k) => Object.assign(a, { [k]: unbox(value[k]) }), {});
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
function deepEquals(_1, _2, ..._3) {
    let i;
    let l;
    let leftChain;
    let rightChain;
    function compare2Objects(x, y) {
        let p;
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
        const errorMsg = 'Form control states only support undefined, null, string, number, and boolean values as well as boxed values';
        throw new Error(`${errorMsg}; got ${JSON.stringify(value)} of type ${typeof value}`); // `;
    }
    if (value.value === null || ['string', 'number', 'boolean', 'undefined'].indexOf(typeof value.value) >= 0) {
        return value;
    }
    const serialized = JSON.stringify(value);
    const deserialized = JSON.parse(serialized);
    if (deepEquals(value, deserialized)) {
        return value;
    }
    throw new Error(`A form control value must be serializable (i.e. value === JSON.parse(JSON.stringify(value))), got: ${JSON.stringify(value)}`);
}
/**
 * This function creates a form control state with an ID and a value.
 */
function createFormControlState(id, value) {
    return {
        id,
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
    let hasChanged = Object.keys(originalValue).length !== Object.keys(controls).length;
    const newValue = Object.keys(controls).reduce((res, key) => {
        hasChanged = hasChanged || originalValue[key] !== controls[key].value;
        res[key] = controls[key].value;
        return res;
    }, {});
    return hasChanged ? newValue : originalValue;
}
function getFormGroupErrors(controls, originalErrors) {
    let hasChanged = false;
    const groupErrors = Object.keys(originalErrors)
        .filter(key => !key.startsWith('_'))
        .reduce((res, key) => Object.assign(res, { [key]: originalErrors[key] }), {});
    const newErrors = Object.keys(controls).reduce((res, key) => {
        const controlErrors = controls[key].errors;
        if (!isEmpty(controlErrors)) {
            hasChanged = hasChanged || originalErrors[`_${key}`] !== controlErrors;
            Object.assign(res, { [`_${key}`]: controls[key].errors });
        }
        else {
            hasChanged = hasChanged || originalErrors.hasOwnProperty(`_${key}`);
        }
        return res;
    }, groupErrors);
    hasChanged = hasChanged || Object.keys(originalErrors).length !== Object.keys(newErrors).length;
    return hasChanged ? newErrors : originalErrors;
}
function computeGroupState(id, controls, value, errors, pendingValidations, userDefinedProperties, flags) {
    value = getFormGroupValue(controls, value);
    errors = getFormGroupErrors(controls, errors);
    const isValid = isEmpty(errors);
    const isDirty = flags.wasOrShouldBeDirty || Object.keys(controls).some(key => controls[key].isDirty);
    const isEnabled = flags.wasOrShouldBeEnabled || Object.keys(controls).some(key => controls[key].isEnabled);
    const isTouched = flags.wasOrShouldBeTouched || Object.keys(controls).some(key => controls[key].isTouched);
    const isSubmitted = flags.wasOrShouldBeSubmitted || Object.keys(controls).some(key => controls[key].isSubmitted);
    const isValidationPending = pendingValidations.length > 0 || Object.keys(controls).some(key => controls[key].isValidationPending);
    return {
        id,
        value,
        errors,
        pendingValidations,
        isValidationPending,
        isValid,
        isInvalid: !isValid,
        isEnabled,
        isDisabled: !isEnabled,
        isDirty,
        isPristine: !isDirty,
        isTouched,
        isUntouched: !isTouched,
        isSubmitted,
        isUnsubmitted: !isSubmitted,
        userDefinedProperties,
        controls,
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
    const controls = Object.keys(initialValue)
        .map((key) => [key, createChildState(`${id}.${key}`, initialValue[key])])
        .reduce((res, [controlId, state]) => Object.assign(res, { [controlId]: state }), {});
    return computeGroupState(id, controls, initialValue, {}, [], {}, { wasOrShouldBeEnabled: true });
}
function getFormArrayValue(controls, originalValue) {
    let hasChanged = Object.keys(originalValue).length !== Object.keys(controls).length;
    const newValue = controls.map((state, i) => {
        hasChanged = hasChanged || originalValue[i] !== state.value;
        return state.value;
    });
    return hasChanged ? newValue : originalValue;
}
function getFormArrayErrors(controls, originalErrors) {
    let hasChanged = false;
    const groupErrors = Object.keys(originalErrors)
        .filter(key => !key.startsWith('_'))
        .reduce((res, key) => Object.assign(res, { [key]: originalErrors[key] }), {});
    const newErrors = controls.reduce((res, state, i) => {
        const controlErrors = state.errors;
        if (!isEmpty(controlErrors)) {
            hasChanged = hasChanged || originalErrors[`_${i}`] !== controlErrors;
            Object.assign(res, { [`_${i}`]: controlErrors });
        }
        else {
            hasChanged = hasChanged || originalErrors.hasOwnProperty(`_${i}`);
        }
        return res;
    }, groupErrors);
    hasChanged = hasChanged || Object.keys(originalErrors).length !== Object.keys(newErrors).length;
    return hasChanged ? newErrors : originalErrors;
}
function computeArrayState(id, inferredControls, value, errors, pendingValidations, userDefinedProperties, flags) {
    const controls = inferredControls;
    value = getFormArrayValue(controls, value);
    errors = getFormArrayErrors(controls, errors);
    const isValid = isEmpty(errors);
    const isDirty = flags.wasOrShouldBeDirty || controls.some(state => state.isDirty);
    const isEnabled = flags.wasOrShouldBeEnabled || controls.some(state => state.isEnabled);
    const isTouched = flags.wasOrShouldBeTouched || controls.some(state => state.isTouched);
    const isSubmitted = flags.wasOrShouldBeSubmitted || controls.some(state => state.isSubmitted);
    const isValidationPending = pendingValidations.length > 0 || controls.some(state => state.isValidationPending);
    return {
        id,
        value,
        errors,
        pendingValidations,
        isValidationPending,
        isValid,
        isInvalid: !isValid,
        isEnabled,
        isDisabled: !isEnabled,
        isDirty,
        isPristine: !isDirty,
        isTouched,
        isUntouched: !isTouched,
        isSubmitted,
        isUnsubmitted: !isSubmitted,
        userDefinedProperties,
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
    const controls = initialValue
        .map((value, i) => createChildState(`${id}.${i}`, value));
    return computeArrayState(id, controls, initialValue, {}, [], {}, { wasOrShouldBeEnabled: true });
}

function clearAsyncErrorReducer(state, action) {
    if (action.type !== ClearAsyncErrorAction.TYPE) {
        return state;
    }
    const name = `$${action.name}`;
    let errors = state.errors;
    if (errors.hasOwnProperty(name)) {
        errors = Object.assign({}, state.errors);
        delete errors[name];
    }
    const pendingValidations = state.pendingValidations.filter(v => v !== action.name);
    const isValid = isEmpty(errors);
    if (errors === state.errors && isValid === state.isValid && pendingValidations.length === state.pendingValidations.length) {
        return state;
    }
    return Object.assign({}, state, { isValid, isInvalid: !isValid, errors,
        pendingValidations, isValidationPending: pendingValidations.length > 0 });
}

function disableReducer(state, action) {
    if (action.type !== DisableAction.TYPE) {
        return state;
    }
    if (state.isDisabled) {
        return state;
    }
    return Object.assign({}, state, { isEnabled: false, isDisabled: true, isValid: true, isInvalid: false, errors: {}, pendingValidations: [], isValidationPending: false });
}

function enableReducer(state, action) {
    if (action.type !== EnableAction.TYPE) {
        return state;
    }
    if (state.isEnabled) {
        return state;
    }
    return Object.assign({}, state, { isEnabled: true, isDisabled: false });
}

function focusReducer(state, action) {
    if (action.type !== FocusAction.TYPE) {
        return state;
    }
    if (state.isFocused) {
        return state;
    }
    return Object.assign({}, state, { isFocused: true, isUnfocused: false });
}

function markAsDirtyReducer(state, action) {
    if (action.type !== MarkAsDirtyAction.TYPE) {
        return state;
    }
    if (state.isDirty) {
        return state;
    }
    return Object.assign({}, state, { isDirty: true, isPristine: false });
}

function markAsPristineReducer(state, action) {
    if (action.type !== MarkAsPristineAction.TYPE) {
        return state;
    }
    if (state.isPristine) {
        return state;
    }
    return Object.assign({}, state, { isDirty: false, isPristine: true });
}

function markAsSubmittedReducer(state, action) {
    if (action.type !== MarkAsSubmittedAction.TYPE) {
        return state;
    }
    if (state.isSubmitted) {
        return state;
    }
    return Object.assign({}, state, { isSubmitted: true, isUnsubmitted: false });
}

function markAsTouchedReducer(state, action) {
    if (action.type !== MarkAsTouchedAction.TYPE) {
        return state;
    }
    if (state.isTouched) {
        return state;
    }
    return Object.assign({}, state, { isTouched: true, isUntouched: false });
}

function markAsUnsubmittedReducer(state, action) {
    if (action.type !== MarkAsUnsubmittedAction.TYPE) {
        return state;
    }
    if (state.isUnsubmitted) {
        return state;
    }
    return Object.assign({}, state, { isSubmitted: false, isUnsubmitted: true });
}

function markAsUntouchedReducer(state, action) {
    if (action.type !== MarkAsUntouchedAction.TYPE) {
        return state;
    }
    if (state.isUntouched) {
        return state;
    }
    return Object.assign({}, state, { isTouched: false, isUntouched: true });
}

function resetReducer(state, action) {
    if (action.type !== ResetAction.TYPE) {
        return state;
    }
    if (state.isPristine && state.isUntouched && state.isUnsubmitted) {
        return state;
    }
    return Object.assign({}, state, { isDirty: false, isPristine: true, isTouched: false, isUntouched: true, isSubmitted: false, isUnsubmitted: true });
}

function setAsyncErrorReducer(state, action) {
    if (action.type !== SetAsyncErrorAction.TYPE) {
        return state;
    }
    if (state.isDisabled) {
        return state;
    }
    const name = `$${action.name}`;
    let value = action.value;
    if (deepEquals(state.errors[name], action.value)) {
        value = state.errors[name];
    }
    const errors = Object.assign({}, state.errors, { [name]: value });
    const pendingValidations = state.pendingValidations.filter(v => v !== action.name);
    return Object.assign({}, state, { isValid: false, isInvalid: true, errors,
        pendingValidations, isValidationPending: pendingValidations.length > 0 });
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
        throw new Error(`Control errors must be an object; got ${action.errors}`); // `;
    }
    if (Object.keys(action.errors).some(key => key.startsWith('$'))) {
        throw new Error(`Control errors must not use $ as a prefix; got ${JSON.stringify(action.errors)}`); // `;
    }
    const asyncErrors = Object.keys(state.errors)
        .filter(key => key.startsWith('$'))
        .reduce((res, key) => Object.assign(res, { [key]: state.errors[key] }), {});
    const newErrors = isEmpty(asyncErrors) ? action.errors : Object.assign(asyncErrors, action.errors);
    const isValid = isEmpty(newErrors);
    return Object.assign({}, state, { isValid, isInvalid: !isValid, errors: newErrors });
}

function setUserDefinedPropertyReducer(state, action) {
    if (action.type !== SetUserDefinedPropertyAction.TYPE) {
        return state;
    }
    if (state.userDefinedProperties[action.name] === action.value) {
        return state;
    }
    return Object.assign({}, state, { userDefinedProperties: Object.assign({}, state.userDefinedProperties, { [action.name]: action.value }) });
}

function setValueReducer(state, action) {
    if (action.type !== SetValueAction.TYPE) {
        return state;
    }
    if (state.value === action.value) {
        return state;
    }
    return Object.assign({}, state, { value: verifyFormControlValueIsValid(action.value) });
}

function startAsyncValidationReducer(state, action) {
    if (action.type !== StartAsyncValidationAction.TYPE) {
        return state;
    }
    if (state.pendingValidations.indexOf(action.name) >= 0) {
        return state;
    }
    return Object.assign({}, state, { pendingValidations: [...state.pendingValidations, action.name], isValidationPending: true });
}

function unfocusReducer(state, action) {
    if (action.type !== UnfocusAction.TYPE) {
        return state;
    }
    if (state.isUnfocused) {
        return state;
    }
    return Object.assign({}, state, { isFocused: false, isUnfocused: true });
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
    let hasChanged = false;
    const newControls = controls
        .map(state => {
        const newState = formStateReducer(state, actionCreator(state.id));
        hasChanged = hasChanged || state !== newState;
        return newState;
    });
    return hasChanged ? newControls : controls;
}
function callChildReducers(controls, action) {
    let hasChanged = false;
    const newControls = controls
        .map(state => {
        const newState = formStateReducer(state, action);
        hasChanged = hasChanged || state !== newState;
        return newState;
    });
    return hasChanged ? newControls : controls;
}
function childReducer(state, action) {
    const controls = callChildReducers(state.controls, action);
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
    const controls = Object.keys(state.controls)
        .reduce((agg, key) => Object.assign(agg, {
        [key]: updateIdRecursive(state.controls[key], `${newId}.${key}`),
    }), {});
    return Object.assign({}, state, { id: newId, controls });
}
function updateIdRecursiveForArray(state, newId) {
    const controls = state.controls.map((c, i) => updateIdRecursive(c, `${newId}.${i}`));
    return Object.assign({}, state, { id: newId, controls });
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
    return Object.assign({}, state, { id: newId });
}

function addControlReducer(state, action) {
    if (action.type !== AddArrayControlAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    const index = action.index === undefined ? state.controls.length : action.index;
    if (index > state.controls.length || index < 0) {
        throw new Error(`Index ${index} is out of bounds for array '${state.id}' with length ${state.controls.length}!`);
    }
    let controls = [...state.controls];
    controls.splice(index, 0, createChildState(`${state.id}.${index}`, action.value));
    controls = controls.map((c, i) => updateIdRecursive(c, `${state.id}.${i}`));
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
    const name = `$${action.name}`;
    let errors = state.errors;
    if (state.errors.hasOwnProperty(name)) {
        errors = Object.assign({}, state.errors);
        delete errors[name];
    }
    const pendingValidations = state.pendingValidations.filter(v => v !== action.name);
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
    return computeArrayState(state.id, dispatchActionPerChild(state.controls, controlId => new DisableAction(controlId)), state.value, {}, [], state.userDefinedProperties, {
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
    const controls = dispatchActionPerChild(state.controls, controlId => new EnableAction(controlId));
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
    const controls = dispatchActionPerChild(state.controls, controlId => new MarkAsDirtyAction(controlId));
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
    return computeArrayState(state.id, dispatchActionPerChild(state.controls, controlId => new MarkAsPristineAction(controlId)), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
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
    const controls = dispatchActionPerChild(state.controls, controlId => new MarkAsSubmittedAction(controlId));
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
    const controls = dispatchActionPerChild(state.controls, controlId => new MarkAsTouchedAction(controlId));
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
    return computeArrayState(state.id, dispatchActionPerChild(state.controls, controlId => new MarkAsUnsubmittedAction(controlId)), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
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
    return computeArrayState(state.id, dispatchActionPerChild(state.controls, controlId => new MarkAsUntouchedAction(controlId)), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: false,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function move(array, fromIndex, toIndex) {
    const item = array[fromIndex];
    const length = array.length;
    if (fromIndex > toIndex) {
        return [
            ...array.slice(0, toIndex),
            item,
            ...array.slice(toIndex, fromIndex),
            ...array.slice(fromIndex + 1, length),
        ];
    }
    else {
        const targetIndex = toIndex + 1;
        return [
            ...array.slice(0, fromIndex),
            ...array.slice(fromIndex + 1, targetIndex),
            item,
            ...array.slice(targetIndex, length),
        ];
    }
}
function moveControlReducer(state, action) {
    if (action.type !== MoveArrayControlAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    const fromIndex = action.fromIndex;
    const toIndex = action.toIndex;
    if (fromIndex === toIndex) {
        return state;
    }
    if (fromIndex < 0 || toIndex < 0) {
        throw new Error(`fromIndex ${fromIndex} or toIndex ${fromIndex} was negative`);
    }
    if (fromIndex >= state.controls.length || toIndex >= state.controls.length) {
        throw new Error(`fromIndex ${fromIndex} or toIndex ${toIndex} is out of bounds with the length of the controls ${state.controls.length}`);
    }
    let controls = move(state.controls, fromIndex, toIndex);
    controls = controls.map((c, i) => updateIdRecursive(c, `${state.id}.${i}`));
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
        throw new Error(`Index ${action.index} is out of bounds for array '${state.id}' with length ${state.controls.length}!`);
    }
    const index = action.index;
    const controls = state.controls.filter((_, i) => i !== index).map((c, i) => updateIdRecursive(c, `${state.id}.${i}`));
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
    return computeArrayState(state.id, dispatchActionPerChild(state.controls, controlId => new ResetAction(controlId)), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: false,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: false,
        wasOrShouldBeSubmitted: false,
    });
}

function setAsyncErrorReducer$1(state, action) {
    if (action.type !== SetAsyncErrorAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (state.isDisabled) {
        return state;
    }
    const name = `$${action.name}`;
    let value = action.value;
    if (deepEquals(state.errors[name], action.value)) {
        value = state.errors[name];
    }
    const errors = Object.assign({}, state.errors, { [name]: value });
    const pendingValidations = state.pendingValidations.filter(v => v !== action.name);
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
        throw new Error(`Control errors must be an object; got ${action.errors}`);
    }
    if (Object.keys(action.errors).some(key => key.startsWith('_'))) {
        throw new Error(`Control errors must not use underscore as a prefix; got ${JSON.stringify(action.errors)}`);
    }
    if (Object.keys(action.errors).some(key => key.startsWith('$'))) {
        throw new Error(`Control errors must not use $ as a prefix; got ${JSON.stringify(action.errors)}`);
    }
    const childAndAsyncErrors = Object.keys(state.errors)
        .filter(key => key.startsWith('_') || key.startsWith('$'))
        .reduce((res, key) => Object.assign(res, { [key]: state.errors[key] }), {});
    const newErrors = Object.assign(childAndAsyncErrors, action.errors);
    return computeArrayState(state.id, state.controls, state.value, newErrors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function setUserDefinedPropertyReducer$1(state, action) {
    if (action.type !== SetUserDefinedPropertyAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (state.userDefinedProperties[action.name] === action.value) {
        return state;
    }
    return Object.assign({}, state, { userDefinedProperties: Object.assign({}, state.userDefinedProperties, { [action.name]: action.value }) });
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
    const value = action.value;
    const controls = value
        .map((v, i) => {
        if (!state.controls[i]) {
            return createChildState(`${state.id}.${i}`, v);
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
    const pendingValidations = [...state.pendingValidations, action.name];
    return computeArrayState(state.id, state.controls, state.value, state.errors, pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function swapArrayValues(a, i, j) {
    const n = [...a];
    [n[i], n[j]] = [n[j], n[i]];
    return n;
}
function swapControlReducer(state, action) {
    if (action.type !== SwapArrayControlAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    const fromIndex = action.fromIndex;
    const toIndex = action.toIndex;
    if (fromIndex === toIndex) {
        return state;
    }
    if (fromIndex < 0 || toIndex < 0) {
        throw new Error(`fromIndex ${fromIndex} or toIndex ${fromIndex} was negative`);
    }
    if (fromIndex >= state.controls.length || toIndex >= state.controls.length) {
        throw new Error(`fromIndex ${fromIndex} or toIndex ${toIndex} is out of bounds with the length of the controls ${state.controls.length}`);
    }
    let controls = swapArrayValues(state.controls, fromIndex, toIndex);
    controls = controls.map((c, i) => (i >= fromIndex || i >= toIndex) ? updateIdRecursive(c, `${state.id}.${i}`) : c);
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
        throw new Error(`state must be a form state, got ${state}`);
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
function createFormStateReducerWithUpdate(updateFnOrUpdateFnArr, ...updateFnArr) {
    updateFnArr = [...(Array.isArray(updateFnOrUpdateFnArr) ? updateFnOrUpdateFnArr : [updateFnOrUpdateFnArr]), ...updateFnArr];
    return (state, action) => {
        const newState = formStateReducer(state, action);
        return newState === state ? state : updateFnArr.reduce((s, f) => f(s), newState);
    };
}
function reduceNestedFormState(state, key, action) {
    const value = state[key];
    if (!isFormState(value)) {
        return state;
    }
    return Object.assign({}, state, { [key]: formStateReducer(value, action) });
}
function reduceNestedFormStates(state, action) {
    return Object.keys(state).reduce((s, key) => reduceNestedFormState(s, key, action), state);
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
        reducer: (state, action) => reduceNestedFormStates(state, action),
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
        reducer: (state, action) => reducer(reduceNestedFormStates(state, action), action),
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
    return (state, action) => {
        const updatedState = reducer(state, action);
        const formState = formStateLocator(updatedState);
        const formStateKey = Object.keys(updatedState).find(key => updatedState[key] === formState);
        const updatedFormState = updateFn(formState, updatedState);
        if (updatedFormState === formState) {
            return updatedState;
        }
        return Object.assign({}, updatedState, { [formStateKey]: updatedFormState });
    };
}

function dispatchActionPerChild$1(controls, actionCreator) {
    let hasChanged = false;
    const newControls = Object.keys(controls)
        .reduce((c, key) => {
        Object.assign(c, { [key]: formStateReducer(controls[key], actionCreator(controls[key].id)) });
        hasChanged = hasChanged || c[key] !== controls[key];
        return c;
    }, {});
    return hasChanged ? newControls : controls;
}
function callChildReducers$1(controls, action) {
    let hasChanged = false;
    const newControls = Object.keys(controls)
        .map(key => [key, formStateReducer(controls[key], action)])
        .reduce((res, [key, state]) => {
        hasChanged = hasChanged || state !== controls[key];
        return Object.assign(res, { [key]: state });
    }, {});
    return hasChanged ? newControls : controls;
}
function childReducer$1(state, action) {
    const controls = callChildReducers$1(state.controls, action);
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
    if (action.type !== AddGroupControlAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer$1(state, action);
    }
    if (state.controls.hasOwnProperty(action.name)) {
        throw new Error(`Group '${state.id}' already has child control '${action.name}'!`); // `;
    }
    const controls = Object.assign({}, state.controls, {
        [action.name]: createChildState(`${state.id}.${action.name}`, action.value),
    });
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
    const name = `$${action.name}`;
    let errors = state.errors;
    if (errors.hasOwnProperty(name)) {
        errors = Object.assign({}, state.errors);
        delete errors[name];
    }
    const pendingValidations = state.pendingValidations.filter(v => v !== action.name);
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
    return computeGroupState(state.id, dispatchActionPerChild$1(state.controls, controlId => new DisableAction(controlId)), state.value, {}, [], state.userDefinedProperties, {
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
    const controls = dispatchActionPerChild$1(state.controls, controlId => new EnableAction(controlId));
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
    const controls = dispatchActionPerChild$1(state.controls, controlId => new MarkAsDirtyAction(controlId));
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
    return computeGroupState(state.id, dispatchActionPerChild$1(state.controls, controlId => new MarkAsPristineAction(controlId)), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
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
    const controls = dispatchActionPerChild$1(state.controls, controlId => new MarkAsSubmittedAction(controlId));
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
    const controls = dispatchActionPerChild$1(state.controls, controlId => new MarkAsTouchedAction(controlId));
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
    return computeGroupState(state.id, dispatchActionPerChild$1(state.controls, controlId => new MarkAsUnsubmittedAction(controlId)), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
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
    return computeGroupState(state.id, dispatchActionPerChild$1(state.controls, controlId => new MarkAsUntouchedAction(controlId)), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
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
        throw new Error(`Group '${state.id}' does not have child control '${action.name}'!`); // `;
    }
    const controls = Object.assign({}, state.controls);
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
    return computeGroupState(state.id, dispatchActionPerChild$1(state.controls, controlId => new ResetAction(controlId)), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: false,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: false,
        wasOrShouldBeSubmitted: false,
    });
}

function setAsyncErrorReducer$2(state, action) {
    if (action.type !== SetAsyncErrorAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer$1(state, action);
    }
    if (state.isDisabled) {
        return state;
    }
    const name = `$${action.name}`;
    let value = action.value;
    if (deepEquals(state.errors[name], action.value)) {
        value = state.errors[name];
    }
    const errors = Object.assign({}, state.errors, { [name]: value });
    const pendingValidations = state.pendingValidations.filter(v => v !== action.name);
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
        throw new Error(`Control errors must be an object; got ${action.errors}`); // `;
    }
    if (Object.keys(action.errors).some(key => key.startsWith('_'))) {
        throw new Error(`Control errors must not use underscore as a prefix; got ${JSON.stringify(action.errors)}`); // `;
    }
    if (Object.keys(action.errors).some(key => key.startsWith('$'))) {
        throw new Error(`Control errors must not use $ as a prefix; got ${JSON.stringify(action.errors)}`); // `;
    }
    const childAndAsyncErrors = Object.keys(state.errors)
        .filter(key => key.startsWith('_') || key.startsWith('$'))
        .reduce((res, key) => Object.assign(res, { [key]: state.errors[key] }), {});
    const newErrors = Object.assign(childAndAsyncErrors, action.errors);
    return computeGroupState(state.id, state.controls, state.value, newErrors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}

function setUserDefinedPropertyReducer$2(state, action) {
    if (action.type !== SetUserDefinedPropertyAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer$1(state, action);
    }
    if (state.userDefinedProperties[action.name] === action.value) {
        return state;
    }
    return Object.assign({}, state, { userDefinedProperties: Object.assign({}, state.userDefinedProperties, { [action.name]: action.value }) });
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
    let value = action.value;
    if (isBoxed(value)) {
        value = unbox(value);
    }
    const controls = Object.keys(value)
        .reduce((c, key) => {
        // tslint:disable-next-line:prefer-conditional-expression
        if (!state.controls[key]) {
            Object.assign(c, { [key]: createChildState(`${state.id}.${key}`, value[key]) });
        }
        else {
            Object.assign(c, { [key]: formStateReducer(state.controls[key], new SetValueAction(state.controls[key].id, value[key])) });
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
    const pendingValidations = [...state.pendingValidations, action.name];
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
function compose(...fns) {
    return (t) => fns.reduce((res, f) => f(res), t);
}
function ensureState(state) {
    if (!state) {
        throw new Error('state must not be undefined!');
    }
    return state;
}

function updateArrayControlsState(filterFn, updateFn) {
    return (state) => {
        let hasChanged = false;
        const newControls = state.controls.map((control, idx) => {
            if (!filterFn(control, idx)) {
                return control;
            }
            const newControl = updateFn(control, state);
            hasChanged = hasChanged || newControl !== control;
            return newControl;
        });
        return hasChanged ? newControls : state.controls;
    };
}
function updateArraySingle(filterFn, updateFn) {
    return (state) => {
        const newControls = updateArrayControlsState(filterFn, updateFn)(state);
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
function updateArrayWithFilter(stateOrFilterFunction, filterFunctionOrFunctionOrFunctionArray, updateFnOrUpdateFnArr, ...rest) {
    if (isArrayState(stateOrFilterFunction)) {
        const filterFn = filterFunctionOrFunctionOrFunctionArray;
        const updateFnArr = Array.isArray(updateFnOrUpdateFnArr) ? updateFnOrUpdateFnArr : [updateFnOrUpdateFnArr];
        return updateFnArr.concat(...rest).reduce((s, updateFn) => updateArraySingle(filterFn, updateFn)(s), stateOrFilterFunction);
    }
    let updateFnArr = Array.isArray(filterFunctionOrFunctionOrFunctionArray)
        ? filterFunctionOrFunctionOrFunctionArray
        : [filterFunctionOrFunctionOrFunctionArray];
    updateFnArr = updateFnOrUpdateFnArr === undefined ? updateFnArr : updateFnArr.concat(updateFnOrUpdateFnArr);
    return (s) => updateArrayWithFilter(ensureState(s), stateOrFilterFunction, updateFnArr.concat(rest));
}
function updateArray(stateOrFunctionOrFunctionArray, updateFnOrUpdateFnArr, ...rest) {
    if (isArrayState(stateOrFunctionOrFunctionArray)) {
        const updateFnArr = Array.isArray(updateFnOrUpdateFnArr) ? updateFnOrUpdateFnArr : [updateFnOrUpdateFnArr];
        return updateFnArr.concat(...rest).reduce((s, updateFn) => updateArraySingle(() => true, updateFn)(s), stateOrFunctionOrFunctionArray);
    }
    let updateFnArr = Array.isArray(stateOrFunctionOrFunctionArray) ? stateOrFunctionOrFunctionArray : [stateOrFunctionOrFunctionArray];
    updateFnArr = updateFnOrUpdateFnArr === undefined ? updateFnArr : updateFnArr.concat(updateFnOrUpdateFnArr);
    return (s) => updateArray(ensureState(s), updateFnArr.concat(rest));
}

function updateGroupControlsState(updateFns) {
    return (state) => {
        let hasChanged = false;
        const newControls = Object.keys(state.controls).reduce((res, key) => {
            const control = state.controls[key];
            Object.assign(res, { [key]: control });
            if (updateFns.hasOwnProperty(key)) {
                const newControl = updateFns[key](control, state);
                hasChanged = hasChanged || newControl !== control;
                Object.assign(res, { [key]: newControl });
            }
            return res;
        }, {});
        return hasChanged ? newControls : state.controls;
    };
}
function updateGroupSingle(updateFns) {
    return (state) => {
        const newControls = updateGroupControlsState(updateFns)(state);
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
function updateGroup(stateOrUpdateFnOrUpdateFnArray, updateFnOrUpdateFnArr, ...rest) {
    if (isGroupState(stateOrUpdateFnOrUpdateFnArray)) {
        const updateFnArr = Array.isArray(updateFnOrUpdateFnArr) ? updateFnOrUpdateFnArr : [updateFnOrUpdateFnArr];
        return updateFnArr.concat(...rest).reduce((s, updateFn) => updateGroupSingle(updateFn)(s), stateOrUpdateFnOrUpdateFnArray);
    }
    let updateFnArr = Array.isArray(stateOrUpdateFnOrUpdateFnArray) ? stateOrUpdateFnOrUpdateFnArray : [stateOrUpdateFnOrUpdateFnArray];
    updateFnArr = updateFnOrUpdateFnArr === undefined ? updateFnArr : updateFnArr.concat(updateFnOrUpdateFnArr);
    return (s) => updateGroup(ensureState(s), updateFnArr.concat(rest));
}

function updateRecursiveSingle(parent, updateFn) {
    return (state) => {
        if (isGroupState(state)) {
            const updateFunctions = Object.keys(state.controls).reduce((agg, key) => Object.assign(agg, {
                [key]: (s, p) => updateRecursiveSingle(p, updateFn)(s),
            }), {});
            state = updateGroup(updateFunctions)(state);
            return updateFn(state, parent);
        }
        if (isArrayState(state)) {
            state = updateArray((s, p) => updateRecursiveSingle(p, updateFn)(s))(state);
            return updateFn(state, parent);
        }
        return updateFn(state, parent);
    };
}
function updateRecursive(stateOrFunctionOrFunctionArray, updateFnOrUpdateFnArr, ...rest) {
    if (isFormState(stateOrFunctionOrFunctionArray)) {
        const updateFnArr = Array.isArray(updateFnOrUpdateFnArr) ? updateFnOrUpdateFnArr : [updateFnOrUpdateFnArr];
        return updateFnArr.concat(...rest)
            .reduce((s, updateFn) => updateRecursiveSingle(stateOrFunctionOrFunctionArray, updateFn)(s), stateOrFunctionOrFunctionArray);
    }
    let updateFnArr = Array.isArray(stateOrFunctionOrFunctionArray) ? stateOrFunctionOrFunctionArray : [stateOrFunctionOrFunctionArray];
    updateFnArr = updateFnOrUpdateFnArr === undefined ? updateFnArr : updateFnArr.concat(updateFnOrUpdateFnArr);
    return (s) => updateRecursive(ensureState(s), updateFnArr.concat(rest));
}

function setValue(valueOrState, value) {
    if (isFormState(valueOrState)) {
        return abstractControlReducer(valueOrState, new SetValueAction(valueOrState.id, value));
    }
    return (s) => setValue(ensureState(s), valueOrState);
}

function setErrors(errorsOrErrorsArrayOrState, errorsOrErrorsArray, ...rest) {
    if (isFormState(errorsOrErrorsArrayOrState)) {
        const errorsArray = Array.isArray(errorsOrErrorsArray) ? errorsOrErrorsArray : [errorsOrErrorsArray];
        const errors = errorsArray.concat(...rest).reduce((agg, err) => Object.assign(agg, err), {});
        return formStateReducer(errorsOrErrorsArrayOrState, new SetErrorsAction(errorsOrErrorsArrayOrState.id, errors));
    }
    let errorsArray = Array.isArray(errorsOrErrorsArrayOrState) ? errorsOrErrorsArrayOrState : [errorsOrErrorsArrayOrState];
    errorsArray = errorsOrErrorsArray === undefined ? errorsArray : errorsArray.concat(errorsOrErrorsArray);
    return (s) => setErrors(ensureState(s), errorsArray.concat(rest));
}

function validate(stateOrFunctionOrFunctionArray, functionOrFunctionArr, ...rest) {
    if (isFormState(stateOrFunctionOrFunctionArray)) {
        const functionArr = Array.isArray(functionOrFunctionArr) ? functionOrFunctionArr : [functionOrFunctionArr];
        const errors = functionArr.concat(...rest)
            .reduce((agg, validationFn) => Object.assign(agg, validationFn(stateOrFunctionOrFunctionArray.value)), {});
        return formStateReducer(stateOrFunctionOrFunctionArray, new SetErrorsAction(stateOrFunctionOrFunctionArray.id, errors));
    }
    let updateFnArr = Array.isArray(stateOrFunctionOrFunctionArray) ? stateOrFunctionOrFunctionArray : [stateOrFunctionOrFunctionArray];
    updateFnArr = functionOrFunctionArr === undefined ? updateFnArr : updateFnArr.concat(functionOrFunctionArr);
    return (s) => validate(ensureState(s), updateFnArr.concat(rest));
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
    return (s) => addArrayControl(ensureState(s), valueOrState, indexOrValue);
}

function addGroupControl(nameOrState, valueOrName, value) {
    if (isGroupState(nameOrState)) {
        return formGroupReducer(nameOrState, new AddGroupControlAction(nameOrState.id, valueOrName, value));
    }
    return (s) => addGroupControl(ensureState(s), nameOrState, valueOrName);
}

function removeArrayControl(indexOrState, index) {
    if (isArrayState(indexOrState)) {
        return formArrayReducer(indexOrState, new RemoveArrayControlAction(indexOrState.id, index));
    }
    return (s) => removeArrayControl(ensureState(s), indexOrState);
}

function removeGroupControl(nameOrState, name) {
    if (isGroupState(nameOrState)) {
        return formGroupReducer(nameOrState, new RemoveGroupControlAction(nameOrState.id, name));
    }
    return (s) => removeGroupControl(ensureState(s), nameOrState);
}

function setUserDefinedProperty(nameOrState, valueOrName, value) {
    if (isFormState(nameOrState)) {
        return formStateReducer(nameOrState, new SetUserDefinedPropertyAction(nameOrState.id, valueOrName, value));
    }
    return (s) => setUserDefinedProperty(ensureState(s), nameOrState, valueOrName);
}

function reset(state) {
    return abstractControlReducer(state, new ResetAction(state.id));
}

function startAsyncValidation(nameOrState, name) {
    if (isFormState(nameOrState)) {
        return abstractControlReducer(nameOrState, new StartAsyncValidationAction(nameOrState.id, name));
    }
    return (s) => startAsyncValidation(ensureState(s), nameOrState);
}

function setAsyncError(nameOrState, nameOrValue, value) {
    if (isFormState(nameOrState)) {
        return abstractControlReducer(nameOrState, new SetAsyncErrorAction(nameOrState.id, nameOrValue, value));
    }
    return (s) => setAsyncError(ensureState(s), nameOrState, nameOrValue);
}

function clearAsyncError(nameOrState, name) {
    if (isFormState(nameOrState)) {
        return abstractControlReducer(nameOrState, new ClearAsyncErrorAction(nameOrState.id, name));
    }
    return (s) => clearAsyncError(ensureState(s), nameOrState);
}

/**
 * Used to provide a {@link FormViewAdapter} for form elements.
 */
const NGRX_FORM_VIEW_ADAPTER = new InjectionToken('NgrxFormViewAdapter');

var NgrxCheckboxViewAdapter_1;
// tslint:disable:directive-class-suffix
let NgrxCheckboxViewAdapter = NgrxCheckboxViewAdapter_1 = class NgrxCheckboxViewAdapter {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nativeIdWasSet = false;
        this.onChange = () => void 0;
        this.onTouched = () => void 0;
    }
    set ngrxFormControlState(value) {
        if (!value) {
            throw new Error('The control state must not be undefined!');
        }
        this.state = value;
        const nativeId = this.elementRef.nativeElement.id;
        const shouldSetNativeId = value.id !== nativeId && this.nativeIdWasSet;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', value.id);
        }
    }
    ngAfterViewInit() {
        const nativeId = this.elementRef.nativeElement.id;
        const shouldSetNativeId = this.state.id !== nativeId && !nativeId;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', this.state.id);
            this.nativeIdWasSet = true;
        }
    }
    setViewValue(value) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'checked', value);
    }
    setOnChangeCallback(fn) {
        this.onChange = fn;
    }
    setOnTouchedCallback(fn) {
        this.onTouched = fn;
    }
    setIsDisabled(isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    }
    handleInput({ target }) {
        this.onChange(target.checked);
    }
};
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
                useExisting: forwardRef(() => NgrxCheckboxViewAdapter_1),
                multi: true,
            }],
    }),
    __metadata("design:paramtypes", [Renderer2, ElementRef])
], NgrxCheckboxViewAdapter);

var NgrxDefaultViewAdapter_1;
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
let NgrxDefaultViewAdapter = NgrxDefaultViewAdapter_1 = class NgrxDefaultViewAdapter {
    constructor(renderer, elementRef, platformId = null, 
    // we use a special injection string that should never exist at runtime to allow mocking this dependency for testing
    navigator = null) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.platformId = platformId;
        this.nativeIdWasSet = false;
        this.onChange = () => void 0;
        this.onTouched = () => void 0;
        /** Whether the user is creating a composition string (IME events). */
        this.isComposing = false;
        this.isCompositionSupported = isPlatformBrowser(this.platformId || '') && !isAndroid(navigator || window.navigator);
    }
    set ngrxFormControlState(value) {
        if (!value) {
            throw new Error('The control state must not be undefined!');
        }
        this.state = value;
        const nativeId = this.elementRef.nativeElement.id;
        const shouldSetNativeId = value.id !== nativeId && this.nativeIdWasSet;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', value.id);
        }
    }
    ngAfterViewInit() {
        const nativeId = this.elementRef.nativeElement.id;
        const shouldSetNativeId = this.state.id !== nativeId && !nativeId;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', this.state.id);
            this.nativeIdWasSet = true;
        }
    }
    setViewValue(value) {
        const normalizedValue = value == null ? '' : value;
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
    }
    setOnChangeCallback(fn) {
        this.onChange = fn;
    }
    setOnTouchedCallback(fn) {
        this.onTouched = fn;
    }
    setIsDisabled(isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    }
    handleInput({ target }) {
        if (this.isCompositionSupported && this.isComposing) {
            return;
        }
        this.onChange(target.value);
    }
    compositionStart() {
        this.isComposing = true;
    }
    compositionEnd({ target }) {
        this.isComposing = false;
        if (this.isCompositionSupported) {
            this.onChange(target.value);
        }
    }
};
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
                useExisting: forwardRef(() => NgrxDefaultViewAdapter_1),
                multi: true,
            }],
    }),
    __param(2, Optional()), __param(2, Inject(PLATFORM_ID)),
    __param(3, Optional()), __param(3, Inject('ngrx-forms/never')),
    __metadata("design:paramtypes", [Renderer2,
        ElementRef, Object, Object])
], NgrxDefaultViewAdapter);

var NgrxNumberViewAdapter_1;
// tslint:disable:directive-class-suffix
let NgrxNumberViewAdapter = NgrxNumberViewAdapter_1 = class NgrxNumberViewAdapter {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nativeIdWasSet = false;
        this.onChange = () => void 0;
        this.onTouched = () => void 0;
    }
    set ngrxFormControlState(value) {
        if (!value) {
            throw new Error('The control state must not be undefined!');
        }
        this.state = value;
        const nativeId = this.elementRef.nativeElement.id;
        const shouldSetNativeId = value.id !== nativeId && this.nativeIdWasSet;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', value.id);
        }
    }
    ngAfterViewInit() {
        const nativeId = this.elementRef.nativeElement.id;
        const shouldSetNativeId = this.state.id !== nativeId && !nativeId;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', this.state.id);
            this.nativeIdWasSet = true;
        }
    }
    setViewValue(value) {
        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
        const normalizedValue = value === null ? '' : value;
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
    }
    setOnChangeCallback(fn) {
        this.onChange = fn;
    }
    setOnTouchedCallback(fn) {
        this.onTouched = fn;
    }
    setIsDisabled(isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    }
    handleInput({ target }) {
        const value = target.value;
        this.onChange(value === '' ? null : parseFloat(value));
    }
};
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
                useExisting: forwardRef(() => NgrxNumberViewAdapter_1),
                multi: true,
            }],
    }),
    __metadata("design:paramtypes", [Renderer2, ElementRef])
], NgrxNumberViewAdapter);

var NgrxSelectViewAdapter_1;
// tslint:disable:directive-class-suffix
let NgrxSelectViewAdapter = NgrxSelectViewAdapter_1 = class NgrxSelectViewAdapter {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.optionMap = {};
        this.idCounter = 0;
        this.selectedId = null;
        this.value = undefined;
        this.nativeIdWasSet = false;
        this.onChangeFn = () => void 0;
        this.onTouched = () => void 0;
    }
    set ngrxFormControlState(value) {
        if (!value) {
            throw new Error('The control state must not be undefined!');
        }
        this.state = value;
        const nativeId = this.elementRef.nativeElement.id;
        const shouldSetNativeId = value.id !== nativeId && this.nativeIdWasSet;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', value.id);
        }
    }
    ngAfterViewInit() {
        const nativeId = this.elementRef.nativeElement.id;
        const shouldSetNativeId = this.state.id !== nativeId && !nativeId;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', this.state.id);
            this.nativeIdWasSet = true;
        }
    }
    setViewValue(value) {
        this.value = value;
        this.selectedId = this.getOptionId(value);
        if (this.selectedId === null) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'selectedIndex', -1);
        }
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', this.selectedId);
    }
    onChange({ target }) {
        this.selectedId = target.value;
        const value = this.optionMap[this.selectedId];
        this.value = value;
        this.onChangeFn(value);
    }
    setOnChangeCallback(fn) {
        this.onChangeFn = fn;
    }
    setOnTouchedCallback(fn) {
        this.onTouched = fn;
    }
    setIsDisabled(isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    }
    createOptionId() {
        const id = this.idCounter.toString();
        this.idCounter += 1;
        return id;
    }
    updateOptionValue(id, value) {
        this.optionMap[id] = value;
        if (this.selectedId === id) {
            this.onChangeFn(value);
        }
        else if (value === this.value) {
            this.setViewValue(value);
        }
    }
    deregisterOption(id) {
        delete this.optionMap[id];
    }
    getOptionId(value) {
        for (const id of Array.from(Object.keys(this.optionMap))) {
            if (this.optionMap[id] === value) {
                return id;
            }
        }
        return null;
    }
};
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
                useExisting: forwardRef(() => NgrxSelectViewAdapter_1),
                multi: true,
            }],
    }),
    __metadata("design:paramtypes", [Renderer2, ElementRef])
], NgrxSelectViewAdapter);
const ɵ0 = () => '', ɵ1 = () => void 0, ɵ2 = () => void 0;
const NULL_VIEW_ADAPTER = {
    createOptionId: ɵ0,
    deregisterOption: ɵ1,
    updateOptionValue: ɵ2,
};
const ɵ3 = () => void 0;
const NULL_RENDERER = {
    setProperty: ɵ3,
};
let NgrxSelectOption = class NgrxSelectOption {
    constructor(element, renderer, viewAdapter) {
        this.element = element;
        this.renderer = renderer;
        this.viewAdapter = viewAdapter;
        this.isInitialized = false;
        this.renderer = viewAdapter ? renderer : NULL_RENDERER;
        this.viewAdapter = viewAdapter || NULL_VIEW_ADAPTER;
        this.id = this.viewAdapter.createOptionId();
    }
    set value(value) {
        // this cannot be done inside ngOnInit since the value property
        // must be already set when the option value is updated in the view
        // adapter and the initial binding of 'value' happens before
        // ngOnInit runs
        if (!this.isInitialized) {
            this.isInitialized = true;
            this.renderer.setProperty(this.element.nativeElement, 'value', this.id);
        }
        this.viewAdapter.updateOptionValue(this.id, value);
    }
    ngOnDestroy() {
        this.viewAdapter.deregisterOption(this.id);
    }
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

var NgrxSelectMultipleViewAdapter_1;
// tslint:disable:directive-class-suffix
let NgrxSelectMultipleViewAdapter = NgrxSelectMultipleViewAdapter_1 = class NgrxSelectMultipleViewAdapter {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.options = {};
        this.optionValues = {};
        this.idCounter = 0;
        this.selectedIds = [];
        this.nativeIdWasSet = false;
        this.onChangeFn = () => void 0;
        this.onTouched = () => void 0;
    }
    set ngrxFormControlState(value) {
        if (!value) {
            throw new Error('The control state must not be undefined!');
        }
        this.state = value;
        const nativeId = this.elementRef.nativeElement.id;
        const shouldSetNativeId = value.id !== nativeId && this.nativeIdWasSet;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', value.id);
        }
    }
    ngAfterViewInit() {
        const nativeId = this.elementRef.nativeElement.id;
        const shouldSetNativeId = this.state.id !== nativeId && !nativeId;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', this.state.id);
            this.nativeIdWasSet = true;
        }
    }
    setViewValue(value) {
        if (value === null) {
            value = [];
        }
        if (!Array.isArray(value)) {
            throw new Error(`the value provided to a NgrxSelectMultipleViewAdapter must be null or an array; got ${value} of type ${typeof value}`); // `
        }
        this.selectedIds = value.map(v => this.getOptionId(v)).filter(id => id !== null).map(id => id);
        Object.keys(this.options).forEach(id => this.options[id].isSelected = this.selectedIds.indexOf(id) >= 0);
    }
    onChange() {
        this.selectedIds = Object.keys(this.options).filter(id => this.options[id].isSelected);
        const value = this.selectedIds.map(id => this.optionValues[id]);
        this.onChangeFn(value);
    }
    setOnChangeCallback(fn) {
        this.onChangeFn = fn;
    }
    setOnTouchedCallback(fn) {
        this.onTouched = fn;
    }
    setIsDisabled(isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    }
    registerOption(option) {
        const id = this.idCounter.toString();
        this.options[id] = option;
        this.idCounter += 1;
        return id;
    }
    updateOptionValue(id, value) {
        this.optionValues[id] = value;
        if (this.selectedIds.indexOf(id) >= 0) {
            this.onChange();
        }
    }
    deregisterOption(id) {
        delete this.options[id];
        delete this.optionValues[id];
    }
    getOptionId(value) {
        for (const id of Array.from(Object.keys(this.optionValues))) {
            if (this.optionValues[id] === value) {
                return id;
            }
        }
        return null;
    }
};
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
                useExisting: forwardRef(() => NgrxSelectMultipleViewAdapter_1),
                multi: true,
            }],
    }),
    __metadata("design:paramtypes", [Renderer2, ElementRef])
], NgrxSelectMultipleViewAdapter);
const ɵ0$1 = () => '', ɵ1$1 = () => void 0, ɵ2$1 = () => void 0;
const NULL_VIEW_ADAPTER$1 = {
    registerOption: ɵ0$1,
    deregisterOption: ɵ1$1,
    updateOptionValue: ɵ2$1,
};
const ɵ3$1 = () => void 0;
const NULL_RENDERER$1 = {
    setProperty: ɵ3$1,
};
let NgrxSelectMultipleOption = class NgrxSelectMultipleOption {
    constructor(element, renderer, viewAdapter) {
        this.element = element;
        this.renderer = renderer;
        this.viewAdapter = viewAdapter;
        this.renderer = viewAdapter ? renderer : NULL_RENDERER$1;
        this.viewAdapter = viewAdapter || NULL_VIEW_ADAPTER$1;
        this.id = this.viewAdapter.registerOption(this);
    }
    set value(value) {
        this.viewAdapter.updateOptionValue(this.id, value);
    }
    set isSelected(selected) {
        this.renderer.setProperty(this.element.nativeElement, 'selected', selected);
    }
    get isSelected() {
        return this.element.nativeElement.selected;
    }
    ngOnInit() {
        this.renderer.setProperty(this.element.nativeElement, 'value', this.id);
    }
    ngOnDestroy() {
        this.viewAdapter.deregisterOption(this.id);
    }
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

const ɵ0$2 = () => void 0;
// tslint:disable:directive-class-suffix
const NULL_RENDERER$2 = {
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
let NgrxFallbackSelectOption = class NgrxFallbackSelectOption {
    constructor(element, renderer, viewAdapter, multipleViewAdapter) {
        this.element = element;
        this.renderer = renderer;
        this.renderer = viewAdapter || multipleViewAdapter ? NULL_RENDERER$2 : renderer;
    }
    set value(value) {
        this.renderer.setProperty(this.element.nativeElement, 'value', value);
    }
};
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

var NgrxRadioViewAdapter_1;
// tslint:disable:directive-class-suffix
let NgrxRadioViewAdapter = NgrxRadioViewAdapter_1 = class NgrxRadioViewAdapter {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nativeNameWasSet = false;
        this.onChange = () => void 0;
        this.onTouched = () => void 0;
    }
    set value(val) {
        if (val !== this.latestValue) {
            this.latestValue = val;
            if (this.isChecked) {
                this.onChange();
            }
        }
    }
    set ngrxFormControlState(value) {
        if (!value) {
            throw new Error('The control state must not be undefined!');
        }
        this.state = value;
        const nativeName = this.elementRef.nativeElement.name;
        const shouldSetNativeName = value.id !== nativeName && this.nativeNameWasSet;
        if (shouldSetNativeName) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'name', value.id);
        }
    }
    ngOnInit() {
        this.isChecked = this.elementRef.nativeElement.checked;
    }
    ngAfterViewInit() {
        const nativeName = this.elementRef.nativeElement.name;
        const shouldSetNativeName = this.state.id !== nativeName && !nativeName;
        if (shouldSetNativeName) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'name', this.state.id);
            this.nativeNameWasSet = true;
        }
    }
    setViewValue(value) {
        this.isChecked = value === this.latestValue;
        this.renderer.setProperty(this.elementRef.nativeElement, 'checked', this.isChecked);
    }
    setOnChangeCallback(fn) {
        this.onChange = () => fn(this.latestValue);
    }
    setOnTouchedCallback(fn) {
        this.onTouched = fn;
    }
    setIsDisabled(isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    }
};
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
                useExisting: forwardRef(() => NgrxRadioViewAdapter_1),
                multi: true,
            }],
    }),
    __metadata("design:paramtypes", [Renderer2,
        ElementRef])
], NgrxRadioViewAdapter);

var NgrxRangeViewAdapter_1;
// tslint:disable:directive-class-suffix
let NgrxRangeViewAdapter = NgrxRangeViewAdapter_1 = class NgrxRangeViewAdapter {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nativeIdWasSet = false;
        this.onChange = () => void 0;
        this.onTouched = () => void 0;
    }
    set ngrxFormControlState(value) {
        if (!value) {
            throw new Error('The control state must not be undefined!');
        }
        this.state = value;
        const nativeId = this.elementRef.nativeElement.id;
        const shouldSetNativeId = value.id !== nativeId && this.nativeIdWasSet;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', value.id);
        }
    }
    ngAfterViewInit() {
        const nativeId = this.elementRef.nativeElement.id;
        const shouldSetNativeId = this.state.id !== nativeId && !nativeId;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', this.state.id);
            this.nativeIdWasSet = true;
        }
    }
    setViewValue(value) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', parseFloat(value));
    }
    setOnChangeCallback(fn) {
        this.onChange = fn;
    }
    setOnTouchedCallback(fn) {
        this.onTouched = fn;
    }
    setIsDisabled(isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    }
    handleInput({ target }) {
        const value = target.value;
        this.onChange(value === '' ? null : parseFloat(value));
    }
};
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
                useExisting: forwardRef(() => NgrxRangeViewAdapter_1),
                multi: true,
            }],
    }),
    __metadata("design:paramtypes", [Renderer2, ElementRef])
], NgrxRangeViewAdapter);

const BUILTIN_ADAPTERS = [
    NgrxCheckboxViewAdapter,
    NgrxRangeViewAdapter,
    NgrxNumberViewAdapter,
    NgrxSelectViewAdapter,
    NgrxSelectMultipleViewAdapter,
    NgrxRadioViewAdapter,
];
function isBuiltInViewAdapter(viewAdapter) {
    return BUILTIN_ADAPTERS.some(a => viewAdapter.constructor === a);
}
function selectViewAdapter(viewAdapters) {
    if (!viewAdapters) {
        throw new Error('No view adapter matches!');
    }
    let defaultAdapter;
    let builtinAdapter;
    let customAdapter;
    viewAdapters.forEach((v) => {
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

const ɵ0$3 = date => date === null ? null : date.toISOString(), ɵ1$2 = s => s === null ? null : new Date(Date.parse(s)), ɵ2$2 = value => value === null ? null : JSON.stringify(value), ɵ3$2 = s => s === null ? null : JSON.parse(s);
// tslint:disable-next-line:variable-name
const NgrxValueConverters = {
    default() {
        return {
            convertViewToStateValue: value => typeof value === 'object' && value !== null ? box(value) : value,
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
class ControlValueAccessorAdapter {
    constructor(valueAccessor) {
        this.valueAccessor = valueAccessor;
    }
    setViewValue(value) {
        this.valueAccessor.writeValue(value);
    }
    setOnChangeCallback(fn) {
        this.valueAccessor.registerOnChange(fn);
    }
    setOnTouchedCallback(fn) {
        this.valueAccessor.registerOnTouched(fn);
    }
    setIsDisabled(isDisabled) {
        if (this.valueAccessor.setDisabledState) {
            this.valueAccessor.setDisabledState(isDisabled);
        }
    }
}
let NgrxFormControlDirective = class NgrxFormControlDirective {
    constructor(el, 
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
    set ngrxFormControlState(newState) {
        if (!newState) {
            throw new Error('The control state must not be undefined!');
        }
        const oldState = this.state;
        this.state = newState;
        if (this.isInitialized) {
            this.updateViewIfControlIdChanged(newState, oldState);
            this.updateViewIfValueChanged(newState, oldState);
            this.updateViewIfIsDisabledChanged(newState, oldState);
            this.updateViewIfIsFocusedChanged(newState, oldState);
        }
    }
    set ngrxEnableFocusTracking(value) {
        if (value && !this.dom) {
            throw new Error('focus tracking is only supported on the browser platform');
        }
        this.focusTrackingIsEnabled = value;
    }
    // TODO: move this into a separate directive
    // automatically apply the attribute that's used by the CDK to set initial focus
    get focusRegionStartAttr() {
        return this.state && this.state.isFocused ? '' : null;
    }
    updateViewIfControlIdChanged(newState, oldState) {
        if (oldState && newState.id === oldState.id) {
            return;
        }
        this.stateValue = newState.value;
        this.viewValue = this.ngrxValueConverter.convertStateToViewValue(this.stateValue);
        this.viewAdapter.setViewValue(this.viewValue);
        if (this.viewAdapter.setIsDisabled) {
            this.viewAdapter.setIsDisabled(newState.isDisabled);
        }
    }
    updateViewIfValueChanged(newState, _) {
        if (newState.value === this.stateValue) {
            return;
        }
        this.stateValue = newState.value;
        this.viewValue = this.ngrxValueConverter.convertStateToViewValue(newState.value);
        this.viewAdapter.setViewValue(this.viewValue);
    }
    updateViewIfIsDisabledChanged(newState, oldState) {
        if (!this.viewAdapter.setIsDisabled) {
            return;
        }
        if (oldState && newState.isDisabled === oldState.isDisabled) {
            return;
        }
        this.viewAdapter.setIsDisabled(newState.isDisabled);
    }
    updateViewIfIsFocusedChanged(newState, oldState) {
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
    }
    dispatchAction(action) {
        if (this.actionsSubject !== null) {
            this.actionsSubject.next(action);
        }
        else {
            throw new Error('ActionsSubject must be present in order to dispatch actions!');
        }
    }
    ngOnInit() {
        if (!this.state) {
            throw new Error('The form state must not be undefined!');
        }
        this.isInitialized = true;
        this.updateViewIfControlIdChanged(this.state, undefined);
        this.updateViewIfValueChanged(this.state, undefined);
        this.updateViewIfIsDisabledChanged(this.state, undefined);
        this.updateViewIfIsFocusedChanged(this.state, undefined);
        const dispatchMarkAsDirtyAction = () => {
            if (this.state.isPristine) {
                this.dispatchAction(new MarkAsDirtyAction(this.state.id));
            }
        };
        const dispatchSetValueAction = () => {
            this.stateValue = this.ngrxValueConverter.convertViewToStateValue(this.viewValue);
            if (this.stateValue !== this.state.value) {
                this.dispatchAction(new SetValueAction(this.state.id, this.stateValue));
                dispatchMarkAsDirtyAction();
            }
        };
        this.viewAdapter.setOnChangeCallback((viewValue) => {
            this.viewValue = viewValue;
            if (this.ngrxUpdateOn === NGRX_UPDATE_ON_TYPE.CHANGE) {
                dispatchSetValueAction();
            }
        });
        this.viewAdapter.setOnTouchedCallback(() => {
            if (!this.state.isTouched && this.ngrxUpdateOn !== NGRX_UPDATE_ON_TYPE.NEVER) {
                this.dispatchAction(new MarkAsTouchedAction(this.state.id));
            }
            if (this.ngrxUpdateOn === NGRX_UPDATE_ON_TYPE.BLUR) {
                dispatchSetValueAction();
            }
        });
    }
    ngAfterViewInit() {
        // we need to update the view again after it was initialized since some
        // controls depend on child elements for setting the value (e.g. selects)
        this.viewAdapter.setViewValue(this.viewValue);
        if (this.viewAdapter.setIsDisabled) {
            this.viewAdapter.setIsDisabled(this.state.isDisabled);
        }
    }
    onFocusChange() {
        if (!this.focusTrackingIsEnabled) {
            return;
        }
        const isControlFocused = this.el.nativeElement === this.dom.activeElement;
        if (isControlFocused !== this.state.isFocused) {
            this.dispatchAction(isControlFocused ? new FocusAction(this.state.id) : new UnfocusAction(this.state.id));
        }
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

let NgrxLocalFormControlDirective = class NgrxLocalFormControlDirective extends NgrxFormControlDirective {
    constructor(el, dom, viewAdapters, valueAccessors) {
        super(el, dom, null, viewAdapters, valueAccessors);
        this.ngrxFormsAction = new EventEmitter();
    }
    dispatchAction(action) {
        this.ngrxFormsAction.emit(action);
    }
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

let NgrxFormDirective = class NgrxFormDirective {
    constructor(actionsSubject) {
        this.actionsSubject = actionsSubject;
        this.actionsSubject = actionsSubject;
    }
    dispatchAction(action) {
        if (this.actionsSubject !== null) {
            this.actionsSubject.next(action);
        }
        else {
            throw new Error('ActionsSubject must be present in order to dispatch actions!');
        }
    }
    ngOnInit() {
        if (!this.state) {
            throw new Error('The form state must not be undefined!');
        }
    }
    onSubmit(event) {
        event.preventDefault();
        if (this.state.isUnsubmitted) {
            this.dispatchAction(new MarkAsSubmittedAction(this.state.id));
        }
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

let NgrxLocalFormDirective = class NgrxLocalFormDirective extends NgrxFormDirective {
    constructor() {
        super(null);
        this.ngrxFormsAction = new EventEmitter();
    }
    dispatchAction(action) {
        this.ngrxFormsAction.emit(action);
    }
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

/**
 * Lists the available status class names based on the property
 * they are depending on.
 */
const NGRX_STATUS_CLASS_NAMES = {
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
let NgrxStatusCssClassesDirective = class NgrxStatusCssClassesDirective {
    set ngrxFormControlState(state) {
        this.state = state;
    }
    set ngrxFormState(state) {
        this.state = state;
    }
    get isValid() {
        return this.state.isValid;
    }
    get isInvalid() {
        return this.state.isInvalid;
    }
    get isDirty() {
        return this.state.isDirty;
    }
    get isPristine() {
        return this.state.isPristine;
    }
    get isTouched() {
        return this.state.isTouched;
    }
    get isUntouched() {
        return this.state.isUntouched;
    }
    get isSubmitted() {
        return this.state.isSubmitted;
    }
    get isUnsubmitted() {
        return this.state.isUnsubmitted;
    }
    get isValidationPending() {
        return this.state.isValidationPending;
    }
};
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
    HostBinding(`class.${NGRX_STATUS_CLASS_NAMES.isValid}`),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NgrxStatusCssClassesDirective.prototype, "isValid", null);
__decorate([
    HostBinding(`class.${NGRX_STATUS_CLASS_NAMES.isInvalid}`),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NgrxStatusCssClassesDirective.prototype, "isInvalid", null);
__decorate([
    HostBinding(`class.${NGRX_STATUS_CLASS_NAMES.isDirty}`),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NgrxStatusCssClassesDirective.prototype, "isDirty", null);
__decorate([
    HostBinding(`class.${NGRX_STATUS_CLASS_NAMES.isPristine}`),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NgrxStatusCssClassesDirective.prototype, "isPristine", null);
__decorate([
    HostBinding(`class.${NGRX_STATUS_CLASS_NAMES.isTouched}`),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NgrxStatusCssClassesDirective.prototype, "isTouched", null);
__decorate([
    HostBinding(`class.${NGRX_STATUS_CLASS_NAMES.isUntouched}`),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NgrxStatusCssClassesDirective.prototype, "isUntouched", null);
__decorate([
    HostBinding(`class.${NGRX_STATUS_CLASS_NAMES.isSubmitted}`),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NgrxStatusCssClassesDirective.prototype, "isSubmitted", null);
__decorate([
    HostBinding(`class.${NGRX_STATUS_CLASS_NAMES.isUnsubmitted}`),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NgrxStatusCssClassesDirective.prototype, "isUnsubmitted", null);
__decorate([
    HostBinding(`class.${NGRX_STATUS_CLASS_NAMES.isValidationPending}`),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], NgrxStatusCssClassesDirective.prototype, "isValidationPending", null);
NgrxStatusCssClassesDirective = __decorate([
    Directive({
        // tslint:disable-next-line:directive-selector
        selector: 'form[ngrxFormState],[ngrxFormControlState]',
    })
], NgrxStatusCssClassesDirective);

const exportsAndDeclarations = [
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
let NgrxFormsModule = class NgrxFormsModule {
};
NgrxFormsModule = __decorate([
    NgModule({
        declarations: exportsAndDeclarations,
        exports: exportsAndDeclarations,
    })
], NgrxFormsModule);

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
