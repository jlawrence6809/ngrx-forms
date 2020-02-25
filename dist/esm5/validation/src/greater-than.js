import { unbox } from 'ngrx-forms';
/**
 * A validation function that requires the value to be greater than a number.
 * Considers `null` and `undefined` as valid. Combine this function with the `required`
 * validation function if `null` or `undefined` should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  greaterThan: {
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
  amount: validate(greaterThan(10)),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
export function greaterThan(comparand) {
    // tslint:disable-next-line:strict-type-predicates (guard for users without strict type checking)
    if (comparand === null || comparand === undefined) {
        throw new Error("The greaterThan Validation function requires the comparand parameter to be a non-null number, got " + comparand + "!");
    }
    return function (value) {
        value = unbox(value);
        if (value === null || value === undefined) {
            return {};
        }
        if (value > comparand) {
            return {};
        }
        return {
            greaterThan: {
                comparand: comparand,
                actual: value,
            },
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlYXRlci10aGFuLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy92YWxpZGF0aW9uLyIsInNvdXJjZXMiOlsic3JjL2dyZWF0ZXItdGhhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVMsS0FBSyxFQUFvQixNQUFNLFlBQVksQ0FBQztBQWM1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJHO0FBQ0gsTUFBTSxVQUFVLFdBQVcsQ0FBQyxTQUFpQjtJQUMzQyxpR0FBaUc7SUFDakcsSUFBSSxTQUFTLEtBQUssSUFBSSxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7UUFDakQsTUFBTSxJQUFJLEtBQUssQ0FBQyx1R0FBcUcsU0FBUyxNQUFHLENBQUMsQ0FBQztLQUNwSTtJQUVELE9BQU8sVUFBc0QsS0FBUTtRQUNuRSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBbUMsQ0FBQztRQUV2RCxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN6QyxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsSUFBSSxLQUFLLEdBQUcsU0FBUyxFQUFFO1lBQ3JCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxPQUFPO1lBQ0wsV0FBVyxFQUFFO2dCQUNYLFNBQVMsV0FBQTtnQkFDVCxNQUFNLEVBQUUsS0FBZTthQUN4QjtTQUNGLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94ZWQsIHVuYm94LCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnbmdyeC1mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JlYXRlclRoYW5WYWxpZGF0aW9uRXJyb3Ige1xuICBjb21wYXJhbmQ6IG51bWJlcjtcbiAgYWN0dWFsOiBudW1iZXI7XG59XG5cbi8vIEB0cy1pZ25vcmVcbmRlY2xhcmUgbW9kdWxlICduZ3J4LWZvcm1zL3NyYy9zdGF0ZScge1xuICBleHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRpb25FcnJvcnMge1xuICAgIGdyZWF0ZXJUaGFuPzogR3JlYXRlclRoYW5WYWxpZGF0aW9uRXJyb3I7XG4gIH1cbn1cblxuLyoqXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gdGhhdCByZXF1aXJlcyB0aGUgdmFsdWUgdG8gYmUgZ3JlYXRlciB0aGFuIGEgbnVtYmVyLlxuICogQ29uc2lkZXJzIGBudWxsYCBhbmQgYHVuZGVmaW5lZGAgYXMgdmFsaWQuIENvbWJpbmUgdGhpcyBmdW5jdGlvbiB3aXRoIHRoZSBgcmVxdWlyZWRgXG4gKiB2YWxpZGF0aW9uIGZ1bmN0aW9uIGlmIGBudWxsYCBvciBgdW5kZWZpbmVkYCBzaG91bGQgYmUgY29uc2lkZXJlZCBpbnZhbGlkLlxuICpcbiAqIFRoZSB2YWxpZGF0aW9uIGVycm9yIHJldHVybmVkIGJ5IHRoaXMgdmFsaWRhdGlvbiBmdW5jdGlvbiBoYXMgdGhlIGZvbGxvd2luZyBzaGFwZTpcbiAqXG5gYGB0eXBlc2NyaXB0XG57XG4gIGdyZWF0ZXJUaGFuOiB7XG4gICAgY29tcGFyYW5kOiBudW1iZXI7XG4gICAgYWN0dWFsOiBudW1iZXI7XG4gIH07XG59XG5gYGBcbiAqXG4gKiBVc3VhbGx5IHlvdSB3b3VsZCB1c2UgdGhpcyB2YWxpZGF0aW9uIGZ1bmN0aW9uIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIGB2YWxpZGF0ZWBcbiAqIHVwZGF0ZSBmdW5jdGlvbiB0byBwZXJmb3JtIHN5bmNocm9ub3VzIHZhbGlkYXRpb24gaW4geW91ciByZWR1Y2VyOlxuICpcbmBgYHR5cGVzY3JpcHRcbnVwZGF0ZUdyb3VwPE15Rm9ybVZhbHVlPih7XG4gIGFtb3VudDogdmFsaWRhdGUoZ3JlYXRlclRoYW4oMTApKSxcbn0pXG5gYGBcbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBnZW5lcmljIHRvIGFsbG93IHRoZSBjb21waWxlciB0byBwcm9wZXJseSBpbmZlciB0aGUgdHlwZVxuICogb2YgdGhlIGB2YWxpZGF0ZWAgZnVuY3Rpb24gZm9yIGJvdGggb3B0aW9uYWwgYW5kIG5vbi1vcHRpb25hbCBjb250cm9scy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdyZWF0ZXJUaGFuKGNvbXBhcmFuZDogbnVtYmVyKSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpzdHJpY3QtdHlwZS1wcmVkaWNhdGVzIChndWFyZCBmb3IgdXNlcnMgd2l0aG91dCBzdHJpY3QgdHlwZSBjaGVja2luZylcbiAgaWYgKGNvbXBhcmFuZCA9PT0gbnVsbCB8fCBjb21wYXJhbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGdyZWF0ZXJUaGFuIFZhbGlkYXRpb24gZnVuY3Rpb24gcmVxdWlyZXMgdGhlIGNvbXBhcmFuZCBwYXJhbWV0ZXIgdG8gYmUgYSBub24tbnVsbCBudW1iZXIsIGdvdCAke2NvbXBhcmFuZH0hYCk7XG4gIH1cblxuICByZXR1cm4gPFQgZXh0ZW5kcyBudW1iZXIgfCBCb3hlZDxudW1iZXI+IHwgbnVsbCB8IHVuZGVmaW5lZD4odmFsdWU6IFQpOiBWYWxpZGF0aW9uRXJyb3JzID0+IHtcbiAgICB2YWx1ZSA9IHVuYm94KHZhbHVlKSBhcyBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkIGFzIFQ7XG5cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA+IGNvbXBhcmFuZCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBncmVhdGVyVGhhbjoge1xuICAgICAgICBjb21wYXJhbmQsXG4gICAgICAgIGFjdHVhbDogdmFsdWUgYXMgbnVtYmVyLFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xufVxuIl19