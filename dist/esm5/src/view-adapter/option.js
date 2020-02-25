import * as tslib_1 from "tslib";
import { Directive, ElementRef, Host, Input, Optional, Renderer2, } from '@angular/core';
import { NgrxSelectViewAdapter } from './select';
import { NgrxSelectMultipleViewAdapter } from './select-multiple';
var ɵ0 = function () { return void 0; };
// tslint:disable:directive-class-suffix
var NULL_RENDERER = {
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
var NgrxFallbackSelectOption = /** @class */ (function () {
    function NgrxFallbackSelectOption(element, renderer, viewAdapter, multipleViewAdapter) {
        this.element = element;
        this.renderer = renderer;
        this.renderer = viewAdapter || multipleViewAdapter ? NULL_RENDERER : renderer;
    }
    Object.defineProperty(NgrxFallbackSelectOption.prototype, "value", {
        set: function (value) {
            this.renderer.setProperty(this.element.nativeElement, 'value', value);
        },
        enumerable: true,
        configurable: true
    });
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
    return NgrxFallbackSelectOption;
}());
export { NgrxFallbackSelectOption };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy92aWV3LWFkYXB0ZXIvb3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2pELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO1NBS25ELGNBQU0sT0FBQSxLQUFLLENBQUMsRUFBTixDQUFNO0FBSDNCLHdDQUF3QztBQUV4QyxJQUFNLGFBQWEsR0FBYztJQUMvQixXQUFXLElBQWM7Q0FDbkIsQ0FBQztBQUVUOzs7Ozs7Ozs7O0dBVUc7QUFLSDtJQUNFLGtDQUNVLE9BQW1CLEVBQ25CLFFBQW1CLEVBQ1AsV0FBa0MsRUFDbEMsbUJBQWtEO1FBSDlELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUkzQixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsSUFBSSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDaEYsQ0FBQztJQUdELHNCQUFJLDJDQUFLO2FBQVQsVUFBVSxLQUFVO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RSxDQUFDOzs7T0FBQTtJQUZEO1FBREMsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7O3lEQUdkO0lBYlUsd0JBQXdCO1FBSnBDLFNBQVMsQ0FBQztZQUNULDhDQUE4QztZQUM5QyxRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDO1FBS0csbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtRQUNsQixtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUhGLFVBQVU7WUFDVCxTQUFTO1lBQ00scUJBQXFCO1lBQ2IsNkJBQTZCO09BTDdELHdCQUF3QixDQWNwQztJQUFELCtCQUFDO0NBQUEsQUFkRCxJQWNDO1NBZFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5ncnhTZWxlY3RWaWV3QWRhcHRlciB9IGZyb20gJy4vc2VsZWN0JztcbmltcG9ydCB7IE5ncnhTZWxlY3RNdWx0aXBsZVZpZXdBZGFwdGVyIH0gZnJvbSAnLi9zZWxlY3QtbXVsdGlwbGUnO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpkaXJlY3RpdmUtY2xhc3Mtc3VmZml4XG5cbmNvbnN0IE5VTExfUkVOREVSRVI6IFJlbmRlcmVyMiA9IHtcbiAgc2V0UHJvcGVydHk6ICgpID0+IHZvaWQgMCxcbn0gYXMgYW55O1xuXG4vKipcbiAqIFRoaXMgZGlyZWN0aXZlIGlzIG5lY2Vzc2FyeSB0byByZXN0b3JlIHRoZSBkZWZhdWx0IGJlaGF2aW91ciBvZiBBbmd1bGFyXG4gKiB3aGVuIGFuIGBvcHRpb25gIGlzIHVzZWQgd2l0aG91dCBhbiAqKm5ncngtZm9ybXMqKiBmb3JtIHN0YXRlLiBTaW5jZSBpdFxuICogaXMgbm90IHBvc3NpYmxlIHRvIHNlbGVjdCBhbiBlbGVtZW50IHdpdGggYSBzZWxlY3RvciB0aGF0IGNvbnNpZGVycyBpdHNcbiAqIHBhcmVudCB0aGUgYG9wdGlvbmAgZGlyZWN0aXZlcyBmb3IgYHNlbGVjdGAgYW5kIGBzZWxlY3RbbXVsdGlwbGVdYCB3aWxsXG4gKiBhbHdheXMgYmUgYXBwbGllZCBhbmQgdGhlcmVmb3JlIG92ZXJyaWRpbmcgdGhlIGBbdmFsdWVdYCBiaW5kaW5nIHdoaWNoXG4gKiBkaXNhYmxlZCBBbmd1bGFyJ3Mgbm9ybWFsIGJlaGF2aW91ci4gVGhpcyBkaXJlY3RpdmUgcmVzdG9yZXMgdGhpc1xuICogYmVoYXZpb3VyIGlmIG5vIGBzZWxlY3RgIG9yIGBzZWxlY3RbbXVsdGlwbGVdYCB2aWV3IGFkYXB0ZXIgaXMgZm91bmQuXG4gKiBUaGlzIGlzIG5vdCBhIHBlcmZlY3Qgc29sdXRpb24gc2luY2UgaXQgbWF5IGludGVyZmVyZSB3aXRoIG90aGVyXG4gKiBkaXJlY3RpdmVzIHRoYXQgdHJ5IHRvIHNldCB0aGUgYFt2YWx1ZV1gIGJ1dCB0aGF0IGlzIHZlcnkgdW5saWtlbHkuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnb3B0aW9uJyxcbn0pXG5leHBvcnQgY2xhc3MgTmdyeEZhbGxiYWNrU2VsZWN0T3B0aW9uIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHZpZXdBZGFwdGVyOiBOZ3J4U2VsZWN0Vmlld0FkYXB0ZXIsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBtdWx0aXBsZVZpZXdBZGFwdGVyOiBOZ3J4U2VsZWN0TXVsdGlwbGVWaWV3QWRhcHRlcixcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHZpZXdBZGFwdGVyIHx8IG11bHRpcGxlVmlld0FkYXB0ZXIgPyBOVUxMX1JFTkRFUkVSIDogcmVuZGVyZXI7XG4gIH1cblxuICBASW5wdXQoJ3ZhbHVlJylcbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCB2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==