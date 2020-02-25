import { Action } from '@ngrx/store';
import { AbstractControlState } from '../state';
export declare type ProjectFn<T> = (t: T) => T;
export declare type ProjectFn2<T, K> = (t: T, k: K) => T;
export declare function abstractControlReducer<TValue>(state: AbstractControlState<TValue>, action: Action): AbstractControlState<TValue>;
export declare function compose<T>(...fns: ((t: T) => T)[]): (t: T) => T;
export declare function ensureState<TState>(state: TState | undefined): TState;
