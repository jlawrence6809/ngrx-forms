import { unbox } from 'ngrx-forms';
/**
 * A validation function that requires a `string` or `array` value to have a minimum length.
 * Considers `null`, `undefined`, empty strings and empty arrays as valid. Combine this
 * function with the `required` validation function if these values should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  minLength: {
    minLength: number;
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
  password: validate(minLength(8)),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
export function minLength(minLengthParam) {
    // tslint:disable-next-line:strict-type-predicates (guard for users without strict type checking)
    if (minLengthParam === null || minLengthParam === undefined) {
        throw new Error("The minLength Validation function requires the minLength parameter to be a non-null number, got " + minLengthParam + "!");
    }
    return function (value) {
        value = unbox(value);
        if (value === null || value === undefined) {
            return {};
        }
        var length = value.length;
        if (length === 0) {
            return {}; // don't validate empty values to allow optional controls
        }
        if (length >= minLengthParam) {
            return {};
        }
        return {
            minLength: {
                minLength: minLengthParam,
                value: value,
                actualLength: length,
            },
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLWxlbmd0aC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvdmFsaWRhdGlvbi8iLCJzb3VyY2VzIjpbInNyYy9taW4tbGVuZ3RoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBUyxLQUFLLEVBQW9CLE1BQU0sWUFBWSxDQUFDO0FBZTVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEJHO0FBQ0gsTUFBTSxVQUFVLFNBQVMsQ0FBQyxjQUFzQjtJQUM5QyxpR0FBaUc7SUFDakcsSUFBSSxjQUFjLEtBQUssSUFBSSxJQUFJLGNBQWMsS0FBSyxTQUFTLEVBQUU7UUFDM0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxxR0FBbUcsY0FBYyxNQUFHLENBQUMsQ0FBQztLQUN2STtJQUVELE9BQU8sVUFBNkUsS0FBUTtRQUMxRixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJCLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3pDLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxJQUFNLE1BQU0sR0FBSSxLQUF3QixDQUFDLE1BQU0sQ0FBQztRQUVoRCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxFQUFFLENBQUMsQ0FBQyx5REFBeUQ7U0FDckU7UUFFRCxJQUFJLE1BQU0sSUFBSSxjQUFjLEVBQUU7WUFDNUIsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELE9BQU87WUFDTCxTQUFTLEVBQUU7Z0JBQ1QsU0FBUyxFQUFFLGNBQWM7Z0JBQ3pCLEtBQUssRUFBRSxLQUFlO2dCQUN0QixZQUFZLEVBQUUsTUFBTTthQUNyQjtTQUNGLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94ZWQsIHVuYm94LCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnbmdyeC1mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWluTGVuZ3RoVmFsaWRhdGlvbkVycm9yIHtcbiAgbWluTGVuZ3RoOiBudW1iZXI7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGFjdHVhbExlbmd0aDogbnVtYmVyO1xufVxuXG4vLyBAdHMtaWdub3JlXG5kZWNsYXJlIG1vZHVsZSAnbmdyeC1mb3Jtcy9zcmMvc3RhdGUnIHtcbiAgZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0aW9uRXJyb3JzIHtcbiAgICBtaW5MZW5ndGg/OiBNaW5MZW5ndGhWYWxpZGF0aW9uRXJyb3I7XG4gIH1cbn1cblxuLyoqXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gdGhhdCByZXF1aXJlcyBhIGBzdHJpbmdgIG9yIGBhcnJheWAgdmFsdWUgdG8gaGF2ZSBhIG1pbmltdW0gbGVuZ3RoLlxuICogQ29uc2lkZXJzIGBudWxsYCwgYHVuZGVmaW5lZGAsIGVtcHR5IHN0cmluZ3MgYW5kIGVtcHR5IGFycmF5cyBhcyB2YWxpZC4gQ29tYmluZSB0aGlzXG4gKiBmdW5jdGlvbiB3aXRoIHRoZSBgcmVxdWlyZWRgIHZhbGlkYXRpb24gZnVuY3Rpb24gaWYgdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBjb25zaWRlcmVkIGludmFsaWQuXG4gKlxuICogVGhlIHZhbGlkYXRpb24gZXJyb3IgcmV0dXJuZWQgYnkgdGhpcyB2YWxpZGF0aW9uIGZ1bmN0aW9uIGhhcyB0aGUgZm9sbG93aW5nIHNoYXBlOlxuICpcbmBgYHR5cGVzY3JpcHRcbntcbiAgbWluTGVuZ3RoOiB7XG4gICAgbWluTGVuZ3RoOiBudW1iZXI7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgICBhY3R1YWxMZW5ndGg6IG51bWJlcjtcbiAgfTtcbn1cbmBgYFxuICpcbiAqIFVzdWFsbHkgeW91IHdvdWxkIHVzZSB0aGlzIHZhbGlkYXRpb24gZnVuY3Rpb24gaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgYHZhbGlkYXRlYFxuICogdXBkYXRlIGZ1bmN0aW9uIHRvIHBlcmZvcm0gc3luY2hyb25vdXMgdmFsaWRhdGlvbiBpbiB5b3VyIHJlZHVjZXI6XG4gKlxuYGBgdHlwZXNjcmlwdFxudXBkYXRlR3JvdXA8TXlGb3JtVmFsdWU+KHtcbiAgcGFzc3dvcmQ6IHZhbGlkYXRlKG1pbkxlbmd0aCg4KSksXG59KVxuYGBgXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgZ2VuZXJpYyB0byBhbGxvdyB0aGUgY29tcGlsZXIgdG8gcHJvcGVybHkgaW5mZXIgdGhlIHR5cGVcbiAqIG9mIHRoZSBgdmFsaWRhdGVgIGZ1bmN0aW9uIGZvciBib3RoIG9wdGlvbmFsIGFuZCBub24tb3B0aW9uYWwgY29udHJvbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaW5MZW5ndGgobWluTGVuZ3RoUGFyYW06IG51bWJlcikge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6c3RyaWN0LXR5cGUtcHJlZGljYXRlcyAoZ3VhcmQgZm9yIHVzZXJzIHdpdGhvdXQgc3RyaWN0IHR5cGUgY2hlY2tpbmcpXG4gIGlmIChtaW5MZW5ndGhQYXJhbSA9PT0gbnVsbCB8fCBtaW5MZW5ndGhQYXJhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbWluTGVuZ3RoIFZhbGlkYXRpb24gZnVuY3Rpb24gcmVxdWlyZXMgdGhlIG1pbkxlbmd0aCBwYXJhbWV0ZXIgdG8gYmUgYSBub24tbnVsbCBudW1iZXIsIGdvdCAke21pbkxlbmd0aFBhcmFtfSFgKTtcbiAgfVxuXG4gIHJldHVybiA8VCBleHRlbmRzIHN0cmluZyB8IEJveGVkPHN0cmluZz4gfCBhbnlbXSB8IEJveGVkPGFueVtdPiB8IG51bGwgfCB1bmRlZmluZWQ+KHZhbHVlOiBUKTogVmFsaWRhdGlvbkVycm9ycyA9PiB7XG4gICAgdmFsdWUgPSB1bmJveCh2YWx1ZSk7XG5cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGNvbnN0IGxlbmd0aCA9ICh2YWx1ZSBhcyBzdHJpbmcgfCBhbnlbXSkubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHt9OyAvLyBkb24ndCB2YWxpZGF0ZSBlbXB0eSB2YWx1ZXMgdG8gYWxsb3cgb3B0aW9uYWwgY29udHJvbHNcbiAgICB9XG5cbiAgICBpZiAobGVuZ3RoID49IG1pbkxlbmd0aFBhcmFtKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1pbkxlbmd0aDoge1xuICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aFBhcmFtLFxuICAgICAgICB2YWx1ZTogdmFsdWUgYXMgc3RyaW5nLFxuICAgICAgICBhY3R1YWxMZW5ndGg6IGxlbmd0aCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbn1cbiJdfQ==