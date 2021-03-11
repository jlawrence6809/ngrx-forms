import { MarkAsUntouchedAction } from '../../actions';
import { computeArrayState } from '../../state';
import { childReducer, dispatchActionPerChild } from './util';
export function markAsUntouchedReducer(state, action) {
    if (action.type !== MarkAsUntouchedAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (state.isUntouched) {
        return state;
    }
    return computeArrayState(state.id, dispatchActionPerChild(state.controls, controlId => new MarkAsUntouchedAction(controlId)), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: false,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyay1hcy11bnRvdWNoZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zLyIsInNvdXJjZXMiOlsic3JjL2FycmF5L3JlZHVjZXIvbWFyay1hcy11bnRvdWNoZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFXLHFCQUFxQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBa0IsTUFBTSxhQUFhLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUU5RCxNQUFNLFVBQVUsc0JBQXNCLENBQ3BDLEtBQTZCLEVBQzdCLE1BQXlCO0lBRXpCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUU7UUFDOUMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFFO1FBQ2pDLE9BQU8sWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRTtRQUNyQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxpQkFBaUIsQ0FDdEIsS0FBSyxDQUFDLEVBQUUsRUFDUixzQkFBc0IsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUN6RixLQUFLLENBQUMsS0FBSyxFQUNYLEtBQUssQ0FBQyxNQUFNLEVBQ1osS0FBSyxDQUFDLGtCQUFrQixFQUN4QixLQUFLLENBQUMscUJBQXFCLEVBQzNCO1FBQ0Usa0JBQWtCLEVBQUUsS0FBSyxDQUFDLE9BQU87UUFDakMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLFNBQVM7UUFDckMsb0JBQW9CLEVBQUUsS0FBSztRQUMzQixzQkFBc0IsRUFBRSxLQUFLLENBQUMsV0FBVztLQUMxQyxDQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucywgTWFya0FzVW50b3VjaGVkQWN0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBjb21wdXRlQXJyYXlTdGF0ZSwgRm9ybUFycmF5U3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBjaGlsZFJlZHVjZXIsIGRpc3BhdGNoQWN0aW9uUGVyQ2hpbGQgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFya0FzVW50b3VjaGVkUmVkdWNlcjxUVmFsdWU+KFxuICBzdGF0ZTogRm9ybUFycmF5U3RhdGU8VFZhbHVlPixcbiAgYWN0aW9uOiBBY3Rpb25zPFRWYWx1ZVtdPixcbik6IEZvcm1BcnJheVN0YXRlPFRWYWx1ZT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgIT09IE1hcmtBc1VudG91Y2hlZEFjdGlvbi5UWVBFKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgaWYgKGFjdGlvbi5jb250cm9sSWQgIT09IHN0YXRlLmlkKSB7XG4gICAgcmV0dXJuIGNoaWxkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5pc1VudG91Y2hlZCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIHJldHVybiBjb21wdXRlQXJyYXlTdGF0ZShcbiAgICBzdGF0ZS5pZCxcbiAgICBkaXNwYXRjaEFjdGlvblBlckNoaWxkKHN0YXRlLmNvbnRyb2xzLCBjb250cm9sSWQgPT4gbmV3IE1hcmtBc1VudG91Y2hlZEFjdGlvbihjb250cm9sSWQpKSxcbiAgICBzdGF0ZS52YWx1ZSxcbiAgICBzdGF0ZS5lcnJvcnMsXG4gICAgc3RhdGUucGVuZGluZ1ZhbGlkYXRpb25zLFxuICAgIHN0YXRlLnVzZXJEZWZpbmVkUHJvcGVydGllcyxcbiAgICB7XG4gICAgICB3YXNPclNob3VsZEJlRGlydHk6IHN0YXRlLmlzRGlydHksXG4gICAgICB3YXNPclNob3VsZEJlRW5hYmxlZDogc3RhdGUuaXNFbmFibGVkLFxuICAgICAgd2FzT3JTaG91bGRCZVRvdWNoZWQ6IGZhbHNlLFxuICAgICAgd2FzT3JTaG91bGRCZVN1Ym1pdHRlZDogc3RhdGUuaXNTdWJtaXR0ZWQsXG4gICAgfSxcbiAgKTtcbn1cbiJdfQ==