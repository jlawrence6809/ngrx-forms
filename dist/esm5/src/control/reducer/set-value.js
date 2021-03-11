import * as tslib_1 from "tslib";
import { SetValueAction } from '../../actions';
import { verifyFormControlValueIsValid } from '../../state';
export function setValueReducer(state, action) {
    if (action.type !== SetValueAction.TYPE) {
        return state;
    }
    if (state.value === action.value) {
        return state;
    }
    return tslib_1.__assign({}, state, { value: verifyFormControlValueIsValid(action.value) });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXZhbHVlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy9jb250cm9sL3JlZHVjZXIvc2V0LXZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQVcsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBMkMsNkJBQTZCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFckcsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsS0FBK0IsRUFDL0IsTUFBdUI7SUFFdkIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxJQUFJLEVBQUU7UUFDdkMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsS0FBSyxFQUFFO1FBQ2hDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCw0QkFDSyxLQUFLLElBQ1IsS0FBSyxFQUFFLDZCQUE2QixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFDbEQ7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucywgU2V0VmFsdWVBY3Rpb24gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCB7IEZvcm1Db250cm9sU3RhdGUsIEZvcm1Db250cm9sVmFsdWVUeXBlcywgdmVyaWZ5Rm9ybUNvbnRyb2xWYWx1ZUlzVmFsaWQgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRWYWx1ZVJlZHVjZXI8VFZhbHVlIGV4dGVuZHMgRm9ybUNvbnRyb2xWYWx1ZVR5cGVzPihcbiAgc3RhdGU6IEZvcm1Db250cm9sU3RhdGU8VFZhbHVlPixcbiAgYWN0aW9uOiBBY3Rpb25zPFRWYWx1ZT4sXG4pOiBGb3JtQ29udHJvbFN0YXRlPFRWYWx1ZT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgIT09IFNldFZhbHVlQWN0aW9uLlRZUEUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBpZiAoc3RhdGUudmFsdWUgPT09IGFjdGlvbi52YWx1ZSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgdmFsdWU6IHZlcmlmeUZvcm1Db250cm9sVmFsdWVJc1ZhbGlkKGFjdGlvbi52YWx1ZSksXG4gIH07XG59XG4iXX0=