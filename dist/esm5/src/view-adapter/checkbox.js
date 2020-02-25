import * as tslib_1 from "tslib";
import { Directive, ElementRef, forwardRef, HostListener, Input, Renderer2 } from '@angular/core';
import { NGRX_FORM_VIEW_ADAPTER } from './view-adapter';
// tslint:disable:directive-class-suffix
var NgrxCheckboxViewAdapter = /** @class */ (function () {
    function NgrxCheckboxViewAdapter(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nativeIdWasSet = false;
        this.onChange = function () { return void 0; };
        this.onTouched = function () { return void 0; };
    }
    NgrxCheckboxViewAdapter_1 = NgrxCheckboxViewAdapter;
    Object.defineProperty(NgrxCheckboxViewAdapter.prototype, "ngrxFormControlState", {
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
    NgrxCheckboxViewAdapter.prototype.ngAfterViewInit = function () {
        var nativeId = this.elementRef.nativeElement.id;
        var shouldSetNativeId = this.state.id !== nativeId && !nativeId;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', this.state.id);
            this.nativeIdWasSet = true;
        }
    };
    NgrxCheckboxViewAdapter.prototype.setViewValue = function (value) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'checked', value);
    };
    NgrxCheckboxViewAdapter.prototype.setOnChangeCallback = function (fn) {
        this.onChange = fn;
    };
    NgrxCheckboxViewAdapter.prototype.setOnTouchedCallback = function (fn) {
        this.onTouched = fn;
    };
    NgrxCheckboxViewAdapter.prototype.setIsDisabled = function (isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    };
    NgrxCheckboxViewAdapter.prototype.handleInput = function (_a) {
        var target = _a.target;
        this.onChange(target.checked);
    };
    var NgrxCheckboxViewAdapter_1;
    tslib_1.__decorate([
        HostListener('blur'),
        tslib_1.__metadata("design:type", Function)
    ], NgrxCheckboxViewAdapter.prototype, "onTouched", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], NgrxCheckboxViewAdapter.prototype, "ngrxFormControlState", null);
    tslib_1.__decorate([
        HostListener('change', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NgrxCheckboxViewAdapter.prototype, "handleInput", null);
    NgrxCheckboxViewAdapter = NgrxCheckboxViewAdapter_1 = tslib_1.__decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'input[type=checkbox][ngrxFormControlState]',
            providers: [{
                    provide: NGRX_FORM_VIEW_ADAPTER,
                    useExisting: forwardRef(function () { return NgrxCheckboxViewAdapter_1; }),
                    multi: true,
                }],
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2, ElementRef])
    ], NgrxCheckboxViewAdapter);
    return NgrxCheckboxViewAdapter;
}());
export { NgrxCheckboxViewAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zLyIsInNvdXJjZXMiOlsic3JjL3ZpZXctYWRhcHRlci9jaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdqSCxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsd0NBQXdDO0FBV3hDO0lBc0JFLGlDQUFvQixRQUFtQixFQUFVLFVBQXNCO1FBQW5ELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBcEIvRCxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUUvQixhQUFRLEdBQXlCLGNBQU0sT0FBQSxLQUFLLENBQUMsRUFBTixDQUFNLENBQUM7UUFHOUMsY0FBUyxHQUFlLGNBQU0sT0FBQSxLQUFLLENBQUMsRUFBTixDQUFNLENBQUE7SUFldUMsQ0FBQztnQ0F0QmpFLHVCQUF1QjtJQVN6QixzQkFBSSx5REFBb0I7YUFBeEIsVUFBeUIsS0FBNEI7WUFDNUQsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDVixNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7YUFDN0Q7WUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7WUFDbEQsSUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsRUFBRSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ3ZFLElBQUksaUJBQWlCLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDMUU7UUFDSCxDQUFDOzs7T0FBQTtJQUlELGlEQUFlLEdBQWY7UUFDRSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7UUFDbEQsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbEUsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCw4Q0FBWSxHQUFaLFVBQWEsS0FBVTtRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELHFEQUFtQixHQUFuQixVQUFvQixFQUF3QjtRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsc0RBQW9CLEdBQXBCLFVBQXFCLEVBQWM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELCtDQUFhLEdBQWIsVUFBYyxVQUFtQjtRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUdELDZDQUFXLEdBQVgsVUFBWSxFQUF3QztZQUF0QyxrQkFBTTtRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDOztJQTdDRDtRQURDLFlBQVksQ0FBQyxNQUFNLENBQUM7OzhEQUNlO0lBRTNCO1FBQVIsS0FBSyxFQUFFOzs7dUVBV1A7SUE4QkQ7UUFEQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7OERBR2xDO0lBcERVLHVCQUF1QjtRQVRuQyxTQUFTLENBQUM7WUFDVCw4Q0FBOEM7WUFDOUMsUUFBUSxFQUFFLDRDQUE0QztZQUN0RCxTQUFTLEVBQUUsQ0FBQztvQkFDVixPQUFPLEVBQUUsc0JBQXNCO29CQUMvQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx5QkFBdUIsRUFBdkIsQ0FBdUIsQ0FBQztvQkFDdEQsS0FBSyxFQUFFLElBQUk7aUJBQ1osQ0FBQztTQUNILENBQUM7aURBdUI4QixTQUFTLEVBQXNCLFVBQVU7T0F0QjVELHVCQUF1QixDQXFEbkM7SUFBRCw4QkFBQztDQUFBLEFBckRELElBcURDO1NBckRZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1Db250cm9sU3RhdGUgfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgeyBGb3JtVmlld0FkYXB0ZXIsIE5HUlhfRk9STV9WSUVXX0FEQVBURVIgfSBmcm9tICcuL3ZpZXctYWRhcHRlcic7XG5cbi8vIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdpbnB1dFt0eXBlPWNoZWNrYm94XVtuZ3J4Rm9ybUNvbnRyb2xTdGF0ZV0nLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdSWF9GT1JNX1ZJRVdfQURBUFRFUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ3J4Q2hlY2tib3hWaWV3QWRhcHRlciksXG4gICAgbXVsdGk6IHRydWUsXG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3J4Q2hlY2tib3hWaWV3QWRhcHRlciBpbXBsZW1lbnRzIEZvcm1WaWV3QWRhcHRlciwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgc3RhdGU6IEZvcm1Db250cm9sU3RhdGU8YW55PjtcbiAgcHJpdmF0ZSBuYXRpdmVJZFdhc1NldCA9IGZhbHNlO1xuXG4gIG9uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcblxuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gdm9pZCAwXG5cbiAgQElucHV0KCkgc2V0IG5ncnhGb3JtQ29udHJvbFN0YXRlKHZhbHVlOiBGb3JtQ29udHJvbFN0YXRlPGFueT4pIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBjb250cm9sIHN0YXRlIG11c3Qgbm90IGJlIHVuZGVmaW5lZCEnKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0gdmFsdWU7XG4gICAgY29uc3QgbmF0aXZlSWQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pZDtcbiAgICBjb25zdCBzaG91bGRTZXROYXRpdmVJZCA9IHZhbHVlLmlkICE9PSBuYXRpdmVJZCAmJiB0aGlzLm5hdGl2ZUlkV2FzU2V0O1xuICAgIGlmIChzaG91bGRTZXROYXRpdmVJZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2lkJywgdmFsdWUuaWQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgbmF0aXZlSWQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pZDtcbiAgICBjb25zdCBzaG91bGRTZXROYXRpdmVJZCA9IHRoaXMuc3RhdGUuaWQgIT09IG5hdGl2ZUlkICYmICFuYXRpdmVJZDtcbiAgICBpZiAoc2hvdWxkU2V0TmF0aXZlSWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdpZCcsIHRoaXMuc3RhdGUuaWQpO1xuICAgICAgdGhpcy5uYXRpdmVJZFdhc1NldCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgc2V0Vmlld1ZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2hlY2tlZCcsIHZhbHVlKTtcbiAgfVxuXG4gIHNldE9uQ2hhbmdlQ2FsbGJhY2soZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgc2V0T25Ub3VjaGVkQ2FsbGJhY2soZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0SXNEaXNhYmxlZChpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjaGFuZ2UnLCBbJyRldmVudCddKVxuICBoYW5kbGVJbnB1dCh7IHRhcmdldCB9OiB7IHRhcmdldDogSFRNTElucHV0RWxlbWVudCB9KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSh0YXJnZXQuY2hlY2tlZCk7XG4gIH1cbn1cbiJdfQ==