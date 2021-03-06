import { StartAsyncValidationAction } from '../../actions';
import { computeGroupState } from '../../state';
import { childReducer } from './util';
export function startAsyncValidationReducer(state, action) {
    if (action.type !== StartAsyncValidationAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (state.pendingValidations.indexOf(action.name) >= 0) {
        return state;
    }
    const pendingValidations = [...state.pendingValidations, action.name];
    return computeGroupState(state.id, state.controls, state.value, state.errors, pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtYXN5bmMtdmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvZ3JvdXAvcmVkdWNlci9zdGFydC1hc3luYy12YWxpZGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBVywwQkFBMEIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQTRCLE1BQU0sYUFBYSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFdEMsTUFBTSxVQUFVLDJCQUEyQixDQUN6QyxLQUE2QixFQUM3QixNQUF1QjtJQUV2QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssMEJBQTBCLENBQUMsSUFBSSxFQUFFO1FBQ25ELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRTtRQUNqQyxPQUFPLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN0RCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV0RSxPQUFPLGlCQUFpQixDQUN0QixLQUFLLENBQUMsRUFBRSxFQUNSLEtBQUssQ0FBQyxRQUFRLEVBQ2QsS0FBSyxDQUFDLEtBQUssRUFDWCxLQUFLLENBQUMsTUFBTSxFQUNaLGtCQUFrQixFQUNsQixLQUFLLENBQUMscUJBQXFCLEVBQzNCO1FBQ0Usa0JBQWtCLEVBQUUsS0FBSyxDQUFDLE9BQU87UUFDakMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLFNBQVM7UUFDckMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLFNBQVM7UUFDckMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLFdBQVc7S0FDMUMsQ0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMsIFN0YXJ0QXN5bmNWYWxpZGF0aW9uQWN0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBjb21wdXRlR3JvdXBTdGF0ZSwgRm9ybUdyb3VwU3RhdGUsIEtleVZhbHVlIH0gZnJvbSAnLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgY2hpbGRSZWR1Y2VyIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0QXN5bmNWYWxpZGF0aW9uUmVkdWNlcjxUVmFsdWUgZXh0ZW5kcyBLZXlWYWx1ZT4oXG4gIHN0YXRlOiBGb3JtR3JvdXBTdGF0ZTxUVmFsdWU+LFxuICBhY3Rpb246IEFjdGlvbnM8VFZhbHVlPixcbik6IEZvcm1Hcm91cFN0YXRlPFRWYWx1ZT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgIT09IFN0YXJ0QXN5bmNWYWxpZGF0aW9uQWN0aW9uLlRZUEUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBpZiAoYWN0aW9uLmNvbnRyb2xJZCAhPT0gc3RhdGUuaWQpIHtcbiAgICByZXR1cm4gY2hpbGRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9XG5cbiAgaWYgKHN0YXRlLnBlbmRpbmdWYWxpZGF0aW9ucy5pbmRleE9mKGFjdGlvbi5uYW1lKSA+PSAwKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgcGVuZGluZ1ZhbGlkYXRpb25zID0gWy4uLnN0YXRlLnBlbmRpbmdWYWxpZGF0aW9ucywgYWN0aW9uLm5hbWVdO1xuXG4gIHJldHVybiBjb21wdXRlR3JvdXBTdGF0ZShcbiAgICBzdGF0ZS5pZCxcbiAgICBzdGF0ZS5jb250cm9scyxcbiAgICBzdGF0ZS52YWx1ZSxcbiAgICBzdGF0ZS5lcnJvcnMsXG4gICAgcGVuZGluZ1ZhbGlkYXRpb25zLFxuICAgIHN0YXRlLnVzZXJEZWZpbmVkUHJvcGVydGllcyxcbiAgICB7XG4gICAgICB3YXNPclNob3VsZEJlRGlydHk6IHN0YXRlLmlzRGlydHksXG4gICAgICB3YXNPclNob3VsZEJlRW5hYmxlZDogc3RhdGUuaXNFbmFibGVkLFxuICAgICAgd2FzT3JTaG91bGRCZVRvdWNoZWQ6IHN0YXRlLmlzVG91Y2hlZCxcbiAgICAgIHdhc09yU2hvdWxkQmVTdWJtaXR0ZWQ6IHN0YXRlLmlzU3VibWl0dGVkLFxuICAgIH0sXG4gICk7XG59XG4iXX0=