import * as tslib_1 from "tslib";
import { Directive, ElementRef, forwardRef, HostListener, Input, Renderer2 } from '@angular/core';
import { NGRX_FORM_VIEW_ADAPTER } from './view-adapter';
// tslint:disable:directive-class-suffix
var NgrxNumberViewAdapter = /** @class */ (function () {
    function NgrxNumberViewAdapter(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nativeIdWasSet = false;
        this.onChange = function () { return void 0; };
        this.onTouched = function () { return void 0; };
    }
    NgrxNumberViewAdapter_1 = NgrxNumberViewAdapter;
    Object.defineProperty(NgrxNumberViewAdapter.prototype, "ngrxFormControlState", {
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
    NgrxNumberViewAdapter.prototype.ngAfterViewInit = function () {
        var nativeId = this.elementRef.nativeElement.id;
        var shouldSetNativeId = this.state.id !== nativeId && !nativeId;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', this.state.id);
            this.nativeIdWasSet = true;
        }
    };
    NgrxNumberViewAdapter.prototype.setViewValue = function (value) {
        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
        var normalizedValue = value === null ? '' : value;
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
    };
    NgrxNumberViewAdapter.prototype.setOnChangeCallback = function (fn) {
        this.onChange = fn;
    };
    NgrxNumberViewAdapter.prototype.setOnTouchedCallback = function (fn) {
        this.onTouched = fn;
    };
    NgrxNumberViewAdapter.prototype.setIsDisabled = function (isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    };
    NgrxNumberViewAdapter.prototype.handleInput = function (_a) {
        var target = _a.target;
        var value = target.value;
        this.onChange(value === '' ? null : parseFloat(value));
    };
    var NgrxNumberViewAdapter_1;
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
                    useExisting: forwardRef(function () { return NgrxNumberViewAdapter_1; }),
                    multi: true,
                }],
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2, ElementRef])
    ], NgrxNumberViewAdapter);
    return NgrxNumberViewAdapter;
}());
export { NgrxNumberViewAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy92aWV3LWFkYXB0ZXIvbnVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pILE9BQU8sRUFBbUIsc0JBQXNCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSx3Q0FBd0M7QUFXeEM7SUFzQkUsK0JBQW9CLFFBQW1CLEVBQVUsVUFBc0I7UUFBbkQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFwQi9ELG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRS9CLGFBQVEsR0FBeUIsY0FBTSxPQUFBLEtBQUssQ0FBQyxFQUFOLENBQU0sQ0FBQztRQUc5QyxjQUFTLEdBQWUsY0FBTSxPQUFBLEtBQUssQ0FBQyxFQUFOLENBQU0sQ0FBQTtJQWV1QyxDQUFDOzhCQXRCakUscUJBQXFCO0lBU3ZCLHNCQUFJLHVEQUFvQjthQUF4QixVQUF5QixLQUE0QjtZQUM1RCxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQzthQUM3RDtZQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztZQUNsRCxJQUFNLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxFQUFFLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDdkUsSUFBSSxpQkFBaUIsRUFBRTtnQkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMxRTtRQUNILENBQUM7OztPQUFBO0lBSUQsK0NBQWUsR0FBZjtRQUNFLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUNsRCxJQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsRSxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELDRDQUFZLEdBQVosVUFBYSxLQUFVO1FBQ3JCLG9GQUFvRjtRQUNwRixJQUFNLGVBQWUsR0FBRyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVELG1EQUFtQixHQUFuQixVQUFvQixFQUF3QjtRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsb0RBQW9CLEdBQXBCLFVBQXFCLEVBQWM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDZDQUFhLEdBQWIsVUFBYyxVQUFtQjtRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUlELDJDQUFXLEdBQVgsVUFBWSxFQUF3QztZQUF0QyxrQkFBTTtRQUNsQixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOztJQWpERDtRQURDLFlBQVksQ0FBQyxNQUFNLENBQUM7OzREQUNlO0lBRTNCO1FBQVIsS0FBSyxFQUFFOzs7cUVBV1A7SUFpQ0Q7UUFGQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OzREQUlqQztJQXhEVSxxQkFBcUI7UUFUakMsU0FBUyxDQUFDO1lBQ1QsOENBQThDO1lBQzlDLFFBQVEsRUFBRSwwQ0FBMEM7WUFDcEQsU0FBUyxFQUFFLENBQUM7b0JBQ1YsT0FBTyxFQUFFLHNCQUFzQjtvQkFDL0IsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsdUJBQXFCLEVBQXJCLENBQXFCLENBQUM7b0JBQ3BELEtBQUssRUFBRSxJQUFJO2lCQUNaLENBQUM7U0FDSCxDQUFDO2lEQXVCOEIsU0FBUyxFQUFzQixVQUFVO09BdEI1RCxxQkFBcUIsQ0F5RGpDO0lBQUQsNEJBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXpEWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtQ29udHJvbFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHsgRm9ybVZpZXdBZGFwdGVyLCBOR1JYX0ZPUk1fVklFV19BREFQVEVSIH0gZnJvbSAnLi92aWV3LWFkYXB0ZXInO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpkaXJlY3RpdmUtY2xhc3Mtc3VmZml4XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnaW5wdXRbdHlwZT1udW1iZXJdW25ncnhGb3JtQ29udHJvbFN0YXRlXScsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR1JYX0ZPUk1fVklFV19BREFQVEVSLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5ncnhOdW1iZXJWaWV3QWRhcHRlciksXG4gICAgbXVsdGk6IHRydWUsXG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3J4TnVtYmVyVmlld0FkYXB0ZXIgaW1wbGVtZW50cyBGb3JtVmlld0FkYXB0ZXIsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIHN0YXRlOiBGb3JtQ29udHJvbFN0YXRlPGFueT47XG4gIHByaXZhdGUgbmF0aXZlSWRXYXNTZXQgPSBmYWxzZTtcblxuICBvbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDA7XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMFxuXG4gIEBJbnB1dCgpIHNldCBuZ3J4Rm9ybUNvbnRyb2xTdGF0ZSh2YWx1ZTogRm9ybUNvbnRyb2xTdGF0ZTxhbnk+KSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgY29udHJvbCBzdGF0ZSBtdXN0IG5vdCBiZSB1bmRlZmluZWQhJyk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHZhbHVlO1xuICAgIGNvbnN0IG5hdGl2ZUlkID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaWQ7XG4gICAgY29uc3Qgc2hvdWxkU2V0TmF0aXZlSWQgPSB2YWx1ZS5pZCAhPT0gbmF0aXZlSWQgJiYgdGhpcy5uYXRpdmVJZFdhc1NldDtcbiAgICBpZiAoc2hvdWxkU2V0TmF0aXZlSWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdpZCcsIHZhbHVlLmlkKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IG5hdGl2ZUlkID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaWQ7XG4gICAgY29uc3Qgc2hvdWxkU2V0TmF0aXZlSWQgPSB0aGlzLnN0YXRlLmlkICE9PSBuYXRpdmVJZCAmJiAhbmF0aXZlSWQ7XG4gICAgaWYgKHNob3VsZFNldE5hdGl2ZUlkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaWQnLCB0aGlzLnN0YXRlLmlkKTtcbiAgICAgIHRoaXMubmF0aXZlSWRXYXNTZXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHNldFZpZXdWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgLy8gVGhlIHZhbHVlIG5lZWRzIHRvIGJlIG5vcm1hbGl6ZWQgZm9yIElFOSwgb3RoZXJ3aXNlIGl0IGlzIHNldCB0byAnbnVsbCcgd2hlbiBudWxsXG4gICAgY29uc3Qgbm9ybWFsaXplZFZhbHVlID0gdmFsdWUgPT09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIG5vcm1hbGl6ZWRWYWx1ZSk7XG4gIH1cblxuICBzZXRPbkNoYW5nZUNhbGxiYWNrKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHNldE9uVG91Y2hlZENhbGxiYWNrKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldElzRGlzYWJsZWQoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2hhbmdlJywgWyckZXZlbnQnXSlcbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxuICBoYW5kbGVJbnB1dCh7IHRhcmdldCB9OiB7IHRhcmdldDogSFRNTElucHV0RWxlbWVudCB9KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSA9PT0gJycgPyBudWxsIDogcGFyc2VGbG9hdCh2YWx1ZSkpO1xuICB9XG59XG4iXX0=