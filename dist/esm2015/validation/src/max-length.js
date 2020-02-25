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
        throw new Error(`The maxLength Validation function requires the maxLength parameter to be a non-null number, got ${maxLengthParam}!`);
    }
    return (value) => {
        value = unbox(value);
        if (value === null || value === undefined) {
            return {};
        }
        const length = value.length;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4LWxlbmd0aC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvdmFsaWRhdGlvbi8iLCJzb3VyY2VzIjpbInNyYy9tYXgtbGVuZ3RoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBUyxLQUFLLEVBQW9CLE1BQU0sWUFBWSxDQUFDO0FBZTVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEJHO0FBQ0gsTUFBTSxVQUFVLFNBQVMsQ0FBQyxjQUFzQjtJQUM5QyxpR0FBaUc7SUFDakcsSUFBSSxjQUFjLEtBQUssSUFBSSxJQUFJLGNBQWMsS0FBSyxTQUFTLEVBQUU7UUFDM0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxtR0FBbUcsY0FBYyxHQUFHLENBQUMsQ0FBQztLQUN2STtJQUVELE9BQU8sQ0FBNkUsS0FBUSxFQUFvQixFQUFFO1FBQ2hILEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckIsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDekMsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELE1BQU0sTUFBTSxHQUFJLEtBQXdCLENBQUMsTUFBTSxDQUFDO1FBRWhELElBQUksTUFBTSxJQUFJLGNBQWMsRUFBRTtZQUM1QixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsT0FBTztZQUNMLFNBQVMsRUFBRTtnQkFDVCxTQUFTLEVBQUUsY0FBYztnQkFDekIsS0FBSyxFQUFFLEtBQWU7Z0JBQ3RCLFlBQVksRUFBRSxNQUFNO2FBQ3JCO1NBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3hlZCwgdW5ib3gsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICduZ3J4LWZvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBNYXhMZW5ndGhWYWxpZGF0aW9uRXJyb3Ige1xuICBtYXhMZW5ndGg6IG51bWJlcjtcbiAgdmFsdWU6IHN0cmluZztcbiAgYWN0dWFsTGVuZ3RoOiBudW1iZXI7XG59XG5cbi8vIEB0cy1pZ25vcmVcbmRlY2xhcmUgbW9kdWxlICduZ3J4LWZvcm1zL3NyYy9zdGF0ZScge1xuICBleHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRpb25FcnJvcnMge1xuICAgIG1heExlbmd0aD86IE1heExlbmd0aFZhbGlkYXRpb25FcnJvcjtcbiAgfVxufVxuXG4vKipcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB0aGF0IHJlcXVpcmVzIGEgYHN0cmluZ2Agb3IgYGFycmF5YCB2YWx1ZSB0byBoYXZlIGEgbWF4aW11bSBsZW5ndGguXG4gKiBDb25zaWRlcnMgYG51bGxgIGFuZCBgdW5kZWZpbmVkYCBhcyB2YWxpZC4gQ29tYmluZSB0aGlzIGZ1bmN0aW9uIHdpdGggdGhlIGByZXF1aXJlZGBcbiAqIHZhbGlkYXRpb24gZnVuY3Rpb24gaWYgYG51bGxgIG9yIGB1bmRlZmluZWRgIHNob3VsZCBiZSBjb25zaWRlcmVkIGludmFsaWQuXG4gKlxuICogVGhlIHZhbGlkYXRpb24gZXJyb3IgcmV0dXJuZWQgYnkgdGhpcyB2YWxpZGF0aW9uIGZ1bmN0aW9uIGhhcyB0aGUgZm9sbG93aW5nIHNoYXBlOlxuICpcbmBgYHR5cGVzY3JpcHRcbntcbiAgbWF4TGVuZ3RoOiB7XG4gICAgbWF4TGVuZ3RoOiBudW1iZXI7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgICBhY3R1YWxMZW5ndGg6IG51bWJlcjtcbiAgfTtcbn1cbmBgYFxuICpcbiAqIFVzdWFsbHkgeW91IHdvdWxkIHVzZSB0aGlzIHZhbGlkYXRpb24gZnVuY3Rpb24gaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgYHZhbGlkYXRlYFxuICogdXBkYXRlIGZ1bmN0aW9uIHRvIHBlcmZvcm0gc3luY2hyb25vdXMgdmFsaWRhdGlvbiBpbiB5b3VyIHJlZHVjZXI6XG4gKlxuYGBgdHlwZXNjcmlwdFxudXBkYXRlR3JvdXA8TXlGb3JtVmFsdWU+KHtcbiAgbmFtZTogdmFsaWRhdGUobWF4TGVuZ3RoKDEwKSksXG59KVxuYGBgXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgZ2VuZXJpYyB0byBhbGxvdyB0aGUgY29tcGlsZXIgdG8gcHJvcGVybHkgaW5mZXIgdGhlIHR5cGVcbiAqIG9mIHRoZSBgdmFsaWRhdGVgIGZ1bmN0aW9uIGZvciBib3RoIG9wdGlvbmFsIGFuZCBub24tb3B0aW9uYWwgY29udHJvbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXhMZW5ndGgobWF4TGVuZ3RoUGFyYW06IG51bWJlcikge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6c3RyaWN0LXR5cGUtcHJlZGljYXRlcyAoZ3VhcmQgZm9yIHVzZXJzIHdpdGhvdXQgc3RyaWN0IHR5cGUgY2hlY2tpbmcpXG4gIGlmIChtYXhMZW5ndGhQYXJhbSA9PT0gbnVsbCB8fCBtYXhMZW5ndGhQYXJhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgbWF4TGVuZ3RoIFZhbGlkYXRpb24gZnVuY3Rpb24gcmVxdWlyZXMgdGhlIG1heExlbmd0aCBwYXJhbWV0ZXIgdG8gYmUgYSBub24tbnVsbCBudW1iZXIsIGdvdCAke21heExlbmd0aFBhcmFtfSFgKTtcbiAgfVxuXG4gIHJldHVybiA8VCBleHRlbmRzIHN0cmluZyB8IEJveGVkPHN0cmluZz4gfCBhbnlbXSB8IEJveGVkPGFueVtdPiB8IG51bGwgfCB1bmRlZmluZWQ+KHZhbHVlOiBUKTogVmFsaWRhdGlvbkVycm9ycyA9PiB7XG4gICAgdmFsdWUgPSB1bmJveCh2YWx1ZSk7XG5cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGNvbnN0IGxlbmd0aCA9ICh2YWx1ZSBhcyBzdHJpbmcgfCBhbnlbXSkubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCA8PSBtYXhMZW5ndGhQYXJhbSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBtYXhMZW5ndGg6IHtcbiAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGhQYXJhbSxcbiAgICAgICAgdmFsdWU6IHZhbHVlIGFzIHN0cmluZyxcbiAgICAgICAgYWN0dWFsTGVuZ3RoOiBsZW5ndGgsXG4gICAgICB9LFxuICAgIH07XG4gIH07XG59XG4iXX0=