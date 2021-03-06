import { isArrayState, isGroupState } from '../state';
import { clearAsyncErrorReducer } from './reducer/clear-async-error';
import { disableReducer } from './reducer/disable';
import { enableReducer } from './reducer/enable';
import { focusReducer } from './reducer/focus';
import { markAsDirtyReducer } from './reducer/mark-as-dirty';
import { markAsPristineReducer } from './reducer/mark-as-pristine';
import { markAsSubmittedReducer } from './reducer/mark-as-submitted';
import { markAsTouchedReducer } from './reducer/mark-as-touched';
import { markAsUnsubmittedReducer } from './reducer/mark-as-unsubmitted';
import { markAsUntouchedReducer } from './reducer/mark-as-untouched';
import { resetReducer } from './reducer/reset';
import { setAsyncErrorReducer } from './reducer/set-async-error';
import { setErrorsReducer } from './reducer/set-errors';
import { setUserDefinedPropertyReducer } from './reducer/set-user-defined-property';
import { setValueReducer } from './reducer/set-value';
import { startAsyncValidationReducer } from './reducer/start-async-validation';
import { unfocusReducer } from './reducer/unfocus';
export function formControlReducerInternal(state, action) {
    if (isGroupState(state) || isArrayState(state)) {
        throw new Error('The state must be a control state');
    }
    if (action.controlId !== state.id) {
        return state;
    }
    state = setValueReducer(state, action);
    state = setErrorsReducer(state, action);
    state = startAsyncValidationReducer(state, action);
    state = setAsyncErrorReducer(state, action);
    state = clearAsyncErrorReducer(state, action);
    state = enableReducer(state, action);
    state = disableReducer(state, action);
    state = focusReducer(state, action);
    state = unfocusReducer(state, action);
    state = markAsDirtyReducer(state, action);
    state = markAsPristineReducer(state, action);
    state = markAsTouchedReducer(state, action);
    state = markAsUntouchedReducer(state, action);
    state = markAsSubmittedReducer(state, action);
    state = markAsUnsubmittedReducer(state, action);
    state = setUserDefinedPropertyReducer(state, action);
    state = resetReducer(state, action);
    return state;
}
/**
 * This reducer function updates a form control state with actions.
 */
export function formControlReducer(state, action) {
    if (!state) {
        throw new Error('The control state must be defined!');
    }
    return formControlReducerInternal(state, action);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvY29udHJvbC9yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBMkMsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMvRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCxNQUFNLFVBQVUsMEJBQTBCLENBQ3hDLEtBQStCLEVBQy9CLE1BQXVCO0lBRXZCLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUM5QyxNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7S0FDdEQ7SUFFRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRTtRQUNqQyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsS0FBSyxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkMsS0FBSyxHQUFHLGdCQUFnQixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4QyxLQUFLLEdBQUcsMkJBQTJCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELEtBQUssR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUMsS0FBSyxHQUFHLHNCQUFzQixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QyxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyQyxLQUFLLEdBQUcsY0FBYyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0QyxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwQyxLQUFLLEdBQUcsY0FBYyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0QyxLQUFLLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDN0MsS0FBSyxHQUFHLG9CQUFvQixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1QyxLQUFLLEdBQUcsc0JBQXNCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLEtBQUssR0FBRyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUMsS0FBSyxHQUFHLHdCQUF3QixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRCxLQUFLLEdBQUcsNkJBQTZCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRXBDLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGtCQUFrQixDQUF1QyxLQUEyQyxFQUFFLE1BQWM7SUFDbEksSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztLQUN2RDtJQUVELE9BQU8sMEJBQTBCLENBQUMsS0FBSyxFQUFFLE1BQWEsQ0FBQyxDQUFDO0FBQzFELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IEZvcm1Db250cm9sU3RhdGUsIEZvcm1Db250cm9sVmFsdWVUeXBlcywgaXNBcnJheVN0YXRlLCBpc0dyb3VwU3RhdGUgfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgeyBjbGVhckFzeW5jRXJyb3JSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VyL2NsZWFyLWFzeW5jLWVycm9yJztcbmltcG9ydCB7IGRpc2FibGVSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VyL2Rpc2FibGUnO1xuaW1wb3J0IHsgZW5hYmxlUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlci9lbmFibGUnO1xuaW1wb3J0IHsgZm9jdXNSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VyL2ZvY3VzJztcbmltcG9ydCB7IG1hcmtBc0RpcnR5UmVkdWNlciB9IGZyb20gJy4vcmVkdWNlci9tYXJrLWFzLWRpcnR5JztcbmltcG9ydCB7IG1hcmtBc1ByaXN0aW5lUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlci9tYXJrLWFzLXByaXN0aW5lJztcbmltcG9ydCB7IG1hcmtBc1N1Ym1pdHRlZFJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXIvbWFyay1hcy1zdWJtaXR0ZWQnO1xuaW1wb3J0IHsgbWFya0FzVG91Y2hlZFJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXIvbWFyay1hcy10b3VjaGVkJztcbmltcG9ydCB7IG1hcmtBc1Vuc3VibWl0dGVkUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlci9tYXJrLWFzLXVuc3VibWl0dGVkJztcbmltcG9ydCB7IG1hcmtBc1VudG91Y2hlZFJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXIvbWFyay1hcy11bnRvdWNoZWQnO1xuaW1wb3J0IHsgcmVzZXRSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VyL3Jlc2V0JztcbmltcG9ydCB7IHNldEFzeW5jRXJyb3JSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VyL3NldC1hc3luYy1lcnJvcic7XG5pbXBvcnQgeyBzZXRFcnJvcnNSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VyL3NldC1lcnJvcnMnO1xuaW1wb3J0IHsgc2V0VXNlckRlZmluZWRQcm9wZXJ0eVJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXIvc2V0LXVzZXItZGVmaW5lZC1wcm9wZXJ0eSc7XG5pbXBvcnQgeyBzZXRWYWx1ZVJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXIvc2V0LXZhbHVlJztcbmltcG9ydCB7IHN0YXJ0QXN5bmNWYWxpZGF0aW9uUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlci9zdGFydC1hc3luYy12YWxpZGF0aW9uJztcbmltcG9ydCB7IHVuZm9jdXNSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VyL3VuZm9jdXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybUNvbnRyb2xSZWR1Y2VySW50ZXJuYWw8VFZhbHVlIGV4dGVuZHMgRm9ybUNvbnRyb2xWYWx1ZVR5cGVzPihcbiAgc3RhdGU6IEZvcm1Db250cm9sU3RhdGU8VFZhbHVlPixcbiAgYWN0aW9uOiBBY3Rpb25zPFRWYWx1ZT4sXG4pOiBGb3JtQ29udHJvbFN0YXRlPFRWYWx1ZT4ge1xuICBpZiAoaXNHcm91cFN0YXRlKHN0YXRlKSB8fCBpc0FycmF5U3RhdGUoc3RhdGUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgc3RhdGUgbXVzdCBiZSBhIGNvbnRyb2wgc3RhdGUnKTtcbiAgfVxuXG4gIGlmIChhY3Rpb24uY29udHJvbElkICE9PSBzdGF0ZS5pZCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIHN0YXRlID0gc2V0VmFsdWVSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICBzdGF0ZSA9IHNldEVycm9yc1JlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIHN0YXRlID0gc3RhcnRBc3luY1ZhbGlkYXRpb25SZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICBzdGF0ZSA9IHNldEFzeW5jRXJyb3JSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICBzdGF0ZSA9IGNsZWFyQXN5bmNFcnJvclJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIHN0YXRlID0gZW5hYmxlUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgc3RhdGUgPSBkaXNhYmxlUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgc3RhdGUgPSBmb2N1c1JlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIHN0YXRlID0gdW5mb2N1c1JlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIHN0YXRlID0gbWFya0FzRGlydHlSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICBzdGF0ZSA9IG1hcmtBc1ByaXN0aW5lUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgc3RhdGUgPSBtYXJrQXNUb3VjaGVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgc3RhdGUgPSBtYXJrQXNVbnRvdWNoZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICBzdGF0ZSA9IG1hcmtBc1N1Ym1pdHRlZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIHN0YXRlID0gbWFya0FzVW5zdWJtaXR0ZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICBzdGF0ZSA9IHNldFVzZXJEZWZpbmVkUHJvcGVydHlSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICBzdGF0ZSA9IHJlc2V0UmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbi8qKlxuICogVGhpcyByZWR1Y2VyIGZ1bmN0aW9uIHVwZGF0ZXMgYSBmb3JtIGNvbnRyb2wgc3RhdGUgd2l0aCBhY3Rpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybUNvbnRyb2xSZWR1Y2VyPFRWYWx1ZSBleHRlbmRzIEZvcm1Db250cm9sVmFsdWVUeXBlcz4oc3RhdGU6IEZvcm1Db250cm9sU3RhdGU8VFZhbHVlPiB8IHVuZGVmaW5lZCwgYWN0aW9uOiBBY3Rpb24pIHtcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhlIGNvbnRyb2wgc3RhdGUgbXVzdCBiZSBkZWZpbmVkIScpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1Db250cm9sUmVkdWNlckludGVybmFsKHN0YXRlLCBhY3Rpb24gYXMgYW55KTtcbn1cbiJdfQ==