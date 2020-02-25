import { OnInit } from '@angular/core';
import { ActionsSubject } from '@ngrx/store';
import { Actions } from '../actions';
import { FormGroupState } from '../state';
interface CustomEvent extends Event {
}
export declare class NgrxFormDirective<TValue extends {
    [key: string]: any;
}> implements OnInit {
    private actionsSubject;
    state: FormGroupState<TValue>;
    constructor(actionsSubject: ActionsSubject | null);
    protected dispatchAction(action: Actions<TValue>): void;
    ngOnInit(): void;
    onSubmit(event: CustomEvent): void;
}
export {};
