import { Action, ActionReducer } from '@ngrx/store';
import { Actions } from './actions';
import { AbstractControlState, FormState } from './state';
import { ProjectFn } from './update-function/util';
export declare function formStateReducer<TValue>(state: FormState<TValue> | AbstractControlState<TValue> | undefined, action: Action): FormState<TValue>;
/**
 * This function creates a reducer function that first applies an action to the state
 * and afterwards applies all given update functions one after another to the resulting
 * form state. However, the update functions are only applied if the form state changed
 * as result of applying the action. If you need the update functions to be applied
 * regardless of whether the state changed (e.g. because the update function closes
 * over variables that may change independently of the form state) you can simply apply
 * the update manually (e.g. `updateFunction(formStateReducer(state, action))`).
 *
 * The following (contrived) example uses this function to create a reducer that after
 * each action validates the child control `name` to be required and sets the child
 * control `email`'s value to be `''` if the name is invalid.
 *
```typescript
interface FormValue {
  name: string;
  email: string;
}

const updateFormState = updateGroup<FormValue>(
  {
    name: validate(required),
  },
  {
    email: (email, parentGroup) =>
      parentGroup.controls.name.isInvalid
        ? setValue('', email)
        : email,
  },
);

const reducer = createFormStateReducerWithUpdate<FormValue>(updateFormState);
```
 */
export declare function createFormStateReducerWithUpdate<TValue>(updateFnOrUpdateFnArr: ProjectFn<FormState<TValue>> | ProjectFn<FormState<TValue>>[], ...updateFnArr: ProjectFn<FormState<TValue>>[]): ActionReducer<FormState<TValue>>;
/**
 * This function returns an object that can be passed to ngrx's `createReducer`
 * function (available starting with ngrx version 8). By doing this all form
 * state properties on the state will be updated whenever necessary (i.e.
 * whenever an ngrx-forms action is dispatched).
 *
 * To manually update a form state (e.g. to validate it) use
 * `wrapReducerWithFormStateUpdate`.
 */
export declare function onNgrxForms<TState = any>(): {
    reducer: ActionReducer<TState>;
    types: string[];
};
export interface ActionConstructor {
    new (...args: any[]): Actions<any>;
    readonly TYPE: string;
}
export declare type CreatedAction<TActionCons> = TActionCons extends new (...args: any[]) => infer TAction ? TAction : never;
/**
 * Define a reducer for a ngrx-forms action. This functions works the same as
 * ngrx's `on` except that you provide the ngrx-forms action class instead of
 * your action creator as a parameter.
 */
export declare function onNgrxFormsAction<TActionCons extends ActionConstructor, TState>(actionCons: TActionCons, reducer: (state: TState, action: CreatedAction<TActionCons>) => TState): {
    reducer: ActionReducer<TState>;
    types: string[];
};
/**
 * This function wraps a reducer and returns another reducer that first calls
 * the given reducer and then calls the given update function for the form state
 * that is specified by the form state locator function.
 *
 * The update function is passed the form state and the updated containing state
 * as parameters.
 */
export declare function wrapReducerWithFormStateUpdate<TState, TFormState extends AbstractControlState<any>>(reducer: ActionReducer<TState>, formStateLocator: (state: TState) => TFormState, updateFn: (formState: TFormState, state: TState) => TFormState): ActionReducer<TState>;
