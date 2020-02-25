import { unbox } from 'ngrx-forms';
/**
 * A validation function that requires the value to be less than or equal to a number.
 * Considers `null` and `undefined` as valid. Combine this function with the `required`
 * validation function if `null` or `undefined` should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  lessThanOrEqualTo: {
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
  amount: validate(lessThanOrEqualTo(10)),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
export function lessThanOrEqualTo(comparand) {
    // tslint:disable-next-line:strict-type-predicates (guard for users without strict type checking)
    if (comparand === null || comparand === undefined) {
        throw new Error(`The lessThanOrEqualTo Validation function requires the comparand parameter to be a non-null number, got ${comparand}!`);
    }
    return (value) => {
        value = unbox(value);
        if (value === null || value === undefined) {
            return {};
        }
        if (value <= comparand) {
            return {};
        }
        return {
            lessThanOrEqualTo: {
                comparand,
                actual: value,
            },
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVzcy10aGFuLW9yLWVxdWFsLXRvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy92YWxpZGF0aW9uLyIsInNvdXJjZXMiOlsic3JjL2xlc3MtdGhhbi1vci1lcXVhbC10by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVMsS0FBSyxFQUFvQixNQUFNLFlBQVksQ0FBQztBQWM1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUFDLFNBQWlCO0lBQ2pELGlHQUFpRztJQUNqRyxJQUFJLFNBQVMsS0FBSyxJQUFJLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtRQUNqRCxNQUFNLElBQUksS0FBSyxDQUFDLDJHQUEyRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0tBQzFJO0lBRUQsT0FBTyxDQUFzRCxLQUFRLEVBQW9CLEVBQUU7UUFDekYsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQW1DLENBQUM7UUFFdkQsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDekMsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELElBQUksS0FBSyxJQUFJLFNBQVMsRUFBRTtZQUN0QixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsT0FBTztZQUNMLGlCQUFpQixFQUFFO2dCQUNqQixTQUFTO2dCQUNULE1BQU0sRUFBRSxLQUFlO2FBQ3hCO1NBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3hlZCwgdW5ib3gsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICduZ3J4LWZvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBMZXNzVGhhbk9yRXF1YWxUb1ZhbGlkYXRpb25FcnJvciB7XG4gIGNvbXBhcmFuZDogbnVtYmVyO1xuICBhY3R1YWw6IG51bWJlcjtcbn1cblxuLy8gQHRzLWlnbm9yZVxuZGVjbGFyZSBtb2R1bGUgJ25ncngtZm9ybXMvc3JjL3N0YXRlJyB7XG4gIGV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvbkVycm9ycyB7XG4gICAgbGVzc1RoYW5PckVxdWFsVG8/OiBMZXNzVGhhbk9yRXF1YWxUb1ZhbGlkYXRpb25FcnJvcjtcbiAgfVxufVxuXG4vKipcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB0aGF0IHJlcXVpcmVzIHRoZSB2YWx1ZSB0byBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYSBudW1iZXIuXG4gKiBDb25zaWRlcnMgYG51bGxgIGFuZCBgdW5kZWZpbmVkYCBhcyB2YWxpZC4gQ29tYmluZSB0aGlzIGZ1bmN0aW9uIHdpdGggdGhlIGByZXF1aXJlZGBcbiAqIHZhbGlkYXRpb24gZnVuY3Rpb24gaWYgYG51bGxgIG9yIGB1bmRlZmluZWRgIHNob3VsZCBiZSBjb25zaWRlcmVkIGludmFsaWQuXG4gKlxuICogVGhlIHZhbGlkYXRpb24gZXJyb3IgcmV0dXJuZWQgYnkgdGhpcyB2YWxpZGF0aW9uIGZ1bmN0aW9uIGhhcyB0aGUgZm9sbG93aW5nIHNoYXBlOlxuICpcbmBgYHR5cGVzY3JpcHRcbntcbiAgbGVzc1RoYW5PckVxdWFsVG86IHtcbiAgICBjb21wYXJhbmQ6IG51bWJlcjtcbiAgICBhY3R1YWw6IG51bWJlcjtcbiAgfTtcbn1cbmBgYFxuICpcbiAqIFVzdWFsbHkgeW91IHdvdWxkIHVzZSB0aGlzIHZhbGlkYXRpb24gZnVuY3Rpb24gaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgYHZhbGlkYXRlYFxuICogdXBkYXRlIGZ1bmN0aW9uIHRvIHBlcmZvcm0gc3luY2hyb25vdXMgdmFsaWRhdGlvbiBpbiB5b3VyIHJlZHVjZXI6XG4gKlxuYGBgdHlwZXNjcmlwdFxudXBkYXRlR3JvdXA8TXlGb3JtVmFsdWU+KHtcbiAgYW1vdW50OiB2YWxpZGF0ZShsZXNzVGhhbk9yRXF1YWxUbygxMCkpLFxufSlcbmBgYFxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIGdlbmVyaWMgdG8gYWxsb3cgdGhlIGNvbXBpbGVyIHRvIHByb3Blcmx5IGluZmVyIHRoZSB0eXBlXG4gKiBvZiB0aGUgYHZhbGlkYXRlYCBmdW5jdGlvbiBmb3IgYm90aCBvcHRpb25hbCBhbmQgbm9uLW9wdGlvbmFsIGNvbnRyb2xzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGVzc1RoYW5PckVxdWFsVG8oY29tcGFyYW5kOiBudW1iZXIpIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnN0cmljdC10eXBlLXByZWRpY2F0ZXMgKGd1YXJkIGZvciB1c2VycyB3aXRob3V0IHN0cmljdCB0eXBlIGNoZWNraW5nKVxuICBpZiAoY29tcGFyYW5kID09PSBudWxsIHx8IGNvbXBhcmFuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbGVzc1RoYW5PckVxdWFsVG8gVmFsaWRhdGlvbiBmdW5jdGlvbiByZXF1aXJlcyB0aGUgY29tcGFyYW5kIHBhcmFtZXRlciB0byBiZSBhIG5vbi1udWxsIG51bWJlciwgZ290ICR7Y29tcGFyYW5kfSFgKTtcbiAgfVxuXG4gIHJldHVybiA8VCBleHRlbmRzIG51bWJlciB8IEJveGVkPG51bWJlcj4gfCBudWxsIHwgdW5kZWZpbmVkPih2YWx1ZTogVCk6IFZhbGlkYXRpb25FcnJvcnMgPT4ge1xuICAgIHZhbHVlID0gdW5ib3godmFsdWUpIGFzIG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQgYXMgVDtcblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlIDw9IGNvbXBhcmFuZCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBsZXNzVGhhbk9yRXF1YWxUbzoge1xuICAgICAgICBjb21wYXJhbmQsXG4gICAgICAgIGFjdHVhbDogdmFsdWUgYXMgbnVtYmVyLFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xufVxuIl19