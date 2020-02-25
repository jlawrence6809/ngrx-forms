import { FormArrayState, FormState } from '../state';
import { ProjectFn2 } from './util';
export declare type FilterFn<TValue> = (s: FormState<TValue>, idx: number) => boolean;
/**
 * This update function takes a filter function and one or more update functions
 * and returns a projection function that applies all update functions one after
 * another to each element of the form array state for which the filter function
 * returns `true`.
 *
 * The following (contrived) example uses this function to validate all its
 * children to be required and mark them as dirty.
 *
```typescript
const arrayUpdateFn = updateArray<string>(
  (_, idx) => idx > 0,
  validate(required),
  markAsDirty,
);
const updatedState = arrayUpdateFn(state);
```
 */
export declare function updateArrayWithFilter<TValue>(filterFn: FilterFn<TValue>, updateFn: ProjectFn2<FormState<TValue>, FormArrayState<TValue>>, ...updateFnArr: ProjectFn2<FormState<TValue>, FormArrayState<TValue>>[]): (state: FormArrayState<TValue>) => FormArrayState<TValue>;
/**
 * This update function takes a filter function and an array of update functions
 * and returns a projection function that applies all update functions one after
 * another to each element of the form array state for which the filter function
 * returns `true`.
 *
 * The following (contrived) example uses this function to validate all its
 * children to be required and mark them as dirty.
 *
```typescript
const arrayUpdateFn = updateArray<string>(
  (_, idx) => idx > 0,
  [
    validate(required),
    markAsDirty,
  ],
);
const updatedState = arrayUpdateFn(state);
```
 */
export declare function updateArrayWithFilter<TValue>(filterFn: FilterFn<TValue>, updateFnArr: ProjectFn2<FormState<TValue>, FormArrayState<TValue>>[]): (state: FormArrayState<TValue>) => FormArrayState<TValue>;
/**
 * This update function takes a form array state, a filter function, and a variable
 * number of update functions and applies all update functions one after another to
 * each element of the form array state for which the filter function returns `true`.
 *
 * The following (contrived) example uses this function to validate all its
 * children to be required and mark them as dirty.
 *
```typescript
const updatedState = updateArray<string>(
  state,
  (_, idx) => idx > 0,
  validate(required),
  markAsDirty,
);
```
 */
export declare function updateArrayWithFilter<TValue>(state: FormArrayState<TValue>, filterFn: FilterFn<TValue>, updateFn: ProjectFn2<FormState<TValue>, FormArrayState<TValue>>, ...updateFnArr: ProjectFn2<FormState<TValue>, FormArrayState<TValue>>[]): FormArrayState<TValue>;
/**
 * This update function takes a form array state, a filter function, and an array of
 * update functions and applies all update functions one after another to each
 * element of the form array state for which the filter function returns `true`.
 *
 * The following (contrived) example uses this function to validate all its
 * children to be required and mark them as dirty.
 *
```typescript
const updatedState = updateArray<string>(
  state,
  (_, idx) => idx > 0,
  [
    validate(required),
    markAsDirty,
  ],
);
```
 */
export declare function updateArrayWithFilter<TValue>(state: FormArrayState<TValue>, filterFn: FilterFn<TValue>, updateFnArr: ProjectFn2<FormState<TValue>, FormArrayState<TValue>>[]): FormArrayState<TValue>;
/**
 * This update function takes one or more update functions and returns a
 * projection function that applies all update functions one after another to
 * each element of the form array state.
 *
 * The following (contrived) example uses this function to validate all its
 * children to be required and mark them as dirty.
 *
```typescript
const arrayUpdateFn = updateArray<string>(
  validate<string>(required),
  markAsDirty,
);
const updatedState = arrayUpdateFn(state);
```
 */
export declare function updateArray<TValue>(updateFn: ProjectFn2<FormState<TValue>, FormArrayState<TValue>>, ...updateFnArr: ProjectFn2<FormState<TValue>, FormArrayState<TValue>>[]): (state: FormArrayState<TValue>) => FormArrayState<TValue>;
/**
 * This update function takes an array of update functions and returns
 * a projection function that applies all update functions one after another to
 * each element of the form array state.
 *
 * The following (contrived) example uses this function to validate all its
 * children to be required and mark them as dirty.
 *
```typescript
const arrayUpdateFn = updateArray<string>([
  validate<string>(required),
  markAsDirty,
]);
const updatedState = arrayUpdateFn(state);
```
 */
export declare function updateArray<TValue>(updateFnArr: ProjectFn2<FormState<TValue>, FormArrayState<TValue>>[]): (state: FormArrayState<TValue>) => FormArrayState<TValue>;
/**
 * This update function takes a form array state and one or more update functions
 * and applies all update functions one after another to each element of the form
 * array state.
 *
 * The following (contrived) example uses this function to validate all its
 * children to be required and mark them as dirty.
 *
```typescript
const updatedState = updateArray<string>(
  state,
  validate<string>(required),
  markAsDirty,
);
```
 */
export declare function updateArray<TValue>(state: FormArrayState<TValue>, updateFn: ProjectFn2<FormState<TValue>, FormArrayState<TValue>>, ...updateFnArr: ProjectFn2<FormState<TValue>, FormArrayState<TValue>>[]): FormArrayState<TValue>;
/**
 * This update function takes a form array state and an array of update
 * functions and applies all update functions one after another to each element
 * of the form array state.
 *
 * The following (contrived) example uses this function to validate all its
 * children to be required and mark them as dirty.
 *
```typescript
const updatedState = updateArray<string>(
  state,
  [
    validate<string>(required),
    markAsDirty,
  ],
);
```
 */
export declare function updateArray<TValue>(state: FormArrayState<TValue>, updateFnArr: ProjectFn2<FormState<TValue>, FormArrayState<TValue>>[]): FormArrayState<TValue>;
