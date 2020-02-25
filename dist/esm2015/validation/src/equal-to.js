import { unbox } from 'ngrx-forms';
/**
 * A validation function that requires the value to be strictly equal (i.e. `===`)
 * to another value.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  equalTo: {
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
  name: validate(equalTo('John Doe')),
})
```
 */
export function equalTo(comparand) {
    return (value) => {
        value = unbox(value);
        if (value === comparand) {
            return {};
        }
        return {
            equalTo: {
                comparand,
                actual: value,
            },
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwtdG8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zL3ZhbGlkYXRpb24vIiwic291cmNlcyI6WyJzcmMvZXF1YWwtdG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFTLEtBQUssRUFBb0IsTUFBTSxZQUFZLENBQUM7QUFjNUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJHO0FBQ0gsTUFBTSxVQUFVLE9BQU8sQ0FBSSxTQUFZO0lBQ3JDLE9BQU8sQ0FBOEIsS0FBUyxFQUFvQixFQUFFO1FBQ2xFLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFZLENBQUM7UUFFaEMsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxPQUFPO1lBQ0wsT0FBTyxFQUFFO2dCQUNQLFNBQVM7Z0JBQ1QsTUFBTSxFQUFFLEtBQUs7YUFDZDtTQUNGLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94ZWQsIHVuYm94LCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnbmdyeC1mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXF1YWxUb1ZhbGlkYXRpb25FcnJvcjxUPiB7XG4gIGNvbXBhcmFuZDogVDtcbiAgYWN0dWFsOiBUO1xufVxuXG4vLyBAdHMtaWdub3JlXG5kZWNsYXJlIG1vZHVsZSAnbmdyeC1mb3Jtcy9zcmMvc3RhdGUnIHtcbiAgZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0aW9uRXJyb3JzIHtcbiAgICBlcXVhbFRvPzogRXF1YWxUb1ZhbGlkYXRpb25FcnJvcjxhbnk+O1xuICB9XG59XG5cbi8qKlxuICogQSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHRoYXQgcmVxdWlyZXMgdGhlIHZhbHVlIHRvIGJlIHN0cmljdGx5IGVxdWFsIChpLmUuIGA9PT1gKVxuICogdG8gYW5vdGhlciB2YWx1ZS5cbiAqXG4gKiBUaGUgdmFsaWRhdGlvbiBlcnJvciByZXR1cm5lZCBieSB0aGlzIHZhbGlkYXRpb24gZnVuY3Rpb24gaGFzIHRoZSBmb2xsb3dpbmcgc2hhcGU6XG4gKlxuYGBgdHlwZXNjcmlwdFxue1xuICBlcXVhbFRvOiB7XG4gICAgY29tcGFyYW5kOiBUO1xuICAgIGFjdHVhbDogVDtcbiAgfTtcbn1cbmBgYFxuICpcbiAqIFVzdWFsbHkgeW91IHdvdWxkIHVzZSB0aGlzIHZhbGlkYXRpb24gZnVuY3Rpb24gaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgYHZhbGlkYXRlYFxuICogdXBkYXRlIGZ1bmN0aW9uIHRvIHBlcmZvcm0gc3luY2hyb25vdXMgdmFsaWRhdGlvbiBpbiB5b3VyIHJlZHVjZXI6XG4gKlxuYGBgdHlwZXNjcmlwdFxudXBkYXRlR3JvdXA8TXlGb3JtVmFsdWU+KHtcbiAgbmFtZTogdmFsaWRhdGUoZXF1YWxUbygnSm9obiBEb2UnKSksXG59KVxuYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbFRvPFQ+KGNvbXBhcmFuZDogVCkge1xuICByZXR1cm4gPFRWIGV4dGVuZHMgVCB8IEJveGVkPFQ+ID0gVD4odmFsdWU6IFRWKTogVmFsaWRhdGlvbkVycm9ycyA9PiB7XG4gICAgdmFsdWUgPSB1bmJveCh2YWx1ZSkgYXMgVCBhcyBUVjtcblxuICAgIGlmICh2YWx1ZSA9PT0gY29tcGFyYW5kKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGVxdWFsVG86IHtcbiAgICAgICAgY29tcGFyYW5kLFxuICAgICAgICBhY3R1YWw6IHZhbHVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xufVxuIl19