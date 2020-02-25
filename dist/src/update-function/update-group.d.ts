import { FormGroupState, FormState, KeyValue } from '../state';
import { ProjectFn2 } from './util';
export declare type StateUpdateFns<TValue extends KeyValue> = {
    [controlId in keyof TValue]?: ProjectFn2<FormState<TValue[controlId]>, FormGroupState<TValue>>;
};
/**
 * This update function takes one or more update function objects and returns
 * a projection function that applies all objects one after another to a form
 * group state.
 *
 * The following (contrived) example uses this function to validate the child
 * control `name` to be required and set the child control `email`'s value to
 * be `''` if the name is invalid.
 *
```typescript
interface FormValue {
  name: string;
  email: string;
}

const groupUpdateFn = updateGroup<FormValue>(
  {
    name: validate<string>(required),
  },
  {
    email: (email, parentGroup) =>
      parentGroup.controls.name.isInvalid
        ? setValue('', email)
        : email,
  },
);
const updatedState = groupUpdateFn(state);
```
 */
export declare function updateGroup<TValue>(updateFn: StateUpdateFns<TValue>, ...updateFnsArr: StateUpdateFns<TValue>[]): (state: FormGroupState<TValue>) => FormGroupState<TValue>;
/**
 * This update function takes an array of update function objects and
 * returns a projection function that applies all objects one after another to
 * a form group state.
 *
 * The following (contrived) example uses this function to validate the child
 * control `name` to be required and set the child control `email`'s value to
 * be `''` if the name is invalid.
 *
```typescript
interface FormValue {
  name: string;
  email: string;
}

const groupUpdateFn = updateGroup<FormValue>(
  [
    {
      name: validate<string>(required),
    },
    {
      email: (email, parentGroup) =>
        parentGroup.controls.name.isInvalid
          ? setValue('', email)
          : email,
    },
  ],
);
const updatedState = groupUpdateFn(state);
```
 */
export declare function updateGroup<TValue>(updateFnsArr: StateUpdateFns<TValue>[]): (state: FormGroupState<TValue>) => FormGroupState<TValue>;
/**
 * This update function takes a form group state and one or more update
 * function objects and applies all objects one after another to the state.
 * Providing multiple update function objects is mainly useful if the result
 * of a later object depends on the result of previous objects.
 *
 * The following (contrived) example uses this function to validate the child
 * control `name` to be required and set the child control `email`'s value to
 * be `''` if the name is invalid.
 *
```typescript
interface FormValue {
  name: string;
  email: string;
}

const updatedState = updateGroup<FormValue>(
  state,
  {
    name: validate<string>(required),
  },
  {
    email: (email, parentGroup) =>
      parentGroup.controls.name.isInvalid
        ? setValue('', email)
        : email,
  },
);
```
 */
export declare function updateGroup<TValue>(state: FormGroupState<TValue>, updateFn: StateUpdateFns<TValue>, ...updateFnsArr: StateUpdateFns<TValue>[]): FormGroupState<TValue>;
/**
 * This update function takes a form group state and an array of update
 * function objects and applies all objects one after another to the state.
 * Providing multiple update function objects is mainly useful if the result
 * of a later object depends on the result of previous objects.
 *
 * The following (contrived) example uses this function to validate the child
 * control `name` to be required and set the child control `email`'s value to
 * be `''` if the name is invalid.
 *
```typescript
interface FormValue {
  name: string;
  email: string;
}

const updatedState = updateGroup<FormValue>(
  state,
  [
    {
      name: validate<string>(required),
    },
    {
      email: (email, parentGroup) =>
        parentGroup.controls.name.isInvalid
          ? setValue('', email)
          : email,
    },
  ],
);
```
 */
export declare function updateGroup<TValue>(state: FormGroupState<TValue>, updateFnsArr: StateUpdateFns<TValue>[]): FormGroupState<TValue>;
