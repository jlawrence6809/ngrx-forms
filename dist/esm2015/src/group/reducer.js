import { AddArrayControlAction, FocusAction, isNgrxFormsAction, RemoveArrayControlAction, UnfocusAction, } from '../actions';
import { isGroupState } from '../state';
import { addControlReducer } from './reducer/add-control';
import { clearAsyncErrorReducer } from './reducer/clear-async-error';
import { disableReducer } from './reducer/disable';
import { enableReducer } from './reducer/enable';
import { markAsDirtyReducer } from './reducer/mark-as-dirty';
import { markAsPristineReducer } from './reducer/mark-as-pristine';
import { markAsSubmittedReducer } from './reducer/mark-as-submitted';
import { markAsTouchedReducer } from './reducer/mark-as-touched';
import { markAsUnsubmittedReducer } from './reducer/mark-as-unsubmitted';
import { markAsUntouchedReducer } from './reducer/mark-as-untouched';
import { removeControlReducer } from './reducer/remove-control';
import { resetReducer } from './reducer/reset';
import { setAsyncErrorReducer } from './reducer/set-async-error';
import { setErrorsReducer } from './reducer/set-errors';
import { setUserDefinedPropertyReducer } from './reducer/set-user-defined-property';
import { setValueReducer } from './reducer/set-value';
import { startAsyncValidationReducer } from './reducer/start-async-validation';
import { childReducer } from './reducer/util';
export function formGroupReducerInternal(state, action) {
    if (!isGroupState(state)) {
        throw new Error('The state must be a group state');
    }
    if (!isNgrxFormsAction(action)) {
        return state;
    }
    if (!action.controlId.startsWith(state.id)) {
        return state;
    }
    switch (action.type) {
        case FocusAction.TYPE:
        case UnfocusAction.TYPE:
        case AddArrayControlAction.TYPE:
        case RemoveArrayControlAction.TYPE:
            return childReducer(state, action);
        default:
            break;
    }
    state = setValueReducer(state, action);
    state = setErrorsReducer(state, action);
    state = startAsyncValidationReducer(state, action);
    state = setAsyncErrorReducer(state, action);
    state = clearAsyncErrorReducer(state, action);
    state = enableReducer(state, action);
    state = disableReducer(state, action);
    state = markAsDirtyReducer(state, action);
    state = markAsPristineReducer(state, action);
    state = markAsTouchedReducer(state, action);
    state = markAsUntouchedReducer(state, action);
    state = markAsSubmittedReducer(state, action);
    state = markAsUnsubmittedReducer(state, action);
    state = addControlReducer(state, action);
    state = removeControlReducer(state, action);
    state = setUserDefinedPropertyReducer(state, action);
    state = resetReducer(state, action);
    return state;
}
/**
 * This reducer function updates a form group state with actions.
 */
export function formGroupReducer(state, action) {
    if (!state) {
        throw new Error('The group state must be defined!');
    }
    return formGroupReducerInternal(state, action);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvZ3JvdXAvcmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBRUwscUJBQXFCLEVBQ3JCLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsd0JBQXdCLEVBQ3hCLGFBQWEsR0FDZCxNQUFNLFlBQVksQ0FBQztBQUNwQixPQUFPLEVBQWtCLFlBQVksRUFBWSxNQUFNLFVBQVUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsNkJBQTZC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IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHtcbiAgQWN0aW9ucyxcbiAgQWRkQXJyYXlDb250cm9sQWN0aW9uLFxuICBGb2N1c0FjdGlvbixcbiAgaXNOZ3J4Rm9ybXNBY3Rpb24sXG4gIFJlbW92ZUFycmF5Q29udHJvbEFjdGlvbixcbiAgVW5mb2N1c0FjdGlvbixcbn0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBGb3JtR3JvdXBTdGF0ZSwgaXNHcm91cFN0YXRlLCBLZXlWYWx1ZSB9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7IGFkZENvbnRyb2xSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VyL2FkZC1jb250cm9sJztcbmltcG9ydCB7IGNsZWFyQXN5bmNFcnJvclJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXIvY2xlYXItYXN5bmMtZXJyb3InO1xuaW1wb3J0IHsgZGlzYWJsZVJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXIvZGlzYWJsZSc7XG5pbXBvcnQgeyBlbmFibGVSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VyL2VuYWJsZSc7XG5pbXBvcnQgeyBtYXJrQXNEaXJ0eVJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXIvbWFyay1hcy1kaXJ0eSc7XG5pbXBvcnQgeyBtYXJrQXNQcmlzdGluZVJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXIvbWFyay1hcy1wcmlzdGluZSc7XG5pbXBvcnQgeyBtYXJrQXNTdWJtaXR0ZWRSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VyL21hcmstYXMtc3VibWl0dGVkJztcbmltcG9ydCB7IG1hcmtBc1RvdWNoZWRSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VyL21hcmstYXMtdG91Y2hlZCc7XG5pbXBvcnQgeyBtYXJrQXNVbnN1Ym1pdHRlZFJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXIvbWFyay1hcy11bnN1Ym1pdHRlZCc7XG5pbXBvcnQgeyBtYXJrQXNVbnRvdWNoZWRSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VyL21hcmstYXMtdW50b3VjaGVkJztcbmltcG9ydCB7IHJlbW92ZUNvbnRyb2xSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VyL3JlbW92ZS1jb250cm9sJztcbmltcG9ydCB7IHJlc2V0UmVkdWNlciB9IGZyb20gJy4vcmVkdWNlci9yZXNldCc7XG5pbXBvcnQgeyBzZXRBc3luY0Vycm9yUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlci9zZXQtYXN5bmMtZXJyb3InO1xuaW1wb3J0IHsgc2V0RXJyb3JzUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlci9zZXQtZXJyb3JzJztcbmltcG9ydCB7IHNldFVzZXJEZWZpbmVkUHJvcGVydHlSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VyL3NldC11c2VyLWRlZmluZWQtcHJvcGVydHknO1xuaW1wb3J0IHsgc2V0VmFsdWVSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VyL3NldC12YWx1ZSc7XG5pbXBvcnQgeyBzdGFydEFzeW5jVmFsaWRhdGlvblJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXIvc3RhcnQtYXN5bmMtdmFsaWRhdGlvbic7XG5pbXBvcnQgeyBjaGlsZFJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXIvdXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtR3JvdXBSZWR1Y2VySW50ZXJuYWw8VFZhbHVlIGV4dGVuZHMgS2V5VmFsdWU+KHN0YXRlOiBGb3JtR3JvdXBTdGF0ZTxUVmFsdWU+LCBhY3Rpb246IEFjdGlvbnM8VFZhbHVlPikge1xuICBpZiAoIWlzR3JvdXBTdGF0ZShzdGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBzdGF0ZSBtdXN0IGJlIGEgZ3JvdXAgc3RhdGUnKTtcbiAgfVxuXG4gIGlmICghaXNOZ3J4Rm9ybXNBY3Rpb24oYWN0aW9uKSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGlmICghYWN0aW9uLmNvbnRyb2xJZC5zdGFydHNXaXRoKHN0YXRlLmlkKSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEZvY3VzQWN0aW9uLlRZUEU6XG4gICAgY2FzZSBVbmZvY3VzQWN0aW9uLlRZUEU6XG4gICAgY2FzZSBBZGRBcnJheUNvbnRyb2xBY3Rpb24uVFlQRTpcbiAgICBjYXNlIFJlbW92ZUFycmF5Q29udHJvbEFjdGlvbi5UWVBFOlxuICAgICAgcmV0dXJuIGNoaWxkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHN0YXRlID0gc2V0VmFsdWVSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICBzdGF0ZSA9IHNldEVycm9yc1JlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIHN0YXRlID0gc3RhcnRBc3luY1ZhbGlkYXRpb25SZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICBzdGF0ZSA9IHNldEFzeW5jRXJyb3JSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICBzdGF0ZSA9IGNsZWFyQXN5bmNFcnJvclJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIHN0YXRlID0gZW5hYmxlUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgc3RhdGUgPSBkaXNhYmxlUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgc3RhdGUgPSBtYXJrQXNEaXJ0eVJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIHN0YXRlID0gbWFya0FzUHJpc3RpbmVSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICBzdGF0ZSA9IG1hcmtBc1RvdWNoZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICBzdGF0ZSA9IG1hcmtBc1VudG91Y2hlZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIHN0YXRlID0gbWFya0FzU3VibWl0dGVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgc3RhdGUgPSBtYXJrQXNVbnN1Ym1pdHRlZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIHN0YXRlID0gYWRkQ29udHJvbFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIHN0YXRlID0gcmVtb3ZlQ29udHJvbFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIHN0YXRlID0gc2V0VXNlckRlZmluZWRQcm9wZXJ0eVJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIHN0YXRlID0gcmVzZXRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBUaGlzIHJlZHVjZXIgZnVuY3Rpb24gdXBkYXRlcyBhIGZvcm0gZ3JvdXAgc3RhdGUgd2l0aCBhY3Rpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybUdyb3VwUmVkdWNlcjxUVmFsdWUgZXh0ZW5kcyBLZXlWYWx1ZT4oc3RhdGU6IEZvcm1Hcm91cFN0YXRlPFRWYWx1ZT4gfCB1bmRlZmluZWQsIGFjdGlvbjogQWN0aW9uKSB7XG4gIGlmICghc3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBncm91cCBzdGF0ZSBtdXN0IGJlIGRlZmluZWQhJyk7XG4gIH1cblxuICByZXR1cm4gZm9ybUdyb3VwUmVkdWNlckludGVybmFsKHN0YXRlLCBhY3Rpb24gYXMgYW55KTtcbn1cbiJdfQ==