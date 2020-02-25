import { ResetAction } from '../../actions';
import { computeArrayState } from '../../state';
import { childReducer, dispatchActionPerChild } from './util';
export function resetReducer(state, action) {
    if (action.type !== ResetAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (state.isPristine && state.isUntouched && state.isUnsubmitted) {
        return state;
    }
    return computeArrayState(state.id, dispatchActionPerChild(state.controls, controlId => new ResetAction(controlId)), state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: false,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: false,
        wasOrShouldBeSubmitted: false,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zLyIsInNvdXJjZXMiOlsic3JjL2FycmF5L3JlZHVjZXIvcmVzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFXLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQWtCLE1BQU0sYUFBYSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFOUQsTUFBTSxVQUFVLFlBQVksQ0FDMUIsS0FBNkIsRUFDN0IsTUFBeUI7SUFFekIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxJQUFJLEVBQUU7UUFDcEMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFFO1FBQ2pDLE9BQU8sWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxhQUFhLEVBQUU7UUFDaEUsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE9BQU8saUJBQWlCLENBQ3RCLEtBQUssQ0FBQyxFQUFFLEVBQ1Isc0JBQXNCLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQy9FLEtBQUssQ0FBQyxLQUFLLEVBQ1gsS0FBSyxDQUFDLE1BQU0sRUFDWixLQUFLLENBQUMsa0JBQWtCLEVBQ3hCLEtBQUssQ0FBQyxxQkFBcUIsRUFDM0I7UUFDRSxrQkFBa0IsRUFBRSxLQUFLO1FBQ3pCLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxTQUFTO1FBQ3JDLG9CQUFvQixFQUFFLEtBQUs7UUFDM0Isc0JBQXNCLEVBQUUsS0FBSztLQUM5QixDQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucywgUmVzZXRBY3Rpb24gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCB7IGNvbXB1dGVBcnJheVN0YXRlLCBGb3JtQXJyYXlTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlJztcbmltcG9ydCB7IGNoaWxkUmVkdWNlciwgZGlzcGF0Y2hBY3Rpb25QZXJDaGlsZCB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFJlZHVjZXI8VFZhbHVlPihcbiAgc3RhdGU6IEZvcm1BcnJheVN0YXRlPFRWYWx1ZT4sXG4gIGFjdGlvbjogQWN0aW9uczxUVmFsdWVbXT4sXG4pOiBGb3JtQXJyYXlTdGF0ZTxUVmFsdWU+IHtcbiAgaWYgKGFjdGlvbi50eXBlICE9PSBSZXNldEFjdGlvbi5UWVBFKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgaWYgKGFjdGlvbi5jb250cm9sSWQgIT09IHN0YXRlLmlkKSB7XG4gICAgcmV0dXJuIGNoaWxkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5pc1ByaXN0aW5lICYmIHN0YXRlLmlzVW50b3VjaGVkICYmIHN0YXRlLmlzVW5zdWJtaXR0ZWQpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICByZXR1cm4gY29tcHV0ZUFycmF5U3RhdGUoXG4gICAgc3RhdGUuaWQsXG4gICAgZGlzcGF0Y2hBY3Rpb25QZXJDaGlsZChzdGF0ZS5jb250cm9scywgY29udHJvbElkID0+IG5ldyBSZXNldEFjdGlvbihjb250cm9sSWQpKSxcbiAgICBzdGF0ZS52YWx1ZSxcbiAgICBzdGF0ZS5lcnJvcnMsXG4gICAgc3RhdGUucGVuZGluZ1ZhbGlkYXRpb25zLFxuICAgIHN0YXRlLnVzZXJEZWZpbmVkUHJvcGVydGllcyxcbiAgICB7XG4gICAgICB3YXNPclNob3VsZEJlRGlydHk6IGZhbHNlLFxuICAgICAgd2FzT3JTaG91bGRCZUVuYWJsZWQ6IHN0YXRlLmlzRW5hYmxlZCxcbiAgICAgIHdhc09yU2hvdWxkQmVUb3VjaGVkOiBmYWxzZSxcbiAgICAgIHdhc09yU2hvdWxkQmVTdWJtaXR0ZWQ6IGZhbHNlLFxuICAgIH0sXG4gICk7XG59XG4iXX0=