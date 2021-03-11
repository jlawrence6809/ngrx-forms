import * as tslib_1 from "tslib";
import { SetAsyncErrorAction } from '../../actions';
import { computeGroupState } from '../../state';
import { deepEquals } from '../../util';
import { childReducer } from './util';
export function setAsyncErrorReducer(state, action) {
    var _a;
    if (action.type !== SetAsyncErrorAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
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
    return computeGroupState(state.id, state.controls, state.value, errors, pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWFzeW5jLWVycm9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy9ncm91cC9yZWR1Y2VyL3NldC1hc3luYy1lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFXLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBNEIsTUFBTSxhQUFhLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXRDLE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsS0FBNkIsRUFDN0IsTUFBdUI7O0lBRXZCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUU7UUFDNUMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFFO1FBQ2pDLE9BQU8sWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtRQUNwQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBTSxJQUFJLEdBQUcsTUFBSSxNQUFNLENBQUMsSUFBTSxDQUFDO0lBQy9CLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFFekIsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDaEQsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDNUI7SUFFRCxJQUFNLE1BQU0sd0JBQVEsS0FBSyxDQUFDLE1BQU0sZUFBRyxJQUFJLElBQUcsS0FBSyxNQUFFLENBQUM7SUFDbEQsSUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUVuRixPQUFPLGlCQUFpQixDQUN0QixLQUFLLENBQUMsRUFBRSxFQUNSLEtBQUssQ0FBQyxRQUFRLEVBQ2QsS0FBSyxDQUFDLEtBQUssRUFDWCxNQUFNLEVBQ04sa0JBQWtCLEVBQ2xCLEtBQUssQ0FBQyxxQkFBcUIsRUFDM0I7UUFDRSxrQkFBa0IsRUFBRSxLQUFLLENBQUMsT0FBTztRQUNqQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsU0FBUztRQUNyQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsU0FBUztRQUNyQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsV0FBVztLQUMxQyxDQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucywgU2V0QXN5bmNFcnJvckFjdGlvbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29tcHV0ZUdyb3VwU3RhdGUsIEZvcm1Hcm91cFN0YXRlLCBLZXlWYWx1ZSB9IGZyb20gJy4uLy4uL3N0YXRlJztcbmltcG9ydCB7IGRlZXBFcXVhbHMgfSBmcm9tICcuLi8uLi91dGlsJztcbmltcG9ydCB7IGNoaWxkUmVkdWNlciB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBc3luY0Vycm9yUmVkdWNlcjxUVmFsdWUgZXh0ZW5kcyBLZXlWYWx1ZT4oXG4gIHN0YXRlOiBGb3JtR3JvdXBTdGF0ZTxUVmFsdWU+LFxuICBhY3Rpb246IEFjdGlvbnM8VFZhbHVlPixcbik6IEZvcm1Hcm91cFN0YXRlPFRWYWx1ZT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgIT09IFNldEFzeW5jRXJyb3JBY3Rpb24uVFlQRSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGlmIChhY3Rpb24uY29udHJvbElkICE9PSBzdGF0ZS5pZCkge1xuICAgIHJldHVybiBjaGlsZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH1cblxuICBpZiAoc3RhdGUuaXNEaXNhYmxlZCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBgJCR7YWN0aW9uLm5hbWV9YDtcbiAgbGV0IHZhbHVlID0gYWN0aW9uLnZhbHVlO1xuXG4gIGlmIChkZWVwRXF1YWxzKHN0YXRlLmVycm9yc1tuYW1lXSwgYWN0aW9uLnZhbHVlKSkge1xuICAgIHZhbHVlID0gc3RhdGUuZXJyb3JzW25hbWVdO1xuICB9XG5cbiAgY29uc3QgZXJyb3JzID0geyAuLi5zdGF0ZS5lcnJvcnMsIFtuYW1lXTogdmFsdWUgfTtcbiAgY29uc3QgcGVuZGluZ1ZhbGlkYXRpb25zID0gc3RhdGUucGVuZGluZ1ZhbGlkYXRpb25zLmZpbHRlcih2ID0+IHYgIT09IGFjdGlvbi5uYW1lKTtcblxuICByZXR1cm4gY29tcHV0ZUdyb3VwU3RhdGUoXG4gICAgc3RhdGUuaWQsXG4gICAgc3RhdGUuY29udHJvbHMsXG4gICAgc3RhdGUudmFsdWUsXG4gICAgZXJyb3JzLFxuICAgIHBlbmRpbmdWYWxpZGF0aW9ucyxcbiAgICBzdGF0ZS51c2VyRGVmaW5lZFByb3BlcnRpZXMsXG4gICAge1xuICAgICAgd2FzT3JTaG91bGRCZURpcnR5OiBzdGF0ZS5pc0RpcnR5LFxuICAgICAgd2FzT3JTaG91bGRCZUVuYWJsZWQ6IHN0YXRlLmlzRW5hYmxlZCxcbiAgICAgIHdhc09yU2hvdWxkQmVUb3VjaGVkOiBzdGF0ZS5pc1RvdWNoZWQsXG4gICAgICB3YXNPclNob3VsZEJlU3VibWl0dGVkOiBzdGF0ZS5pc1N1Ym1pdHRlZCxcbiAgICB9LFxuICApO1xufVxuIl19