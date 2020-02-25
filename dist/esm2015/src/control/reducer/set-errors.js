import { SetErrorsAction } from '../../actions';
import { deepEquals, isEmpty } from '../../util';
export function setErrorsReducer(state, action) {
    if (action.type !== SetErrorsAction.TYPE) {
        return state;
    }
    if (state.isDisabled) {
        return state;
    }
    if (state.errors === action.errors) {
        return state;
    }
    if (deepEquals(state.errors, action.errors)) {
        return state;
    }
    if (!action.errors || typeof action.errors !== 'object' || Array.isArray(action.errors)) {
        throw new Error(`Control errors must be an object; got ${action.errors}`); // `;
    }
    if (Object.keys(action.errors).some(key => key.startsWith('$'))) {
        throw new Error(`Control errors must not use $ as a prefix; got ${JSON.stringify(action.errors)}`); // `;
    }
    const asyncErrors = Object.keys(state.errors)
        .filter(key => key.startsWith('$'))
        .reduce((res, key) => Object.assign(res, { [key]: state.errors[key] }), {});
    const newErrors = isEmpty(asyncErrors) ? action.errors : Object.assign(asyncErrors, action.errors);
    const isValid = isEmpty(newErrors);
    return Object.assign({}, state, { isValid, isInvalid: !isValid, errors: newErrors });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWVycm9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvY29udHJvbC9yZWR1Y2VyL3NldC1lcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFXLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUVqRCxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLEtBQStCLEVBQy9CLE1BQXVCO0lBRXZCLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsSUFBSSxFQUFFO1FBQ3hDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7UUFDcEIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBQ2xDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUMzQyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksT0FBUSxNQUFNLENBQUMsTUFBYyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNoRyxNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUs7S0FDakY7SUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtRQUMvRCxNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLO0tBQzFHO0lBRUQsTUFBTSxXQUFXLEdBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ3RCLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQXNCLENBQUMsQ0FBQztJQUVwRyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFbkMseUJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFDUCxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQ25CLE1BQU0sRUFBRSxTQUFTLElBQ2pCO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMsIFNldEVycm9yc0FjdGlvbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xTdGF0ZSwgRm9ybUNvbnRyb2xWYWx1ZVR5cGVzLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgZGVlcEVxdWFscywgaXNFbXB0eSB9IGZyb20gJy4uLy4uL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0RXJyb3JzUmVkdWNlcjxUVmFsdWUgZXh0ZW5kcyBGb3JtQ29udHJvbFZhbHVlVHlwZXM+KFxuICBzdGF0ZTogRm9ybUNvbnRyb2xTdGF0ZTxUVmFsdWU+LFxuICBhY3Rpb246IEFjdGlvbnM8VFZhbHVlPixcbik6IEZvcm1Db250cm9sU3RhdGU8VFZhbHVlPiB7XG4gIGlmIChhY3Rpb24udHlwZSAhPT0gU2V0RXJyb3JzQWN0aW9uLlRZUEUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBpZiAoc3RhdGUuaXNEaXNhYmxlZCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5lcnJvcnMgPT09IGFjdGlvbi5lcnJvcnMpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBpZiAoZGVlcEVxdWFscyhzdGF0ZS5lcnJvcnMsIGFjdGlvbi5lcnJvcnMpKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgaWYgKCFhY3Rpb24uZXJyb3JzIHx8IHR5cGVvZiAoYWN0aW9uLmVycm9ycyBhcyBhbnkpICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGFjdGlvbi5lcnJvcnMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDb250cm9sIGVycm9ycyBtdXN0IGJlIGFuIG9iamVjdDsgZ290ICR7YWN0aW9uLmVycm9yc31gKTsgLy8gYDtcbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyhhY3Rpb24uZXJyb3JzKS5zb21lKGtleSA9PiBrZXkuc3RhcnRzV2l0aCgnJCcpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ29udHJvbCBlcnJvcnMgbXVzdCBub3QgdXNlICQgYXMgYSBwcmVmaXg7IGdvdCAke0pTT04uc3RyaW5naWZ5KGFjdGlvbi5lcnJvcnMpfWApOyAvLyBgO1xuICB9XG5cbiAgY29uc3QgYXN5bmNFcnJvcnMgPVxuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVycm9ycylcbiAgICAgIC5maWx0ZXIoa2V5ID0+IGtleS5zdGFydHNXaXRoKCckJykpXG4gICAgICAucmVkdWNlKChyZXMsIGtleSkgPT4gT2JqZWN0LmFzc2lnbihyZXMsIHsgW2tleV06IHN0YXRlLmVycm9yc1trZXldIH0pLCB7fSBhcyBWYWxpZGF0aW9uRXJyb3JzKTtcblxuICBjb25zdCBuZXdFcnJvcnMgPSBpc0VtcHR5KGFzeW5jRXJyb3JzKSA/IGFjdGlvbi5lcnJvcnMgOiBPYmplY3QuYXNzaWduKGFzeW5jRXJyb3JzLCBhY3Rpb24uZXJyb3JzKTtcbiAgY29uc3QgaXNWYWxpZCA9IGlzRW1wdHkobmV3RXJyb3JzKTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGlzVmFsaWQsXG4gICAgaXNJbnZhbGlkOiAhaXNWYWxpZCxcbiAgICBlcnJvcnM6IG5ld0Vycm9ycyxcbiAgfTtcbn1cbiJdfQ==