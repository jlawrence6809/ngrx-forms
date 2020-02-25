import * as tslib_1 from "tslib";
var NgrxNumberViewAdapter_1;
import { Directive, ElementRef, forwardRef, HostListener, Input, Renderer2 } from '@angular/core';
import { NGRX_FORM_VIEW_ADAPTER } from './view-adapter';
// tslint:disable:directive-class-suffix
let NgrxNumberViewAdapter = NgrxNumberViewAdapter_1 = class NgrxNumberViewAdapter {
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
        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
        const normalizedValue = value === null ? '' : value;
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
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
], NgrxNumberViewAdapter.prototype, "onTouched", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], NgrxNumberViewAdapter.prototype, "ngrxFormControlState", null);
tslib_1.__decorate([
    HostListener('change', ['$event']),
    HostListener('input', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], NgrxNumberViewAdapter.prototype, "handleInput", null);
NgrxNumberViewAdapter = NgrxNumberViewAdapter_1 = tslib_1.__decorate([
    Directive({
        // tslint:disable-next-line:directive-selector
        selector: 'input[type=number][ngrxFormControlState]',
        providers: [{
                provide: NGRX_FORM_VIEW_ADAPTER,
                useExisting: forwardRef(() => NgrxNumberViewAdapter_1),
                multi: true,
            }],
    }),
    tslib_1.__metadata("design:paramtypes", [Renderer2, ElementRef])
], NgrxNumberViewAdapter);
export { NgrxNumberViewAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy92aWV3LWFkYXB0ZXIvbnVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdqSCxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsd0NBQXdDO0FBV3hDLElBQWEscUJBQXFCLDZCQUFsQyxNQUFhLHFCQUFxQjtJQXNCaEMsWUFBb0IsUUFBbUIsRUFBVSxVQUFzQjtRQUFuRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXBCL0QsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFFL0IsYUFBUSxHQUF5QixHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUc5QyxjQUFTLEdBQWUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7SUFldUMsQ0FBQztJQWJuRSxJQUFJLG9CQUFvQixDQUFDLEtBQTRCO1FBQzVELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7UUFDbEQsTUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsRUFBRSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3ZFLElBQUksaUJBQWlCLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMxRTtJQUNILENBQUM7SUFJRCxlQUFlO1FBQ2IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1FBQ2xELE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2xFLElBQUksaUJBQWlCLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQVU7UUFDckIsb0ZBQW9GO1FBQ3BGLE1BQU0sZUFBZSxHQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUQsbUJBQW1CLENBQUMsRUFBd0I7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELG9CQUFvQixDQUFDLEVBQWM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGFBQWEsQ0FBQyxVQUFtQjtRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUlELFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBZ0M7UUFDbEQsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztDQUNGLENBQUE7QUFsREM7SUFEQyxZQUFZLENBQUMsTUFBTSxDQUFDOzt3REFDZTtBQUUzQjtJQUFSLEtBQUssRUFBRTs7O2lFQVdQO0FBaUNEO0lBRkMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozt3REFJakM7QUF4RFUscUJBQXFCO0lBVGpDLFNBQVMsQ0FBQztRQUNULDhDQUE4QztRQUM5QyxRQUFRLEVBQUUsMENBQTBDO1FBQ3BELFNBQVMsRUFBRSxDQUFDO2dCQUNWLE9BQU8sRUFBRSxzQkFBc0I7Z0JBQy9CLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsdUJBQXFCLENBQUM7Z0JBQ3BELEtBQUssRUFBRSxJQUFJO2FBQ1osQ0FBQztLQUNILENBQUM7NkNBdUI4QixTQUFTLEVBQXNCLFVBQVU7R0F0QjVELHFCQUFxQixDQXlEakM7U0F6RFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9ybUNvbnRyb2xTdGF0ZSB9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7IEZvcm1WaWV3QWRhcHRlciwgTkdSWF9GT1JNX1ZJRVdfQURBUFRFUiB9IGZyb20gJy4vdmlldy1hZGFwdGVyJztcblxuLy8gdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2lucHV0W3R5cGU9bnVtYmVyXVtuZ3J4Rm9ybUNvbnRyb2xTdGF0ZV0nLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdSWF9GT1JNX1ZJRVdfQURBUFRFUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ3J4TnVtYmVyVmlld0FkYXB0ZXIpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTmdyeE51bWJlclZpZXdBZGFwdGVyIGltcGxlbWVudHMgRm9ybVZpZXdBZGFwdGVyLCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBzdGF0ZTogRm9ybUNvbnRyb2xTdGF0ZTxhbnk+O1xuICBwcml2YXRlIG5hdGl2ZUlkV2FzU2V0ID0gZmFsc2U7XG5cbiAgb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4gdm9pZCAwO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDBcblxuICBASW5wdXQoKSBzZXQgbmdyeEZvcm1Db250cm9sU3RhdGUodmFsdWU6IEZvcm1Db250cm9sU3RhdGU8YW55Pikge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGNvbnRyb2wgc3RhdGUgbXVzdCBub3QgYmUgdW5kZWZpbmVkIScpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB2YWx1ZTtcbiAgICBjb25zdCBuYXRpdmVJZCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlkO1xuICAgIGNvbnN0IHNob3VsZFNldE5hdGl2ZUlkID0gdmFsdWUuaWQgIT09IG5hdGl2ZUlkICYmIHRoaXMubmF0aXZlSWRXYXNTZXQ7XG4gICAgaWYgKHNob3VsZFNldE5hdGl2ZUlkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaWQnLCB2YWx1ZS5pZCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBuYXRpdmVJZCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlkO1xuICAgIGNvbnN0IHNob3VsZFNldE5hdGl2ZUlkID0gdGhpcy5zdGF0ZS5pZCAhPT0gbmF0aXZlSWQgJiYgIW5hdGl2ZUlkO1xuICAgIGlmIChzaG91bGRTZXROYXRpdmVJZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2lkJywgdGhpcy5zdGF0ZS5pZCk7XG4gICAgICB0aGlzLm5hdGl2ZUlkV2FzU2V0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBzZXRWaWV3VmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIC8vIFRoZSB2YWx1ZSBuZWVkcyB0byBiZSBub3JtYWxpemVkIGZvciBJRTksIG90aGVyd2lzZSBpdCBpcyBzZXQgdG8gJ251bGwnIHdoZW4gbnVsbFxuICAgIGNvbnN0IG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlID09PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCBub3JtYWxpemVkVmFsdWUpO1xuICB9XG5cbiAgc2V0T25DaGFuZ2VDYWxsYmFjayhmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICBzZXRPblRvdWNoZWRDYWxsYmFjayhmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXRJc0Rpc2FibGVkKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NoYW5nZScsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSlcbiAgaGFuZGxlSW5wdXQoeyB0YXJnZXQgfTogeyB0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQgfSk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2UodmFsdWUgPT09ICcnID8gbnVsbCA6IHBhcnNlRmxvYXQodmFsdWUpKTtcbiAgfVxufVxuIl19