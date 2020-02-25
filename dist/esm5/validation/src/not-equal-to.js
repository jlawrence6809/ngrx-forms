import { unbox } from 'ngrx-forms';
/**
 * A validation function that requires the value to be strictly not equal (i.e. `!==`)
 * to another value.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  notEqualTo: {
    comparand: T;
    actual: T;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  name: validate(notEqualTo('John Doe')),
})
```
 */
export function notEqualTo(comparand) {
    return function (value) {
        value = unbox(value);
        if (value !== comparand) {
            return {};
        }
        return {
            notEqualTo: {
                comparand: comparand,
                actual: value,
            },
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWVxdWFsLXRvLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy92YWxpZGF0aW9uLyIsInNvdXJjZXMiOlsic3JjL25vdC1lcXVhbC10by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVMsS0FBSyxFQUFvQixNQUFNLFlBQVksQ0FBQztBQWM1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Qkc7QUFDSCxNQUFNLFVBQVUsVUFBVSxDQUFJLFNBQVk7SUFDeEMsT0FBTyxVQUE4QixLQUFTO1FBQzVDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFZLENBQUM7UUFFaEMsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxPQUFPO1lBQ0wsVUFBVSxFQUFFO2dCQUNWLFNBQVMsV0FBQTtnQkFDVCxNQUFNLEVBQUUsS0FBSzthQUNkO1NBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3hlZCwgdW5ib3gsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICduZ3J4LWZvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBOb3RFcXVhbFRvVmFsaWRhdGlvbkVycm9yPFQ+IHtcbiAgY29tcGFyYW5kOiBUO1xuICBhY3R1YWw6IFQ7XG59XG5cbi8vIEB0cy1pZ25vcmVcbmRlY2xhcmUgbW9kdWxlICduZ3J4LWZvcm1zL3NyYy9zdGF0ZScge1xuICBleHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRpb25FcnJvcnMge1xuICAgIG5vdEVxdWFsVG8/OiBOb3RFcXVhbFRvVmFsaWRhdGlvbkVycm9yPGFueT47XG4gIH1cbn1cblxuLyoqXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gdGhhdCByZXF1aXJlcyB0aGUgdmFsdWUgdG8gYmUgc3RyaWN0bHkgbm90IGVxdWFsIChpLmUuIGAhPT1gKVxuICogdG8gYW5vdGhlciB2YWx1ZS5cbiAqXG4gKiBUaGUgdmFsaWRhdGlvbiBlcnJvciByZXR1cm5lZCBieSB0aGlzIHZhbGlkYXRpb24gZnVuY3Rpb24gaGFzIHRoZSBmb2xsb3dpbmcgc2hhcGU6XG4gKlxuYGBgdHlwZXNjcmlwdFxue1xuICBub3RFcXVhbFRvOiB7XG4gICAgY29tcGFyYW5kOiBUO1xuICAgIGFjdHVhbDogVDtcbiAgfTtcbn1cbmBgYFxuICpcbiAqIFVzdWFsbHkgeW91IHdvdWxkIHVzZSB0aGlzIHZhbGlkYXRpb24gZnVuY3Rpb24gaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgYHZhbGlkYXRlYFxuICogdXBkYXRlIGZ1bmN0aW9uIHRvIHBlcmZvcm0gc3luY2hyb25vdXMgdmFsaWRhdGlvbiBpbiB5b3VyIHJlZHVjZXI6XG4gKlxuYGBgdHlwZXNjcmlwdFxudXBkYXRlR3JvdXA8TXlGb3JtVmFsdWU+KHtcbiAgbmFtZTogdmFsaWRhdGUobm90RXF1YWxUbygnSm9obiBEb2UnKSksXG59KVxuYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3RFcXVhbFRvPFQ+KGNvbXBhcmFuZDogVCkge1xuICByZXR1cm4gPFRWIGV4dGVuZHMgVCB8IEJveGVkPFQ+ID0gVD4odmFsdWU6IFRWKTogVmFsaWRhdGlvbkVycm9ycyA9PiB7XG4gICAgdmFsdWUgPSB1bmJveCh2YWx1ZSkgYXMgVCBhcyBUVjtcblxuICAgIGlmICh2YWx1ZSAhPT0gY29tcGFyYW5kKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdEVxdWFsVG86IHtcbiAgICAgICAgY29tcGFyYW5kLFxuICAgICAgICBhY3R1YWw6IHZhbHVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xufVxuIl19