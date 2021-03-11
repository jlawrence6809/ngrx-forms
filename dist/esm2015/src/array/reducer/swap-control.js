import { SwapArrayControlAction } from '../../actions';
import { computeArrayState } from '../../state';
import { childReducer, updateIdRecursive } from './util';
function swapArrayValues(a, i, j) {
    const n = [...a];
    [n[i], n[j]] = [n[j], n[i]];
    return n;
}
export function swapControlReducer(state, action) {
    if (action.type !== SwapArrayControlAction.TYPE) {
        return state;
    }
    if (action.controlId !== state.id) {
        return childReducer(state, action);
    }
    const fromIndex = action.fromIndex;
    const toIndex = action.toIndex;
    if (fromIndex === toIndex) {
        return state;
    }
    if (fromIndex < 0 || toIndex < 0) {
        throw new Error(`fromIndex ${fromIndex} or toIndex ${fromIndex} was negative`);
    }
    if (fromIndex >= state.controls.length || toIndex >= state.controls.length) {
        throw new Error(`fromIndex ${fromIndex} or toIndex ${toIndex} is out of bounds with the length of the controls ${state.controls.length}`);
    }
    let controls = swapArrayValues(state.controls, fromIndex, toIndex);
    controls = controls.map((c, i) => (i >= fromIndex || i >= toIndex) ? updateIdRecursive(c, `${state.id}.${i}`) : c);
    return computeArrayState(state.id, controls, state.value, state.errors, state.pendingValidations, state.userDefinedProperties, {
        wasOrShouldBeDirty: true,
        wasOrShouldBeEnabled: state.isEnabled,
        wasOrShouldBeTouched: state.isTouched,
        wasOrShouldBeSubmitted: state.isSubmitted,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhcC1jb250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy9hcnJheS9yZWR1Y2VyL3N3YXAtY29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVcsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFrQixNQUFNLGFBQWEsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXpELFNBQVMsZUFBZSxDQUFDLENBQWlCLEVBQUUsQ0FBUyxFQUFFLENBQVM7SUFDOUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUVELE1BQU0sVUFBVSxrQkFBa0IsQ0FDaEMsS0FBNkIsRUFDN0IsTUFBeUI7SUFFekIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLHNCQUFzQixDQUFDLElBQUksRUFBRTtRQUMvQyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxFQUFFLEVBQUU7UUFDakMsT0FBTyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBRS9CLElBQUksU0FBUyxLQUFLLE9BQU8sRUFBRTtRQUN6QixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7UUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxhQUFhLFNBQVMsZUFBZSxTQUFTLGVBQWUsQ0FBQyxDQUFDO0tBQ2hGO0lBRUQsSUFBSSxTQUFTLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksT0FBTyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1FBQzFFLE1BQU0sSUFBSSxLQUFLLENBQUMsYUFBYSxTQUFTLGVBQWUsT0FBTyxxREFBcUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0tBQzNJO0lBRUQsSUFBSSxRQUFRLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVuSCxPQUFPLGlCQUFpQixDQUN0QixLQUFLLENBQUMsRUFBRSxFQUNSLFFBQVEsRUFDUixLQUFLLENBQUMsS0FBSyxFQUNYLEtBQUssQ0FBQyxNQUFNLEVBQ1osS0FBSyxDQUFDLGtCQUFrQixFQUN4QixLQUFLLENBQUMscUJBQXFCLEVBQzNCO1FBQ0Usa0JBQWtCLEVBQUUsSUFBSTtRQUN4QixvQkFBb0IsRUFBRSxLQUFLLENBQUMsU0FBUztRQUNyQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsU0FBUztRQUNyQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsV0FBVztLQUMxQyxDQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucywgU3dhcEFycmF5Q29udHJvbEFjdGlvbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29tcHV0ZUFycmF5U3RhdGUsIEZvcm1BcnJheVN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgY2hpbGRSZWR1Y2VyLCB1cGRhdGVJZFJlY3Vyc2l2ZSB9IGZyb20gJy4vdXRpbCc7XG5cbmZ1bmN0aW9uIHN3YXBBcnJheVZhbHVlcyhhOiByZWFkb25seSBhbnlbXSwgaTogbnVtYmVyLCBqOiBudW1iZXIpIHtcbiAgY29uc3QgbiA9IFsuLi5hXTtcbiAgW25baV0sIG5bal1dID0gW25bal0sIG5baV1dO1xuICByZXR1cm4gbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3YXBDb250cm9sUmVkdWNlcjxUVmFsdWU+KFxuICBzdGF0ZTogRm9ybUFycmF5U3RhdGU8VFZhbHVlPixcbiAgYWN0aW9uOiBBY3Rpb25zPFRWYWx1ZVtdPixcbik6IEZvcm1BcnJheVN0YXRlPFRWYWx1ZT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgIT09IFN3YXBBcnJheUNvbnRyb2xBY3Rpb24uVFlQRSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGlmIChhY3Rpb24uY29udHJvbElkICE9PSBzdGF0ZS5pZCkge1xuICAgIHJldHVybiBjaGlsZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH1cblxuICBjb25zdCBmcm9tSW5kZXggPSBhY3Rpb24uZnJvbUluZGV4O1xuICBjb25zdCB0b0luZGV4ID0gYWN0aW9uLnRvSW5kZXg7XG5cbiAgaWYgKGZyb21JbmRleCA9PT0gdG9JbmRleCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGlmIChmcm9tSW5kZXggPCAwIHx8IHRvSW5kZXggPCAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBmcm9tSW5kZXggJHtmcm9tSW5kZXh9IG9yIHRvSW5kZXggJHtmcm9tSW5kZXh9IHdhcyBuZWdhdGl2ZWApO1xuICB9XG5cbiAgaWYgKGZyb21JbmRleCA+PSBzdGF0ZS5jb250cm9scy5sZW5ndGggfHwgdG9JbmRleCA+PSBzdGF0ZS5jb250cm9scy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGZyb21JbmRleCAke2Zyb21JbmRleH0gb3IgdG9JbmRleCAke3RvSW5kZXh9IGlzIG91dCBvZiBib3VuZHMgd2l0aCB0aGUgbGVuZ3RoIG9mIHRoZSBjb250cm9scyAke3N0YXRlLmNvbnRyb2xzLmxlbmd0aH1gKTtcbiAgfVxuXG4gIGxldCBjb250cm9scyA9IHN3YXBBcnJheVZhbHVlcyhzdGF0ZS5jb250cm9scywgZnJvbUluZGV4LCB0b0luZGV4KTtcbiAgY29udHJvbHMgPSBjb250cm9scy5tYXAoKGMsIGkpID0+IChpID49IGZyb21JbmRleCB8fCBpID49IHRvSW5kZXgpID8gdXBkYXRlSWRSZWN1cnNpdmUoYywgYCR7c3RhdGUuaWR9LiR7aX1gKSA6IGMpO1xuXG4gIHJldHVybiBjb21wdXRlQXJyYXlTdGF0ZShcbiAgICBzdGF0ZS5pZCxcbiAgICBjb250cm9scyxcbiAgICBzdGF0ZS52YWx1ZSxcbiAgICBzdGF0ZS5lcnJvcnMsXG4gICAgc3RhdGUucGVuZGluZ1ZhbGlkYXRpb25zLFxuICAgIHN0YXRlLnVzZXJEZWZpbmVkUHJvcGVydGllcyxcbiAgICB7XG4gICAgICB3YXNPclNob3VsZEJlRGlydHk6IHRydWUsXG4gICAgICB3YXNPclNob3VsZEJlRW5hYmxlZDogc3RhdGUuaXNFbmFibGVkLFxuICAgICAgd2FzT3JTaG91bGRCZVRvdWNoZWQ6IHN0YXRlLmlzVG91Y2hlZCxcbiAgICAgIHdhc09yU2hvdWxkQmVTdWJtaXR0ZWQ6IHN0YXRlLmlzU3VibWl0dGVkLFxuICAgIH1cbiAgKTtcbn1cbiJdfQ==