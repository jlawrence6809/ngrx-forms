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
        throw new Error(`Index ${action.index} is out of bounds for array '${state.id}' with length ${state.controls.length}!`);
    }
    const index = action.index;
    const controls = state.controls.filter((_, i) => i !== index).map((c, i) => updateIdRecursive(c, `${state.id}.${i}`));
    return computeArrayState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: true,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zLyIsInNvdXJjZXMiOlsic3JjL2FycmF5L3JlZHVjZXIvcmVtb3ZlLWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFXLHdCQUF3QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBa0IsTUFBTSxhQUFhLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUV6RCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLEtBQTZCLEVBQzdCLE1BQXlCO0lBRXpCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUU7UUFDakQsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFFO1FBQ2pDLE9BQU8sWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtRQUM3RCxNQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsTUFBTSxDQUFDLEtBQUssZ0NBQWdDLEtBQUssQ0FBQyxFQUFFLGlCQUFpQixLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDekg7SUFFRCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzNCLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXRILE9BQU8saUJBQWlCLENBQ3RCLEtBQUssQ0FBQyxFQUFFLEVBQ1IsUUFBUSxFQUNSLEtBQUssQ0FBQyxLQUFLLEVBQ1gsS0FBSyxDQUFDLE1BQU0sRUFDWixLQUFLLENBQUMsa0JBQWtCLEVBQ3hCLEtBQUssQ0FBQyxxQkFBcUIsRUFDM0I7UUFDRSxrQkFBa0IsRUFBRSxJQUFJO1FBQ3hCLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxTQUFTO1FBQ3JDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxTQUFTO1FBQ3JDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxXQUFXO0tBQzFDLENBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zLCBSZW1vdmVBcnJheUNvbnRyb2xBY3Rpb24gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCB7IGNvbXB1dGVBcnJheVN0YXRlLCBGb3JtQXJyYXlTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlJztcbmltcG9ydCB7IGNoaWxkUmVkdWNlciwgdXBkYXRlSWRSZWN1cnNpdmUgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ29udHJvbFJlZHVjZXI8VFZhbHVlPihcbiAgc3RhdGU6IEZvcm1BcnJheVN0YXRlPFRWYWx1ZT4sXG4gIGFjdGlvbjogQWN0aW9uczxUVmFsdWVbXT4sXG4pOiBGb3JtQXJyYXlTdGF0ZTxUVmFsdWU+IHtcbiAgaWYgKGFjdGlvbi50eXBlICE9PSBSZW1vdmVBcnJheUNvbnRyb2xBY3Rpb24uVFlQRSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGlmIChhY3Rpb24uY29udHJvbElkICE9PSBzdGF0ZS5pZCkge1xuICAgIHJldHVybiBjaGlsZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH1cblxuICBpZiAoYWN0aW9uLmluZGV4ID49IHN0YXRlLmNvbnRyb2xzLmxlbmd0aCB8fCBhY3Rpb24uaW5kZXggPCAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbmRleCAke2FjdGlvbi5pbmRleH0gaXMgb3V0IG9mIGJvdW5kcyBmb3IgYXJyYXkgJyR7c3RhdGUuaWR9JyB3aXRoIGxlbmd0aCAke3N0YXRlLmNvbnRyb2xzLmxlbmd0aH0hYCk7XG4gIH1cblxuICBjb25zdCBpbmRleCA9IGFjdGlvbi5pbmRleDtcbiAgY29uc3QgY29udHJvbHMgPSBzdGF0ZS5jb250cm9scy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4KS5tYXAoKGMsIGkpID0+IHVwZGF0ZUlkUmVjdXJzaXZlKGMsIGAke3N0YXRlLmlkfS4ke2l9YCkpO1xuXG4gIHJldHVybiBjb21wdXRlQXJyYXlTdGF0ZShcbiAgICBzdGF0ZS5pZCxcbiAgICBjb250cm9scyxcbiAgICBzdGF0ZS52YWx1ZSxcbiAgICBzdGF0ZS5lcnJvcnMsXG4gICAgc3RhdGUucGVuZGluZ1ZhbGlkYXRpb25zLFxuICAgIHN0YXRlLnVzZXJEZWZpbmVkUHJvcGVydGllcyxcbiAgICB7XG4gICAgICB3YXNPclNob3VsZEJlRGlydHk6IHRydWUsXG4gICAgICB3YXNPclNob3VsZEJlRW5hYmxlZDogc3RhdGUuaXNFbmFibGVkLFxuICAgICAgd2FzT3JTaG91bGRCZVRvdWNoZWQ6IHN0YXRlLmlzVG91Y2hlZCxcbiAgICAgIHdhc09yU2hvdWxkQmVTdWJtaXR0ZWQ6IHN0YXRlLmlzU3VibWl0dGVkLFxuICAgIH0sXG4gICk7XG59XG4iXX0=