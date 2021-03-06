import { SetErrorsAction } from '../../actions';
import { computeGroupState } from '../../state';
import { deepEquals } from '../../util';
import { childReducer } from './util';
export function setErrorsReducer(state, action) {
    if (action.type !== SetErrorsAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    if (state.isDisabled) {
        return state;
    }
    if (state.errors === action.errors) {
        return state;
    }
    if (deepEquals(state.errors, action.errors)) {
        return state;
    }
    if (!action.errors || typeof action.errors !== 'object' || Array.isArray(action.errors)) {
        throw new Error("Control errors must be an object; got " + action.errors); // `;
    }
    if (Object.keys(action.errors).some(function (key) { return key.startsWith('_'); })) {
        throw new Error("Control errors must not use underscore as a prefix; got " + JSON.stringify(action.errors)); // `;
    }
    if (Object.keys(action.errors).some(function (key) { return key.startsWith('$'); })) {
        throw new Error("Control errors must not use $ as a prefix; got " + JSON.stringify(action.errors)); // `;
    }
    var childAndAsyncErrors = Object.keys(state.errors)
        .filter(function (key) { return key.startsWith('_') || key.startsWith('$'); })
        .reduce(function (res, key) {
        var _a;
        return Object.assign(res, (_a = {}, _a[key] = state.errors[key], _a));
    }, {});
    var newErrors = Object.assign(childAndAsyncErrors, action.errors);
    return computeGroupState(state.id, state.controls, state.value, newErrors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: state.isDirty,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWVycm9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvZ3JvdXAvcmVkdWNlci9zZXQtZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBVyxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUE4QyxNQUFNLGFBQWEsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFdEMsTUFBTSxVQUFVLGdCQUFnQixDQUM5QixLQUE2QixFQUM3QixNQUF1QjtJQUV2QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLElBQUksRUFBRTtRQUN4QyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxFQUFFLEVBQUU7UUFDakMsT0FBTyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO1FBQ3BCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUNsQyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDM0MsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLE9BQVEsTUFBTSxDQUFDLE1BQWMsS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDaEcsTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBeUMsTUFBTSxDQUFDLE1BQVEsQ0FBQyxDQUFDLENBQUMsS0FBSztLQUNqRjtJQUVELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQyxFQUFFO1FBQy9ELE1BQU0sSUFBSSxLQUFLLENBQUMsNkRBQTJELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLO0tBQ25IO0lBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFuQixDQUFtQixDQUFDLEVBQUU7UUFDL0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxvREFBa0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUs7S0FDMUc7SUFFRCxJQUFNLG1CQUFtQixHQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDdEIsTUFBTSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUExQyxDQUEwQyxDQUFDO1NBQ3pELE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHOztRQUFLLE9BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFlBQUksR0FBQyxHQUFHLElBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBRztJQUFoRCxDQUFnRCxFQUFFLEVBQXNCLENBQUMsQ0FBQztJQUVwRyxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVwRSxPQUFPLGlCQUFpQixDQUN0QixLQUFLLENBQUMsRUFBRSxFQUNSLEtBQUssQ0FBQyxRQUFRLEVBQ2QsS0FBSyxDQUFDLEtBQUssRUFDWCxTQUFTLEVBQ1QsS0FBSyxDQUFDLGtCQUFrQixFQUN4QixLQUFLLENBQUMscUJBQXFCLEVBQzNCO1FBQ0Usa0JBQWtCLEVBQUUsS0FBSyxDQUFDLE9BQU87UUFDakMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLFNBQVM7UUFDckMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLFNBQVM7UUFDckMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLFdBQVc7S0FDMUMsQ0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMsIFNldEVycm9yc0FjdGlvbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29tcHV0ZUdyb3VwU3RhdGUsIEZvcm1Hcm91cFN0YXRlLCBLZXlWYWx1ZSwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJy4uLy4uL3N0YXRlJztcbmltcG9ydCB7IGRlZXBFcXVhbHMgfSBmcm9tICcuLi8uLi91dGlsJztcbmltcG9ydCB7IGNoaWxkUmVkdWNlciB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRFcnJvcnNSZWR1Y2VyPFRWYWx1ZSBleHRlbmRzIEtleVZhbHVlPihcbiAgc3RhdGU6IEZvcm1Hcm91cFN0YXRlPFRWYWx1ZT4sXG4gIGFjdGlvbjogQWN0aW9uczxUVmFsdWU+LFxuKTogRm9ybUdyb3VwU3RhdGU8VFZhbHVlPiB7XG4gIGlmIChhY3Rpb24udHlwZSAhPT0gU2V0RXJyb3JzQWN0aW9uLlRZUEUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBpZiAoYWN0aW9uLmNvbnRyb2xJZCAhPT0gc3RhdGUuaWQpIHtcbiAgICByZXR1cm4gY2hpbGRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9XG5cbiAgaWYgKHN0YXRlLmlzRGlzYWJsZWQpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBpZiAoc3RhdGUuZXJyb3JzID09PSBhY3Rpb24uZXJyb3JzKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgaWYgKGRlZXBFcXVhbHMoc3RhdGUuZXJyb3JzLCBhY3Rpb24uZXJyb3JzKSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGlmICghYWN0aW9uLmVycm9ycyB8fCB0eXBlb2YgKGFjdGlvbi5lcnJvcnMgYXMgYW55KSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShhY3Rpb24uZXJyb3JzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ29udHJvbCBlcnJvcnMgbXVzdCBiZSBhbiBvYmplY3Q7IGdvdCAke2FjdGlvbi5lcnJvcnN9YCk7IC8vIGA7XG4gIH1cblxuICBpZiAoT2JqZWN0LmtleXMoYWN0aW9uLmVycm9ycykuc29tZShrZXkgPT4ga2V5LnN0YXJ0c1dpdGgoJ18nKSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENvbnRyb2wgZXJyb3JzIG11c3Qgbm90IHVzZSB1bmRlcnNjb3JlIGFzIGEgcHJlZml4OyBnb3QgJHtKU09OLnN0cmluZ2lmeShhY3Rpb24uZXJyb3JzKX1gKTsgLy8gYDtcbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyhhY3Rpb24uZXJyb3JzKS5zb21lKGtleSA9PiBrZXkuc3RhcnRzV2l0aCgnJCcpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ29udHJvbCBlcnJvcnMgbXVzdCBub3QgdXNlICQgYXMgYSBwcmVmaXg7IGdvdCAke0pTT04uc3RyaW5naWZ5KGFjdGlvbi5lcnJvcnMpfWApOyAvLyBgO1xuICB9XG5cbiAgY29uc3QgY2hpbGRBbmRBc3luY0Vycm9ycyA9XG4gICAgT2JqZWN0LmtleXMoc3RhdGUuZXJyb3JzKVxuICAgICAgLmZpbHRlcihrZXkgPT4ga2V5LnN0YXJ0c1dpdGgoJ18nKSB8fCBrZXkuc3RhcnRzV2l0aCgnJCcpKVxuICAgICAgLnJlZHVjZSgocmVzLCBrZXkpID0+IE9iamVjdC5hc3NpZ24ocmVzLCB7IFtrZXldOiBzdGF0ZS5lcnJvcnNba2V5XSB9KSwge30gYXMgVmFsaWRhdGlvbkVycm9ycyk7XG5cbiAgY29uc3QgbmV3RXJyb3JzID0gT2JqZWN0LmFzc2lnbihjaGlsZEFuZEFzeW5jRXJyb3JzLCBhY3Rpb24uZXJyb3JzKTtcblxuICByZXR1cm4gY29tcHV0ZUdyb3VwU3RhdGUoXG4gICAgc3RhdGUuaWQsXG4gICAgc3RhdGUuY29udHJvbHMsXG4gICAgc3RhdGUudmFsdWUsXG4gICAgbmV3RXJyb3JzLFxuICAgIHN0YXRlLnBlbmRpbmdWYWxpZGF0aW9ucyxcbiAgICBzdGF0ZS51c2VyRGVmaW5lZFByb3BlcnRpZXMsXG4gICAge1xuICAgICAgd2FzT3JTaG91bGRCZURpcnR5OiBzdGF0ZS5pc0RpcnR5LFxuICAgICAgd2FzT3JTaG91bGRCZUVuYWJsZWQ6IHN0YXRlLmlzRW5hYmxlZCxcbiAgICAgIHdhc09yU2hvdWxkQmVUb3VjaGVkOiBzdGF0ZS5pc1RvdWNoZWQsXG4gICAgICB3YXNPclNob3VsZEJlU3VibWl0dGVkOiBzdGF0ZS5pc1N1Ym1pdHRlZCxcbiAgICB9LFxuICApO1xufVxuIl19