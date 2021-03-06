import * as tslib_1 from "tslib";
import { SetAsyncErrorAction } from '../../actions';
import { deepEquals } from '../../util';
export function setAsyncErrorReducer(state, action) {
    var _a;
    if (action.type !== SetAsyncErrorAction.TYPE) {
        return state;
    }
    if (state.isDisabled) {
        return state;
    }
    var name = "$" + action.name;
    var value = action.value;
    if (deepEquals(state.errors[name], action.value)) {
        value = state.errors[name];
    }
    var errors = tslib_1.__assign({}, state.errors, (_a = {}, _a[name] = value, _a));
    var pendingValidations = state.pendingValidations.filter(function (v) { return v !== action.name; });
    return tslib_1.__assign({}, state, { isValid: false, isInvalid: true, errors: errors,
        pendingValidations: pendingValidations, isValidationPending: pendingValidations.length > 0 });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWFzeW5jLWVycm9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy9jb250cm9sL3JlZHVjZXIvc2V0LWFzeW5jLWVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQVcsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV4QyxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLEtBQStCLEVBQy9CLE1BQXVCOztJQUV2QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssbUJBQW1CLENBQUMsSUFBSSxFQUFFO1FBQzVDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7UUFDcEIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQU0sSUFBSSxHQUFHLE1BQUksTUFBTSxDQUFDLElBQU0sQ0FBQztJQUMvQixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBRXpCLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2hELEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzVCO0lBRUQsSUFBTSxNQUFNLHdCQUFRLEtBQUssQ0FBQyxNQUFNLGVBQUcsSUFBSSxJQUFHLEtBQUssTUFBRSxDQUFDO0lBQ2xELElBQU0sa0JBQWtCLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxNQUFNLENBQUMsSUFBSSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFFbkYsNEJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxLQUFLLEVBQ2QsU0FBUyxFQUFFLElBQUksRUFDZixNQUFNLFFBQUE7UUFDTixrQkFBa0Isb0JBQUEsRUFDbEIsbUJBQW1CLEVBQUUsa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUMsSUFDbEQ7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucywgU2V0QXN5bmNFcnJvckFjdGlvbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xTdGF0ZSwgRm9ybUNvbnRyb2xWYWx1ZVR5cGVzIH0gZnJvbSAnLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgZGVlcEVxdWFscyB9IGZyb20gJy4uLy4uL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0QXN5bmNFcnJvclJlZHVjZXI8VFZhbHVlIGV4dGVuZHMgRm9ybUNvbnRyb2xWYWx1ZVR5cGVzPihcbiAgc3RhdGU6IEZvcm1Db250cm9sU3RhdGU8VFZhbHVlPixcbiAgYWN0aW9uOiBBY3Rpb25zPFRWYWx1ZT4sXG4pOiBGb3JtQ29udHJvbFN0YXRlPFRWYWx1ZT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgIT09IFNldEFzeW5jRXJyb3JBY3Rpb24uVFlQRSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5pc0Rpc2FibGVkKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgbmFtZSA9IGAkJHthY3Rpb24ubmFtZX1gO1xuICBsZXQgdmFsdWUgPSBhY3Rpb24udmFsdWU7XG5cbiAgaWYgKGRlZXBFcXVhbHMoc3RhdGUuZXJyb3JzW25hbWVdLCBhY3Rpb24udmFsdWUpKSB7XG4gICAgdmFsdWUgPSBzdGF0ZS5lcnJvcnNbbmFtZV07XG4gIH1cblxuICBjb25zdCBlcnJvcnMgPSB7IC4uLnN0YXRlLmVycm9ycywgW25hbWVdOiB2YWx1ZSB9O1xuICBjb25zdCBwZW5kaW5nVmFsaWRhdGlvbnMgPSBzdGF0ZS5wZW5kaW5nVmFsaWRhdGlvbnMuZmlsdGVyKHYgPT4gdiAhPT0gYWN0aW9uLm5hbWUpO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgaXNWYWxpZDogZmFsc2UsXG4gICAgaXNJbnZhbGlkOiB0cnVlLFxuICAgIGVycm9ycyxcbiAgICBwZW5kaW5nVmFsaWRhdGlvbnMsXG4gICAgaXNWYWxpZGF0aW9uUGVuZGluZzogcGVuZGluZ1ZhbGlkYXRpb25zLmxlbmd0aCA+IDAsXG4gIH07XG59XG4iXX0=