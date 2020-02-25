import { AbstractControlState, FormState } from '../state';
import { ProjectFn2 } from './util';
/**
 * This update function takes a form array state and one or more update
 * functions applies all update functions one after another to the state
 * recursively, i.e. the function is applied to the state's children,
 * their children etc.
 *
 * The following example uses this function to validate all controls in a
 * group or array as required.
 *
 ```typescript
 const updatedState = updateRecursive(
   state,
   validate<any>(required),
 );
 ```
 */
export declare function updateRecursive<TValue>(state: AbstractControlState<TValue>, updateFn: ProjectFn2<AbstractControlState<any>, AbstractControlState<any>>, ...updateFnArr: ProjectFn2<AbstractControlState<any>, AbstractControlState<any>>[]): FormState<TValue>;
/**
 * This update function takes a form array state and an array of
 * update functions applies all update functions one after another to the
 * state recursively, i.e. the function is applied to the state's children,
 * their children etc.
 *
 * The following example uses this function to validate all controls in a
 * group or array as required.
 *
```typescript
const updatedState = updateRecursive(
  state,
  [validate<any>(required)],
);
```
 */
export declare function updateRecursive<TValue>(state: AbstractControlState<TValue>, updateFnArr: ProjectFn2<AbstractControlState<any>, AbstractControlState<any>>[]): FormState<TValue>;
/**
 * This update function takes one or more update functions and returns a
 * projection function that applies all update functions one after another to
 * a form state.
 *
 * The following example uses this function to validate all controls in a
 * group as required.
 *
```typescript
const updateFn = updateRecursive(validate<any>(required));
const updatedState = updateFn(state);
```
 */
export declare function updateRecursive(updateFn: ProjectFn2<AbstractControlState<any>, AbstractControlState<any>>, ...updateFnArr: ProjectFn2<AbstractControlState<any>, AbstractControlState<any>>[]): <TValue>(state: AbstractControlState<TValue>) => FormState<TValue>;
/**
 * This update function takes an array of update functions and returns
 * a projection function that applies all update functions one after another to
 * a form state.
 *
 * The following example uses this function to validate all controls in a
 * group as required.
 *
```typescript
const updateFn = updateRecursive([validate<any>(required)]);
const updatedState = updateFn(state);
```
 */
export declare function updateRecursive(updateFnArr: ProjectFn2<AbstractControlState<any>, AbstractControlState<any>>[]): <TValue>(state: AbstractControlState<TValue>) => FormState<TValue>;
