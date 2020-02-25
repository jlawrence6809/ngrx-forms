import { Boxed, ValidationErrors } from 'ngrx-forms';
export interface NotEqualToValidationError<T> {
    comparand: T;
    actual: T;
}
declare module 'ngrx-forms/src/state' {
    interface ValidationErrors {
        notEqualTo?: NotEqualToValidationError<any>;
    }
}
/**
 * A validation function that requires the value to be strictly not equal (i.e. `!==`)
 * to another value.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  notEqualTo: {
    comparand: T;
    actual: T;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  name: validate(notEqualTo('John Doe')),
})
```
 */
export declare function notEqualTo<T>(comparand: T): <TV extends T | Boxed<T> = T>(value: TV) => ValidationErrors;
