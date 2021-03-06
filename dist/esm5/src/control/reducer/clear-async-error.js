import * as tslib_1 from "tslib";
import { ClearAsyncErrorAction } from '../../actions';
import { isEmpty } from '../../util';
export function clearAsyncErrorReducer(state, action) {
    if (action.type !== ClearAsyncErrorAction.TYPE) {
        return state;
    }
    var name = "$" + action.name;
    var errors = state.errors;
    if (errors.hasOwnProperty(name)) {
        errors = tslib_1.__assign({}, state.errors);
        delete errors[name];
    }
    var pendingValidations = state.pendingValidations.filter(function (v) { return v !== action.name; });
    var isValid = isEmpty(errors);
    if (errors === state.errors && isValid === state.isValid && pendingValidations.length === state.pendingValidations.length) {
        return state;
    }
    return tslib_1.__assign({}, state, { isValid: isValid, isInvalid: !isValid, errors: errors,
        pendingValidations: pendingValidations, isValidationPending: pendingValidations.length > 0 });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYXItYXN5bmMtZXJyb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zLyIsInNvdXJjZXMiOlsic3JjL2NvbnRyb2wvcmVkdWNlci9jbGVhci1hc3luYy1lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFXLHFCQUFxQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFckMsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxLQUErQixFQUMvQixNQUF1QjtJQUV2QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUsscUJBQXFCLENBQUMsSUFBSSxFQUFFO1FBQzlDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFNLElBQUksR0FBRyxNQUFJLE1BQU0sQ0FBQyxJQUFNLENBQUM7SUFFL0IsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUUxQixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDL0IsTUFBTSx3QkFBUSxLQUFLLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDN0IsT0FBUSxNQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7SUFFRCxJQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssTUFBTSxDQUFDLElBQUksRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ25GLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVoQyxJQUFJLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLENBQUMsT0FBTyxJQUFJLGtCQUFrQixDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFO1FBQ3pILE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCw0QkFDSyxLQUFLLElBQ1IsT0FBTyxTQUFBLEVBQ1AsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUNuQixNQUFNLFFBQUE7UUFDTixrQkFBa0Isb0JBQUEsRUFDbEIsbUJBQW1CLEVBQUUsa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUMsSUFDbEQ7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucywgQ2xlYXJBc3luY0Vycm9yQWN0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbFN0YXRlLCBGb3JtQ29udHJvbFZhbHVlVHlwZXMgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckFzeW5jRXJyb3JSZWR1Y2VyPFRWYWx1ZSBleHRlbmRzIEZvcm1Db250cm9sVmFsdWVUeXBlcz4oXG4gIHN0YXRlOiBGb3JtQ29udHJvbFN0YXRlPFRWYWx1ZT4sXG4gIGFjdGlvbjogQWN0aW9uczxUVmFsdWU+LFxuKTogRm9ybUNvbnRyb2xTdGF0ZTxUVmFsdWU+IHtcbiAgaWYgKGFjdGlvbi50eXBlICE9PSBDbGVhckFzeW5jRXJyb3JBY3Rpb24uVFlQRSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBgJCR7YWN0aW9uLm5hbWV9YDtcblxuICBsZXQgZXJyb3JzID0gc3RhdGUuZXJyb3JzO1xuXG4gIGlmIChlcnJvcnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICBlcnJvcnMgPSB7IC4uLnN0YXRlLmVycm9ycyB9O1xuICAgIGRlbGV0ZSAoZXJyb3JzIGFzIGFueSlbbmFtZV07XG4gIH1cblxuICBjb25zdCBwZW5kaW5nVmFsaWRhdGlvbnMgPSBzdGF0ZS5wZW5kaW5nVmFsaWRhdGlvbnMuZmlsdGVyKHYgPT4gdiAhPT0gYWN0aW9uLm5hbWUpO1xuICBjb25zdCBpc1ZhbGlkID0gaXNFbXB0eShlcnJvcnMpO1xuXG4gIGlmIChlcnJvcnMgPT09IHN0YXRlLmVycm9ycyAmJiBpc1ZhbGlkID09PSBzdGF0ZS5pc1ZhbGlkICYmIHBlbmRpbmdWYWxpZGF0aW9ucy5sZW5ndGggPT09IHN0YXRlLnBlbmRpbmdWYWxpZGF0aW9ucy5sZW5ndGgpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGlzVmFsaWQsXG4gICAgaXNJbnZhbGlkOiAhaXNWYWxpZCxcbiAgICBlcnJvcnMsXG4gICAgcGVuZGluZ1ZhbGlkYXRpb25zLFxuICAgIGlzVmFsaWRhdGlvblBlbmRpbmc6IHBlbmRpbmdWYWxpZGF0aW9ucy5sZW5ndGggPiAwLFxuICB9O1xufVxuIl19