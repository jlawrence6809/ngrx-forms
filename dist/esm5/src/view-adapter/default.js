import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, forwardRef, HostListener, Inject, Input, Optional, PLATFORM_ID, Renderer2 } from '@angular/core';
import { NGRX_FORM_VIEW_ADAPTER } from './view-adapter';
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function isAndroid(navigator) {
    return /android (\d+)/.test(navigator.userAgent.toLowerCase());
}
// tslint:disable:directive-class-suffix
// tslint:disable:directive-selector
// TODO: since this directive has a side-effect (setting the element's id attribute)
// it should not blacklist other types of inputs but instead it should somehow figure
// out whether it is the "active" view adapter and only perform its side effects if it
// is active
var NgrxDefaultViewAdapter = /** @class */ (function () {
    function NgrxDefaultViewAdapter(renderer, elementRef, platformId, 
    // we use a special injection string that should never exist at runtime to allow mocking this dependency for testing
    navigator) {
        if (platformId === void 0) { platformId = null; }
        if (navigator === void 0) { navigator = null; }
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.platformId = platformId;
        this.nativeIdWasSet = false;
        this.onChange = function () { return void 0; };
        this.onTouched = function () { return void 0; };
        /** Whether the user is creating a composition string (IME events). */
        this.isComposing = false;
        this.isCompositionSupported = isPlatformBrowser(this.platformId || '') && !isAndroid(navigator || window.navigator);
    }
    NgrxDefaultViewAdapter_1 = NgrxDefaultViewAdapter;
    Object.defineProperty(NgrxDefaultViewAdapter.prototype, "ngrxFormControlState", {
        set: function (value) {
            if (!value) {
                throw new Error('The control state must not be undefined!');
            }
            this.state = value;
            var nativeId = this.elementRef.nativeElement.id;
            var shouldSetNativeId = value.id !== nativeId && this.nativeIdWasSet;
            if (shouldSetNativeId) {
                this.renderer.setProperty(this.elementRef.nativeElement, 'id', value.id);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgrxDefaultViewAdapter.prototype.ngAfterViewInit = function () {
        var nativeId = this.elementRef.nativeElement.id;
        var shouldSetNativeId = this.state.id !== nativeId && !nativeId;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', this.state.id);
            this.nativeIdWasSet = true;
        }
    };
    NgrxDefaultViewAdapter.prototype.setViewValue = function (value) {
        var normalizedValue = value == null ? '' : value;
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
    };
    NgrxDefaultViewAdapter.prototype.setOnChangeCallback = function (fn) {
        this.onChange = fn;
    };
    NgrxDefaultViewAdapter.prototype.setOnTouchedCallback = function (fn) {
        this.onTouched = fn;
    };
    NgrxDefaultViewAdapter.prototype.setIsDisabled = function (isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    };
    NgrxDefaultViewAdapter.prototype.handleInput = function (_a) {
        var target = _a.target;
        if (this.isCompositionSupported && this.isComposing) {
            return;
        }
        this.onChange(target.value);
    };
    NgrxDefaultViewAdapter.prototype.compositionStart = function () {
        this.isComposing = true;
    };
    NgrxDefaultViewAdapter.prototype.compositionEnd = function (_a) {
        var target = _a.target;
        this.isComposing = false;
        if (this.isCompositionSupported) {
            this.onChange(target.value);
        }
    };
    var NgrxDefaultViewAdapter_1;
    tslib_1.__decorate([
        HostListener('blur'),
        tslib_1.__metadata("design:type", Function)
    ], NgrxDefaultViewAdapter.prototype, "onTouched", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], NgrxDefaultViewAdapter.prototype, "ngrxFormControlState", null);
    tslib_1.__decorate([
        HostListener('input', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NgrxDefaultViewAdapter.prototype, "handleInput", null);
    tslib_1.__decorate([
        HostListener('compositionstart'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], NgrxDefaultViewAdapter.prototype, "compositionStart", null);
    tslib_1.__decorate([
        HostListener('compositionend', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NgrxDefaultViewAdapter.prototype, "compositionEnd", null);
    NgrxDefaultViewAdapter = NgrxDefaultViewAdapter_1 = tslib_1.__decorate([
        Directive({
            selector: 'input:not([type=checkbox]):not([type=number]):not([type=radio]):not([type=range])[ngrxFormControlState],textarea[ngrxFormControlState]',
            providers: [{
                    provide: NGRX_FORM_VIEW_ADAPTER,
                    useExisting: forwardRef(function () { return NgrxDefaultViewAdapter_1; }),
                    multi: true,
                }],
        }),
        tslib_1.__param(2, Optional()), tslib_1.__param(2, Inject(PLATFORM_ID)),
        tslib_1.__param(3, Optional()), tslib_1.__param(3, Inject('ngrx-forms/never')),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            ElementRef, Object, Object])
    ], NgrxDefaultViewAdapter);
    return NgrxDefaultViewAdapter;
}());
export { NgrxDefaultViewAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvdmlldy1hZGFwdGVyL2RlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHaEosT0FBTyxFQUFtQixzQkFBc0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTXpFOzs7R0FHRztBQUNILFNBQVMsU0FBUyxDQUFDLFNBQW9CO0lBQ3JDLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDakUsQ0FBQztBQUVELHdDQUF3QztBQUN4QyxvQ0FBb0M7QUFFcEMsb0ZBQW9GO0FBQ3BGLHFGQUFxRjtBQUNyRixzRkFBc0Y7QUFDdEYsWUFBWTtBQVNaO0lBMEJFLGdDQUNVLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ1csVUFBZ0M7SUFDekUsb0hBQW9IO0lBQzVFLFNBQWtDO1FBRmpDLDJCQUFBLEVBQUEsaUJBQWdDO1FBRWpDLDBCQUFBLEVBQUEsZ0JBQWtDO1FBSmxFLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNXLGVBQVUsR0FBVixVQUFVLENBQXNCO1FBM0JuRSxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUUvQixhQUFRLEdBQXlCLGNBQU0sT0FBQSxLQUFLLENBQUMsRUFBTixDQUFNLENBQUM7UUFHOUMsY0FBUyxHQUFlLGNBQU0sT0FBQSxLQUFLLENBQUMsRUFBTixDQUFNLENBQUE7UUFlcEMsc0VBQXNFO1FBQzlELGdCQUFXLEdBQUcsS0FB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Q0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7SUEzRUQ7UUFEQyxZQUFZLENBQUMsTUFBTSxDQUFDOzs2REFDZTtJQUUzQjtRQUFSLEtBQUssRUFBRTs7O3NFQVdQO0lBMkNEO1FBREMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OzZEQU9qQztJQUdEO1FBREMsWUFBWSxDQUFDLGtCQUFrQixDQUFDOzs7O2tFQUdoQztJQUdEO1FBREMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7Z0VBTTFDO0lBbEZVLHNCQUFzQjtRQVJsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0lBQXdJO1lBQ2xKLFNBQVMsRUFBRSxDQUFDO29CQUNWLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHdCQUFzQixFQUF0QixDQUFzQixDQUFDO29CQUNyRCxLQUFLLEVBQUUsSUFBSTtpQkFDWixDQUFDO1NBQ0gsQ0FBQztRQThCRyxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUUvQixtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO2lEQUpyQixTQUFTO1lBQ1AsVUFBVTtPQTVCckIsc0JBQXNCLENBbUZsQztJQUFELDZCQUFDO0NBQUEsQUFuRkQsSUFtRkM7U0FuRlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBIb3N0TGlzdGVuZXIsIEluamVjdCwgSW5wdXQsIE9wdGlvbmFsLCBQTEFURk9STV9JRCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1Db250cm9sU3RhdGUgfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgeyBGb3JtVmlld0FkYXB0ZXIsIE5HUlhfRk9STV9WSUVXX0FEQVBURVIgfSBmcm9tICcuL3ZpZXctYWRhcHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdG9yIHtcbiAgdXNlckFnZW50OiBzdHJpbmc7XG59XG5cbi8qKlxuICogV2UgbXVzdCBjaGVjayB3aGV0aGVyIHRoZSBhZ2VudCBpcyBBbmRyb2lkIGJlY2F1c2UgY29tcG9zaXRpb24gZXZlbnRzXG4gKiBiZWhhdmUgZGlmZmVyZW50bHkgYmV0d2VlbiBpT1MgYW5kIEFuZHJvaWQuXG4gKi9cbmZ1bmN0aW9uIGlzQW5kcm9pZChuYXZpZ2F0b3I6IE5hdmlnYXRvcik6IGJvb2xlYW4ge1xuICByZXR1cm4gL2FuZHJvaWQgKFxcZCspLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcbi8vIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1zZWxlY3RvclxuXG4vLyBUT0RPOiBzaW5jZSB0aGlzIGRpcmVjdGl2ZSBoYXMgYSBzaWRlLWVmZmVjdCAoc2V0dGluZyB0aGUgZWxlbWVudCdzIGlkIGF0dHJpYnV0ZSlcbi8vIGl0IHNob3VsZCBub3QgYmxhY2tsaXN0IG90aGVyIHR5cGVzIG9mIGlucHV0cyBidXQgaW5zdGVhZCBpdCBzaG91bGQgc29tZWhvdyBmaWd1cmVcbi8vIG91dCB3aGV0aGVyIGl0IGlzIHRoZSBcImFjdGl2ZVwiIHZpZXcgYWRhcHRlciBhbmQgb25seSBwZXJmb3JtIGl0cyBzaWRlIGVmZmVjdHMgaWYgaXRcbi8vIGlzIGFjdGl2ZVxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXQ6bm90KFt0eXBlPWNoZWNrYm94XSk6bm90KFt0eXBlPW51bWJlcl0pOm5vdChbdHlwZT1yYWRpb10pOm5vdChbdHlwZT1yYW5nZV0pW25ncnhGb3JtQ29udHJvbFN0YXRlXSx0ZXh0YXJlYVtuZ3J4Rm9ybUNvbnRyb2xTdGF0ZV0nLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdSWF9GT1JNX1ZJRVdfQURBUFRFUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ3J4RGVmYXVsdFZpZXdBZGFwdGVyKSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5ncnhEZWZhdWx0Vmlld0FkYXB0ZXIgaW1wbGVtZW50cyBGb3JtVmlld0FkYXB0ZXIsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIHN0YXRlOiBGb3JtQ29udHJvbFN0YXRlPGFueT47XG4gIHByaXZhdGUgbmF0aXZlSWRXYXNTZXQgPSBmYWxzZTtcblxuICBvbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDA7XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMFxuXG4gIEBJbnB1dCgpIHNldCBuZ3J4Rm9ybUNvbnRyb2xTdGF0ZSh2YWx1ZTogRm9ybUNvbnRyb2xTdGF0ZTxhbnk+KSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgY29udHJvbCBzdGF0ZSBtdXN0IG5vdCBiZSB1bmRlZmluZWQhJyk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHZhbHVlO1xuICAgIGNvbnN0IG5hdGl2ZUlkID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaWQ7XG4gICAgY29uc3Qgc2hvdWxkU2V0TmF0aXZlSWQgPSB2YWx1ZS5pZCAhPT0gbmF0aXZlSWQgJiYgdGhpcy5uYXRpdmVJZFdhc1NldDtcbiAgICBpZiAoc2hvdWxkU2V0TmF0aXZlSWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdpZCcsIHZhbHVlLmlkKTtcbiAgICB9XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgdXNlciBpcyBjcmVhdGluZyBhIGNvbXBvc2l0aW9uIHN0cmluZyAoSU1FIGV2ZW50cykuICovXG4gIHByaXZhdGUgaXNDb21wb3NpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc0NvbXBvc2l0aW9uU3VwcG9ydGVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICAvLyB3ZSB1c2UgYSBzcGVjaWFsIGluamVjdGlvbiBzdHJpbmcgdGhhdCBzaG91bGQgbmV2ZXIgZXhpc3QgYXQgcnVudGltZSB0byBhbGxvdyBtb2NraW5nIHRoaXMgZGVwZW5kZW5jeSBmb3IgdGVzdGluZ1xuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoJ25ncngtZm9ybXMvbmV2ZXInKSBuYXZpZ2F0b3I6IE5hdmlnYXRvciB8IG51bGwgPSBudWxsLFxuICApIHtcbiAgICB0aGlzLmlzQ29tcG9zaXRpb25TdXBwb3J0ZWQgPSBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQgfHwgJycpICYmICFpc0FuZHJvaWQobmF2aWdhdG9yIHx8IHdpbmRvdy5uYXZpZ2F0b3IpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IG5hdGl2ZUlkID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaWQ7XG4gICAgY29uc3Qgc2hvdWxkU2V0TmF0aXZlSWQgPSB0aGlzLnN0YXRlLmlkICE9PSBuYXRpdmVJZCAmJiAhbmF0aXZlSWQ7XG4gICAgaWYgKHNob3VsZFNldE5hdGl2ZUlkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaWQnLCB0aGlzLnN0YXRlLmlkKTtcbiAgICAgIHRoaXMubmF0aXZlSWRXYXNTZXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHNldFZpZXdWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgY29uc3Qgbm9ybWFsaXplZFZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgbm9ybWFsaXplZFZhbHVlKTtcbiAgfVxuXG4gIHNldE9uQ2hhbmdlQ2FsbGJhY2soZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgc2V0T25Ub3VjaGVkQ2FsbGJhY2soZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0SXNEaXNhYmxlZChpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUlucHV0KHsgdGFyZ2V0IH06IHsgdGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50IH0pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0NvbXBvc2l0aW9uU3VwcG9ydGVkICYmIHRoaXMuaXNDb21wb3NpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2hhbmdlKHRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0JylcbiAgY29tcG9zaXRpb25TdGFydCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzQ29tcG9zaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgWyckZXZlbnQnXSlcbiAgY29tcG9zaXRpb25FbmQoeyB0YXJnZXQgfTogeyB0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQgfSk6IHZvaWQge1xuICAgIHRoaXMuaXNDb21wb3NpbmcgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5pc0NvbXBvc2l0aW9uU3VwcG9ydGVkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRhcmdldC52YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=