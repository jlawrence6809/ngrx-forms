import * as tslib_1 from "tslib";
var NgrxRangeViewAdapter_1;
import { Directive, ElementRef, forwardRef, HostListener, Input, Renderer2 } from '@angular/core';
import { NGRX_FORM_VIEW_ADAPTER } from './view-adapter';
// tslint:disable:directive-class-suffix
let NgrxRangeViewAdapter = NgrxRangeViewAdapter_1 = class NgrxRangeViewAdapter {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nativeIdWasSet = false;
        this.onChange = () => void 0;
        this.onTouched = () => void 0;
    }
    set ngrxFormControlState(value) {
        if (!value) {
            throw new Error('The control state must not be undefined!');
        }
        this.state = value;
        const nativeId = this.elementRef.nativeElement.id;
        const shouldSetNativeId = value.id !== nativeId && this.nativeIdWasSet;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', value.id);
        }
    }
    ngAfterViewInit() {
        const nativeId = this.elementRef.nativeElement.id;
        const shouldSetNativeId = this.state.id !== nativeId && !nativeId;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', this.state.id);
            this.nativeIdWasSet = true;
        }
    }
    setViewValue(value) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', parseFloat(value));
    }
    setOnChangeCallback(fn) {
        this.onChange = fn;
    }
    setOnTouchedCallback(fn) {
        this.onTouched = fn;
    }
    setIsDisabled(isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    }
    handleInput({ target }) {
        const value = target.value;
        this.onChange(value === '' ? null : parseFloat(value));
    }
};
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
                useExisting: forwardRef(() => NgrxRangeViewAdapter_1),
                multi: true,
            }],
    }),
    tslib_1.__metadata("design:paramtypes", [Renderer2, ElementRef])
], NgrxRangeViewAdapter);
export { NgrxRangeViewAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zLyIsInNvdXJjZXMiOlsic3JjL3ZpZXctYWRhcHRlci9yYW5nZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakgsT0FBTyxFQUFtQixzQkFBc0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLHdDQUF3QztBQVd4QyxJQUFhLG9CQUFvQiw0QkFBakMsTUFBYSxvQkFBb0I7SUFzQi9CLFlBQW9CLFFBQW1CLEVBQVUsVUFBc0I7UUFBbkQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFwQi9ELG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRS9CLGFBQVEsR0FBeUIsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFHOUMsY0FBUyxHQUFlLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBZXVDLENBQUM7SUFibkUsSUFBSSxvQkFBb0IsQ0FBQyxLQUE0QjtRQUM1RCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1NBQzdEO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1FBQ2xELE1BQU0saUJBQWlCLEdBQUcsS0FBSyxDQUFDLEVBQUUsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUN2RSxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDO0lBSUQsZUFBZTtRQUNiLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUNsRCxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsRSxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFVO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUQsbUJBQW1CLENBQUMsRUFBd0I7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELG9CQUFvQixDQUFDLEVBQWM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGFBQWEsQ0FBQyxVQUFtQjtRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUlELFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBZ0M7UUFDbEQsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztDQUNGLENBQUE7QUFoREM7SUFEQyxZQUFZLENBQUMsTUFBTSxDQUFDOzt1REFDZTtBQUUzQjtJQUFSLEtBQUssRUFBRTs7O2dFQVdQO0FBK0JEO0lBRkMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozt1REFJakM7QUF0RFUsb0JBQW9CO0lBVGhDLFNBQVMsQ0FBQztRQUNULDhDQUE4QztRQUM5QyxRQUFRLEVBQUUseUNBQXlDO1FBQ25ELFNBQVMsRUFBRSxDQUFDO2dCQUNWLE9BQU8sRUFBRSxzQkFBc0I7Z0JBQy9CLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQW9CLENBQUM7Z0JBQ25ELEtBQUssRUFBRSxJQUFJO2FBQ1osQ0FBQztLQUNILENBQUM7NkNBdUI4QixTQUFTLEVBQXNCLFVBQVU7R0F0QjVELG9CQUFvQixDQXVEaEM7U0F2RFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9ybUNvbnRyb2xTdGF0ZSB9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7IEZvcm1WaWV3QWRhcHRlciwgTkdSWF9GT1JNX1ZJRVdfQURBUFRFUiB9IGZyb20gJy4vdmlldy1hZGFwdGVyJztcblxuLy8gdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2lucHV0W3R5cGU9cmFuZ2VdW25ncnhGb3JtQ29udHJvbFN0YXRlXScsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR1JYX0ZPUk1fVklFV19BREFQVEVSLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5ncnhSYW5nZVZpZXdBZGFwdGVyKSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE5ncnhSYW5nZVZpZXdBZGFwdGVyIGltcGxlbWVudHMgRm9ybVZpZXdBZGFwdGVyLCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBzdGF0ZTogRm9ybUNvbnRyb2xTdGF0ZTxhbnk+O1xuICBwcml2YXRlIG5hdGl2ZUlkV2FzU2V0ID0gZmFsc2U7XG5cbiAgb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4gdm9pZCAwO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDBcblxuICBASW5wdXQoKSBzZXQgbmdyeEZvcm1Db250cm9sU3RhdGUodmFsdWU6IEZvcm1Db250cm9sU3RhdGU8YW55Pikge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGNvbnRyb2wgc3RhdGUgbXVzdCBub3QgYmUgdW5kZWZpbmVkIScpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB2YWx1ZTtcbiAgICBjb25zdCBuYXRpdmVJZCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlkO1xuICAgIGNvbnN0IHNob3VsZFNldE5hdGl2ZUlkID0gdmFsdWUuaWQgIT09IG5hdGl2ZUlkICYmIHRoaXMubmF0aXZlSWRXYXNTZXQ7XG4gICAgaWYgKHNob3VsZFNldE5hdGl2ZUlkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaWQnLCB2YWx1ZS5pZCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBuYXRpdmVJZCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlkO1xuICAgIGNvbnN0IHNob3VsZFNldE5hdGl2ZUlkID0gdGhpcy5zdGF0ZS5pZCAhPT0gbmF0aXZlSWQgJiYgIW5hdGl2ZUlkO1xuICAgIGlmIChzaG91bGRTZXROYXRpdmVJZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2lkJywgdGhpcy5zdGF0ZS5pZCk7XG4gICAgICB0aGlzLm5hdGl2ZUlkV2FzU2V0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBzZXRWaWV3VmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHBhcnNlRmxvYXQodmFsdWUpKTtcbiAgfVxuXG4gIHNldE9uQ2hhbmdlQ2FsbGJhY2soZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgc2V0T25Ub3VjaGVkQ2FsbGJhY2soZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0SXNEaXNhYmxlZChpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjaGFuZ2UnLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUlucHV0KHsgdGFyZ2V0IH06IHsgdGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50IH0pOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlID09PSAnJyA/IG51bGwgOiBwYXJzZUZsb2F0KHZhbHVlKSk7XG4gIH1cbn1cbiJdfQ==