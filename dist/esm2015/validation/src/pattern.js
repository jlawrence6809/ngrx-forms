import { unbox } from 'ngrx-forms';
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
export function pattern(patternParam) {
    // tslint:disable-next-line:strict-type-predicates (guard for users without strict type checking)
    if (patternParam === null || patternParam === undefined) {
        throw new Error(`The pattern Validation function requires the pattern parameter to be a non-null string or regular expression, got ${patternParam}!`);
    }
    return (value) => {
        value = unbox(value);
        if (value === null || value === undefined || value.length === 0) {
            return {};
        }
        if (patternParam.test(value)) {
            return {};
        }
        return {
            pattern: {
                pattern: patternParam.toString(),
                actual: value,
            },
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0dGVybi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvdmFsaWRhdGlvbi8iLCJzb3VyY2VzIjpbInNyYy9wYXR0ZXJuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBUyxLQUFLLEVBQW9CLE1BQU0sWUFBWSxDQUFDO0FBYzVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQkc7QUFDSCxNQUFNLFVBQVUsT0FBTyxDQUFDLFlBQW9CO0lBQzFDLGlHQUFpRztJQUNqRyxJQUFJLFlBQVksS0FBSyxJQUFJLElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRTtRQUN2RCxNQUFNLElBQUksS0FBSyxDQUFDLHFIQUFxSCxZQUFZLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZKO0lBRUQsT0FBTyxDQUFzRCxLQUFRLEVBQW9CLEVBQUU7UUFDekYsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQW1DLENBQUM7UUFFdkQsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUssS0FBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzNFLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBZSxDQUFDLEVBQUU7WUFDdEMsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELE9BQU87WUFDTCxPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLFlBQVksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hDLE1BQU0sRUFBRSxLQUFlO2FBQ3hCO1NBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3hlZCwgdW5ib3gsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICduZ3J4LWZvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBQYXR0ZXJuVmFsaWRhdGlvbkVycm9yIHtcbiAgcGF0dGVybjogc3RyaW5nO1xuICBhY3R1YWw6IHN0cmluZztcbn1cblxuLy8gQHRzLWlnbm9yZVxuZGVjbGFyZSBtb2R1bGUgJ25ncngtZm9ybXMvc3JjL3N0YXRlJyB7XG4gIGV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvbkVycm9ycyB7XG4gICAgcGF0dGVybj86IFBhdHRlcm5WYWxpZGF0aW9uRXJyb3I7XG4gIH1cbn1cblxuLyoqXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gdGhhdCByZXF1aXJlcyBhIHZhbHVlIHRvIG1hdGNoIGEgcmVnZXguXG4gKiBDb25zaWRlcnMgYG51bGxgLCBgdW5kZWZpbmVkYCwgYW5kIGAnJ2AgYXMgdmFsaWQuIENvbWJpbmUgdGhpcyBmdW5jdGlvbiB3aXRoIHRoZVxuICogYHJlcXVpcmVkYCB2YWxpZGF0aW9uIGZ1bmN0aW9uIGlmIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgY29uc2lkZXJlZCBpbnZhbGlkLlxuICpcbiAqIFRoZSB2YWxpZGF0aW9uIGVycm9yIHJldHVybmVkIGJ5IHRoaXMgdmFsaWRhdGlvbiBmdW5jdGlvbiBoYXMgdGhlIGZvbGxvd2luZyBzaGFwZTpcbiAqXG5gYGB0eXBlc2NyaXB0XG57XG4gIHBhdHRlcm46IHtcbiAgICBwYXR0ZXJuOiBzdHJpbmc7XG4gICAgYWN0dWFsOiBzdHJpbmc7XG4gIH07XG59XG5gYGBcbiAqXG4gKiBVc3VhbGx5IHlvdSB3b3VsZCB1c2UgdGhpcyB2YWxpZGF0aW9uIGZ1bmN0aW9uIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIGB2YWxpZGF0ZWBcbiAqIHVwZGF0ZSBmdW5jdGlvbiB0byBwZXJmb3JtIHN5bmNocm9ub3VzIHZhbGlkYXRpb24gaW4geW91ciByZWR1Y2VyOlxuICpcbmBgYHR5cGVzY3JpcHRcbnVwZGF0ZUdyb3VwPE15Rm9ybVZhbHVlPih7XG4gIG51bWJlcldpdGhQZXJpb2RzT3JDb21tYXM6IHZhbGlkYXRlKHBhdHRlcm4oL15bMC05LixdKyQvKSksXG59KVxuYGBgXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgZ2VuZXJpYyB0byBhbGxvdyB0aGUgY29tcGlsZXIgdG8gcHJvcGVybHkgaW5mZXIgdGhlIHR5cGVcbiAqIG9mIHRoZSBgdmFsaWRhdGVgIGZ1bmN0aW9uIGZvciBib3RoIG9wdGlvbmFsIGFuZCBub24tb3B0aW9uYWwgY29udHJvbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXR0ZXJuKHBhdHRlcm5QYXJhbTogUmVnRXhwKSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpzdHJpY3QtdHlwZS1wcmVkaWNhdGVzIChndWFyZCBmb3IgdXNlcnMgd2l0aG91dCBzdHJpY3QgdHlwZSBjaGVja2luZylcbiAgaWYgKHBhdHRlcm5QYXJhbSA9PT0gbnVsbCB8fCBwYXR0ZXJuUGFyYW0gPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhdHRlcm4gVmFsaWRhdGlvbiBmdW5jdGlvbiByZXF1aXJlcyB0aGUgcGF0dGVybiBwYXJhbWV0ZXIgdG8gYmUgYSBub24tbnVsbCBzdHJpbmcgb3IgcmVndWxhciBleHByZXNzaW9uLCBnb3QgJHtwYXR0ZXJuUGFyYW19IWApO1xuICB9XG5cbiAgcmV0dXJuIDxUIGV4dGVuZHMgc3RyaW5nIHwgQm94ZWQ8c3RyaW5nPiB8IG51bGwgfCB1bmRlZmluZWQ+KHZhbHVlOiBUKTogVmFsaWRhdGlvbkVycm9ycyA9PiB7XG4gICAgdmFsdWUgPSB1bmJveCh2YWx1ZSkgYXMgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCBhcyBUO1xuXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgKHZhbHVlIGFzIHN0cmluZykubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgaWYgKHBhdHRlcm5QYXJhbS50ZXN0KHZhbHVlIGFzIHN0cmluZykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGF0dGVybjoge1xuICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuUGFyYW0udG9TdHJpbmcoKSxcbiAgICAgICAgYWN0dWFsOiB2YWx1ZSBhcyBzdHJpbmcsXG4gICAgICB9LFxuICAgIH07XG4gIH07XG59XG4iXX0=