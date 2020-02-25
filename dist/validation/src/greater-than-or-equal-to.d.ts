import { Boxed, ValidationErrors } from 'ngrx-forms';
export interface GreaterThanOrEqualToValidationError {
    comparand: number;
    actual: number;
}
declare module 'ngrx-forms/src/state' {
    interface ValidationErrors {
        greaterThanOrEqualTo?: GreaterThanOrEqualToValidationError;
    }
}
/**
 * A validation function that requires the value to be greater than or equal to a number.
 * Considers `null` and `undefined` as valid. Combine this function with the `required`
 * validation function if `null` or `undefined` should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  greaterThanOrEqualTo: {
    comparand: number;
    actual: number;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  amount: validate(greaterThanOrEqualTo(10)),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
export declare function greaterThanOrEqualTo(comparand: number): <T extends number | Boxed<number> | null | undefined>(value: T) => ValidationErrors;
