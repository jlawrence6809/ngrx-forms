import { SetValueAction } from '../../actions';
import { formStateReducer } from '../../reducer';
import { computeArrayState, createChildState } from '../../state';
import { childReducer } from './util';
export function setValueReducer(state, action) {
    if (action.type !== SetValueAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (state.value === action.value) {
        return state;
    }
    if (action.value instanceof Date) {
        throw new Error('Date values are not supported. Please used serialized strings instead.');
    }
    var value = action.value;
    var controls = value
        .map(function (v, i) {
        if (!state.controls[i]) {
            return createChildState(state.id + "." + i, v);
        }
        return formStateReducer(state.controls[i], new SetValueAction(state.controls[i].id, v));
    });
    return computeArrayState(state.id, controls, value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXZhbHVlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy9hcnJheS9yZWR1Y2VyL3NldC12YWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVcsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQWtCLE1BQU0sYUFBYSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFdEMsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsS0FBNkIsRUFDN0IsTUFBeUI7SUFFekIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLGNBQWMsQ0FBQyxJQUFJLEVBQUU7UUFDdkMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFFO1FBQ2pDLE9BQU8sWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsS0FBSyxFQUFFO1FBQ2hDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLFlBQVksSUFBSSxFQUFFO1FBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsd0VBQXdFLENBQUMsQ0FBQztLQUMzRjtJQUVELElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFFM0IsSUFBTSxRQUFRLEdBQUcsS0FBSztTQUNuQixHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RCLE9BQU8sZ0JBQWdCLENBQUksS0FBSyxDQUFDLEVBQUUsU0FBSSxDQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxPQUFPLGdCQUFnQixDQUFTLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxjQUFjLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxDQUFDLENBQUMsQ0FBQztJQUVMLE9BQU8saUJBQWlCLENBQ3RCLEtBQUssQ0FBQyxFQUFFLEVBQ1IsUUFBUSxFQUNSLEtBQUssRUFDTCxLQUFLLENBQUMsTUFBTSxFQUNaLEtBQUssQ0FBQyxrQkFBa0IsRUFDeEIsS0FBSyxDQUFDLHFCQUFxQixFQUMzQjtRQUNFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxPQUFPO1FBQ2pDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxTQUFTO1FBQ3JDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxTQUFTO1FBQ3JDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxXQUFXO0tBQzFDLENBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zLCBTZXRWYWx1ZUFjdGlvbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgZm9ybVN0YXRlUmVkdWNlciB9IGZyb20gJy4uLy4uL3JlZHVjZXInO1xuaW1wb3J0IHsgY29tcHV0ZUFycmF5U3RhdGUsIGNyZWF0ZUNoaWxkU3RhdGUsIEZvcm1BcnJheVN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgY2hpbGRSZWR1Y2VyIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFZhbHVlUmVkdWNlcjxUVmFsdWU+KFxuICBzdGF0ZTogRm9ybUFycmF5U3RhdGU8VFZhbHVlPixcbiAgYWN0aW9uOiBBY3Rpb25zPFRWYWx1ZVtdPixcbik6IEZvcm1BcnJheVN0YXRlPFRWYWx1ZT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgIT09IFNldFZhbHVlQWN0aW9uLlRZUEUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBpZiAoYWN0aW9uLmNvbnRyb2xJZCAhPT0gc3RhdGUuaWQpIHtcbiAgICByZXR1cm4gY2hpbGRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9XG5cbiAgaWYgKHN0YXRlLnZhbHVlID09PSBhY3Rpb24udmFsdWUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBpZiAoYWN0aW9uLnZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRGF0ZSB2YWx1ZXMgYXJlIG5vdCBzdXBwb3J0ZWQuIFBsZWFzZSB1c2VkIHNlcmlhbGl6ZWQgc3RyaW5ncyBpbnN0ZWFkLicpO1xuICB9XG5cbiAgY29uc3QgdmFsdWUgPSBhY3Rpb24udmFsdWU7XG5cbiAgY29uc3QgY29udHJvbHMgPSB2YWx1ZVxuICAgIC5tYXAoKHYsIGkpID0+IHtcbiAgICAgIGlmICghc3RhdGUuY29udHJvbHNbaV0pIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUNoaWxkU3RhdGUoYCR7c3RhdGUuaWR9LiR7aX1gLCB2KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1TdGF0ZVJlZHVjZXI8VFZhbHVlPihzdGF0ZS5jb250cm9sc1tpXSwgbmV3IFNldFZhbHVlQWN0aW9uKHN0YXRlLmNvbnRyb2xzW2ldLmlkLCB2KSk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIGNvbXB1dGVBcnJheVN0YXRlKFxuICAgIHN0YXRlLmlkLFxuICAgIGNvbnRyb2xzLFxuICAgIHZhbHVlLFxuICAgIHN0YXRlLmVycm9ycyxcbiAgICBzdGF0ZS5wZW5kaW5nVmFsaWRhdGlvbnMsXG4gICAgc3RhdGUudXNlckRlZmluZWRQcm9wZXJ0aWVzLFxuICAgIHtcbiAgICAgIHdhc09yU2hvdWxkQmVEaXJ0eTogc3RhdGUuaXNEaXJ0eSxcbiAgICAgIHdhc09yU2hvdWxkQmVFbmFibGVkOiBzdGF0ZS5pc0VuYWJsZWQsXG4gICAgICB3YXNPclNob3VsZEJlVG91Y2hlZDogc3RhdGUuaXNUb3VjaGVkLFxuICAgICAgd2FzT3JTaG91bGRCZVN1Ym1pdHRlZDogc3RhdGUuaXNTdWJtaXR0ZWQsXG4gICAgfSxcbiAgKTtcbn1cbiJdfQ==