import { Boxed } from '../boxing';
export interface NgrxValueConverter<TView, TState> {
    convertViewToStateValue(value: TView): TState;
    convertStateToViewValue(value: TState): TView;
}
export declare const NgrxValueConverters: {
    default<T>(): NgrxValueConverter<T, T | Boxed<T>>;
    dateToISOString: NgrxValueConverter<Date | null, string | null>;
    objectToJSON: NgrxValueConverter<{} | null, string | null>;
};
