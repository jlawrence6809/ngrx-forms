import { DisableAction } from '../../actions';
import { computeArrayState } from '../../state';
import { childReducer, dispatchActionPerChild } from './util';
export function disableReducer(state, action) {
    if (action.type !== DisableAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (state.isDisabled) {
        return state;
    }
    return computeArrayState(state.id, dispatchActionPerChild(state.controls, controlId => new DisableAction(controlId)), state.value, {}, [], state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: false,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvYXJyYXkvcmVkdWNlci9kaXNhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBVyxhQUFhLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFrQixNQUFNLGFBQWEsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTlELE1BQU0sVUFBVSxjQUFjLENBQzVCLEtBQTZCLEVBQzdCLE1BQXlCO0lBRXpCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsSUFBSSxFQUFFO1FBQ3RDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRTtRQUNqQyxPQUFPLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDcEM7SUFFRCxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7UUFDcEIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE9BQU8saUJBQWlCLENBQ3RCLEtBQUssQ0FBQyxFQUFFLEVBQ1Isc0JBQXNCLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQ2pGLEtBQUssQ0FBQyxLQUFLLEVBQ1gsRUFBRSxFQUNGLEVBQUUsRUFDRixLQUFLLENBQUMscUJBQXFCLEVBQzNCO1FBQ0Usa0JBQWtCLEVBQUUsS0FBSyxDQUFDLE9BQU87UUFDakMsb0JBQW9CLEVBQUUsS0FBSztRQUMzQixvQkFBb0IsRUFBRSxLQUFLLENBQUMsU0FBUztRQUNyQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsV0FBVztLQUMxQyxDQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucywgRGlzYWJsZUFjdGlvbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29tcHV0ZUFycmF5U3RhdGUsIEZvcm1BcnJheVN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgY2hpbGRSZWR1Y2VyLCBkaXNwYXRjaEFjdGlvblBlckNoaWxkIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVSZWR1Y2VyPFRWYWx1ZT4oXG4gIHN0YXRlOiBGb3JtQXJyYXlTdGF0ZTxUVmFsdWU+LFxuICBhY3Rpb246IEFjdGlvbnM8VFZhbHVlW10+LFxuKTogRm9ybUFycmF5U3RhdGU8VFZhbHVlPiB7XG4gIGlmIChhY3Rpb24udHlwZSAhPT0gRGlzYWJsZUFjdGlvbi5UWVBFKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgaWYgKGFjdGlvbi5jb250cm9sSWQgIT09IHN0YXRlLmlkKSB7XG4gICAgcmV0dXJuIGNoaWxkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5pc0Rpc2FibGVkKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmV0dXJuIGNvbXB1dGVBcnJheVN0YXRlKFxuICAgIHN0YXRlLmlkLFxuICAgIGRpc3BhdGNoQWN0aW9uUGVyQ2hpbGQoc3RhdGUuY29udHJvbHMsIGNvbnRyb2xJZCA9PiBuZXcgRGlzYWJsZUFjdGlvbihjb250cm9sSWQpKSxcbiAgICBzdGF0ZS52YWx1ZSxcbiAgICB7fSxcbiAgICBbXSxcbiAgICBzdGF0ZS51c2VyRGVmaW5lZFByb3BlcnRpZXMsXG4gICAge1xuICAgICAgd2FzT3JTaG91bGRCZURpcnR5OiBzdGF0ZS5pc0RpcnR5LFxuICAgICAgd2FzT3JTaG91bGRCZUVuYWJsZWQ6IGZhbHNlLFxuICAgICAgd2FzT3JTaG91bGRCZVRvdWNoZWQ6IHN0YXRlLmlzVG91Y2hlZCxcbiAgICAgIHdhc09yU2hvdWxkQmVTdWJtaXR0ZWQ6IHN0YXRlLmlzU3VibWl0dGVkLFxuICAgIH0sXG4gICk7XG59XG4iXX0=