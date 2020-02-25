import * as tslib_1 from "tslib";
import { Directive, ElementRef, forwardRef, HostListener, Input, Renderer2 } from '@angular/core';
import { NGRX_FORM_VIEW_ADAPTER } from './view-adapter';
// tslint:disable:directive-class-suffix
var NgrxRangeViewAdapter = /** @class */ (function () {
    function NgrxRangeViewAdapter(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nativeIdWasSet = false;
        this.onChange = function () { return void 0; };
        this.onTouched = function () { return void 0; };
    }
    NgrxRangeViewAdapter_1 = NgrxRangeViewAdapter;
    Object.defineProperty(NgrxRangeViewAdapter.prototype, "ngrxFormControlState", {
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
    NgrxRangeViewAdapter.prototype.ngAfterViewInit = function () {
        var nativeId = this.elementRef.nativeElement.id;
        var shouldSetNativeId = this.state.id !== nativeId && !nativeId;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', this.state.id);
            this.nativeIdWasSet = true;
        }
    };
    NgrxRangeViewAdapter.prototype.setViewValue = function (value) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', parseFloat(value));
    };
    NgrxRangeViewAdapter.prototype.setOnChangeCallback = function (fn) {
        this.onChange = fn;
    };
    NgrxRangeViewAdapter.prototype.setOnTouchedCallback = function (fn) {
        this.onTouched = fn;
    };
    NgrxRangeViewAdapter.prototype.setIsDisabled = function (isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    };
    NgrxRangeViewAdapter.prototype.handleInput = function (_a) {
        var target = _a.target;
        var value = target.value;
        this.onChange(value === '' ? null : parseFloat(value));
    };
    var NgrxRangeViewAdapter_1;
    tslib_1.__decorate([
        HostListener('blur'),
        tslib_1.__metadata("design:type", Function)
    ], NgrxRangeViewAdapter.prototype, "onTouched", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], NgrxRangeViewAdapter.prototype, "ngrxFormControlState", null);
    tslib_1.__decorate([
        HostListener('change', ['$event']),
        HostListener('input', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NgrxRangeViewAdapter.prototype, "handleInput", null);
    NgrxRangeViewAdapter = NgrxRangeViewAdapter_1 = tslib_1.__decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'input[type=range][ngrxFormControlState]',
            providers: [{
                    provide: NGRX_FORM_VIEW_ADAPTER,
                    useExisting: forwardRef(function () { return NgrxRangeViewAdapter_1; }),
                    multi: true,
                }],
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2, ElementRef])
    ], NgrxRangeViewAdapter);
    return NgrxRangeViewAdapter;
}());
export { NgrxRangeViewAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zLyIsInNvdXJjZXMiOlsic3JjL3ZpZXctYWRhcHRlci9yYW5nZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdqSCxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsd0NBQXdDO0FBV3hDO0lBc0JFLDhCQUFvQixRQUFtQixFQUFVLFVBQXNCO1FBQW5ELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBcEIvRCxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUUvQixhQUFRLEdBQXlCLGNBQU0sT0FBQSxLQUFLLENBQUMsRUFBTixDQUFNLENBQUM7UUFHOUMsY0FBUyxHQUFlLGNBQU0sT0FBQSxLQUFLLENBQUMsRUFBTixDQUFNLENBQUE7SUFldUMsQ0FBQzs2QkF0QmpFLG9CQUFvQjtJQVN0QixzQkFBSSxzREFBb0I7YUFBeEIsVUFBeUIsS0FBNEI7WUFDNUQsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDVixNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7YUFDN0Q7WUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7WUFDbEQsSUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsRUFBRSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ3ZFLElBQUksaUJBQWlCLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDMUU7UUFDSCxDQUFDOzs7T0FBQTtJQUlELDhDQUFlLEdBQWY7UUFDRSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7UUFDbEQsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbEUsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCwyQ0FBWSxHQUFaLFVBQWEsS0FBVTtRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELGtEQUFtQixHQUFuQixVQUFvQixFQUF3QjtRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsbURBQW9CLEdBQXBCLFVBQXFCLEVBQWM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDRDQUFhLEdBQWIsVUFBYyxVQUFtQjtRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUlELDBDQUFXLEdBQVgsVUFBWSxFQUF3QztZQUF0QyxrQkFBTTtRQUNsQixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOztJQS9DRDtRQURDLFlBQVksQ0FBQyxNQUFNLENBQUM7OzJEQUNlO0lBRTNCO1FBQVIsS0FBSyxFQUFFOzs7b0VBV1A7SUErQkQ7UUFGQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OzJEQUlqQztJQXREVSxvQkFBb0I7UUFUaEMsU0FBUyxDQUFDO1lBQ1QsOENBQThDO1lBQzlDLFFBQVEsRUFBRSx5Q0FBeUM7WUFDbkQsU0FBUyxFQUFFLENBQUM7b0JBQ1YsT0FBTyxFQUFFLHNCQUFzQjtvQkFDL0IsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsc0JBQW9CLEVBQXBCLENBQW9CLENBQUM7b0JBQ25ELEtBQUssRUFBRSxJQUFJO2lCQUNaLENBQUM7U0FDSCxDQUFDO2lEQXVCOEIsU0FBUyxFQUFzQixVQUFVO09BdEI1RCxvQkFBb0IsQ0F1RGhDO0lBQUQsMkJBQUM7Q0FBQSxBQXZERCxJQXVEQztTQXZEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtQ29udHJvbFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHsgRm9ybVZpZXdBZGFwdGVyLCBOR1JYX0ZPUk1fVklFV19BREFQVEVSIH0gZnJvbSAnLi92aWV3LWFkYXB0ZXInO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpkaXJlY3RpdmUtY2xhc3Mtc3VmZml4XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnaW5wdXRbdHlwZT1yYW5nZV1bbmdyeEZvcm1Db250cm9sU3RhdGVdJyxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HUlhfRk9STV9WSUVXX0FEQVBURVIsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmdyeFJhbmdlVmlld0FkYXB0ZXIpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTmdyeFJhbmdlVmlld0FkYXB0ZXIgaW1wbGVtZW50cyBGb3JtVmlld0FkYXB0ZXIsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIHN0YXRlOiBGb3JtQ29udHJvbFN0YXRlPGFueT47XG4gIHByaXZhdGUgbmF0aXZlSWRXYXNTZXQgPSBmYWxzZTtcblxuICBvbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDA7XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMFxuXG4gIEBJbnB1dCgpIHNldCBuZ3J4Rm9ybUNvbnRyb2xTdGF0ZSh2YWx1ZTogRm9ybUNvbnRyb2xTdGF0ZTxhbnk+KSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgY29udHJvbCBzdGF0ZSBtdXN0IG5vdCBiZSB1bmRlZmluZWQhJyk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHZhbHVlO1xuICAgIGNvbnN0IG5hdGl2ZUlkID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaWQ7XG4gICAgY29uc3Qgc2hvdWxkU2V0TmF0aXZlSWQgPSB2YWx1ZS5pZCAhPT0gbmF0aXZlSWQgJiYgdGhpcy5uYXRpdmVJZFdhc1NldDtcbiAgICBpZiAoc2hvdWxkU2V0TmF0aXZlSWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdpZCcsIHZhbHVlLmlkKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IG5hdGl2ZUlkID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaWQ7XG4gICAgY29uc3Qgc2hvdWxkU2V0TmF0aXZlSWQgPSB0aGlzLnN0YXRlLmlkICE9PSBuYXRpdmVJZCAmJiAhbmF0aXZlSWQ7XG4gICAgaWYgKHNob3VsZFNldE5hdGl2ZUlkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaWQnLCB0aGlzLnN0YXRlLmlkKTtcbiAgICAgIHRoaXMubmF0aXZlSWRXYXNTZXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHNldFZpZXdWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgcGFyc2VGbG9hdCh2YWx1ZSkpO1xuICB9XG5cbiAgc2V0T25DaGFuZ2VDYWxsYmFjayhmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICBzZXRPblRvdWNoZWRDYWxsYmFjayhmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXRJc0Rpc2FibGVkKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NoYW5nZScsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcbiAgaGFuZGxlSW5wdXQoeyB0YXJnZXQgfTogeyB0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQgfSk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUgPT09ICcnID8gbnVsbCA6IHBhcnNlRmxvYXQodmFsdWUpKTtcbiAgfVxufVxuIl19