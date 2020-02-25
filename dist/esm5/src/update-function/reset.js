import { ResetAction } from '../actions';
import { abstractControlReducer } from './util';
export function reset(state) {
    return abstractControlReducer(state, new ResetAction(state.id));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zLyIsInNvdXJjZXMiOlsic3JjL3VwZGF0ZS1mdW5jdGlvbi9yZXNldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQTJCaEQsTUFBTSxVQUFVLEtBQUssQ0FBUyxLQUFtQztJQUMvRCxPQUFPLHNCQUFzQixDQUFDLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzZXRBY3Rpb24gfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbFN0YXRlLCBGb3JtQXJyYXlTdGF0ZSwgRm9ybUNvbnRyb2xTdGF0ZSwgRm9ybUNvbnRyb2xWYWx1ZVR5cGVzLCBGb3JtR3JvdXBTdGF0ZSwgRm9ybVN0YXRlIH0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHsgYWJzdHJhY3RDb250cm9sUmVkdWNlciB9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogVGhpcyB1cGRhdGUgZnVuY3Rpb24gdGFrZXMgYSBmb3JtIGNvbnRyb2wgc3RhdGUgYW5kIG1hcmtzIGl0IGFzIHByaXN0aW5lLFxuICogdW50b3VjaGVkLCBhbmQgdW5zdWJtaXR0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldDxUVmFsdWUgZXh0ZW5kcyBGb3JtQ29udHJvbFZhbHVlVHlwZXM+KHN0YXRlOiBGb3JtQ29udHJvbFN0YXRlPFRWYWx1ZT4pOiBGb3JtQ29udHJvbFN0YXRlPFRWYWx1ZT47XG5cbi8qKlxuICogVGhpcyB1cGRhdGUgZnVuY3Rpb24gdGFrZXMgYSBmb3JtIGFycmF5IHN0YXRlIGFuZCBtYXJrcyBpdCBhbmQgYWxsIG9mIGl0c1xuICogY2hpbGRyZW4gYXMgcHJpc3RpbmUsIHVudG91Y2hlZCwgYW5kIHVuc3VibWl0dGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzZXQ8VFZhbHVlPihzdGF0ZTogRm9ybUFycmF5U3RhdGU8VFZhbHVlPik6IEZvcm1BcnJheVN0YXRlPFRWYWx1ZT47XG5cbi8qKlxuICogVGhpcyB1cGRhdGUgZnVuY3Rpb24gdGFrZXMgYSBmb3JtIGdyb3VwIHN0YXRlIGFuZCBtYXJrcyBpdCBhbmQgYWxsIG9mIGl0c1xuICogY2hpbGRyZW4gYXMgcHJpc3RpbmUsIHVudG91Y2hlZCwgYW5kIHVuc3VibWl0dGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzZXQ8VFZhbHVlPihzdGF0ZTogRm9ybUdyb3VwU3RhdGU8VFZhbHVlPik6IEZvcm1Hcm91cFN0YXRlPFRWYWx1ZT47XG5cbi8qKlxuICogVGhpcyB1cGRhdGUgZnVuY3Rpb24gdGFrZXMgYSBzdGF0ZSBhbmQgbWFya3MgaXQgYXMgcHJpc3RpbmUsIHVudG91Y2hlZCwgYW5kXG4gKiB1bnN1Ym1pdHRlZC4gRm9yIGdyb3VwcyBhbmQgYXJyYXlzIHRoaXMgYWxzbyBtYXJrcyBhbGwgY2hpbGRyZW4gYXMgcHJpc3RpbmUsXG4gKiB1bnRvdWNoZWQsIGFuZCB1bnN1Ym1pdHRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0PFRWYWx1ZT4oc3RhdGU6IEFic3RyYWN0Q29udHJvbFN0YXRlPFRWYWx1ZT4pOiBGb3JtU3RhdGU8VFZhbHVlPjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0PFRWYWx1ZT4oc3RhdGU6IEFic3RyYWN0Q29udHJvbFN0YXRlPFRWYWx1ZT4pIHtcbiAgcmV0dXJuIGFic3RyYWN0Q29udHJvbFJlZHVjZXIoc3RhdGUsIG5ldyBSZXNldEFjdGlvbihzdGF0ZS5pZCkpO1xufVxuIl19