import { EnableAction } from '../../actions';
export function enableReducer(state, action) {
    if (action.type !== EnableAction.TYPE) {
        return state;
    }
    if (state.isEnabled) {
        return state;
    }
    return Object.assign({}, state, { isEnabled: true, isDisabled: false });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5hYmxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy9jb250cm9sL3JlZHVjZXIvZW5hYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBVyxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEQsTUFBTSxVQUFVLGFBQWEsQ0FDM0IsS0FBK0IsRUFDL0IsTUFBdUI7SUFFdkIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxJQUFJLEVBQUU7UUFDckMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRTtRQUNuQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQseUJBQ0ssS0FBSyxJQUNSLFNBQVMsRUFBRSxJQUFJLEVBQ2YsVUFBVSxFQUFFLEtBQUssSUFDakI7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucywgRW5hYmxlQWN0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbFN0YXRlLCBGb3JtQ29udHJvbFZhbHVlVHlwZXMgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVSZWR1Y2VyPFRWYWx1ZSBleHRlbmRzIEZvcm1Db250cm9sVmFsdWVUeXBlcz4oXG4gIHN0YXRlOiBGb3JtQ29udHJvbFN0YXRlPFRWYWx1ZT4sXG4gIGFjdGlvbjogQWN0aW9uczxUVmFsdWU+LFxuKTogRm9ybUNvbnRyb2xTdGF0ZTxUVmFsdWU+IHtcbiAgaWYgKGFjdGlvbi50eXBlICE9PSBFbmFibGVBY3Rpb24uVFlQRSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5pc0VuYWJsZWQpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGlzRW5hYmxlZDogdHJ1ZSxcbiAgICBpc0Rpc2FibGVkOiBmYWxzZSxcbiAgfTtcbn1cbiJdfQ==