import { EnableAction } from '../../actions';
import { computeArrayState } from '../../state';
import { childReducer, dispatchActionPerChild } from './util';
export function enableReducer(state, action) {
    if (action.type !== EnableAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    const controls = dispatchActionPerChild(state.controls, controlId => new EnableAction(controlId));
    if (controls === state.controls && state.isEnabled) {
        return state;
    }
    return computeArrayState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: true,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5hYmxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy9hcnJheS9yZWR1Y2VyL2VuYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVcsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBa0IsTUFBTSxhQUFhLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUU5RCxNQUFNLFVBQVUsYUFBYSxDQUMzQixLQUE2QixFQUM3QixNQUF5QjtJQUV6QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLElBQUksRUFBRTtRQUNyQyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxFQUFFLEVBQUU7UUFDakMsT0FBTyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsTUFBTSxRQUFRLEdBQUcsc0JBQXNCLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFFbEcsSUFBSSxRQUFRLEtBQUssS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFO1FBQ2xELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPLGlCQUFpQixDQUN0QixLQUFLLENBQUMsRUFBRSxFQUNSLFFBQVEsRUFDUixLQUFLLENBQUMsS0FBSyxFQUNYLEtBQUssQ0FBQyxNQUFNLEVBQ1osS0FBSyxDQUFDLGtCQUFrQixFQUN4QixLQUFLLENBQUMscUJBQXFCLEVBQzNCO1FBQ0Usa0JBQWtCLEVBQUUsS0FBSyxDQUFDLE9BQU87UUFDakMsb0JBQW9CLEVBQUUsSUFBSTtRQUMxQixvQkFBb0IsRUFBRSxLQUFLLENBQUMsU0FBUztRQUNyQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsV0FBVztLQUMxQyxDQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucywgRW5hYmxlQWN0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBjb21wdXRlQXJyYXlTdGF0ZSwgRm9ybUFycmF5U3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBjaGlsZFJlZHVjZXIsIGRpc3BhdGNoQWN0aW9uUGVyQ2hpbGQgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlUmVkdWNlcjxUVmFsdWU+KFxuICBzdGF0ZTogRm9ybUFycmF5U3RhdGU8VFZhbHVlPixcbiAgYWN0aW9uOiBBY3Rpb25zPFRWYWx1ZVtdPixcbik6IEZvcm1BcnJheVN0YXRlPFRWYWx1ZT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgIT09IEVuYWJsZUFjdGlvbi5UWVBFKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgaWYgKGFjdGlvbi5jb250cm9sSWQgIT09IHN0YXRlLmlkKSB7XG4gICAgcmV0dXJuIGNoaWxkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRyb2xzID0gZGlzcGF0Y2hBY3Rpb25QZXJDaGlsZChzdGF0ZS5jb250cm9scywgY29udHJvbElkID0+IG5ldyBFbmFibGVBY3Rpb24oY29udHJvbElkKSk7XG5cbiAgaWYgKGNvbnRyb2xzID09PSBzdGF0ZS5jb250cm9scyAmJiBzdGF0ZS5pc0VuYWJsZWQpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICByZXR1cm4gY29tcHV0ZUFycmF5U3RhdGUoXG4gICAgc3RhdGUuaWQsXG4gICAgY29udHJvbHMsXG4gICAgc3RhdGUudmFsdWUsXG4gICAgc3RhdGUuZXJyb3JzLFxuICAgIHN0YXRlLnBlbmRpbmdWYWxpZGF0aW9ucyxcbiAgICBzdGF0ZS51c2VyRGVmaW5lZFByb3BlcnRpZXMsXG4gICAge1xuICAgICAgd2FzT3JTaG91bGRCZURpcnR5OiBzdGF0ZS5pc0RpcnR5LFxuICAgICAgd2FzT3JTaG91bGRCZUVuYWJsZWQ6IHRydWUsXG4gICAgICB3YXNPclNob3VsZEJlVG91Y2hlZDogc3RhdGUuaXNUb3VjaGVkLFxuICAgICAgd2FzT3JTaG91bGRCZVN1Ym1pdHRlZDogc3RhdGUuaXNTdWJtaXR0ZWQsXG4gICAgfSxcbiAgKTtcbn1cbiJdfQ==