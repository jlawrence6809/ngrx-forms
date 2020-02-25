export function isBoxed(value) {
    return !!value && value.__boxed === '';
}
export function box(value) {
    return {
        __boxed: '',
        value,
    };
}
export function unbox(value) {
    if (['string', 'boolean', 'number', 'undefined'].indexOf(typeof value) >= 0 || value === null) {
        return value;
    }
    if (isBoxed(value)) {
        return value.value;
    }
    if (Array.isArray(value)) {
        return value.map(unbox);
    }
    return Object.keys(value).reduce((a, k) => Object.assign(a, { [k]: unbox(value[k]) }), {});
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94aW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy9ib3hpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLE1BQU0sVUFBVSxPQUFPLENBQVUsS0FBVTtJQUN6QyxPQUFPLENBQUMsQ0FBQyxLQUFLLElBQUssS0FBb0IsQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDO0FBQ3pELENBQUM7QUFFRCxNQUFNLFVBQVUsR0FBRyxDQUFJLEtBQVE7SUFDN0IsT0FBTztRQUNMLE9BQU8sRUFBRSxFQUFFO1FBQ1gsS0FBSztLQUNOLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLEtBQUssQ0FBSSxLQUFRO0lBQy9CLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtRQUM3RixPQUFPLEtBQThCLENBQUM7S0FDdkM7SUFFRCxJQUFJLE9BQU8sQ0FBSSxLQUFLLENBQUMsRUFBRTtRQUNyQixPQUFPLEtBQUssQ0FBQyxLQUE4QixDQUFDO0tBQzdDO0lBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3hCLE9BQVEsS0FBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQWUsQ0FBQztLQUNoRDtJQUVELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFZLENBQUMsQ0FBQyxNQUFNLENBQ3JDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBWSxDQUFRLENBQUMsRUFBRSxDQUFDLEVBQ3RFLEVBQVMsQ0FDSSxDQUFDO0FBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEJveGVkPFQ+IHtcbiAgX19ib3hlZDogJyc7XG4gIHZhbHVlOiBUO1xufVxuXG5leHBvcnQgdHlwZSBVbmJveGVkT2JqZWN0PFQ+ID0ge1xuICBbcHJvcCBpbiBrZXlvZiBUXTogVW5ib3hlZDxUW3Byb3BdPjtcbn07XG5cbmV4cG9ydCB0eXBlIFVuYm94ZWQ8VD4gPVxuICAvLyAoYWIpdXNlICdzeW1ib2wnIHRvIGNhdGNoICdhbnknIHR5cGluZ1xuICBUIGV4dGVuZHMgQm94ZWQ8c3ltYm9sPiA/IGFueVxuICA6IFQgZXh0ZW5kcyBCb3hlZDxpbmZlciBVPiA/IFVcbiAgOiBUIGV4dGVuZHMgc3ltYm9sW10gPyBhbnlcbiAgOiBUIGV4dGVuZHMgc3ltYm9sID8gYW55XG4gIDogVCBleHRlbmRzIHVuZGVmaW5lZCA/IHVuZGVmaW5lZFxuICA6IFQgZXh0ZW5kcyBudWxsID8gbnVsbFxuICA6IFQgZXh0ZW5kcyBzdHJpbmcgPyBzdHJpbmdcbiAgOiBUIGV4dGVuZHMgbnVtYmVyID8gbnVtYmVyXG4gIDogVCBleHRlbmRzIGJvb2xlYW4gPyBib29sZWFuXG4gIDogVW5ib3hlZE9iamVjdDxUPjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQm94ZWQ8VCA9IGFueT4odmFsdWU6IGFueSk6IHZhbHVlIGlzIEJveGVkPFQ+IHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHZhbHVlIGFzIEJveGVkPGFueT4pLl9fYm94ZWQgPT09ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm94PFQ+KHZhbHVlOiBUKTogQm94ZWQ8VD4ge1xuICByZXR1cm4ge1xuICAgIF9fYm94ZWQ6ICcnLFxuICAgIHZhbHVlLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5ib3g8VD4odmFsdWU6IFQpOiBVbmJveGVkPFQ+IHtcbiAgaWYgKFsnc3RyaW5nJywgJ2Jvb2xlYW4nLCAnbnVtYmVyJywgJ3VuZGVmaW5lZCddLmluZGV4T2YodHlwZW9mIHZhbHVlKSA+PSAwIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlIGFzIHVua25vd24gYXMgVW5ib3hlZDxUPjtcbiAgfVxuXG4gIGlmIChpc0JveGVkPFQ+KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS52YWx1ZSBhcyB1bmtub3duIGFzIFVuYm94ZWQ8VD47XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gKHZhbHVlIGFzIGFueSkubWFwKHVuYm94KSBhcyBVbmJveGVkPFQ+O1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlIGFzIGFueSkucmVkdWNlKFxuICAgIChhLCBrKSA9PiBPYmplY3QuYXNzaWduKGEsIHsgW2tdOiB1bmJveCh2YWx1ZVtrIGFzIGtleW9mIFRdIGFzIGFueSkgfSksXG4gICAge30gYXMgYW55LFxuICApIGFzIFVuYm94ZWQ8VD47XG59XG4iXX0=