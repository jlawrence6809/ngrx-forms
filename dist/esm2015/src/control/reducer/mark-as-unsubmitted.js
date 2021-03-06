import { MarkAsUnsubmittedAction } from '../../actions';
export function markAsUnsubmittedReducer(state, action) {
    if (action.type !== MarkAsUnsubmittedAction.TYPE) {
        return state;
    }
    if (state.isUnsubmitted) {
        return state;
    }
    return Object.assign({}, state, { isSubmitted: false, isUnsubmitted: true });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFyay1hcy11bnN1Ym1pdHRlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvY29udHJvbC9yZWR1Y2VyL21hcmstYXMtdW5zdWJtaXR0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFXLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pFLE1BQU0sVUFBVSx3QkFBd0IsQ0FDdEMsS0FBK0IsRUFDL0IsTUFBdUI7SUFFdkIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLHVCQUF1QixDQUFDLElBQUksRUFBRTtRQUNoRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCx5QkFDSyxLQUFLLElBQ1IsV0FBVyxFQUFFLEtBQUssRUFDbEIsYUFBYSxFQUFFLElBQUksSUFDbkI7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucywgTWFya0FzVW5zdWJtaXR0ZWRBY3Rpb24gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCB7IEZvcm1Db250cm9sU3RhdGUsIEZvcm1Db250cm9sVmFsdWVUeXBlcyB9IGZyb20gJy4uLy4uL3N0YXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc1Vuc3VibWl0dGVkUmVkdWNlcjxUVmFsdWUgZXh0ZW5kcyBGb3JtQ29udHJvbFZhbHVlVHlwZXM+KFxuICBzdGF0ZTogRm9ybUNvbnRyb2xTdGF0ZTxUVmFsdWU+LFxuICBhY3Rpb246IEFjdGlvbnM8VFZhbHVlPixcbik6IEZvcm1Db250cm9sU3RhdGU8VFZhbHVlPiB7XG4gIGlmIChhY3Rpb24udHlwZSAhPT0gTWFya0FzVW5zdWJtaXR0ZWRBY3Rpb24uVFlQRSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5pc1Vuc3VibWl0dGVkKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBpc1N1Ym1pdHRlZDogZmFsc2UsXG4gICAgaXNVbnN1Ym1pdHRlZDogdHJ1ZSxcbiAgfTtcbn1cbiJdfQ==