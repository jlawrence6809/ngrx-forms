import * as tslib_1 from "tslib";
var NgrxRadioViewAdapter_1;
import { Directive, ElementRef, forwardRef, HostListener, Input, Renderer2 } from '@angular/core';
import { NGRX_FORM_VIEW_ADAPTER } from './view-adapter';
// tslint:disable:directive-class-suffix
let NgrxRadioViewAdapter = NgrxRadioViewAdapter_1 = class NgrxRadioViewAdapter {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nativeNameWasSet = false;
        this.onChange = () => void 0;
        this.onTouched = () => void 0;
    }
    set value(val) {
        if (val !== this.latestValue) {
            this.latestValue = val;
            if (this.isChecked) {
                this.onChange();
            }
        }
    }
    set ngrxFormControlState(value) {
        if (!value) {
            throw new Error('The control state must not be undefined!');
        }
        this.state = value;
        const nativeName = this.elementRef.nativeElement.name;
        const shouldSetNativeName = value.id !== nativeName && this.nativeNameWasSet;
        if (shouldSetNativeName) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'name', value.id);
        }
    }
    ngOnInit() {
        this.isChecked = this.elementRef.nativeElement.checked;
    }
    ngAfterViewInit() {
        const nativeName = this.elementRef.nativeElement.name;
        const shouldSetNativeName = this.state.id !== nativeName && !nativeName;
        if (shouldSetNativeName) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'name', this.state.id);
            this.nativeNameWasSet = true;
        }
    }
    setViewValue(value) {
        this.isChecked = value === this.latestValue;
        this.renderer.setProperty(this.elementRef.nativeElement, 'checked', this.isChecked);
    }
    setOnChangeCallback(fn) {
        this.onChange = () => fn(this.latestValue);
    }
    setOnTouchedCallback(fn) {
        this.onTouched = fn;
    }
    setIsDisabled(isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], NgrxRadioViewAdapter.prototype, "value", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], NgrxRadioViewAdapter.prototype, "ngrxFormControlState", null);
tslib_1.__decorate([
    HostListener('change'),
    tslib_1.__metadata("design:type", Function)
], NgrxRadioViewAdapter.prototype, "onChange", void 0);
tslib_1.__decorate([
    HostListener('blur'),
    tslib_1.__metadata("design:type", Function)
], NgrxRadioViewAdapter.prototype, "onTouched", void 0);
NgrxRadioViewAdapter = NgrxRadioViewAdapter_1 = tslib_1.__decorate([
    Directive({
        // tslint:disable-next-line:directive-selector
        selector: 'input[type=radio][ngrxFormControlState]',
        providers: [{
                provide: NGRX_FORM_VIEW_ADAPTER,
                useExisting: forwardRef(() => NgrxRadioViewAdapter_1),
                multi: true,
            }],
    }),
    tslib_1.__metadata("design:paramtypes", [Renderer2,
        ElementRef])
], NgrxRadioViewAdapter);
export { NgrxRadioViewAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zLyIsInNvdXJjZXMiOlsic3JjL3ZpZXctYWRhcHRlci9yYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekgsT0FBTyxFQUFtQixzQkFBc0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLHdDQUF3QztBQVd4QyxJQUFhLG9CQUFvQiw0QkFBakMsTUFBYSxvQkFBb0I7SUFtQy9CLFlBQ1UsUUFBbUIsRUFDbkIsVUFBc0I7UUFEdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBbkN4QixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUE0QmpDLGFBQVEsR0FBZSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUduQyxjQUFTLEdBQWUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7SUFLaEMsQ0FBQztJQWxDSSxJQUFJLEtBQUssQ0FBQyxHQUFRO1FBQ3pCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDdkIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNsQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakI7U0FDRjtJQUNILENBQUM7SUFFUSxJQUFJLG9CQUFvQixDQUFDLEtBQTRCO1FBQzVELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDdEQsTUFBTSxtQkFBbUIsR0FBRyxLQUFLLENBQUMsRUFBRSxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDN0UsSUFBSSxtQkFBbUIsRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzVFO0lBQ0gsQ0FBQztJQWdCRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWtDLENBQUMsT0FBTyxDQUFDO0lBQy9FLENBQUM7SUFFRCxlQUFlO1FBQ2IsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ3RELE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3hFLElBQUksbUJBQW1CLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsS0FBVTtRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELG1CQUFtQixDQUFDLEVBQW9CO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsb0JBQW9CLENBQUMsRUFBYztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsYUFBYSxDQUFDLFVBQW1CO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNuRixDQUFDO0NBQ0YsQ0FBQTtBQWpFVTtJQUFSLEtBQUssRUFBRTs7O2lEQU9QO0FBRVE7SUFBUixLQUFLLEVBQUU7OztnRUFXUDtBQU1EO0lBREMsWUFBWSxDQUFDLFFBQVEsQ0FBQzs7c0RBQ1k7QUFHbkM7SUFEQyxZQUFZLENBQUMsTUFBTSxDQUFDOzt1REFDZTtBQWpDekIsb0JBQW9CO0lBVGhDLFNBQVMsQ0FBQztRQUNULDhDQUE4QztRQUM5QyxRQUFRLEVBQUUseUNBQXlDO1FBQ25ELFNBQVMsRUFBRSxDQUFDO2dCQUNWLE9BQU8sRUFBRSxzQkFBc0I7Z0JBQy9CLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQW9CLENBQUM7Z0JBQ25ELEtBQUssRUFBRSxJQUFJO2FBQ1osQ0FBQztLQUNILENBQUM7NkNBcUNvQixTQUFTO1FBQ1AsVUFBVTtHQXJDckIsb0JBQW9CLENBcUVoQztTQXJFWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1Db250cm9sU3RhdGUgfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgeyBGb3JtVmlld0FkYXB0ZXIsIE5HUlhfRk9STV9WSUVXX0FEQVBURVIgfSBmcm9tICcuL3ZpZXctYWRhcHRlcic7XG5cbi8vIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdpbnB1dFt0eXBlPXJhZGlvXVtuZ3J4Rm9ybUNvbnRyb2xTdGF0ZV0nLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdSWF9GT1JNX1ZJRVdfQURBUFRFUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ3J4UmFkaW9WaWV3QWRhcHRlciksXG4gICAgbXVsdGk6IHRydWUsXG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3J4UmFkaW9WaWV3QWRhcHRlciBpbXBsZW1lbnRzIEZvcm1WaWV3QWRhcHRlciwgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBzdGF0ZTogRm9ybUNvbnRyb2xTdGF0ZTxhbnk+O1xuICBwcml2YXRlIG5hdGl2ZU5hbWVXYXNTZXQgPSBmYWxzZTtcblxuICBASW5wdXQoKSBzZXQgdmFsdWUodmFsOiBhbnkpIHtcbiAgICBpZiAodmFsICE9PSB0aGlzLmxhdGVzdFZhbHVlKSB7XG4gICAgICB0aGlzLmxhdGVzdFZhbHVlID0gdmFsO1xuICAgICAgaWYgKHRoaXMuaXNDaGVja2VkKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASW5wdXQoKSBzZXQgbmdyeEZvcm1Db250cm9sU3RhdGUodmFsdWU6IEZvcm1Db250cm9sU3RhdGU8YW55Pikge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGNvbnRyb2wgc3RhdGUgbXVzdCBub3QgYmUgdW5kZWZpbmVkIScpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB2YWx1ZTtcbiAgICBjb25zdCBuYXRpdmVOYW1lID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQubmFtZTtcbiAgICBjb25zdCBzaG91bGRTZXROYXRpdmVOYW1lID0gdmFsdWUuaWQgIT09IG5hdGl2ZU5hbWUgJiYgdGhpcy5uYXRpdmVOYW1lV2FzU2V0O1xuICAgIGlmIChzaG91bGRTZXROYXRpdmVOYW1lKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbmFtZScsIHZhbHVlLmlkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxhdGVzdFZhbHVlOiBhbnk7XG4gIHByaXZhdGUgaXNDaGVja2VkOiBib29sZWFuO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NoYW5nZScpXG4gIG9uQ2hhbmdlOiAoKSA9PiB2b2lkID0gKCkgPT4gdm9pZCAwXG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0NoZWNrZWQgPSAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZDtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBuYXRpdmVOYW1lID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQubmFtZTtcbiAgICBjb25zdCBzaG91bGRTZXROYXRpdmVOYW1lID0gdGhpcy5zdGF0ZS5pZCAhPT0gbmF0aXZlTmFtZSAmJiAhbmF0aXZlTmFtZTtcbiAgICBpZiAoc2hvdWxkU2V0TmF0aXZlTmFtZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25hbWUnLCB0aGlzLnN0YXRlLmlkKTtcbiAgICAgIHRoaXMubmF0aXZlTmFtZVdhc1NldCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgc2V0Vmlld1ZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmlzQ2hlY2tlZCA9IHZhbHVlID09PSB0aGlzLmxhdGVzdFZhbHVlO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjaGVja2VkJywgdGhpcy5pc0NoZWNrZWQpO1xuICB9XG5cbiAgc2V0T25DaGFuZ2VDYWxsYmFjayhmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSAoKSA9PiBmbih0aGlzLmxhdGVzdFZhbHVlKTtcbiAgfVxuXG4gIHNldE9uVG91Y2hlZENhbGxiYWNrKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldElzRGlzYWJsZWQoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICB9XG59XG4iXX0=