import { StartAsyncValidationAction } from '../actions';
import { isFormState } from '../state';
import { abstractControlReducer, ensureState } from './util';
export function startAsyncValidation(nameOrState, name) {
    if (isFormState(nameOrState)) {
        return abstractControlReducer(nameOrState, new StartAsyncValidationAction(nameOrState.id, name));
    }
    return function (s) { return startAsyncValidation(ensureState(s), nameOrState); };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtYXN5bmMtdmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvdXBkYXRlLWZ1bmN0aW9uL3N0YXJ0LWFzeW5jLXZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3hELE9BQU8sRUFBbUMsV0FBVyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFjN0QsTUFBTSxVQUFVLG9CQUFvQixDQUFTLFdBQWtELEVBQUUsSUFBYTtJQUM1RyxJQUFJLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUM1QixPQUFPLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxJQUFJLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSyxDQUFDLENBQUMsQ0FBQztLQUNuRztJQUVELE9BQU8sVUFBQyxDQUErQixJQUFLLE9BQUEsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxFQUFqRCxDQUFpRCxDQUFDO0FBQ2hHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFydEFzeW5jVmFsaWRhdGlvbkFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sU3RhdGUsIEZvcm1TdGF0ZSwgaXNGb3JtU3RhdGUgfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgeyBhYnN0cmFjdENvbnRyb2xSZWR1Y2VyLCBlbnN1cmVTdGF0ZSB9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogVGhpcyB1cGRhdGUgZnVuY3Rpb24gdGFrZXMgYSBuYW1lIGFuZCByZXR1cm5zIGEgcHJvamVjdGlvbiBmdW5jdGlvbiB0aGF0XG4gKiBtYXJrcyB0aGUgYXN5bmMgdmFsaWRhdGlvbiBmb3IgdGhlIGdpdmVuIG5hbWUgYXMgcGVuZGluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0QXN5bmNWYWxpZGF0aW9uKG5hbWU6IHN0cmluZyk6IDxUVmFsdWU+KHN0YXRlOiBBYnN0cmFjdENvbnRyb2xTdGF0ZTxUVmFsdWU+KSA9PiBGb3JtU3RhdGU8VFZhbHVlPjtcblxuLyoqXG4gKiBUaGlzIHVwZGF0ZSBmdW5jdGlvbiB0YWtlcyBhIGZvcm0gc3RhdGUgYW5kIGEgbmFtZSBhbmQgbWFya3MgdGhlIGFzeW5jXG4gKiB2YWxpZGF0aW9uIGZvciB0aGUgZ2l2ZW4gbmFtZSBhcyBwZW5kaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRBc3luY1ZhbGlkYXRpb248VFZhbHVlPihzdGF0ZTogQWJzdHJhY3RDb250cm9sU3RhdGU8VFZhbHVlPiwgbmFtZTogc3RyaW5nKTogRm9ybVN0YXRlPFRWYWx1ZT47XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEFzeW5jVmFsaWRhdGlvbjxUVmFsdWU+KG5hbWVPclN0YXRlOiBzdHJpbmcgfCBBYnN0cmFjdENvbnRyb2xTdGF0ZTxUVmFsdWU+LCBuYW1lPzogc3RyaW5nKSB7XG4gIGlmIChpc0Zvcm1TdGF0ZShuYW1lT3JTdGF0ZSkpIHtcbiAgICByZXR1cm4gYWJzdHJhY3RDb250cm9sUmVkdWNlcihuYW1lT3JTdGF0ZSwgbmV3IFN0YXJ0QXN5bmNWYWxpZGF0aW9uQWN0aW9uKG5hbWVPclN0YXRlLmlkLCBuYW1lISkpO1xuICB9XG5cbiAgcmV0dXJuIChzOiBBYnN0cmFjdENvbnRyb2xTdGF0ZTxUVmFsdWU+KSA9PiBzdGFydEFzeW5jVmFsaWRhdGlvbihlbnN1cmVTdGF0ZShzKSwgbmFtZU9yU3RhdGUpO1xufVxuIl19