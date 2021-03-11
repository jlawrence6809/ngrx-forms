import { MarkAsPristineAction } from '../actions';
import { abstractControlReducer } from './util';
export function markAsPristine(state) {
    return abstractControlReducer(state, new MarkAsPristineAction(state.id));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyay1hcy1wcmlzdGluZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvdXBkYXRlLWZ1bmN0aW9uL21hcmstYXMtcHJpc3RpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRWxELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQXVCaEQsTUFBTSxVQUFVLGNBQWMsQ0FBUyxLQUFtQztJQUN4RSxPQUFPLHNCQUFzQixDQUFDLEtBQUssRUFBRSxJQUFJLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzNFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXJrQXNQcmlzdGluZUFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sU3RhdGUsIEZvcm1BcnJheVN0YXRlLCBGb3JtQ29udHJvbFN0YXRlLCBGb3JtQ29udHJvbFZhbHVlVHlwZXMsIEZvcm1Hcm91cFN0YXRlLCBGb3JtU3RhdGUgfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgeyBhYnN0cmFjdENvbnRyb2xSZWR1Y2VyIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBUaGlzIHVwZGF0ZSBmdW5jdGlvbiB0YWtlcyBhIGZvcm0gY29udHJvbCBzdGF0ZSBhbmQgbWFya3MgaXQgYXMgcHJpc3RpbmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNQcmlzdGluZTxUVmFsdWUgZXh0ZW5kcyBGb3JtQ29udHJvbFZhbHVlVHlwZXM+KHN0YXRlOiBGb3JtQ29udHJvbFN0YXRlPFRWYWx1ZT4pOiBGb3JtQ29udHJvbFN0YXRlPFRWYWx1ZT47XG5cbi8qKlxuICogVGhpcyB1cGRhdGUgZnVuY3Rpb24gdGFrZXMgYSBmb3JtIGFycmF5IHN0YXRlIGFuZCBtYXJrcyBpdCBhbmQgYWxsIG9mIGl0cyBjaGlsZHJlbiBhcyBwcmlzdGluZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc1ByaXN0aW5lPFRWYWx1ZT4oc3RhdGU6IEZvcm1BcnJheVN0YXRlPFRWYWx1ZT4pOiBGb3JtQXJyYXlTdGF0ZTxUVmFsdWU+O1xuXG4vKipcbiAqIFRoaXMgdXBkYXRlIGZ1bmN0aW9uIHRha2VzIGEgZm9ybSBncm91cCBzdGF0ZSBhbmQgbWFya3MgaXQgYW5kIGFsbCBvZiBpdHMgY2hpbGRyZW4gYXMgcHJpc3RpbmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNQcmlzdGluZTxUVmFsdWU+KHN0YXRlOiBGb3JtR3JvdXBTdGF0ZTxUVmFsdWU+KTogRm9ybUdyb3VwU3RhdGU8VFZhbHVlPjtcblxuLyoqXG4gKiBUaGlzIHVwZGF0ZSBmdW5jdGlvbiB0YWtlcyBhIHN0YXRlIGFuZCBtYXJrcyBpdCBhcyBwcmlzdGluZS4gRm9yIGdyb3VwcyBhbmQgYXJyYXlzIHRoaXMgYWxzbyBtYXJrc1xuICogYWxsIGNoaWxkcmVuIGFzIHByaXN0aW5lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFya0FzUHJpc3RpbmU8VFZhbHVlPihzdGF0ZTogQWJzdHJhY3RDb250cm9sU3RhdGU8VFZhbHVlPik6IEZvcm1TdGF0ZTxUVmFsdWU+O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFya0FzUHJpc3RpbmU8VFZhbHVlPihzdGF0ZTogQWJzdHJhY3RDb250cm9sU3RhdGU8VFZhbHVlPikge1xuICByZXR1cm4gYWJzdHJhY3RDb250cm9sUmVkdWNlcihzdGF0ZSwgbmV3IE1hcmtBc1ByaXN0aW5lQWN0aW9uKHN0YXRlLmlkKSk7XG59XG4iXX0=