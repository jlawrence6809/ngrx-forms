import { Boxed, ValidationErrors } from 'ngrx-forms';
export interface MinLengthValidationError {
    minLength: number;
    value: string;
    actualLength: number;
}
declare module 'ngrx-forms/src/state' {
    interface ValidationErrors {
        minLength?: MinLengthValidationError;
    }
}
/**
 * A validation function that requires a `string` or `array` value to have a minimum length.
 * Considers `null`, `undefined`, empty strings and empty arrays as valid. Combine this
 * function with the `required` validation function if these values should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  minLength: {
    minLength: number;
    value: string;
    actualLength: number;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  password: validate(minLength(8)),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
export declare function minLength(minLengthParam: number): <T extends string | any[] | Boxed<string> | Boxed<any[]> | null | undefined>(value: T) => ValidationErrors;
