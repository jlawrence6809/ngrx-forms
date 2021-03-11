import { MarkAsUntouchedAction } from '../../actions';
export function markAsUntouchedReducer(state, action) {
    if (action.type !== MarkAsUntouchedAction.TYPE) {
        return state;
    }
    if (state.isUntouched) {
        return state;
    }
    return Object.assign({}, state, { isTouched: false, isUntouched: true });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyay1hcy11bnRvdWNoZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zLyIsInNvdXJjZXMiOlsic3JjL2NvbnRyb2wvcmVkdWNlci9tYXJrLWFzLXVudG91Y2hlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVcscUJBQXFCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0QsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxLQUErQixFQUMvQixNQUF1QjtJQUV2QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUsscUJBQXFCLENBQUMsSUFBSSxFQUFFO1FBQzlDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUU7UUFDckIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELHlCQUNLLEtBQUssSUFDUixTQUFTLEVBQUUsS0FBSyxFQUNoQixXQUFXLEVBQUUsSUFBSSxJQUNqQjtBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zLCBNYXJrQXNVbnRvdWNoZWRBY3Rpb24gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCB7IEZvcm1Db250cm9sU3RhdGUsIEZvcm1Db250cm9sVmFsdWVUeXBlcyB9IGZyb20gJy4uLy4uL3N0YXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc1VudG91Y2hlZFJlZHVjZXI8VFZhbHVlIGV4dGVuZHMgRm9ybUNvbnRyb2xWYWx1ZVR5cGVzPihcbiAgc3RhdGU6IEZvcm1Db250cm9sU3RhdGU8VFZhbHVlPixcbiAgYWN0aW9uOiBBY3Rpb25zPFRWYWx1ZT4sXG4pOiBGb3JtQ29udHJvbFN0YXRlPFRWYWx1ZT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgIT09IE1hcmtBc1VudG91Y2hlZEFjdGlvbi5UWVBFKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgaWYgKHN0YXRlLmlzVW50b3VjaGVkKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBpc1RvdWNoZWQ6IGZhbHNlLFxuICAgIGlzVW50b3VjaGVkOiB0cnVlLFxuICB9O1xufVxuIl19