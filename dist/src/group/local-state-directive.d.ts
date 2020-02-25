import { EventEmitter } from '@angular/core';
import { Actions } from '../actions';
import { NgrxFormDirective } from './directive';
export declare class NgrxLocalFormDirective<TValue extends {
    [key: string]: any;
}> extends NgrxFormDirective<TValue> {
    ngrxFormsAction: EventEmitter<Actions<TValue>>;
    constructor();
    protected dispatchAction(action: Actions<TValue>): void;
}
