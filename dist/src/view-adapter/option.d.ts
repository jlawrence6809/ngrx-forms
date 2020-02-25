import { ElementRef, Renderer2 } from '@angular/core';
import { NgrxSelectViewAdapter } from './select';
import { NgrxSelectMultipleViewAdapter } from './select-multiple';
/**
 * This directive is necessary to restore the default behaviour of Angular
 * when an `option` is used without an **ngrx-forms** form state. Since it
 * is not possible to select an element with a selector that considers its
 * parent the `option` directives for `select` and `select[multiple]` will
 * always be applied and therefore overriding the `[value]` binding which
 * disabled Angular's normal behaviour. This directive restores this
 * behaviour if no `select` or `select[multiple]` view adapter is found.
 * This is not a perfect solution since it may interfere with other
 * directives that try to set the `[value]` but that is very unlikely.
 */
export declare class NgrxFallbackSelectOption {
    private element;
    private renderer;
    constructor(element: ElementRef, renderer: Renderer2, viewAdapter: NgrxSelectViewAdapter, multipleViewAdapter: NgrxSelectMultipleViewAdapter);
    value: any;
}
