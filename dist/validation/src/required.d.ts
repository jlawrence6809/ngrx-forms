import { Boxed, ValidationErrors } from 'ngrx-forms';
export interface RequiredValidationError<T> {
    actual: T | null | undefined;
}
declare module 'ngrx-forms/src/state' {
    interface ValidationErrors {
        required?: RequiredValidationError<any>;
    }
}
/**
 * A validation function that requires the value to be non-`undefined`, non-'null',
 * and non-empty.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  required: {
    actual: T | null | undefined;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  name: validate(required),
})
```
 */
export declare function required<T>(value: T | Boxed<T> | null | undefined): ValidationErrors;
