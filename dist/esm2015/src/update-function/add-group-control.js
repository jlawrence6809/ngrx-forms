import { AddGroupControlAction } from '../actions';
import { formGroupReducer } from '../group/reducer';
import { isGroupState } from '../state';
import { ensureState } from './util';
export function addGroupControl(nameOrState, valueOrName, value) {
    if (isGroupState(nameOrState)) {
        return formGroupReducer(nameOrState, new AddGroupControlAction(nameOrState.id, valueOrName, value));
    }
    return (s) => addGroupControl(ensureState(s), nameOrState, valueOrName);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWdyb3VwLWNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zLyIsInNvdXJjZXMiOlsic3JjL3VwZGF0ZS1mdW5jdGlvbi9hZGQtZ3JvdXAtY29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFrQixZQUFZLEVBQVksTUFBTSxVQUFVLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQXFCckMsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsV0FBaUQsRUFDakQsV0FBOEMsRUFDOUMsS0FBMkI7SUFFM0IsSUFBSSxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUU7UUFDN0IsT0FBTyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxxQkFBcUIsQ0FBc0IsV0FBVyxDQUFDLEVBQUUsRUFBRSxXQUEwQixFQUFFLEtBQU0sQ0FBQyxDQUFDLENBQUM7S0FDMUk7SUFFRCxPQUFPLENBQUMsQ0FBeUIsRUFBRSxFQUFFLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUEwQixFQUFFLFdBQWtDLENBQUMsQ0FBQztBQUN4SSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWRkR3JvdXBDb250cm9sQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBmb3JtR3JvdXBSZWR1Y2VyIH0gZnJvbSAnLi4vZ3JvdXAvcmVkdWNlcic7XG5pbXBvcnQgeyBGb3JtR3JvdXBTdGF0ZSwgaXNHcm91cFN0YXRlLCBLZXlWYWx1ZSB9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7IGVuc3VyZVN0YXRlIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBUaGlzIHVwZGF0ZSBmdW5jdGlvbiB0YWtlcyBhIG5hbWUgYW5kIGEgdmFsdWUgYW5kIHJldHVybnMgYSBwcm9qZWN0aW9uIGZ1bmN0aW9uXG4gKiB0aGF0IGFkZHMgYSBjaGlsZCBjb250cm9sIHdpdGggdGhlIGdpdmVuIG5hbWUgYW5kIHZhbHVlIHRvIGEgZm9ybSBncm91cCBzdGF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEdyb3VwQ29udHJvbDxUVmFsdWUgZXh0ZW5kcyBLZXlWYWx1ZSwgVENvbnRyb2xLZXkgZXh0ZW5kcyBrZXlvZiBUVmFsdWUgPSBrZXlvZiBUVmFsdWU+KFxuICBuYW1lOiBUQ29udHJvbEtleSxcbiAgdmFsdWU6IFRWYWx1ZVtUQ29udHJvbEtleV0sXG4pOiAoc3RhdGU6IEZvcm1Hcm91cFN0YXRlPFRWYWx1ZT4pID0+IEZvcm1Hcm91cFN0YXRlPFRWYWx1ZT47XG5cbi8qKlxuICogVGhpcyB1cGRhdGUgZnVuY3Rpb24gdGFrZXMgYSBmb3JtIGdyb3VwIHN0YXRlLCBhIG5hbWUsIGFuZCBhIHZhbHVlLCBhbmQgYWRkcyBhIGNoaWxkXG4gKiBjb250cm9sIHdpdGggdGhlIGdpdmVuIG5hbWUgYW5kIHZhbHVlIHRvIHRoZSBmb3JtIGdyb3VwIHN0YXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkR3JvdXBDb250cm9sPFRWYWx1ZSBleHRlbmRzIEtleVZhbHVlLCBUQ29udHJvbEtleSBleHRlbmRzIGtleW9mIFRWYWx1ZSA9IGtleW9mIFRWYWx1ZT4oXG4gIHN0YXRlOiBGb3JtR3JvdXBTdGF0ZTxUVmFsdWU+LFxuICBuYW1lOiBUQ29udHJvbEtleSxcbiAgdmFsdWU6IFRWYWx1ZVtUQ29udHJvbEtleV0sXG4pOiBGb3JtR3JvdXBTdGF0ZTxUVmFsdWU+O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkR3JvdXBDb250cm9sPFRWYWx1ZSBleHRlbmRzIEtleVZhbHVlLCBUQ29udHJvbEtleSBleHRlbmRzIGtleW9mIFRWYWx1ZSA9IGtleW9mIFRWYWx1ZT4oXG4gIG5hbWVPclN0YXRlOiBUQ29udHJvbEtleSB8IEZvcm1Hcm91cFN0YXRlPFRWYWx1ZT4sXG4gIHZhbHVlT3JOYW1lOiBUVmFsdWVbVENvbnRyb2xLZXldIHwgVENvbnRyb2xLZXksXG4gIHZhbHVlPzogVFZhbHVlW1RDb250cm9sS2V5XSxcbikge1xuICBpZiAoaXNHcm91cFN0YXRlKG5hbWVPclN0YXRlKSkge1xuICAgIHJldHVybiBmb3JtR3JvdXBSZWR1Y2VyKG5hbWVPclN0YXRlLCBuZXcgQWRkR3JvdXBDb250cm9sQWN0aW9uPFRWYWx1ZSwgVENvbnRyb2xLZXk+KG5hbWVPclN0YXRlLmlkLCB2YWx1ZU9yTmFtZSBhcyBUQ29udHJvbEtleSwgdmFsdWUhKSk7XG4gIH1cblxuICByZXR1cm4gKHM6IEZvcm1Hcm91cFN0YXRlPFRWYWx1ZT4pID0+IGFkZEdyb3VwQ29udHJvbChlbnN1cmVTdGF0ZShzKSwgbmFtZU9yU3RhdGUgYXMgVENvbnRyb2xLZXksIHZhbHVlT3JOYW1lIGFzIFRWYWx1ZVtUQ29udHJvbEtleV0pO1xufVxuIl19