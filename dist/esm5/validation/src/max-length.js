import { unbox } from 'ngrx-forms';
/**
 * A validation function that requires a `string` or `array` value to have a maximum length.
 * Considers `null` and `undefined` as valid. Combine this function with the `required`
 * validation function if `null` or `undefined` should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  maxLength: {
    maxLength: number;
    value: string;
    actualLength: number;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  name: validate(maxLength(10)),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
export function maxLength(maxLengthParam) {
    // tslint:disable-next-line:strict-type-predicates (guard for users without strict type checking)
    if (maxLengthParam === null || maxLengthParam === undefined) {
        throw new Error("The maxLength Validation function requires the maxLength parameter to be a non-null number, got " + maxLengthParam + "!");
    }
    return function (value) {
        value = unbox(value);
        if (value === null || value === undefined) {
            return {};
        }
        var length = value.length;
        if (length <= maxLengthParam) {
            return {};
        }
        return {
            maxLength: {
                maxLength: maxLengthParam,
                value: value,
                actualLength: length,
            },
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4LWxlbmd0aC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvdmFsaWRhdGlvbi8iLCJzb3VyY2VzIjpbInNyYy9tYXgtbGVuZ3RoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBUyxLQUFLLEVBQW9CLE1BQU0sWUFBWSxDQUFDO0FBZTVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEJHO0FBQ0gsTUFBTSxVQUFVLFNBQVMsQ0FBQyxjQUFzQjtJQUM5QyxpR0FBaUc7SUFDakcsSUFBSSxjQUFjLEtBQUssSUFBSSxJQUFJLGNBQWMsS0FBSyxTQUFTLEVBQUU7UUFDM0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxxR0FBbUcsY0FBYyxNQUFHLENBQUMsQ0FBQztLQUN2STtJQUVELE9BQU8sVUFBNkUsS0FBUTtRQUMxRixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJCLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3pDLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxJQUFNLE1BQU0sR0FBSSxLQUF3QixDQUFDLE1BQU0sQ0FBQztRQUVoRCxJQUFJLE1BQU0sSUFBSSxjQUFjLEVBQUU7WUFDNUIsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELE9BQU87WUFDTCxTQUFTLEVBQUU7Z0JBQ1QsU0FBUyxFQUFFLGNBQWM7Z0JBQ3pCLEtBQUssRUFBRSxLQUFlO2dCQUN0QixZQUFZLEVBQUUsTUFBTTthQUNyQjtTQUNGLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94ZWQsIHVuYm94LCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnbmdyeC1mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWF4TGVuZ3RoVmFsaWRhdGlvbkVycm9yIHtcbiAgbWF4TGVuZ3RoOiBudW1iZXI7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGFjdHVhbExlbmd0aDogbnVtYmVyO1xufVxuXG4vLyBAdHMtaWdub3JlXG5kZWNsYXJlIG1vZHVsZSAnbmdyeC1mb3Jtcy9zcmMvc3RhdGUnIHtcbiAgZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0aW9uRXJyb3JzIHtcbiAgICBtYXhMZW5ndGg/OiBNYXhMZW5ndGhWYWxpZGF0aW9uRXJyb3I7XG4gIH1cbn1cblxuLyoqXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gdGhhdCByZXF1aXJlcyBhIGBzdHJpbmdgIG9yIGBhcnJheWAgdmFsdWUgdG8gaGF2ZSBhIG1heGltdW0gbGVuZ3RoLlxuICogQ29uc2lkZXJzIGBudWxsYCBhbmQgYHVuZGVmaW5lZGAgYXMgdmFsaWQuIENvbWJpbmUgdGhpcyBmdW5jdGlvbiB3aXRoIHRoZSBgcmVxdWlyZWRgXG4gKiB2YWxpZGF0aW9uIGZ1bmN0aW9uIGlmIGBudWxsYCBvciBgdW5kZWZpbmVkYCBzaG91bGQgYmUgY29uc2lkZXJlZCBpbnZhbGlkLlxuICpcbiAqIFRoZSB2YWxpZGF0aW9uIGVycm9yIHJldHVybmVkIGJ5IHRoaXMgdmFsaWRhdGlvbiBmdW5jdGlvbiBoYXMgdGhlIGZvbGxvd2luZyBzaGFwZTpcbiAqXG5gYGB0eXBlc2NyaXB0XG57XG4gIG1heExlbmd0aDoge1xuICAgIG1heExlbmd0aDogbnVtYmVyO1xuICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgYWN0dWFsTGVuZ3RoOiBudW1iZXI7XG4gIH07XG59XG5gYGBcbiAqXG4gKiBVc3VhbGx5IHlvdSB3b3VsZCB1c2UgdGhpcyB2YWxpZGF0aW9uIGZ1bmN0aW9uIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIGB2YWxpZGF0ZWBcbiAqIHVwZGF0ZSBmdW5jdGlvbiB0byBwZXJmb3JtIHN5bmNocm9ub3VzIHZhbGlkYXRpb24gaW4geW91ciByZWR1Y2VyOlxuICpcbmBgYHR5cGVzY3JpcHRcbnVwZGF0ZUdyb3VwPE15Rm9ybVZhbHVlPih7XG4gIG5hbWU6IHZhbGlkYXRlKG1heExlbmd0aCgxMCkpLFxufSlcbmBgYFxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIGdlbmVyaWMgdG8gYWxsb3cgdGhlIGNvbXBpbGVyIHRvIHByb3Blcmx5IGluZmVyIHRoZSB0eXBlXG4gKiBvZiB0aGUgYHZhbGlkYXRlYCBmdW5jdGlvbiBmb3IgYm90aCBvcHRpb25hbCBhbmQgbm9uLW9wdGlvbmFsIGNvbnRyb2xzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF4TGVuZ3RoKG1heExlbmd0aFBhcmFtOiBudW1iZXIpIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnN0cmljdC10eXBlLXByZWRpY2F0ZXMgKGd1YXJkIGZvciB1c2VycyB3aXRob3V0IHN0cmljdCB0eXBlIGNoZWNraW5nKVxuICBpZiAobWF4TGVuZ3RoUGFyYW0gPT09IG51bGwgfHwgbWF4TGVuZ3RoUGFyYW0gPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVGhlIG1heExlbmd0aCBWYWxpZGF0aW9uIGZ1bmN0aW9uIHJlcXVpcmVzIHRoZSBtYXhMZW5ndGggcGFyYW1ldGVyIHRvIGJlIGEgbm9uLW51bGwgbnVtYmVyLCBnb3QgJHttYXhMZW5ndGhQYXJhbX0hYCk7XG4gIH1cblxuICByZXR1cm4gPFQgZXh0ZW5kcyBzdHJpbmcgfCBCb3hlZDxzdHJpbmc+IHwgYW55W10gfCBCb3hlZDxhbnlbXT4gfCBudWxsIHwgdW5kZWZpbmVkPih2YWx1ZTogVCk6IFZhbGlkYXRpb25FcnJvcnMgPT4ge1xuICAgIHZhbHVlID0gdW5ib3godmFsdWUpO1xuXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBjb25zdCBsZW5ndGggPSAodmFsdWUgYXMgc3RyaW5nIHwgYW55W10pLmxlbmd0aDtcblxuICAgIGlmIChsZW5ndGggPD0gbWF4TGVuZ3RoUGFyYW0pIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWF4TGVuZ3RoOiB7XG4gICAgICAgIG1heExlbmd0aDogbWF4TGVuZ3RoUGFyYW0sXG4gICAgICAgIHZhbHVlOiB2YWx1ZSBhcyBzdHJpbmcsXG4gICAgICAgIGFjdHVhbExlbmd0aDogbGVuZ3RoLFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xufVxuIl19