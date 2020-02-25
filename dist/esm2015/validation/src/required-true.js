import { unbox } from 'ngrx-forms';
/**
 * A validation function that requires the value to be `true`. Considers `null` and
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
  agreeWithTermsOfService: validate(requiredTrue),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
export function requiredTrue(value) {
    value = unbox(value);
    // tslint:disable-next-line:strict-type-predicates
    if (value === null || value === undefined) {
        return {};
    }
    if (value) {
        return {};
    }
    return {
        required: {
            actual: value,
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWQtdHJ1ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvdmFsaWRhdGlvbi8iLCJzb3VyY2VzIjpbInNyYy9yZXF1aXJlZC10cnVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBUyxLQUFLLEVBQW9CLE1BQU0sWUFBWSxDQUFDO0FBRTVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQXdELEtBQVE7SUFDMUYsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQW9DLENBQUM7SUFFeEQsa0RBQWtEO0lBQ2xELElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1FBQ3pDLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxJQUFJLEtBQUssRUFBRTtRQUNULE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxPQUFPO1FBQ0wsUUFBUSxFQUFFO1lBQ1IsTUFBTSxFQUFFLEtBQUs7U0FDZDtLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94ZWQsIHVuYm94LCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnbmdyeC1mb3Jtcyc7XG5cbi8qKlxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHRoYXQgcmVxdWlyZXMgdGhlIHZhbHVlIHRvIGJlIGB0cnVlYC4gQ29uc2lkZXJzIGBudWxsYCBhbmRcbiAqIGB1bmRlZmluZWRgIGFzIHZhbGlkLiBDb21iaW5lIHRoaXMgZnVuY3Rpb24gd2l0aCB0aGUgYHJlcXVpcmVkYCB2YWxpZGF0aW9uXG4gKiBmdW5jdGlvbiBpZiBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgc2hvdWxkIGJlIGNvbnNpZGVyZWQgaW52YWxpZC5cbiAqXG4gKiBUaGUgdmFsaWRhdGlvbiBlcnJvciByZXR1cm5lZCBieSB0aGlzIHZhbGlkYXRpb24gZnVuY3Rpb24gaGFzIHRoZSBmb2xsb3dpbmcgc2hhcGU6XG4gKlxuYGBgdHlwZXNjcmlwdFxue1xuICByZXF1aXJlZDoge1xuICAgIGFjdHVhbDogYm9vbGVhbjtcbiAgfTtcbn1cbmBgYFxuICpcbiAqIFVzdWFsbHkgeW91IHdvdWxkIHVzZSB0aGlzIHZhbGlkYXRpb24gZnVuY3Rpb24gaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgYHZhbGlkYXRlYFxuICogdXBkYXRlIGZ1bmN0aW9uIHRvIHBlcmZvcm0gc3luY2hyb25vdXMgdmFsaWRhdGlvbiBpbiB5b3VyIHJlZHVjZXI6XG4gKlxuYGBgdHlwZXNjcmlwdFxudXBkYXRlR3JvdXA8TXlGb3JtVmFsdWU+KHtcbiAgYWdyZWVXaXRoVGVybXNPZlNlcnZpY2U6IHZhbGlkYXRlKHJlcXVpcmVkVHJ1ZSksXG59KVxuYGBgXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgZ2VuZXJpYyB0byBhbGxvdyB0aGUgY29tcGlsZXIgdG8gcHJvcGVybHkgaW5mZXIgdGhlIHR5cGVcbiAqIG9mIHRoZSBgdmFsaWRhdGVgIGZ1bmN0aW9uIGZvciBib3RoIG9wdGlvbmFsIGFuZCBub24tb3B0aW9uYWwgY29udHJvbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlZFRydWU8VCBleHRlbmRzIGJvb2xlYW4gfCBCb3hlZDxib29sZWFuPiB8IG51bGwgfCB1bmRlZmluZWQ+KHZhbHVlOiBUKTogVmFsaWRhdGlvbkVycm9ycyB7XG4gIHZhbHVlID0gdW5ib3godmFsdWUpIGFzIGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkIGFzIFQ7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnN0cmljdC10eXBlLXByZWRpY2F0ZXNcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBpZiAodmFsdWUpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlcXVpcmVkOiB7XG4gICAgICBhY3R1YWw6IHZhbHVlLFxuICAgIH0sXG4gIH07XG59XG4iXX0=