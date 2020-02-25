import { MarkAsUnsubmittedAction } from '../../actions';
import { computeGroupState } from '../../state';
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
    return computeGroupState(state.id, dispatchActionPerChild(state.controls, controlId => new MarkAsUnsubmittedAction(controlId)), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: false,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyay1hcy11bnN1Ym1pdHRlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvZ3JvdXAvcmVkdWNlci9tYXJrLWFzLXVuc3VibWl0dGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBVyx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQTRCLE1BQU0sYUFBYSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFOUQsTUFBTSxVQUFVLHdCQUF3QixDQUN0QyxLQUE2QixFQUM3QixNQUF1QjtJQUV2QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssdUJBQXVCLENBQUMsSUFBSSxFQUFFO1FBQ2hELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRTtRQUNqQyxPQUFPLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUU7UUFDdkIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE9BQU8saUJBQWlCLENBQ3RCLEtBQUssQ0FBQyxFQUFFLEVBQ1Isc0JBQXNCLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUMsRUFDM0YsS0FBSyxDQUFDLEtBQUssRUFDWCxLQUFLLENBQUMsTUFBTSxFQUNaLEtBQUssQ0FBQyxrQkFBa0IsRUFDeEIsS0FBSyxDQUFDLHFCQUFxQixFQUMzQjtRQUNFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxPQUFPO1FBQ2pDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxTQUFTO1FBQ3JDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxTQUFTO1FBQ3JDLHNCQUFzQixFQUFFLEtBQUs7S0FDOUIsQ0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMsIE1hcmtBc1Vuc3VibWl0dGVkQWN0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBjb21wdXRlR3JvdXBTdGF0ZSwgRm9ybUdyb3VwU3RhdGUsIEtleVZhbHVlIH0gZnJvbSAnLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgY2hpbGRSZWR1Y2VyLCBkaXNwYXRjaEFjdGlvblBlckNoaWxkIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc1Vuc3VibWl0dGVkUmVkdWNlcjxUVmFsdWUgZXh0ZW5kcyBLZXlWYWx1ZT4oXG4gIHN0YXRlOiBGb3JtR3JvdXBTdGF0ZTxUVmFsdWU+LFxuICBhY3Rpb246IEFjdGlvbnM8VFZhbHVlPixcbik6IEZvcm1Hcm91cFN0YXRlPFRWYWx1ZT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgIT09IE1hcmtBc1Vuc3VibWl0dGVkQWN0aW9uLlRZUEUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBpZiAoYWN0aW9uLmNvbnRyb2xJZCAhPT0gc3RhdGUuaWQpIHtcbiAgICByZXR1cm4gY2hpbGRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9XG5cbiAgaWYgKHN0YXRlLmlzVW5zdWJtaXR0ZWQpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICByZXR1cm4gY29tcHV0ZUdyb3VwU3RhdGUoXG4gICAgc3RhdGUuaWQsXG4gICAgZGlzcGF0Y2hBY3Rpb25QZXJDaGlsZChzdGF0ZS5jb250cm9scywgY29udHJvbElkID0+IG5ldyBNYXJrQXNVbnN1Ym1pdHRlZEFjdGlvbihjb250cm9sSWQpKSxcbiAgICBzdGF0ZS52YWx1ZSxcbiAgICBzdGF0ZS5lcnJvcnMsXG4gICAgc3RhdGUucGVuZGluZ1ZhbGlkYXRpb25zLFxuICAgIHN0YXRlLnVzZXJEZWZpbmVkUHJvcGVydGllcyxcbiAgICB7XG4gICAgICB3YXNPclNob3VsZEJlRGlydHk6IHN0YXRlLmlzRGlydHksXG4gICAgICB3YXNPclNob3VsZEJlRW5hYmxlZDogc3RhdGUuaXNFbmFibGVkLFxuICAgICAgd2FzT3JTaG91bGRCZVRvdWNoZWQ6IHN0YXRlLmlzVG91Y2hlZCxcbiAgICAgIHdhc09yU2hvdWxkQmVTdWJtaXR0ZWQ6IGZhbHNlLFxuICAgIH0sXG4gICk7XG59XG4iXX0=