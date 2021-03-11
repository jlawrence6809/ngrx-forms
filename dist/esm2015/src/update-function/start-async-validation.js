import { StartAsyncValidationAction } from '../actions';
import { isFormState } from '../state';
import { abstractControlReducer, ensureState } from './util';
export function startAsyncValidation(nameOrState, name) {
    if (isFormState(nameOrState)) {
        return abstractControlReducer(nameOrState, new StartAsyncValidationAction(nameOrState.id, name));
    }
    return (s) => startAsyncValidation(ensureState(s), nameOrState);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtYXN5bmMtdmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvdXBkYXRlLWZ1bmN0aW9uL3N0YXJ0LWFzeW5jLXZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3hELE9BQU8sRUFBbUMsV0FBVyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFjN0QsTUFBTSxVQUFVLG9CQUFvQixDQUFTLFdBQWtELEVBQUUsSUFBYTtJQUM1RyxJQUFJLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUM1QixPQUFPLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxJQUFJLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSyxDQUFDLENBQUMsQ0FBQztLQUNuRztJQUVELE9BQU8sQ0FBQyxDQUErQixFQUFFLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDaEcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXJ0QXN5bmNWYWxpZGF0aW9uQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2xTdGF0ZSwgRm9ybVN0YXRlLCBpc0Zvcm1TdGF0ZSB9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7IGFic3RyYWN0Q29udHJvbFJlZHVjZXIsIGVuc3VyZVN0YXRlIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBUaGlzIHVwZGF0ZSBmdW5jdGlvbiB0YWtlcyBhIG5hbWUgYW5kIHJldHVybnMgYSBwcm9qZWN0aW9uIGZ1bmN0aW9uIHRoYXRcbiAqIG1hcmtzIHRoZSBhc3luYyB2YWxpZGF0aW9uIGZvciB0aGUgZ2l2ZW4gbmFtZSBhcyBwZW5kaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRBc3luY1ZhbGlkYXRpb24obmFtZTogc3RyaW5nKTogPFRWYWx1ZT4oc3RhdGU6IEFic3RyYWN0Q29udHJvbFN0YXRlPFRWYWx1ZT4pID0+IEZvcm1TdGF0ZTxUVmFsdWU+O1xuXG4vKipcbiAqIFRoaXMgdXBkYXRlIGZ1bmN0aW9uIHRha2VzIGEgZm9ybSBzdGF0ZSBhbmQgYSBuYW1lIGFuZCBtYXJrcyB0aGUgYXN5bmNcbiAqIHZhbGlkYXRpb24gZm9yIHRoZSBnaXZlbiBuYW1lIGFzIHBlbmRpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEFzeW5jVmFsaWRhdGlvbjxUVmFsdWU+KHN0YXRlOiBBYnN0cmFjdENvbnRyb2xTdGF0ZTxUVmFsdWU+LCBuYW1lOiBzdHJpbmcpOiBGb3JtU3RhdGU8VFZhbHVlPjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0QXN5bmNWYWxpZGF0aW9uPFRWYWx1ZT4obmFtZU9yU3RhdGU6IHN0cmluZyB8IEFic3RyYWN0Q29udHJvbFN0YXRlPFRWYWx1ZT4sIG5hbWU/OiBzdHJpbmcpIHtcbiAgaWYgKGlzRm9ybVN0YXRlKG5hbWVPclN0YXRlKSkge1xuICAgIHJldHVybiBhYnN0cmFjdENvbnRyb2xSZWR1Y2VyKG5hbWVPclN0YXRlLCBuZXcgU3RhcnRBc3luY1ZhbGlkYXRpb25BY3Rpb24obmFtZU9yU3RhdGUuaWQsIG5hbWUhKSk7XG4gIH1cblxuICByZXR1cm4gKHM6IEFic3RyYWN0Q29udHJvbFN0YXRlPFRWYWx1ZT4pID0+IHN0YXJ0QXN5bmNWYWxpZGF0aW9uKGVuc3VyZVN0YXRlKHMpLCBuYW1lT3JTdGF0ZSk7XG59XG4iXX0=