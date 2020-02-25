import { Boxed, ValidationErrors } from 'ngrx-forms';
export interface MaxLengthValidationError {
    maxLength: number;
    value: string;
    actualLength: number;
}
declare module 'ngrx-forms/src/state' {
    interface ValidationErrors {
        maxLength?: MaxLengthValidationError;
    }
}
/**
 * A validation function that requires a `string` or `array` value to have a maximum length.
 * Considers `null` and `undefined` as valid. Combine this function with the `required`
 * validation function if `null` or `undefined` should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  maxLength: {
    maxLength: number;
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
  name: validate(maxLength(10)),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
export declare function maxLength(maxLengthParam: number): <T extends string | any[] | Boxed<string> | Boxed<any[]> | null | undefined>(value: T) => ValidationErrors;
