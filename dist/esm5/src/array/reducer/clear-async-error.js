import * as tslib_1 from "tslib";
import { ClearAsyncErrorAction } from '../../actions';
import { computeArrayState } from '../../state';
import { childReducer } from './util';
export function clearAsyncErrorReducer(state, action) {
    if (action.type !== ClearAsyncErrorAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    var name = "$" + action.name;
    var errors = state.errors;
    if (state.errors.hasOwnProperty(name)) {
        errors = tslib_1.__assign({}, state.errors);
        delete errors[name];
    }
    var pendingValidations = state.pendingValidations.filter(function (v) { return v !== action.name; });
    if (errors === state.errors && pendingValidations.length === state.pendingValidations.length) {
        return state;
    }
    return computeArrayState(state.id, state.controls, state.value, errors, pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYXItYXN5bmMtZXJyb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zLyIsInNvdXJjZXMiOlsic3JjL2FycmF5L3JlZHVjZXIvY2xlYXItYXN5bmMtZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBVyxxQkFBcUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQWtCLE1BQU0sYUFBYSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFdEMsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxLQUE2QixFQUM3QixNQUF5QjtJQUV6QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUsscUJBQXFCLENBQUMsSUFBSSxFQUFFO1FBQzlDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRTtRQUNqQyxPQUFPLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFNLElBQUksR0FBRyxNQUFJLE1BQU0sQ0FBQyxJQUFNLENBQUM7SUFFL0IsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUUxQixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3JDLE1BQU0sd0JBQVEsS0FBSyxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBQzdCLE9BQVEsTUFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCO0lBRUQsSUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUVuRixJQUFJLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxJQUFJLGtCQUFrQixDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFO1FBQzVGLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPLGlCQUFpQixDQUN0QixLQUFLLENBQUMsRUFBRSxFQUNSLEtBQUssQ0FBQyxRQUFRLEVBQ2QsS0FBSyxDQUFDLEtBQUssRUFDWCxNQUFNLEVBQ04sa0JBQWtCLEVBQ2xCLEtBQUssQ0FBQyxxQkFBcUIsRUFDM0I7UUFDRSxrQkFBa0IsRUFBRSxLQUFLLENBQUMsT0FBTztRQUNqQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsU0FBUztRQUNyQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsU0FBUztRQUNyQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsV0FBVztLQUMxQyxDQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucywgQ2xlYXJBc3luY0Vycm9yQWN0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBjb21wdXRlQXJyYXlTdGF0ZSwgRm9ybUFycmF5U3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBjaGlsZFJlZHVjZXIgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJBc3luY0Vycm9yUmVkdWNlcjxUVmFsdWU+KFxuICBzdGF0ZTogRm9ybUFycmF5U3RhdGU8VFZhbHVlPixcbiAgYWN0aW9uOiBBY3Rpb25zPFRWYWx1ZVtdPixcbik6IEZvcm1BcnJheVN0YXRlPFRWYWx1ZT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgIT09IENsZWFyQXN5bmNFcnJvckFjdGlvbi5UWVBFKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgaWYgKGFjdGlvbi5jb250cm9sSWQgIT09IHN0YXRlLmlkKSB7XG4gICAgcmV0dXJuIGNoaWxkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBgJCR7YWN0aW9uLm5hbWV9YDtcblxuICBsZXQgZXJyb3JzID0gc3RhdGUuZXJyb3JzO1xuXG4gIGlmIChzdGF0ZS5lcnJvcnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICBlcnJvcnMgPSB7IC4uLnN0YXRlLmVycm9ycyB9O1xuICAgIGRlbGV0ZSAoZXJyb3JzIGFzIGFueSlbbmFtZV07XG4gIH1cblxuICBjb25zdCBwZW5kaW5nVmFsaWRhdGlvbnMgPSBzdGF0ZS5wZW5kaW5nVmFsaWRhdGlvbnMuZmlsdGVyKHYgPT4gdiAhPT0gYWN0aW9uLm5hbWUpO1xuXG4gIGlmIChlcnJvcnMgPT09IHN0YXRlLmVycm9ycyAmJiBwZW5kaW5nVmFsaWRhdGlvbnMubGVuZ3RoID09PSBzdGF0ZS5wZW5kaW5nVmFsaWRhdGlvbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmV0dXJuIGNvbXB1dGVBcnJheVN0YXRlKFxuICAgIHN0YXRlLmlkLFxuICAgIHN0YXRlLmNvbnRyb2xzLFxuICAgIHN0YXRlLnZhbHVlLFxuICAgIGVycm9ycyxcbiAgICBwZW5kaW5nVmFsaWRhdGlvbnMsXG4gICAgc3RhdGUudXNlckRlZmluZWRQcm9wZXJ0aWVzLFxuICAgIHtcbiAgICAgIHdhc09yU2hvdWxkQmVEaXJ0eTogc3RhdGUuaXNEaXJ0eSxcbiAgICAgIHdhc09yU2hvdWxkQmVFbmFibGVkOiBzdGF0ZS5pc0VuYWJsZWQsXG4gICAgICB3YXNPclNob3VsZEJlVG91Y2hlZDogc3RhdGUuaXNUb3VjaGVkLFxuICAgICAgd2FzT3JTaG91bGRCZVN1Ym1pdHRlZDogc3RhdGUuaXNTdWJtaXR0ZWQsXG4gICAgfSxcbiAgKTtcbn1cbiJdfQ==