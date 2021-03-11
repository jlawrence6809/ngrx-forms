import { RemoveArrayControlAction } from '../../actions';
import { computeArrayState } from '../../state';
import { childReducer, updateIdRecursive } from './util';
export function removeControlReducer(state, action) {
    if (action.type !== RemoveArrayControlAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (action.index >= state.controls.length || action.index < 0) {
        throw new Error("Index " + action.index + " is out of bounds for array '" + state.id + "' with length " + state.controls.length + "!");
    }
    var index = action.index;
    var controls = state.controls.filter(function (_, i) { return i !== index; }).map(function (c, i) { return updateIdRecursive(c, state.id + "." + i); });
    return computeArrayState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: true,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zLyIsInNvdXJjZXMiOlsic3JjL2FycmF5L3JlZHVjZXIvcmVtb3ZlLWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFXLHdCQUF3QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBa0IsTUFBTSxhQUFhLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUV6RCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLEtBQTZCLEVBQzdCLE1BQXlCO0lBRXpCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUU7UUFDakQsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFFO1FBQ2pDLE9BQU8sWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtRQUM3RCxNQUFNLElBQUksS0FBSyxDQUFDLFdBQVMsTUFBTSxDQUFDLEtBQUsscUNBQWdDLEtBQUssQ0FBQyxFQUFFLHNCQUFpQixLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sTUFBRyxDQUFDLENBQUM7S0FDekg7SUFFRCxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzNCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsS0FBSyxLQUFLLEVBQVgsQ0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLGlCQUFpQixDQUFDLENBQUMsRUFBSyxLQUFLLENBQUMsRUFBRSxTQUFJLENBQUcsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUM7SUFFdEgsT0FBTyxpQkFBaUIsQ0FDdEIsS0FBSyxDQUFDLEVBQUUsRUFDUixRQUFRLEVBQ1IsS0FBSyxDQUFDLEtBQUssRUFDWCxLQUFLLENBQUMsTUFBTSxFQUNaLEtBQUssQ0FBQyxrQkFBa0IsRUFDeEIsS0FBSyxDQUFDLHFCQUFxQixFQUMzQjtRQUNFLGtCQUFrQixFQUFFLElBQUk7UUFDeEIsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLFNBQVM7UUFDckMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLFNBQVM7UUFDckMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLFdBQVc7S0FDMUMsQ0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMsIFJlbW92ZUFycmF5Q29udHJvbEFjdGlvbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29tcHV0ZUFycmF5U3RhdGUsIEZvcm1BcnJheVN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgY2hpbGRSZWR1Y2VyLCB1cGRhdGVJZFJlY3Vyc2l2ZSB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDb250cm9sUmVkdWNlcjxUVmFsdWU+KFxuICBzdGF0ZTogRm9ybUFycmF5U3RhdGU8VFZhbHVlPixcbiAgYWN0aW9uOiBBY3Rpb25zPFRWYWx1ZVtdPixcbik6IEZvcm1BcnJheVN0YXRlPFRWYWx1ZT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgIT09IFJlbW92ZUFycmF5Q29udHJvbEFjdGlvbi5UWVBFKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgaWYgKGFjdGlvbi5jb250cm9sSWQgIT09IHN0YXRlLmlkKSB7XG4gICAgcmV0dXJuIGNoaWxkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfVxuXG4gIGlmIChhY3Rpb24uaW5kZXggPj0gc3RhdGUuY29udHJvbHMubGVuZ3RoIHx8IGFjdGlvbi5pbmRleCA8IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEluZGV4ICR7YWN0aW9uLmluZGV4fSBpcyBvdXQgb2YgYm91bmRzIGZvciBhcnJheSAnJHtzdGF0ZS5pZH0nIHdpdGggbGVuZ3RoICR7c3RhdGUuY29udHJvbHMubGVuZ3RofSFgKTtcbiAgfVxuXG4gIGNvbnN0IGluZGV4ID0gYWN0aW9uLmluZGV4O1xuICBjb25zdCBjb250cm9scyA9IHN0YXRlLmNvbnRyb2xzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpLm1hcCgoYywgaSkgPT4gdXBkYXRlSWRSZWN1cnNpdmUoYywgYCR7c3RhdGUuaWR9LiR7aX1gKSk7XG5cbiAgcmV0dXJuIGNvbXB1dGVBcnJheVN0YXRlKFxuICAgIHN0YXRlLmlkLFxuICAgIGNvbnRyb2xzLFxuICAgIHN0YXRlLnZhbHVlLFxuICAgIHN0YXRlLmVycm9ycyxcbiAgICBzdGF0ZS5wZW5kaW5nVmFsaWRhdGlvbnMsXG4gICAgc3RhdGUudXNlckRlZmluZWRQcm9wZXJ0aWVzLFxuICAgIHtcbiAgICAgIHdhc09yU2hvdWxkQmVEaXJ0eTogdHJ1ZSxcbiAgICAgIHdhc09yU2hvdWxkQmVFbmFibGVkOiBzdGF0ZS5pc0VuYWJsZWQsXG4gICAgICB3YXNPclNob3VsZEJlVG91Y2hlZDogc3RhdGUuaXNUb3VjaGVkLFxuICAgICAgd2FzT3JTaG91bGRCZVN1Ym1pdHRlZDogc3RhdGUuaXNTdWJtaXR0ZWQsXG4gICAgfSxcbiAgKTtcbn1cbiJdfQ==