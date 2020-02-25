import { unbox } from 'ngrx-forms';
// this regex is taken from the @angular/forms source code
// tslint:disable-next-line:max-line-length
export const NGRX_FORMS_EMAIL_VALIDATION_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
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
export function email(value) {
    value = unbox(value);
    if (value === null || value === undefined || value.length === 0) {
        return {};
    }
    if (NGRX_FORMS_EMAIL_VALIDATION_REGEXP.test(value)) {
        return {};
    }
    return {
        email: {
            pattern: NGRX_FORMS_EMAIL_VALIDATION_REGEXP.toString(),
            actual: value,
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zL3ZhbGlkYXRpb24vIiwic291cmNlcyI6WyJzcmMvZW1haWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFTLEtBQUssRUFBb0IsTUFBTSxZQUFZLENBQUM7QUFFNUQsMERBQTBEO0FBQzFELDJDQUEyQztBQUMzQyxNQUFNLENBQUMsTUFBTSxrQ0FBa0MsR0FBRyw0TEFBNEwsQ0FBQztBQWMvTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJHO0FBQ0gsTUFBTSxVQUFVLEtBQUssQ0FBc0QsS0FBUTtJQUNqRixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBbUMsQ0FBQztJQUV2RCxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSyxLQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDM0UsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELElBQUksa0NBQWtDLENBQUMsSUFBSSxDQUFDLEtBQWUsQ0FBQyxFQUFFO1FBQzVELE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxPQUFPO1FBQ0wsS0FBSyxFQUFFO1lBQ0wsT0FBTyxFQUFFLGtDQUFrQyxDQUFDLFFBQVEsRUFBRTtZQUN0RCxNQUFNLEVBQUUsS0FBZTtTQUN4QjtLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94ZWQsIHVuYm94LCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnbmdyeC1mb3Jtcyc7XG5cbi8vIHRoaXMgcmVnZXggaXMgdGFrZW4gZnJvbSB0aGUgQGFuZ3VsYXIvZm9ybXMgc291cmNlIGNvZGVcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbmV4cG9ydCBjb25zdCBOR1JYX0ZPUk1TX0VNQUlMX1ZBTElEQVRJT05fUkVHRVhQID0gL14oPz0uezEsMjU0fSQpKD89LnsxLDY0fUApWy0hIyQlJicqKy8wLTk9P0EtWl5fYGEtent8fX5dKyhcXC5bLSEjJCUmJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKSpAW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPyhcXC5bQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KSokLztcblxuZXhwb3J0IGludGVyZmFjZSBFbWFpbFZhbGlkYXRpb25FcnJvciB7XG4gIHBhdHRlcm46IHN0cmluZztcbiAgYWN0dWFsOiBzdHJpbmc7XG59XG5cbi8vIEB0cy1pZ25vcmVcbmRlY2xhcmUgbW9kdWxlICduZ3J4LWZvcm1zL3NyYy9zdGF0ZScge1xuICBleHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRpb25FcnJvcnMge1xuICAgIGVtYWlsPzogRW1haWxWYWxpZGF0aW9uRXJyb3I7XG4gIH1cbn1cblxuLyoqXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gdGhhdCByZXF1aXJlcyBhIHZhbHVlIHRvIGJlIGEgdmFsaWQgZS1tYWlsIGFkZHJlc3MuXG4gKiBDb25zaWRlcnMgYG51bGxgLCBgdW5kZWZpbmVkYCwgYW5kIGAnJ2AgYXMgdmFsaWQuIENvbWJpbmUgdGhpcyBmdW5jdGlvbiB3aXRoIHRoZVxuICogYHJlcXVpcmVkYCB2YWxpZGF0aW9uIGZ1bmN0aW9uIGlmIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgY29uc2lkZXJlZCBpbnZhbGlkLlxuICpcbiAqIFRoZSB2YWxpZGF0aW9uIGVycm9yIHJldHVybmVkIGJ5IHRoaXMgdmFsaWRhdGlvbiBmdW5jdGlvbiBoYXMgdGhlIGZvbGxvd2luZyBzaGFwZTpcbiAqXG5gYGB0eXBlc2NyaXB0XG57XG4gIGVtYWlsOiB7XG4gICAgcGF0dGVybjogc3RyaW5nO1xuICAgIGFjdHVhbDogc3RyaW5nO1xuICB9O1xufVxuYGBgXG4gKlxuICogVXN1YWxseSB5b3Ugd291bGQgdXNlIHRoaXMgdmFsaWRhdGlvbiBmdW5jdGlvbiBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBgdmFsaWRhdGVgXG4gKiB1cGRhdGUgZnVuY3Rpb24gdG8gcGVyZm9ybSBzeW5jaHJvbm91cyB2YWxpZGF0aW9uIGluIHlvdXIgcmVkdWNlcjpcbiAqXG5gYGB0eXBlc2NyaXB0XG51cGRhdGVHcm91cDxNeUZvcm1WYWx1ZT4oe1xuICB1c2VyTWFpbEFkZHJlc3M6IHZhbGlkYXRlKGVtYWlsKSxcbn0pXG5gYGBcbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBnZW5lcmljIHRvIGFsbG93IHRoZSBjb21waWxlciB0byBwcm9wZXJseSBpbmZlciB0aGUgdHlwZVxuICogb2YgdGhlIGB2YWxpZGF0ZWAgZnVuY3Rpb24gZm9yIGJvdGggb3B0aW9uYWwgYW5kIG5vbi1vcHRpb25hbCBjb250cm9scy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVtYWlsPFQgZXh0ZW5kcyBzdHJpbmcgfCBCb3hlZDxzdHJpbmc+IHwgbnVsbCB8IHVuZGVmaW5lZD4odmFsdWU6IFQpOiBWYWxpZGF0aW9uRXJyb3JzIHtcbiAgdmFsdWUgPSB1bmJveCh2YWx1ZSkgYXMgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCBhcyBUO1xuXG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8ICh2YWx1ZSBhcyBzdHJpbmcpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGlmIChOR1JYX0ZPUk1TX0VNQUlMX1ZBTElEQVRJT05fUkVHRVhQLnRlc3QodmFsdWUgYXMgc3RyaW5nKSkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZW1haWw6IHtcbiAgICAgIHBhdHRlcm46IE5HUlhfRk9STVNfRU1BSUxfVkFMSURBVElPTl9SRUdFWFAudG9TdHJpbmcoKSxcbiAgICAgIGFjdHVhbDogdmFsdWUgYXMgc3RyaW5nLFxuICAgIH0sXG4gIH07XG59XG4iXX0=