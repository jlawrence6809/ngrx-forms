import { AbstractControlState } from './state';
/**
 * Lists the available status class names based on the property
 * they are depending on.
 */
export declare const NGRX_STATUS_CLASS_NAMES: {
    isValid: string;
    isInvalid: string;
    isDirty: string;
    isPristine: string;
    isTouched: string;
    isUntouched: string;
    isSubmitted: string;
    isUnsubmitted: string;
    isValidationPending: string;
};
export declare class NgrxStatusCssClassesDirective {
    private state;
    ngrxFormControlState: AbstractControlState<any>;
    ngrxFormState: AbstractControlState<any>;
    readonly isValid: boolean;
    readonly isInvalid: boolean;
    readonly isDirty: boolean;
    readonly isPristine: boolean;
    readonly isTouched: boolean;
    readonly isUntouched: boolean;
    readonly isSubmitted: boolean;
    readonly isUnsubmitted: boolean;
    readonly isValidationPending: boolean;
}
