import { FocusAction } from '../../actions';
export function focusReducer(state, action) {
    if (action.type !== FocusAction.TYPE) {
        return state;
    }
    if (state.isFocused) {
        return state;
    }
    return Object.assign({}, state, { isFocused: true, isUnfocused: false });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zLyIsInNvdXJjZXMiOlsic3JjL2NvbnRyb2wvcmVkdWNlci9mb2N1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVcsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3JELE1BQU0sVUFBVSxZQUFZLENBQzFCLEtBQStCLEVBQy9CLE1BQXVCO0lBRXZCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsSUFBSSxFQUFFO1FBQ3BDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUU7UUFDbkIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELHlCQUNLLEtBQUssSUFDUixTQUFTLEVBQUUsSUFBSSxFQUNmLFdBQVcsRUFBRSxLQUFLLElBQ2xCO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMsIEZvY3VzQWN0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbFN0YXRlLCBGb3JtQ29udHJvbFZhbHVlVHlwZXMgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb2N1c1JlZHVjZXI8VFZhbHVlIGV4dGVuZHMgRm9ybUNvbnRyb2xWYWx1ZVR5cGVzPihcbiAgc3RhdGU6IEZvcm1Db250cm9sU3RhdGU8VFZhbHVlPixcbiAgYWN0aW9uOiBBY3Rpb25zPFRWYWx1ZT4sXG4pOiBGb3JtQ29udHJvbFN0YXRlPFRWYWx1ZT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgIT09IEZvY3VzQWN0aW9uLlRZUEUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBpZiAoc3RhdGUuaXNGb2N1c2VkKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBpc0ZvY3VzZWQ6IHRydWUsXG4gICAgaXNVbmZvY3VzZWQ6IGZhbHNlLFxuICB9O1xufVxuIl19