import { unbox } from 'ngrx-forms';
/**
 * A validation function that requires the value to be `false`. Considers `null` and
 * `undefined` as valid. Combine this function with the `required` validation
 * function if `null` or `undefined` should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  required: {
    actual: boolean;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  disagreeWithTermsOfService: validate(requiredFalse),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
export function requiredFalse(value) {
    value = unbox(value);
    // tslint:disable-next-line:strict-type-predicates
    if (value === null || value === undefined) {
        return {};
    }
    if (!value) {
        return {};
    }
    return {
        required: {
            actual: value,
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWQtZmFsc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zL3ZhbGlkYXRpb24vIiwic291cmNlcyI6WyJzcmMvcmVxdWlyZWQtZmFsc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFTLEtBQUssRUFBb0IsTUFBTSxZQUFZLENBQUM7QUFFNUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEJHO0FBQ0gsTUFBTSxVQUFVLGFBQWEsQ0FBd0QsS0FBUTtJQUMzRixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBb0MsQ0FBQztJQUV4RCxrREFBa0Q7SUFDbEQsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7UUFDekMsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsT0FBTztRQUNMLFFBQVEsRUFBRTtZQUNSLE1BQU0sRUFBRSxLQUFLO1NBQ2Q7S0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveGVkLCB1bmJveCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ25ncngtZm9ybXMnO1xuXG4vKipcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB0aGF0IHJlcXVpcmVzIHRoZSB2YWx1ZSB0byBiZSBgZmFsc2VgLiBDb25zaWRlcnMgYG51bGxgIGFuZFxuICogYHVuZGVmaW5lZGAgYXMgdmFsaWQuIENvbWJpbmUgdGhpcyBmdW5jdGlvbiB3aXRoIHRoZSBgcmVxdWlyZWRgIHZhbGlkYXRpb25cbiAqIGZ1bmN0aW9uIGlmIGBudWxsYCBvciBgdW5kZWZpbmVkYCBzaG91bGQgYmUgY29uc2lkZXJlZCBpbnZhbGlkLlxuICpcbiAqIFRoZSB2YWxpZGF0aW9uIGVycm9yIHJldHVybmVkIGJ5IHRoaXMgdmFsaWRhdGlvbiBmdW5jdGlvbiBoYXMgdGhlIGZvbGxvd2luZyBzaGFwZTpcbiAqXG5gYGB0eXBlc2NyaXB0XG57XG4gIHJlcXVpcmVkOiB7XG4gICAgYWN0dWFsOiBib29sZWFuO1xuICB9O1xufVxuYGBgXG4gKlxuICogVXN1YWxseSB5b3Ugd291bGQgdXNlIHRoaXMgdmFsaWRhdGlvbiBmdW5jdGlvbiBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBgdmFsaWRhdGVgXG4gKiB1cGRhdGUgZnVuY3Rpb24gdG8gcGVyZm9ybSBzeW5jaHJvbm91cyB2YWxpZGF0aW9uIGluIHlvdXIgcmVkdWNlcjpcbiAqXG5gYGB0eXBlc2NyaXB0XG51cGRhdGVHcm91cDxNeUZvcm1WYWx1ZT4oe1xuICBkaXNhZ3JlZVdpdGhUZXJtc09mU2VydmljZTogdmFsaWRhdGUocmVxdWlyZWRGYWxzZSksXG59KVxuYGBgXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgZ2VuZXJpYyB0byBhbGxvdyB0aGUgY29tcGlsZXIgdG8gcHJvcGVybHkgaW5mZXIgdGhlIHR5cGVcbiAqIG9mIHRoZSBgdmFsaWRhdGVgIGZ1bmN0aW9uIGZvciBib3RoIG9wdGlvbmFsIGFuZCBub24tb3B0aW9uYWwgY29udHJvbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlZEZhbHNlPFQgZXh0ZW5kcyBib29sZWFuIHwgQm94ZWQ8Ym9vbGVhbj4gfCBudWxsIHwgdW5kZWZpbmVkPih2YWx1ZTogVCk6IFZhbGlkYXRpb25FcnJvcnMge1xuICB2YWx1ZSA9IHVuYm94KHZhbHVlKSBhcyBib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZCBhcyBUO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpzdHJpY3QtdHlwZS1wcmVkaWNhdGVzXG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVxdWlyZWQ6IHtcbiAgICAgIGFjdHVhbDogdmFsdWUsXG4gICAgfSxcbiAgfTtcbn1cbiJdfQ==