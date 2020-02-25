import { Boxed, ValidationErrors } from 'ngrx-forms';
export interface PatternValidationError {
    pattern: string;
    actual: string;
}
declare module 'ngrx-forms/src/state' {
    interface ValidationErrors {
        pattern?: PatternValidationError;
    }
}
/**
 * A validation function that requires a value to match a regex.
 * Considers `null`, `undefined`, and `''` as valid. Combine this function with the
 * `required` validation function if these values should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  pattern: {
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
  numberWithPeriodsOrCommas: validate(pattern(/^[0-9.,]+$/)),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
export declare function pattern(patternParam: RegExp): <T extends string | Boxed<string> | null | undefined>(value: T) => ValidationErrors;
