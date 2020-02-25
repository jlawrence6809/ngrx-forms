import { Boxed, ValidationErrors } from 'ngrx-forms';
export declare const NGRX_FORMS_EMAIL_VALIDATION_REGEXP: RegExp;
export interface EmailValidationError {
    pattern: string;
    actual: string;
}
declare module 'ngrx-forms/src/state' {
    interface ValidationErrors {
        email?: EmailValidationError;
    }
}
/**
 * A validation function that requires a value to be a valid e-mail address.
 * Considers `null`, `undefined`, and `''` as valid. Combine this function with the
 * `required` validation function if these values should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  email: {
    pattern: string;
    actual: string;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  userMailAddress: validate(email),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
export declare function email<T extends string | Boxed<string> | null | undefined>(value: T): ValidationErrors;
