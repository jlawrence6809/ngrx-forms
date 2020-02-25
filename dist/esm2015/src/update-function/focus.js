import { FocusAction } from '../actions';
import { formControlReducer } from '../control/reducer';
/**
 * This update function takes a form control state and marks it as focused (which
 * will also `.focus()` the form element).
 */
export function focus(state) {
    return formControlReducer(state, new FocusAction(state.id));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zLyIsInNvdXJjZXMiOlsic3JjL3VwZGF0ZS1mdW5jdGlvbi9mb2N1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3hEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxLQUFLLENBQXVDLEtBQStCO0lBQ3pGLE9BQU8sa0JBQWtCLENBQUMsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c0FjdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgZm9ybUNvbnRyb2xSZWR1Y2VyIH0gZnJvbSAnLi4vY29udHJvbC9yZWR1Y2VyJztcbmltcG9ydCB7IEZvcm1Db250cm9sU3RhdGUsIEZvcm1Db250cm9sVmFsdWVUeXBlcyB9IGZyb20gJy4uL3N0YXRlJztcblxuLyoqXG4gKiBUaGlzIHVwZGF0ZSBmdW5jdGlvbiB0YWtlcyBhIGZvcm0gY29udHJvbCBzdGF0ZSBhbmQgbWFya3MgaXQgYXMgZm9jdXNlZCAod2hpY2hcbiAqIHdpbGwgYWxzbyBgLmZvY3VzKClgIHRoZSBmb3JtIGVsZW1lbnQpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9jdXM8VFZhbHVlIGV4dGVuZHMgRm9ybUNvbnRyb2xWYWx1ZVR5cGVzPihzdGF0ZTogRm9ybUNvbnRyb2xTdGF0ZTxUVmFsdWU+KSB7XG4gIHJldHVybiBmb3JtQ29udHJvbFJlZHVjZXIoc3RhdGUsIG5ldyBGb2N1c0FjdGlvbihzdGF0ZS5pZCkpO1xufVxuIl19