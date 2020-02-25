import * as tslib_1 from "tslib";
import { Directive, ElementRef, Host, Input, Optional, Renderer2, } from '@angular/core';
import { NgrxSelectViewAdapter } from './select';
import { NgrxSelectMultipleViewAdapter } from './select-multiple';
const ɵ0 = () => void 0;
// tslint:disable:directive-class-suffix
const NULL_RENDERER = {
    setProperty: ɵ0,
};
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
let NgrxFallbackSelectOption = class NgrxFallbackSelectOption {
    constructor(element, renderer, viewAdapter, multipleViewAdapter) {
        this.element = element;
        this.renderer = renderer;
        this.renderer = viewAdapter || multipleViewAdapter ? NULL_RENDERER : renderer;
    }
    set value(value) {
        this.renderer.setProperty(this.element.nativeElement, 'value', value);
    }
};
tslib_1.__decorate([
    Input('value'),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], NgrxFallbackSelectOption.prototype, "value", null);
NgrxFallbackSelectOption = tslib_1.__decorate([
    Directive({
        // tslint:disable-next-line:directive-selector
        selector: 'option',
    }),
    tslib_1.__param(2, Host()), tslib_1.__param(2, Optional()),
    tslib_1.__param(3, Host()), tslib_1.__param(3, Optional()),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        Renderer2,
        NgrxSelectViewAdapter,
        NgrxSelectMultipleViewAdapter])
], NgrxFallbackSelectOption);
export { NgrxFallbackSelectOption };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy92aWV3LWFkYXB0ZXIvb3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2pELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO1dBS25ELEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztBQUgzQix3Q0FBd0M7QUFFeEMsTUFBTSxhQUFhLEdBQWM7SUFDL0IsV0FBVyxJQUFjO0NBQ25CLENBQUM7QUFFVDs7Ozs7Ozs7OztHQVVHO0FBS0gsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFDbkMsWUFDVSxPQUFtQixFQUNuQixRQUFtQixFQUNQLFdBQWtDLEVBQ2xDLG1CQUFrRDtRQUg5RCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFJM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLElBQUksbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ2hGLENBQUM7SUFHRCxJQUFJLEtBQUssQ0FBQyxLQUFVO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RSxDQUFDO0NBQ0YsQ0FBQTtBQUhDO0lBREMsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7O3FEQUdkO0FBYlUsd0JBQXdCO0lBSnBDLFNBQVMsQ0FBQztRQUNULDhDQUE4QztRQUM5QyxRQUFRLEVBQUUsUUFBUTtLQUNuQixDQUFDO0lBS0csbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtJQUNsQixtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBOzZDQUhGLFVBQVU7UUFDVCxTQUFTO1FBQ00scUJBQXFCO1FBQ2IsNkJBQTZCO0dBTDdELHdCQUF3QixDQWNwQztTQWRZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3J4U2VsZWN0Vmlld0FkYXB0ZXIgfSBmcm9tICcuL3NlbGVjdCc7XG5pbXBvcnQgeyBOZ3J4U2VsZWN0TXVsdGlwbGVWaWV3QWRhcHRlciB9IGZyb20gJy4vc2VsZWN0LW11bHRpcGxlJztcblxuLy8gdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxuXG5jb25zdCBOVUxMX1JFTkRFUkVSOiBSZW5kZXJlcjIgPSB7XG4gIHNldFByb3BlcnR5OiAoKSA9PiB2b2lkIDAsXG59IGFzIGFueTtcblxuLyoqXG4gKiBUaGlzIGRpcmVjdGl2ZSBpcyBuZWNlc3NhcnkgdG8gcmVzdG9yZSB0aGUgZGVmYXVsdCBiZWhhdmlvdXIgb2YgQW5ndWxhclxuICogd2hlbiBhbiBgb3B0aW9uYCBpcyB1c2VkIHdpdGhvdXQgYW4gKipuZ3J4LWZvcm1zKiogZm9ybSBzdGF0ZS4gU2luY2UgaXRcbiAqIGlzIG5vdCBwb3NzaWJsZSB0byBzZWxlY3QgYW4gZWxlbWVudCB3aXRoIGEgc2VsZWN0b3IgdGhhdCBjb25zaWRlcnMgaXRzXG4gKiBwYXJlbnQgdGhlIGBvcHRpb25gIGRpcmVjdGl2ZXMgZm9yIGBzZWxlY3RgIGFuZCBgc2VsZWN0W211bHRpcGxlXWAgd2lsbFxuICogYWx3YXlzIGJlIGFwcGxpZWQgYW5kIHRoZXJlZm9yZSBvdmVycmlkaW5nIHRoZSBgW3ZhbHVlXWAgYmluZGluZyB3aGljaFxuICogZGlzYWJsZWQgQW5ndWxhcidzIG5vcm1hbCBiZWhhdmlvdXIuIFRoaXMgZGlyZWN0aXZlIHJlc3RvcmVzIHRoaXNcbiAqIGJlaGF2aW91ciBpZiBubyBgc2VsZWN0YCBvciBgc2VsZWN0W211bHRpcGxlXWAgdmlldyBhZGFwdGVyIGlzIGZvdW5kLlxuICogVGhpcyBpcyBub3QgYSBwZXJmZWN0IHNvbHV0aW9uIHNpbmNlIGl0IG1heSBpbnRlcmZlcmUgd2l0aCBvdGhlclxuICogZGlyZWN0aXZlcyB0aGF0IHRyeSB0byBzZXQgdGhlIGBbdmFsdWVdYCBidXQgdGhhdCBpcyB2ZXJ5IHVubGlrZWx5LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ29wdGlvbicsXG59KVxuZXhwb3J0IGNsYXNzIE5ncnhGYWxsYmFja1NlbGVjdE9wdGlvbiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSB2aWV3QWRhcHRlcjogTmdyeFNlbGVjdFZpZXdBZGFwdGVyLFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgbXVsdGlwbGVWaWV3QWRhcHRlcjogTmdyeFNlbGVjdE11bHRpcGxlVmlld0FkYXB0ZXIsXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIgPSB2aWV3QWRhcHRlciB8fCBtdWx0aXBsZVZpZXdBZGFwdGVyID8gTlVMTF9SRU5ERVJFUiA6IHJlbmRlcmVyO1xuICB9XG5cbiAgQElucHV0KCd2YWx1ZScpXG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdmFsdWUpO1xuICB9XG59XG4iXX0=