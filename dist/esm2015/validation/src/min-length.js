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
        throw new Error(`The minLength Validation function requires the minLength parameter to be a non-null number, got ${minLengthParam}!`);
    }
    return (value) => {
        value = unbox(value);
        if (value === null || value === undefined) {
            return {};
        }
        const length = value.length;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLWxlbmd0aC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvdmFsaWRhdGlvbi8iLCJzb3VyY2VzIjpbInNyYy9taW4tbGVuZ3RoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBUyxLQUFLLEVBQW9CLE1BQU0sWUFBWSxDQUFDO0FBZTVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEJHO0FBQ0gsTUFBTSxVQUFVLFNBQVMsQ0FBQyxjQUFzQjtJQUM5QyxpR0FBaUc7SUFDakcsSUFBSSxjQUFjLEtBQUssSUFBSSxJQUFJLGNBQWMsS0FBSyxTQUFTLEVBQUU7UUFDM0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxtR0FBbUcsY0FBYyxHQUFHLENBQUMsQ0FBQztLQUN2STtJQUVELE9BQU8sQ0FBNkUsS0FBUSxFQUFvQixFQUFFO1FBQ2hILEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckIsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDekMsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELE1BQU0sTUFBTSxHQUFJLEtBQXdCLENBQUMsTUFBTSxDQUFDO1FBRWhELElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoQixPQUFPLEVBQUUsQ0FBQyxDQUFDLHlEQUF5RDtTQUNyRTtRQUVELElBQUksTUFBTSxJQUFJLGNBQWMsRUFBRTtZQUM1QixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsT0FBTztZQUNMLFNBQVMsRUFBRTtnQkFDVCxTQUFTLEVBQUUsY0FBYztnQkFDekIsS0FBSyxFQUFFLEtBQWU7Z0JBQ3RCLFlBQVksRUFBRSxNQUFNO2FBQ3JCO1NBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3hlZCwgdW5ib3gsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICduZ3J4LWZvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBNaW5MZW5ndGhWYWxpZGF0aW9uRXJyb3Ige1xuICBtaW5MZW5ndGg6IG51bWJlcjtcbiAgdmFsdWU6IHN0cmluZztcbiAgYWN0dWFsTGVuZ3RoOiBudW1iZXI7XG59XG5cbi8vIEB0cy1pZ25vcmVcbmRlY2xhcmUgbW9kdWxlICduZ3J4LWZvcm1zL3NyYy9zdGF0ZScge1xuICBleHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRpb25FcnJvcnMge1xuICAgIG1pbkxlbmd0aD86IE1pbkxlbmd0aFZhbGlkYXRpb25FcnJvcjtcbiAgfVxufVxuXG4vKipcbiAqIEEgdmFsaWRhdGlvbiBmdW5jdGlvbiB0aGF0IHJlcXVpcmVzIGEgYHN0cmluZ2Agb3IgYGFycmF5YCB2YWx1ZSB0byBoYXZlIGEgbWluaW11bSBsZW5ndGguXG4gKiBDb25zaWRlcnMgYG51bGxgLCBgdW5kZWZpbmVkYCwgZW1wdHkgc3RyaW5ncyBhbmQgZW1wdHkgYXJyYXlzIGFzIHZhbGlkLiBDb21iaW5lIHRoaXNcbiAqIGZ1bmN0aW9uIHdpdGggdGhlIGByZXF1aXJlZGAgdmFsaWRhdGlvbiBmdW5jdGlvbiBpZiB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWQgaW52YWxpZC5cbiAqXG4gKiBUaGUgdmFsaWRhdGlvbiBlcnJvciByZXR1cm5lZCBieSB0aGlzIHZhbGlkYXRpb24gZnVuY3Rpb24gaGFzIHRoZSBmb2xsb3dpbmcgc2hhcGU6XG4gKlxuYGBgdHlwZXNjcmlwdFxue1xuICBtaW5MZW5ndGg6IHtcbiAgICBtaW5MZW5ndGg6IG51bWJlcjtcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIGFjdHVhbExlbmd0aDogbnVtYmVyO1xuICB9O1xufVxuYGBgXG4gKlxuICogVXN1YWxseSB5b3Ugd291bGQgdXNlIHRoaXMgdmFsaWRhdGlvbiBmdW5jdGlvbiBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBgdmFsaWRhdGVgXG4gKiB1cGRhdGUgZnVuY3Rpb24gdG8gcGVyZm9ybSBzeW5jaHJvbm91cyB2YWxpZGF0aW9uIGluIHlvdXIgcmVkdWNlcjpcbiAqXG5gYGB0eXBlc2NyaXB0XG51cGRhdGVHcm91cDxNeUZvcm1WYWx1ZT4oe1xuICBwYXNzd29yZDogdmFsaWRhdGUobWluTGVuZ3RoKDgpKSxcbn0pXG5gYGBcbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBnZW5lcmljIHRvIGFsbG93IHRoZSBjb21waWxlciB0byBwcm9wZXJseSBpbmZlciB0aGUgdHlwZVxuICogb2YgdGhlIGB2YWxpZGF0ZWAgZnVuY3Rpb24gZm9yIGJvdGggb3B0aW9uYWwgYW5kIG5vbi1vcHRpb25hbCBjb250cm9scy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pbkxlbmd0aChtaW5MZW5ndGhQYXJhbTogbnVtYmVyKSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpzdHJpY3QtdHlwZS1wcmVkaWNhdGVzIChndWFyZCBmb3IgdXNlcnMgd2l0aG91dCBzdHJpY3QgdHlwZSBjaGVja2luZylcbiAgaWYgKG1pbkxlbmd0aFBhcmFtID09PSBudWxsIHx8IG1pbkxlbmd0aFBhcmFtID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtaW5MZW5ndGggVmFsaWRhdGlvbiBmdW5jdGlvbiByZXF1aXJlcyB0aGUgbWluTGVuZ3RoIHBhcmFtZXRlciB0byBiZSBhIG5vbi1udWxsIG51bWJlciwgZ290ICR7bWluTGVuZ3RoUGFyYW19IWApO1xuICB9XG5cbiAgcmV0dXJuIDxUIGV4dGVuZHMgc3RyaW5nIHwgQm94ZWQ8c3RyaW5nPiB8IGFueVtdIHwgQm94ZWQ8YW55W10+IHwgbnVsbCB8IHVuZGVmaW5lZD4odmFsdWU6IFQpOiBWYWxpZGF0aW9uRXJyb3JzID0+IHtcbiAgICB2YWx1ZSA9IHVuYm94KHZhbHVlKTtcblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgY29uc3QgbGVuZ3RoID0gKHZhbHVlIGFzIHN0cmluZyB8IGFueVtdKS5sZW5ndGg7XG5cbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4ge307IC8vIGRvbid0IHZhbGlkYXRlIGVtcHR5IHZhbHVlcyB0byBhbGxvdyBvcHRpb25hbCBjb250cm9sc1xuICAgIH1cblxuICAgIGlmIChsZW5ndGggPj0gbWluTGVuZ3RoUGFyYW0pIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWluTGVuZ3RoOiB7XG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoUGFyYW0sXG4gICAgICAgIHZhbHVlOiB2YWx1ZSBhcyBzdHJpbmcsXG4gICAgICAgIGFjdHVhbExlbmd0aDogbGVuZ3RoLFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xufVxuIl19