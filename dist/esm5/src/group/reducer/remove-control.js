import { RemoveGroupControlAction } from '../../actions';
import { computeGroupState } from '../../state';
import { childReducer } from './util';
export function removeControlReducer(state, action) {
    if (action.type !== RemoveGroupControlAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (!state.controls.hasOwnProperty(action.name)) {
        throw new Error("Group '" + state.id + "' does not have child control '" + action.name + "'!"); // `;
    }
    var controls = Object.assign({}, state.controls);
    delete controls[action.name];
    return computeGroupState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: true,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zLyIsInNvdXJjZXMiOlsic3JjL2dyb3VwL3JlZHVjZXIvcmVtb3ZlLWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFXLHdCQUF3QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBNEIsTUFBTSxhQUFhLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUV0QyxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLEtBQTZCLEVBQzdCLE1BQXVCO0lBRXZCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUU7UUFDakQsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFFO1FBQ2pDLE9BQU8sWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDL0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxZQUFVLEtBQUssQ0FBQyxFQUFFLHVDQUFrQyxNQUFNLENBQUMsSUFBSSxPQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7S0FDNUY7SUFFRCxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkQsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTdCLE9BQU8saUJBQWlCLENBQ3RCLEtBQUssQ0FBQyxFQUFFLEVBQ1IsUUFBUSxFQUNSLEtBQUssQ0FBQyxLQUFLLEVBQ1gsS0FBSyxDQUFDLE1BQU0sRUFDWixLQUFLLENBQUMsa0JBQWtCLEVBQ3hCLEtBQUssQ0FBQyxxQkFBcUIsRUFDM0I7UUFDRSxrQkFBa0IsRUFBRSxJQUFJO1FBQ3hCLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxTQUFTO1FBQ3JDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxTQUFTO1FBQ3JDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxXQUFXO0tBQzFDLENBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zLCBSZW1vdmVHcm91cENvbnRyb2xBY3Rpb24gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCB7IGNvbXB1dGVHcm91cFN0YXRlLCBGb3JtR3JvdXBTdGF0ZSwgS2V5VmFsdWUgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBjaGlsZFJlZHVjZXIgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ29udHJvbFJlZHVjZXI8VFZhbHVlIGV4dGVuZHMgS2V5VmFsdWU+KFxuICBzdGF0ZTogRm9ybUdyb3VwU3RhdGU8VFZhbHVlPixcbiAgYWN0aW9uOiBBY3Rpb25zPFRWYWx1ZT4sXG4pOiBGb3JtR3JvdXBTdGF0ZTxUVmFsdWU+IHtcbiAgaWYgKGFjdGlvbi50eXBlICE9PSBSZW1vdmVHcm91cENvbnRyb2xBY3Rpb24uVFlQRSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGlmIChhY3Rpb24uY29udHJvbElkICE9PSBzdGF0ZS5pZCkge1xuICAgIHJldHVybiBjaGlsZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH1cblxuICBpZiAoIXN0YXRlLmNvbnRyb2xzLmhhc093blByb3BlcnR5KGFjdGlvbi5uYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgR3JvdXAgJyR7c3RhdGUuaWR9JyBkb2VzIG5vdCBoYXZlIGNoaWxkIGNvbnRyb2wgJyR7YWN0aW9uLm5hbWV9JyFgKTsgLy8gYDtcbiAgfVxuXG4gIGNvbnN0IGNvbnRyb2xzID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuY29udHJvbHMpO1xuICBkZWxldGUgY29udHJvbHNbYWN0aW9uLm5hbWVdO1xuXG4gIHJldHVybiBjb21wdXRlR3JvdXBTdGF0ZShcbiAgICBzdGF0ZS5pZCxcbiAgICBjb250cm9scyxcbiAgICBzdGF0ZS52YWx1ZSxcbiAgICBzdGF0ZS5lcnJvcnMsXG4gICAgc3RhdGUucGVuZGluZ1ZhbGlkYXRpb25zLFxuICAgIHN0YXRlLnVzZXJEZWZpbmVkUHJvcGVydGllcyxcbiAgICB7XG4gICAgICB3YXNPclNob3VsZEJlRGlydHk6IHRydWUsXG4gICAgICB3YXNPclNob3VsZEJlRW5hYmxlZDogc3RhdGUuaXNFbmFibGVkLFxuICAgICAgd2FzT3JTaG91bGRCZVRvdWNoZWQ6IHN0YXRlLmlzVG91Y2hlZCxcbiAgICAgIHdhc09yU2hvdWxkQmVTdWJtaXR0ZWQ6IHN0YXRlLmlzU3VibWl0dGVkLFxuICAgIH0sXG4gICk7XG59XG4iXX0=