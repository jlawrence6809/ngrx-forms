import { MarkAsUnsubmittedAction } from '../../actions';
import { computeArrayState } from '../../state';
import { childReducer, dispatchActionPerChild } from './util';
export function markAsUnsubmittedReducer(state, action) {
    if (action.type !== MarkAsUnsubmittedAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (state.isUnsubmitted) {
        return state;
    }
    return computeArrayState(state.id, dispatchActionPerChild(state.controls, function (controlId) { return new MarkAsUnsubmittedAction(controlId); }), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: false,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyay1hcy11bnN1Ym1pdHRlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvYXJyYXkvcmVkdWNlci9tYXJrLWFzLXVuc3VibWl0dGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBVyx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQWtCLE1BQU0sYUFBYSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFOUQsTUFBTSxVQUFVLHdCQUF3QixDQUN0QyxLQUE2QixFQUM3QixNQUF5QjtJQUV6QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssdUJBQXVCLENBQUMsSUFBSSxFQUFFO1FBQ2hELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRTtRQUNqQyxPQUFPLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUU7UUFDdkIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE9BQU8saUJBQWlCLENBQ3RCLEtBQUssQ0FBQyxFQUFFLEVBQ1Isc0JBQXNCLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFBLFNBQVMsSUFBSSxPQUFBLElBQUksdUJBQXVCLENBQUMsU0FBUyxDQUFDLEVBQXRDLENBQXNDLENBQUMsRUFDM0YsS0FBSyxDQUFDLEtBQUssRUFDWCxLQUFLLENBQUMsTUFBTSxFQUNaLEtBQUssQ0FBQyxrQkFBa0IsRUFDeEIsS0FBSyxDQUFDLHFCQUFxQixFQUMzQjtRQUNFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxPQUFPO1FBQ2pDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxTQUFTO1FBQ3JDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxTQUFTO1FBQ3JDLHNCQUFzQixFQUFFLEtBQUs7S0FDOUIsQ0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMsIE1hcmtBc1Vuc3VibWl0dGVkQWN0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBjb21wdXRlQXJyYXlTdGF0ZSwgRm9ybUFycmF5U3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBjaGlsZFJlZHVjZXIsIGRpc3BhdGNoQWN0aW9uUGVyQ2hpbGQgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFya0FzVW5zdWJtaXR0ZWRSZWR1Y2VyPFRWYWx1ZT4oXG4gIHN0YXRlOiBGb3JtQXJyYXlTdGF0ZTxUVmFsdWU+LFxuICBhY3Rpb246IEFjdGlvbnM8VFZhbHVlW10+LFxuKTogRm9ybUFycmF5U3RhdGU8VFZhbHVlPiB7XG4gIGlmIChhY3Rpb24udHlwZSAhPT0gTWFya0FzVW5zdWJtaXR0ZWRBY3Rpb24uVFlQRSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGlmIChhY3Rpb24uY29udHJvbElkICE9PSBzdGF0ZS5pZCkge1xuICAgIHJldHVybiBjaGlsZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH1cblxuICBpZiAoc3RhdGUuaXNVbnN1Ym1pdHRlZCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIHJldHVybiBjb21wdXRlQXJyYXlTdGF0ZShcbiAgICBzdGF0ZS5pZCxcbiAgICBkaXNwYXRjaEFjdGlvblBlckNoaWxkKHN0YXRlLmNvbnRyb2xzLCBjb250cm9sSWQgPT4gbmV3IE1hcmtBc1Vuc3VibWl0dGVkQWN0aW9uKGNvbnRyb2xJZCkpLFxuICAgIHN0YXRlLnZhbHVlLFxuICAgIHN0YXRlLmVycm9ycyxcbiAgICBzdGF0ZS5wZW5kaW5nVmFsaWRhdGlvbnMsXG4gICAgc3RhdGUudXNlckRlZmluZWRQcm9wZXJ0aWVzLFxuICAgIHtcbiAgICAgIHdhc09yU2hvdWxkQmVEaXJ0eTogc3RhdGUuaXNEaXJ0eSxcbiAgICAgIHdhc09yU2hvdWxkQmVFbmFibGVkOiBzdGF0ZS5pc0VuYWJsZWQsXG4gICAgICB3YXNPclNob3VsZEJlVG91Y2hlZDogc3RhdGUuaXNUb3VjaGVkLFxuICAgICAgd2FzT3JTaG91bGRCZVN1Ym1pdHRlZDogZmFsc2UsXG4gICAgfSxcbiAgKTtcbn1cbiJdfQ==