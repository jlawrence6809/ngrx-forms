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
        throw new Error("The pattern Validation function requires the pattern parameter to be a non-null string or regular expression, got " + patternParam + "!");
    }
    return function (value) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0dGVybi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvdmFsaWRhdGlvbi8iLCJzb3VyY2VzIjpbInNyYy9wYXR0ZXJuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBUyxLQUFLLEVBQW9CLE1BQU0sWUFBWSxDQUFDO0FBYzVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQkc7QUFDSCxNQUFNLFVBQVUsT0FBTyxDQUFDLFlBQW9CO0lBQzFDLGlHQUFpRztJQUNqRyxJQUFJLFlBQVksS0FBSyxJQUFJLElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRTtRQUN2RCxNQUFNLElBQUksS0FBSyxDQUFDLHVIQUFxSCxZQUFZLE1BQUcsQ0FBQyxDQUFDO0tBQ3ZKO0lBRUQsT0FBTyxVQUFzRCxLQUFRO1FBQ25FLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFtQyxDQUFDO1FBRXZELElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFLLEtBQWdCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMzRSxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQWUsQ0FBQyxFQUFFO1lBQ3RDLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxPQUFPO1lBQ0wsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxZQUFZLENBQUMsUUFBUSxFQUFFO2dCQUNoQyxNQUFNLEVBQUUsS0FBZTthQUN4QjtTQUNGLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94ZWQsIHVuYm94LCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnbmdyeC1mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGF0dGVyblZhbGlkYXRpb25FcnJvciB7XG4gIHBhdHRlcm46IHN0cmluZztcbiAgYWN0dWFsOiBzdHJpbmc7XG59XG5cbi8vIEB0cy1pZ25vcmVcbmRlY2xhcmUgbW9kdWxlICduZ3J4LWZvcm1zL3NyYy9zdGF0ZScge1xuICBleHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRpb25FcnJvcnMge1xuICAgIHBhdHRlcm4/OiBQYXR0ZXJuVmFsaWRhdGlvbkVycm9yO1xuICB9XG59XG5cbi8qKlxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHRoYXQgcmVxdWlyZXMgYSB2YWx1ZSB0byBtYXRjaCBhIHJlZ2V4LlxuICogQ29uc2lkZXJzIGBudWxsYCwgYHVuZGVmaW5lZGAsIGFuZCBgJydgIGFzIHZhbGlkLiBDb21iaW5lIHRoaXMgZnVuY3Rpb24gd2l0aCB0aGVcbiAqIGByZXF1aXJlZGAgdmFsaWRhdGlvbiBmdW5jdGlvbiBpZiB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWQgaW52YWxpZC5cbiAqXG4gKiBUaGUgdmFsaWRhdGlvbiBlcnJvciByZXR1cm5lZCBieSB0aGlzIHZhbGlkYXRpb24gZnVuY3Rpb24gaGFzIHRoZSBmb2xsb3dpbmcgc2hhcGU6XG4gKlxuYGBgdHlwZXNjcmlwdFxue1xuICBwYXR0ZXJuOiB7XG4gICAgcGF0dGVybjogc3RyaW5nO1xuICAgIGFjdHVhbDogc3RyaW5nO1xuICB9O1xufVxuYGBgXG4gKlxuICogVXN1YWxseSB5b3Ugd291bGQgdXNlIHRoaXMgdmFsaWRhdGlvbiBmdW5jdGlvbiBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBgdmFsaWRhdGVgXG4gKiB1cGRhdGUgZnVuY3Rpb24gdG8gcGVyZm9ybSBzeW5jaHJvbm91cyB2YWxpZGF0aW9uIGluIHlvdXIgcmVkdWNlcjpcbiAqXG5gYGB0eXBlc2NyaXB0XG51cGRhdGVHcm91cDxNeUZvcm1WYWx1ZT4oe1xuICBudW1iZXJXaXRoUGVyaW9kc09yQ29tbWFzOiB2YWxpZGF0ZShwYXR0ZXJuKC9eWzAtOS4sXSskLykpLFxufSlcbmBgYFxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIGdlbmVyaWMgdG8gYWxsb3cgdGhlIGNvbXBpbGVyIHRvIHByb3Blcmx5IGluZmVyIHRoZSB0eXBlXG4gKiBvZiB0aGUgYHZhbGlkYXRlYCBmdW5jdGlvbiBmb3IgYm90aCBvcHRpb25hbCBhbmQgbm9uLW9wdGlvbmFsIGNvbnRyb2xzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGF0dGVybihwYXR0ZXJuUGFyYW06IFJlZ0V4cCkge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6c3RyaWN0LXR5cGUtcHJlZGljYXRlcyAoZ3VhcmQgZm9yIHVzZXJzIHdpdGhvdXQgc3RyaWN0IHR5cGUgY2hlY2tpbmcpXG4gIGlmIChwYXR0ZXJuUGFyYW0gPT09IG51bGwgfHwgcGF0dGVyblBhcmFtID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwYXR0ZXJuIFZhbGlkYXRpb24gZnVuY3Rpb24gcmVxdWlyZXMgdGhlIHBhdHRlcm4gcGFyYW1ldGVyIHRvIGJlIGEgbm9uLW51bGwgc3RyaW5nIG9yIHJlZ3VsYXIgZXhwcmVzc2lvbiwgZ290ICR7cGF0dGVyblBhcmFtfSFgKTtcbiAgfVxuXG4gIHJldHVybiA8VCBleHRlbmRzIHN0cmluZyB8IEJveGVkPHN0cmluZz4gfCBudWxsIHwgdW5kZWZpbmVkPih2YWx1ZTogVCk6IFZhbGlkYXRpb25FcnJvcnMgPT4ge1xuICAgIHZhbHVlID0gdW5ib3godmFsdWUpIGFzIHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgYXMgVDtcblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8ICh2YWx1ZSBhcyBzdHJpbmcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGlmIChwYXR0ZXJuUGFyYW0udGVzdCh2YWx1ZSBhcyBzdHJpbmcpKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdHRlcm46IHtcbiAgICAgICAgcGF0dGVybjogcGF0dGVyblBhcmFtLnRvU3RyaW5nKCksXG4gICAgICAgIGFjdHVhbDogdmFsdWUgYXMgc3RyaW5nLFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xufVxuIl19