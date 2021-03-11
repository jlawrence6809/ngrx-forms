import * as tslib_1 from "tslib";
import { computeGroupState, isGroupState } from '../state';
import { ensureState } from './util';
function updateGroupControlsState(updateFns) {
    return function (state) {
        var hasChanged = false;
        var newControls = Object.keys(state.controls).reduce(function (res, key) {
            var _a, _b;
            var control = state.controls[key];
            Object.assign(res, (_a = {}, _a[key] = control, _a));
            if (updateFns.hasOwnProperty(key)) {
                var newControl = updateFns[key](control, state);
                hasChanged = hasChanged || newControl !== control;
                Object.assign(res, (_b = {}, _b[key] = newControl, _b));
            }
            return res;
        }, {});
        return hasChanged ? newControls : state.controls;
    };
}
function updateGroupSingle(updateFns) {
    return function (state) {
        var newControls = updateGroupControlsState(updateFns)(state);
        return newControls !== state.controls
            ? computeGroupState(state.id, newControls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
                wasOrShouldBeDirty: state.isDirty,
                wasOrShouldBeEnabled: state.isEnabled,
                wasOrShouldBeTouched: state.isTouched,
                wasOrShouldBeSubmitted: state.isSubmitted,
            })
            : state;
    };
}
export function updateGroup(stateOrUpdateFnOrUpdateFnArray, updateFnOrUpdateFnArr) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    if (isGroupState(stateOrUpdateFnOrUpdateFnArray)) {
        var updateFnArr_1 = Array.isArray(updateFnOrUpdateFnArr) ? updateFnOrUpdateFnArr : [updateFnOrUpdateFnArr];
        return updateFnArr_1.concat.apply(updateFnArr_1, tslib_1.__spread(rest)).reduce(function (s, updateFn) { return updateGroupSingle(updateFn)(s); }, stateOrUpdateFnOrUpdateFnArray);
    }
    var updateFnArr = Array.isArray(stateOrUpdateFnOrUpdateFnArray) ? stateOrUpdateFnOrUpdateFnArray : [stateOrUpdateFnOrUpdateFnArray];
    updateFnArr = updateFnOrUpdateFnArr === undefined ? updateFnArr : updateFnArr.concat(updateFnOrUpdateFnArr);
    return function (s) { return updateGroup(ensureState(s), updateFnArr.concat(rest)); };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy91cGRhdGUtZnVuY3Rpb24vdXBkYXRlLWdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQWdELFlBQVksRUFBWSxNQUFNLFVBQVUsQ0FBQztBQUNuSCxPQUFPLEVBQUUsV0FBVyxFQUFjLE1BQU0sUUFBUSxDQUFDO0FBTWpELFNBQVMsd0JBQXdCLENBQTBCLFNBQWlDO0lBQzFGLE9BQU8sVUFBQyxLQUE2QjtRQUNuQyxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7O1lBQzlELElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFlBQUksR0FBQyxHQUFHLElBQUcsT0FBTyxNQUFHLENBQUM7WUFDdkMsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQyxJQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNuRCxVQUFVLEdBQUcsVUFBVSxJQUFJLFVBQVUsS0FBSyxPQUFPLENBQUM7Z0JBQ2xELE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFJLEdBQUMsR0FBRyxJQUFHLFVBQVUsTUFBRyxDQUFDO2FBQzNDO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEVBQUUsRUFBK0IsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDbkQsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQTBCLFNBQWlDO0lBQ25GLE9BQU8sVUFBQyxLQUE2QjtRQUNuQyxJQUFNLFdBQVcsR0FBRyx3QkFBd0IsQ0FBUyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RSxPQUFPLFdBQVcsS0FBSyxLQUFLLENBQUMsUUFBUTtZQUNuQyxDQUFDLENBQUMsaUJBQWlCLENBQ2pCLEtBQUssQ0FBQyxFQUFFLEVBQ1IsV0FBVyxFQUNYLEtBQUssQ0FBQyxLQUFLLEVBQ1gsS0FBSyxDQUFDLE1BQU0sRUFDWixLQUFLLENBQUMsa0JBQWtCLEVBQ3hCLEtBQUssQ0FBQyxxQkFBcUIsRUFDM0I7Z0JBQ0Usa0JBQWtCLEVBQUUsS0FBSyxDQUFDLE9BQU87Z0JBQ2pDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxTQUFTO2dCQUNyQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsU0FBUztnQkFDckMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLFdBQVc7YUFDMUMsQ0FDRjtZQUNELENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDWixDQUFDLENBQUM7QUFDSixDQUFDO0FBZ0pELE1BQU0sVUFBVSxXQUFXLENBQ3pCLDhCQUEwRyxFQUMxRyxxQkFBeUU7SUFDekUsY0FBaUM7U0FBakMsVUFBaUMsRUFBakMscUJBQWlDLEVBQWpDLElBQWlDO1FBQWpDLDZCQUFpQzs7SUFFakMsSUFBSSxZQUFZLENBQVMsOEJBQThCLENBQUMsRUFBRTtRQUN4RCxJQUFNLGFBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFzQixDQUFDLENBQUM7UUFDNUcsT0FBTyxhQUFXLENBQUMsTUFBTSxPQUFsQixhQUFXLG1CQUFXLElBQUksR0FBRSxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsUUFBUSxJQUFLLE9BQUEsaUJBQWlCLENBQVMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXRDLENBQXNDLEVBQUUsOEJBQThCLENBQUMsQ0FBQztLQUNwSTtJQUVELElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUNwSSxXQUFXLEdBQUcscUJBQXFCLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUM1RyxPQUFPLFVBQUMsQ0FBeUIsSUFBSyxPQUFBLFdBQVcsQ0FBUyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUE3RCxDQUE2RCxDQUFDO0FBQ3RHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wdXRlR3JvdXBTdGF0ZSwgRm9ybUdyb3VwQ29udHJvbHMsIEZvcm1Hcm91cFN0YXRlLCBGb3JtU3RhdGUsIGlzR3JvdXBTdGF0ZSwgS2V5VmFsdWUgfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgeyBlbnN1cmVTdGF0ZSwgUHJvamVjdEZuMiB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCB0eXBlIFN0YXRlVXBkYXRlRm5zPFRWYWx1ZSBleHRlbmRzIEtleVZhbHVlPiA9IHtcbiAgW2NvbnRyb2xJZCBpbiBrZXlvZiBUVmFsdWVdPzogUHJvamVjdEZuMjxGb3JtU3RhdGU8VFZhbHVlW2NvbnRyb2xJZF0+LCBGb3JtR3JvdXBTdGF0ZTxUVmFsdWU+Pjtcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZUdyb3VwQ29udHJvbHNTdGF0ZTxUVmFsdWUgZXh0ZW5kcyBLZXlWYWx1ZT4odXBkYXRlRm5zOiBTdGF0ZVVwZGF0ZUZuczxUVmFsdWU+KSB7XG4gIHJldHVybiAoc3RhdGU6IEZvcm1Hcm91cFN0YXRlPFRWYWx1ZT4pID0+IHtcbiAgICBsZXQgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIGNvbnN0IG5ld0NvbnRyb2xzID0gT2JqZWN0LmtleXMoc3RhdGUuY29udHJvbHMpLnJlZHVjZSgocmVzLCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBzdGF0ZS5jb250cm9sc1trZXldO1xuICAgICAgT2JqZWN0LmFzc2lnbihyZXMsIHsgW2tleV06IGNvbnRyb2wgfSk7XG4gICAgICBpZiAodXBkYXRlRm5zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgbmV3Q29udHJvbCA9IHVwZGF0ZUZuc1trZXldIShjb250cm9sLCBzdGF0ZSk7XG4gICAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5ld0NvbnRyb2wgIT09IGNvbnRyb2w7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocmVzLCB7IFtrZXldOiBuZXdDb250cm9sIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCB7fSBhcyBGb3JtR3JvdXBDb250cm9sczxUVmFsdWU+KTtcbiAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5ld0NvbnRyb2xzIDogc3RhdGUuY29udHJvbHM7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUdyb3VwU2luZ2xlPFRWYWx1ZSBleHRlbmRzIEtleVZhbHVlPih1cGRhdGVGbnM6IFN0YXRlVXBkYXRlRm5zPFRWYWx1ZT4pIHtcbiAgcmV0dXJuIChzdGF0ZTogRm9ybUdyb3VwU3RhdGU8VFZhbHVlPik6IEZvcm1Hcm91cFN0YXRlPFRWYWx1ZT4gPT4ge1xuICAgIGNvbnN0IG5ld0NvbnRyb2xzID0gdXBkYXRlR3JvdXBDb250cm9sc1N0YXRlPFRWYWx1ZT4odXBkYXRlRm5zKShzdGF0ZSk7XG4gICAgcmV0dXJuIG5ld0NvbnRyb2xzICE9PSBzdGF0ZS5jb250cm9sc1xuICAgICAgPyBjb21wdXRlR3JvdXBTdGF0ZTxUVmFsdWU+KFxuICAgICAgICBzdGF0ZS5pZCxcbiAgICAgICAgbmV3Q29udHJvbHMsXG4gICAgICAgIHN0YXRlLnZhbHVlLFxuICAgICAgICBzdGF0ZS5lcnJvcnMsXG4gICAgICAgIHN0YXRlLnBlbmRpbmdWYWxpZGF0aW9ucyxcbiAgICAgICAgc3RhdGUudXNlckRlZmluZWRQcm9wZXJ0aWVzLFxuICAgICAgICB7XG4gICAgICAgICAgd2FzT3JTaG91bGRCZURpcnR5OiBzdGF0ZS5pc0RpcnR5LFxuICAgICAgICAgIHdhc09yU2hvdWxkQmVFbmFibGVkOiBzdGF0ZS5pc0VuYWJsZWQsXG4gICAgICAgICAgd2FzT3JTaG91bGRCZVRvdWNoZWQ6IHN0YXRlLmlzVG91Y2hlZCxcbiAgICAgICAgICB3YXNPclNob3VsZEJlU3VibWl0dGVkOiBzdGF0ZS5pc1N1Ym1pdHRlZCxcbiAgICAgICAgfSxcbiAgICAgIClcbiAgICAgIDogc3RhdGU7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyB1cGRhdGUgZnVuY3Rpb24gdGFrZXMgb25lIG9yIG1vcmUgdXBkYXRlIGZ1bmN0aW9uIG9iamVjdHMgYW5kIHJldHVybnNcbiAqIGEgcHJvamVjdGlvbiBmdW5jdGlvbiB0aGF0IGFwcGxpZXMgYWxsIG9iamVjdHMgb25lIGFmdGVyIGFub3RoZXIgdG8gYSBmb3JtXG4gKiBncm91cCBzdGF0ZS5cbiAqXG4gKiBUaGUgZm9sbG93aW5nIChjb250cml2ZWQpIGV4YW1wbGUgdXNlcyB0aGlzIGZ1bmN0aW9uIHRvIHZhbGlkYXRlIHRoZSBjaGlsZFxuICogY29udHJvbCBgbmFtZWAgdG8gYmUgcmVxdWlyZWQgYW5kIHNldCB0aGUgY2hpbGQgY29udHJvbCBgZW1haWxgJ3MgdmFsdWUgdG9cbiAqIGJlIGAnJ2AgaWYgdGhlIG5hbWUgaXMgaW52YWxpZC5cbiAqXG5gYGB0eXBlc2NyaXB0XG5pbnRlcmZhY2UgRm9ybVZhbHVlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xufVxuXG5jb25zdCBncm91cFVwZGF0ZUZuID0gdXBkYXRlR3JvdXA8Rm9ybVZhbHVlPihcbiAge1xuICAgIG5hbWU6IHZhbGlkYXRlPHN0cmluZz4ocmVxdWlyZWQpLFxuICB9LFxuICB7XG4gICAgZW1haWw6IChlbWFpbCwgcGFyZW50R3JvdXApID0+XG4gICAgICBwYXJlbnRHcm91cC5jb250cm9scy5uYW1lLmlzSW52YWxpZFxuICAgICAgICA/IHNldFZhbHVlKCcnLCBlbWFpbClcbiAgICAgICAgOiBlbWFpbCxcbiAgfSxcbik7XG5jb25zdCB1cGRhdGVkU3RhdGUgPSBncm91cFVwZGF0ZUZuKHN0YXRlKTtcbmBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlR3JvdXA8VFZhbHVlPihcbiAgdXBkYXRlRm46IFN0YXRlVXBkYXRlRm5zPFRWYWx1ZT4sXG4gIC4uLnVwZGF0ZUZuc0FycjogU3RhdGVVcGRhdGVGbnM8VFZhbHVlPltdXG4pOiAoc3RhdGU6IEZvcm1Hcm91cFN0YXRlPFRWYWx1ZT4pID0+IEZvcm1Hcm91cFN0YXRlPFRWYWx1ZT47XG5cbi8qKlxuICogVGhpcyB1cGRhdGUgZnVuY3Rpb24gdGFrZXMgYW4gYXJyYXkgb2YgdXBkYXRlIGZ1bmN0aW9uIG9iamVjdHMgYW5kXG4gKiByZXR1cm5zIGEgcHJvamVjdGlvbiBmdW5jdGlvbiB0aGF0IGFwcGxpZXMgYWxsIG9iamVjdHMgb25lIGFmdGVyIGFub3RoZXIgdG9cbiAqIGEgZm9ybSBncm91cCBzdGF0ZS5cbiAqXG4gKiBUaGUgZm9sbG93aW5nIChjb250cml2ZWQpIGV4YW1wbGUgdXNlcyB0aGlzIGZ1bmN0aW9uIHRvIHZhbGlkYXRlIHRoZSBjaGlsZFxuICogY29udHJvbCBgbmFtZWAgdG8gYmUgcmVxdWlyZWQgYW5kIHNldCB0aGUgY2hpbGQgY29udHJvbCBgZW1haWxgJ3MgdmFsdWUgdG9cbiAqIGJlIGAnJ2AgaWYgdGhlIG5hbWUgaXMgaW52YWxpZC5cbiAqXG5gYGB0eXBlc2NyaXB0XG5pbnRlcmZhY2UgRm9ybVZhbHVlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xufVxuXG5jb25zdCBncm91cFVwZGF0ZUZuID0gdXBkYXRlR3JvdXA8Rm9ybVZhbHVlPihcbiAgW1xuICAgIHtcbiAgICAgIG5hbWU6IHZhbGlkYXRlPHN0cmluZz4ocmVxdWlyZWQpLFxuICAgIH0sXG4gICAge1xuICAgICAgZW1haWw6IChlbWFpbCwgcGFyZW50R3JvdXApID0+XG4gICAgICAgIHBhcmVudEdyb3VwLmNvbnRyb2xzLm5hbWUuaXNJbnZhbGlkXG4gICAgICAgICAgPyBzZXRWYWx1ZSgnJywgZW1haWwpXG4gICAgICAgICAgOiBlbWFpbCxcbiAgICB9LFxuICBdLFxuKTtcbmNvbnN0IHVwZGF0ZWRTdGF0ZSA9IGdyb3VwVXBkYXRlRm4oc3RhdGUpO1xuYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVHcm91cDxUVmFsdWU+KFxuICB1cGRhdGVGbnNBcnI6IFN0YXRlVXBkYXRlRm5zPFRWYWx1ZT5bXSxcbik6IChzdGF0ZTogRm9ybUdyb3VwU3RhdGU8VFZhbHVlPikgPT4gRm9ybUdyb3VwU3RhdGU8VFZhbHVlPjtcblxuLyoqXG4gKiBUaGlzIHVwZGF0ZSBmdW5jdGlvbiB0YWtlcyBhIGZvcm0gZ3JvdXAgc3RhdGUgYW5kIG9uZSBvciBtb3JlIHVwZGF0ZVxuICogZnVuY3Rpb24gb2JqZWN0cyBhbmQgYXBwbGllcyBhbGwgb2JqZWN0cyBvbmUgYWZ0ZXIgYW5vdGhlciB0byB0aGUgc3RhdGUuXG4gKiBQcm92aWRpbmcgbXVsdGlwbGUgdXBkYXRlIGZ1bmN0aW9uIG9iamVjdHMgaXMgbWFpbmx5IHVzZWZ1bCBpZiB0aGUgcmVzdWx0XG4gKiBvZiBhIGxhdGVyIG9iamVjdCBkZXBlbmRzIG9uIHRoZSByZXN1bHQgb2YgcHJldmlvdXMgb2JqZWN0cy5cbiAqXG4gKiBUaGUgZm9sbG93aW5nIChjb250cml2ZWQpIGV4YW1wbGUgdXNlcyB0aGlzIGZ1bmN0aW9uIHRvIHZhbGlkYXRlIHRoZSBjaGlsZFxuICogY29udHJvbCBgbmFtZWAgdG8gYmUgcmVxdWlyZWQgYW5kIHNldCB0aGUgY2hpbGQgY29udHJvbCBgZW1haWxgJ3MgdmFsdWUgdG9cbiAqIGJlIGAnJ2AgaWYgdGhlIG5hbWUgaXMgaW52YWxpZC5cbiAqXG5gYGB0eXBlc2NyaXB0XG5pbnRlcmZhY2UgRm9ybVZhbHVlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xufVxuXG5jb25zdCB1cGRhdGVkU3RhdGUgPSB1cGRhdGVHcm91cDxGb3JtVmFsdWU+KFxuICBzdGF0ZSxcbiAge1xuICAgIG5hbWU6IHZhbGlkYXRlPHN0cmluZz4ocmVxdWlyZWQpLFxuICB9LFxuICB7XG4gICAgZW1haWw6IChlbWFpbCwgcGFyZW50R3JvdXApID0+XG4gICAgICBwYXJlbnRHcm91cC5jb250cm9scy5uYW1lLmlzSW52YWxpZFxuICAgICAgICA/IHNldFZhbHVlKCcnLCBlbWFpbClcbiAgICAgICAgOiBlbWFpbCxcbiAgfSxcbik7XG5gYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUdyb3VwPFRWYWx1ZT4oXG4gIHN0YXRlOiBGb3JtR3JvdXBTdGF0ZTxUVmFsdWU+LFxuICB1cGRhdGVGbjogU3RhdGVVcGRhdGVGbnM8VFZhbHVlPixcbiAgLi4udXBkYXRlRm5zQXJyOiBTdGF0ZVVwZGF0ZUZuczxUVmFsdWU+W11cbik6IEZvcm1Hcm91cFN0YXRlPFRWYWx1ZT47XG5cbi8qKlxuICogVGhpcyB1cGRhdGUgZnVuY3Rpb24gdGFrZXMgYSBmb3JtIGdyb3VwIHN0YXRlIGFuZCBhbiBhcnJheSBvZiB1cGRhdGVcbiAqIGZ1bmN0aW9uIG9iamVjdHMgYW5kIGFwcGxpZXMgYWxsIG9iamVjdHMgb25lIGFmdGVyIGFub3RoZXIgdG8gdGhlIHN0YXRlLlxuICogUHJvdmlkaW5nIG11bHRpcGxlIHVwZGF0ZSBmdW5jdGlvbiBvYmplY3RzIGlzIG1haW5seSB1c2VmdWwgaWYgdGhlIHJlc3VsdFxuICogb2YgYSBsYXRlciBvYmplY3QgZGVwZW5kcyBvbiB0aGUgcmVzdWx0IG9mIHByZXZpb3VzIG9iamVjdHMuXG4gKlxuICogVGhlIGZvbGxvd2luZyAoY29udHJpdmVkKSBleGFtcGxlIHVzZXMgdGhpcyBmdW5jdGlvbiB0byB2YWxpZGF0ZSB0aGUgY2hpbGRcbiAqIGNvbnRyb2wgYG5hbWVgIHRvIGJlIHJlcXVpcmVkIGFuZCBzZXQgdGhlIGNoaWxkIGNvbnRyb2wgYGVtYWlsYCdzIHZhbHVlIHRvXG4gKiBiZSBgJydgIGlmIHRoZSBuYW1lIGlzIGludmFsaWQuXG4gKlxuYGBgdHlwZXNjcmlwdFxuaW50ZXJmYWNlIEZvcm1WYWx1ZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbn1cblxuY29uc3QgdXBkYXRlZFN0YXRlID0gdXBkYXRlR3JvdXA8Rm9ybVZhbHVlPihcbiAgc3RhdGUsXG4gIFtcbiAgICB7XG4gICAgICBuYW1lOiB2YWxpZGF0ZTxzdHJpbmc+KHJlcXVpcmVkKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGVtYWlsOiAoZW1haWwsIHBhcmVudEdyb3VwKSA9PlxuICAgICAgICBwYXJlbnRHcm91cC5jb250cm9scy5uYW1lLmlzSW52YWxpZFxuICAgICAgICAgID8gc2V0VmFsdWUoJycsIGVtYWlsKVxuICAgICAgICAgIDogZW1haWwsXG4gICAgfSxcbiAgXSxcbik7XG5gYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUdyb3VwPFRWYWx1ZT4oXG4gIHN0YXRlOiBGb3JtR3JvdXBTdGF0ZTxUVmFsdWU+LFxuICB1cGRhdGVGbnNBcnI6IFN0YXRlVXBkYXRlRm5zPFRWYWx1ZT5bXSxcbik6IEZvcm1Hcm91cFN0YXRlPFRWYWx1ZT47XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVHcm91cDxUVmFsdWUgZXh0ZW5kcyBLZXlWYWx1ZT4oXG4gIHN0YXRlT3JVcGRhdGVGbk9yVXBkYXRlRm5BcnJheTogRm9ybUdyb3VwU3RhdGU8VFZhbHVlPiB8IFN0YXRlVXBkYXRlRm5zPFRWYWx1ZT4gfCBTdGF0ZVVwZGF0ZUZuczxUVmFsdWU+W10sXG4gIHVwZGF0ZUZuT3JVcGRhdGVGbkFycj86IFN0YXRlVXBkYXRlRm5zPFRWYWx1ZT4gfCBTdGF0ZVVwZGF0ZUZuczxUVmFsdWU+W10sXG4gIC4uLnJlc3Q6IFN0YXRlVXBkYXRlRm5zPFRWYWx1ZT5bXVxuKSB7XG4gIGlmIChpc0dyb3VwU3RhdGU8VFZhbHVlPihzdGF0ZU9yVXBkYXRlRm5PclVwZGF0ZUZuQXJyYXkpKSB7XG4gICAgY29uc3QgdXBkYXRlRm5BcnIgPSBBcnJheS5pc0FycmF5KHVwZGF0ZUZuT3JVcGRhdGVGbkFycikgPyB1cGRhdGVGbk9yVXBkYXRlRm5BcnIgOiBbdXBkYXRlRm5PclVwZGF0ZUZuQXJyIV07XG4gICAgcmV0dXJuIHVwZGF0ZUZuQXJyLmNvbmNhdCguLi5yZXN0KS5yZWR1Y2UoKHMsIHVwZGF0ZUZuKSA9PiB1cGRhdGVHcm91cFNpbmdsZTxUVmFsdWU+KHVwZGF0ZUZuKShzKSwgc3RhdGVPclVwZGF0ZUZuT3JVcGRhdGVGbkFycmF5KTtcbiAgfVxuXG4gIGxldCB1cGRhdGVGbkFyciA9IEFycmF5LmlzQXJyYXkoc3RhdGVPclVwZGF0ZUZuT3JVcGRhdGVGbkFycmF5KSA/IHN0YXRlT3JVcGRhdGVGbk9yVXBkYXRlRm5BcnJheSA6IFtzdGF0ZU9yVXBkYXRlRm5PclVwZGF0ZUZuQXJyYXldO1xuICB1cGRhdGVGbkFyciA9IHVwZGF0ZUZuT3JVcGRhdGVGbkFyciA9PT0gdW5kZWZpbmVkID8gdXBkYXRlRm5BcnIgOiB1cGRhdGVGbkFyci5jb25jYXQodXBkYXRlRm5PclVwZGF0ZUZuQXJyKTtcbiAgcmV0dXJuIChzOiBGb3JtR3JvdXBTdGF0ZTxUVmFsdWU+KSA9PiB1cGRhdGVHcm91cDxUVmFsdWU+KGVuc3VyZVN0YXRlKHMpLCB1cGRhdGVGbkFyci5jb25jYXQocmVzdCkpO1xufVxuIl19