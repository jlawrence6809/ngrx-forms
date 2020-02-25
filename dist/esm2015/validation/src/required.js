import { unbox } from 'ngrx-forms';
/**
 * A validation function that requires the value to be non-`undefined`, non-'null',
 * and non-empty.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  required: {
    actual: T | null | undefined;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  name: validate(required),
})
```
 */
export function required(value) {
    value = unbox(value);
    if (value !== undefined && value !== null && value.length !== 0) {
        return {};
    }
    return {
        required: {
            actual: value,
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zL3ZhbGlkYXRpb24vIiwic291cmNlcyI6WyJzcmMvcmVxdWlyZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFTLEtBQUssRUFBb0IsTUFBTSxZQUFZLENBQUM7QUFhNUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQkc7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFJLEtBQXNDO0lBQ2hFLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUF5QixDQUFDO0lBRTdDLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFLLEtBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3hFLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxPQUFPO1FBQ0wsUUFBUSxFQUFFO1lBQ1IsTUFBTSxFQUFFLEtBQUs7U0FDZDtLQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94ZWQsIHVuYm94LCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnbmdyeC1mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWlyZWRWYWxpZGF0aW9uRXJyb3I8VD4ge1xuICBhY3R1YWw6IFQgfCBudWxsIHwgdW5kZWZpbmVkO1xufVxuXG4vLyBAdHMtaWdub3JlXG5kZWNsYXJlIG1vZHVsZSAnbmdyeC1mb3Jtcy9zcmMvc3RhdGUnIHtcbiAgZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0aW9uRXJyb3JzIHtcbiAgICByZXF1aXJlZD86IFJlcXVpcmVkVmFsaWRhdGlvbkVycm9yPGFueT47XG4gIH1cbn1cblxuLyoqXG4gKiBBIHZhbGlkYXRpb24gZnVuY3Rpb24gdGhhdCByZXF1aXJlcyB0aGUgdmFsdWUgdG8gYmUgbm9uLWB1bmRlZmluZWRgLCBub24tJ251bGwnLFxuICogYW5kIG5vbi1lbXB0eS5cbiAqXG4gKiBUaGUgdmFsaWRhdGlvbiBlcnJvciByZXR1cm5lZCBieSB0aGlzIHZhbGlkYXRpb24gZnVuY3Rpb24gaGFzIHRoZSBmb2xsb3dpbmcgc2hhcGU6XG4gKlxuYGBgdHlwZXNjcmlwdFxue1xuICByZXF1aXJlZDoge1xuICAgIGFjdHVhbDogVCB8IG51bGwgfCB1bmRlZmluZWQ7XG4gIH07XG59XG5gYGBcbiAqXG4gKiBVc3VhbGx5IHlvdSB3b3VsZCB1c2UgdGhpcyB2YWxpZGF0aW9uIGZ1bmN0aW9uIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIGB2YWxpZGF0ZWBcbiAqIHVwZGF0ZSBmdW5jdGlvbiB0byBwZXJmb3JtIHN5bmNocm9ub3VzIHZhbGlkYXRpb24gaW4geW91ciByZWR1Y2VyOlxuICpcbmBgYHR5cGVzY3JpcHRcbnVwZGF0ZUdyb3VwPE15Rm9ybVZhbHVlPih7XG4gIG5hbWU6IHZhbGlkYXRlKHJlcXVpcmVkKSxcbn0pXG5gYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVkPFQ+KHZhbHVlOiBUIHwgQm94ZWQ8VD4gfCBudWxsIHwgdW5kZWZpbmVkKTogVmFsaWRhdGlvbkVycm9ycyB7XG4gIHZhbHVlID0gdW5ib3godmFsdWUpIGFzIFQgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4gIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmICh2YWx1ZSBhcyBhbnkpLmxlbmd0aCAhPT0gMCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVxdWlyZWQ6IHtcbiAgICAgIGFjdHVhbDogdmFsdWUsXG4gICAgfSxcbiAgfTtcbn1cbiJdfQ==