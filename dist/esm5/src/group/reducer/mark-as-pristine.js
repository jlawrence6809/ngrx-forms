import { MarkAsPristineAction } from '../../actions';
import { computeGroupState } from '../../state';
import { childReducer, dispatchActionPerChild } from './util';
export function markAsPristineReducer(state, action) {
    if (action.type !== MarkAsPristineAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (state.isPristine) {
        return state;
    }
    return computeGroupState(state.id, dispatchActionPerChild(state.controls, function (controlId) { return new MarkAsPristineAction(controlId); }), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: false,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyay1hcy1wcmlzdGluZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvZ3JvdXAvcmVkdWNlci9tYXJrLWFzLXByaXN0aW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBVyxvQkFBb0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQTRCLE1BQU0sYUFBYSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFOUQsTUFBTSxVQUFVLHFCQUFxQixDQUNuQyxLQUE2QixFQUM3QixNQUF1QjtJQUV2QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssb0JBQW9CLENBQUMsSUFBSSxFQUFFO1FBQzdDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRTtRQUNqQyxPQUFPLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7UUFDcEIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE9BQU8saUJBQWlCLENBQ3RCLEtBQUssQ0FBQyxFQUFFLEVBQ1Isc0JBQXNCLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFBLFNBQVMsSUFBSSxPQUFBLElBQUksb0JBQW9CLENBQUMsU0FBUyxDQUFDLEVBQW5DLENBQW1DLENBQUMsRUFDeEYsS0FBSyxDQUFDLEtBQUssRUFDWCxLQUFLLENBQUMsTUFBTSxFQUNaLEtBQUssQ0FBQyxrQkFBa0IsRUFDeEIsS0FBSyxDQUFDLHFCQUFxQixFQUMzQjtRQUNFLGtCQUFrQixFQUFFLEtBQUs7UUFDekIsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLFNBQVM7UUFDckMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLFNBQVM7UUFDckMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLFdBQVc7S0FDMUMsQ0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMsIE1hcmtBc1ByaXN0aW5lQWN0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBjb21wdXRlR3JvdXBTdGF0ZSwgRm9ybUdyb3VwU3RhdGUsIEtleVZhbHVlIH0gZnJvbSAnLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgY2hpbGRSZWR1Y2VyLCBkaXNwYXRjaEFjdGlvblBlckNoaWxkIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc1ByaXN0aW5lUmVkdWNlcjxUVmFsdWUgZXh0ZW5kcyBLZXlWYWx1ZT4oXG4gIHN0YXRlOiBGb3JtR3JvdXBTdGF0ZTxUVmFsdWU+LFxuICBhY3Rpb246IEFjdGlvbnM8VFZhbHVlPixcbik6IEZvcm1Hcm91cFN0YXRlPFRWYWx1ZT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgIT09IE1hcmtBc1ByaXN0aW5lQWN0aW9uLlRZUEUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBpZiAoYWN0aW9uLmNvbnRyb2xJZCAhPT0gc3RhdGUuaWQpIHtcbiAgICByZXR1cm4gY2hpbGRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9XG5cbiAgaWYgKHN0YXRlLmlzUHJpc3RpbmUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICByZXR1cm4gY29tcHV0ZUdyb3VwU3RhdGUoXG4gICAgc3RhdGUuaWQsXG4gICAgZGlzcGF0Y2hBY3Rpb25QZXJDaGlsZChzdGF0ZS5jb250cm9scywgY29udHJvbElkID0+IG5ldyBNYXJrQXNQcmlzdGluZUFjdGlvbihjb250cm9sSWQpKSxcbiAgICBzdGF0ZS52YWx1ZSxcbiAgICBzdGF0ZS5lcnJvcnMsXG4gICAgc3RhdGUucGVuZGluZ1ZhbGlkYXRpb25zLFxuICAgIHN0YXRlLnVzZXJEZWZpbmVkUHJvcGVydGllcyxcbiAgICB7XG4gICAgICB3YXNPclNob3VsZEJlRGlydHk6IGZhbHNlLFxuICAgICAgd2FzT3JTaG91bGRCZUVuYWJsZWQ6IHN0YXRlLmlzRW5hYmxlZCxcbiAgICAgIHdhc09yU2hvdWxkQmVUb3VjaGVkOiBzdGF0ZS5pc1RvdWNoZWQsXG4gICAgICB3YXNPclNob3VsZEJlU3VibWl0dGVkOiBzdGF0ZS5pc1N1Ym1pdHRlZCxcbiAgICB9LFxuICApO1xufVxuIl19