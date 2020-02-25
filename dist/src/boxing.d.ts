export interface Boxed<T> {
    __boxed: '';
    value: T;
}
export declare type UnboxedObject<T> = {
    [prop in keyof T]: Unboxed<T[prop]>;
};
export declare type Unboxed<T> = T extends Boxed<symbol> ? any : T extends Boxed<infer U> ? U : T extends symbol[] ? any : T extends symbol ? any : T extends undefined ? undefined : T extends null ? null : T extends string ? string : T extends number ? number : T extends boolean ? boolean : UnboxedObject<T>;
export declare function isBoxed<T = any>(value: any): value is Boxed<T>;
export declare function box<T>(value: T): Boxed<T>;
export declare function unbox<T>(value: T): Unboxed<T>;
