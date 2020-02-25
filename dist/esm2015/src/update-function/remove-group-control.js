import { RemoveGroupControlAction } from '../actions';
import { formGroupReducer } from '../group/reducer';
import { isGroupState } from '../state';
import { ensureState } from './util';
export function removeGroupControl(nameOrState, name) {
    if (isGroupState(nameOrState)) {
        return formGroupReducer(nameOrState, new RemoveGroupControlAction(nameOrState.id, name));
    }
    return (s) => removeGroupControl(ensureState(s), nameOrState);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWdyb3VwLWNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zLyIsInNvdXJjZXMiOlsic3JjL3VwZGF0ZS1mdW5jdGlvbi9yZW1vdmUtZ3JvdXAtY29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFrQixZQUFZLEVBQVksTUFBTSxVQUFVLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQWNyQyxNQUFNLFVBQVUsa0JBQWtCLENBQTBCLFdBQWtELEVBQUUsSUFBbUI7SUFDakksSUFBSSxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUU7UUFDN0IsT0FBTyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSx3QkFBd0IsQ0FBUyxXQUFXLENBQUMsRUFBRSxFQUFFLElBQUssQ0FBQyxDQUFDLENBQUM7S0FDbkc7SUFFRCxPQUFPLENBQUMsQ0FBeUIsRUFBRSxFQUFFLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQTJCLENBQUMsQ0FBQztBQUN4RyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVtb3ZlR3JvdXBDb250cm9sQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBmb3JtR3JvdXBSZWR1Y2VyIH0gZnJvbSAnLi4vZ3JvdXAvcmVkdWNlcic7XG5pbXBvcnQgeyBGb3JtR3JvdXBTdGF0ZSwgaXNHcm91cFN0YXRlLCBLZXlWYWx1ZSB9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7IGVuc3VyZVN0YXRlIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBUaGlzIHVwZGF0ZSBmdW5jdGlvbiB0YWtlcyBhIG5hbWUgYW5kIHJldHVybnMgYSBwcm9qZWN0aW9uIGZ1bmN0aW9uXG4gKiB0aGF0IHJlbW92ZXMgdGhlIGNoaWxkIGNvbnRyb2wgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBmcm9tIGEgZm9ybSBncm91cCBzdGF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUdyb3VwQ29udHJvbDxUVmFsdWUgZXh0ZW5kcyBLZXlWYWx1ZT4obmFtZToga2V5b2YgVFZhbHVlKTogKHN0YXRlOiBGb3JtR3JvdXBTdGF0ZTxUVmFsdWU+KSA9PiBGb3JtR3JvdXBTdGF0ZTxUVmFsdWU+O1xuXG4vKipcbiAqIFRoaXMgdXBkYXRlIGZ1bmN0aW9uIHRha2VzIGEgZ3JvdXAgZm9ybSBzdGF0ZSBhbmQgYSBuYW1lIGFuZCByZW1vdmVzIHRoZVxuICogY2hpbGQgY29udHJvbCB3aXRoIHRoZSBnaXZlbiBuYW1lIGZyb20gdGhlIHN0YXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlR3JvdXBDb250cm9sPFRWYWx1ZSBleHRlbmRzIEtleVZhbHVlPihzdGF0ZTogRm9ybUdyb3VwU3RhdGU8VFZhbHVlPiwgbmFtZToga2V5b2YgVFZhbHVlKTogRm9ybUdyb3VwU3RhdGU8VFZhbHVlPjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUdyb3VwQ29udHJvbDxUVmFsdWUgZXh0ZW5kcyBLZXlWYWx1ZT4obmFtZU9yU3RhdGU6IGtleW9mIFRWYWx1ZSB8IEZvcm1Hcm91cFN0YXRlPFRWYWx1ZT4sIG5hbWU/OiBrZXlvZiBUVmFsdWUpIHtcbiAgaWYgKGlzR3JvdXBTdGF0ZShuYW1lT3JTdGF0ZSkpIHtcbiAgICByZXR1cm4gZm9ybUdyb3VwUmVkdWNlcihuYW1lT3JTdGF0ZSwgbmV3IFJlbW92ZUdyb3VwQ29udHJvbEFjdGlvbjxUVmFsdWU+KG5hbWVPclN0YXRlLmlkLCBuYW1lISkpO1xuICB9XG5cbiAgcmV0dXJuIChzOiBGb3JtR3JvdXBTdGF0ZTxUVmFsdWU+KSA9PiByZW1vdmVHcm91cENvbnRyb2woZW5zdXJlU3RhdGUocyksIG5hbWVPclN0YXRlIGFzIGtleW9mIFRWYWx1ZSk7XG59XG4iXX0=