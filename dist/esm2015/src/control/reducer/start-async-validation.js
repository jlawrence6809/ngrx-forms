import { StartAsyncValidationAction } from '../../actions';
export function startAsyncValidationReducer(state, action) {
    if (action.type !== StartAsyncValidationAction.TYPE) {
        return state;
    }
    if (state.pendingValidations.indexOf(action.name) >= 0) {
        return state;
    }
    return Object.assign({}, state, { pendingValidations: [...state.pendingValidations, action.name], isValidationPending: true });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtYXN5bmMtdmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvY29udHJvbC9yZWR1Y2VyL3N0YXJ0LWFzeW5jLXZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFXLDBCQUEwQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BFLE1BQU0sVUFBVSwyQkFBMkIsQ0FDekMsS0FBK0IsRUFDL0IsTUFBdUI7SUFFdkIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLDBCQUEwQixDQUFDLElBQUksRUFBRTtRQUNuRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdEQsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELHlCQUNLLEtBQUssSUFDUixrQkFBa0IsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFDOUQsbUJBQW1CLEVBQUUsSUFBSSxJQUN6QjtBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zLCBTdGFydEFzeW5jVmFsaWRhdGlvbkFjdGlvbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xTdGF0ZSwgRm9ybUNvbnRyb2xWYWx1ZVR5cGVzIH0gZnJvbSAnLi4vLi4vc3RhdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRBc3luY1ZhbGlkYXRpb25SZWR1Y2VyPFRWYWx1ZSBleHRlbmRzIEZvcm1Db250cm9sVmFsdWVUeXBlcz4oXG4gIHN0YXRlOiBGb3JtQ29udHJvbFN0YXRlPFRWYWx1ZT4sXG4gIGFjdGlvbjogQWN0aW9uczxUVmFsdWU+LFxuKTogRm9ybUNvbnRyb2xTdGF0ZTxUVmFsdWU+IHtcbiAgaWYgKGFjdGlvbi50eXBlICE9PSBTdGFydEFzeW5jVmFsaWRhdGlvbkFjdGlvbi5UWVBFKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgaWYgKHN0YXRlLnBlbmRpbmdWYWxpZGF0aW9ucy5pbmRleE9mKGFjdGlvbi5uYW1lKSA+PSAwKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBwZW5kaW5nVmFsaWRhdGlvbnM6IFsuLi5zdGF0ZS5wZW5kaW5nVmFsaWRhdGlvbnMsIGFjdGlvbi5uYW1lXSxcbiAgICBpc1ZhbGlkYXRpb25QZW5kaW5nOiB0cnVlLFxuICB9O1xufVxuIl19