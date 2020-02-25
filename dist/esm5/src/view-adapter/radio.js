import * as tslib_1 from "tslib";
import { Directive, ElementRef, forwardRef, HostListener, Input, Renderer2 } from '@angular/core';
import { NGRX_FORM_VIEW_ADAPTER } from './view-adapter';
// tslint:disable:directive-class-suffix
var NgrxRadioViewAdapter = /** @class */ (function () {
    function NgrxRadioViewAdapter(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nativeNameWasSet = false;
        this.onChange = function () { return void 0; };
        this.onTouched = function () { return void 0; };
    }
    NgrxRadioViewAdapter_1 = NgrxRadioViewAdapter;
    Object.defineProperty(NgrxRadioViewAdapter.prototype, "value", {
        set: function (val) {
            if (val !== this.latestValue) {
                this.latestValue = val;
                if (this.isChecked) {
                    this.onChange();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxRadioViewAdapter.prototype, "ngrxFormControlState", {
        set: function (value) {
            if (!value) {
                throw new Error('The control state must not be undefined!');
            }
            this.state = value;
            var nativeName = this.elementRef.nativeElement.name;
            var shouldSetNativeName = value.id !== nativeName && this.nativeNameWasSet;
            if (shouldSetNativeName) {
                this.renderer.setProperty(this.elementRef.nativeElement, 'name', value.id);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgrxRadioViewAdapter.prototype.ngOnInit = function () {
        this.isChecked = this.elementRef.nativeElement.checked;
    };
    NgrxRadioViewAdapter.prototype.ngAfterViewInit = function () {
        var nativeName = this.elementRef.nativeElement.name;
        var shouldSetNativeName = this.state.id !== nativeName && !nativeName;
        if (shouldSetNativeName) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'name', this.state.id);
            this.nativeNameWasSet = true;
        }
    };
    NgrxRadioViewAdapter.prototype.setViewValue = function (value) {
        this.isChecked = value === this.latestValue;
        this.renderer.setProperty(this.elementRef.nativeElement, 'checked', this.isChecked);
    };
    NgrxRadioViewAdapter.prototype.setOnChangeCallback = function (fn) {
        var _this = this;
        this.onChange = function () { return fn(_this.latestValue); };
    };
    NgrxRadioViewAdapter.prototype.setOnTouchedCallback = function (fn) {
        this.onTouched = fn;
    };
    NgrxRadioViewAdapter.prototype.setIsDisabled = function (isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    };
    var NgrxRadioViewAdapter_1;
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
                    useExisting: forwardRef(function () { return NgrxRadioViewAdapter_1; }),
                    multi: true,
                }],
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            ElementRef])
    ], NgrxRadioViewAdapter);
    return NgrxRadioViewAdapter;
}());
export { NgrxRadioViewAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3J4LWZvcm1zLyIsInNvdXJjZXMiOlsic3JjL3ZpZXctYWRhcHRlci9yYWRpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6SCxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsd0NBQXdDO0FBV3hDO0lBbUNFLDhCQUNVLFFBQW1CLEVBQ25CLFVBQXNCO1FBRHRCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQW5DeEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBNEJqQyxhQUFRLEdBQWUsY0FBTSxPQUFBLEtBQUssQ0FBQyxFQUFOLENBQU0sQ0FBQTtRQUduQyxjQUFTLEdBQWUsY0FBTSxPQUFBLEtBQUssQ0FBQyxFQUFOLENBQU0sQ0FBQTtJQUtoQyxDQUFDOzZCQXRDTSxvQkFBb0I7SUFJdEIsc0JBQUksdUNBQUs7YUFBVCxVQUFVLEdBQVE7WUFDekIsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7Z0JBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNqQjthQUNGO1FBQ0gsQ0FBQzs7O09BQUE7SUFFUSxzQkFBSSxzREFBb0I7YUFBeEIsVUFBeUIsS0FBNEI7WUFDNUQsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDVixNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7YUFDN0Q7WUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEQsSUFBTSxtQkFBbUIsR0FBRyxLQUFLLENBQUMsRUFBRSxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDN0UsSUFBSSxtQkFBbUIsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM1RTtRQUNILENBQUM7OztPQUFBO0lBZ0JELHVDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBa0MsQ0FBQyxPQUFPLENBQUM7SUFDL0UsQ0FBQztJQUVELDhDQUFlLEdBQWY7UUFDRSxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDdEQsSUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxVQUFVLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDeEUsSUFBSSxtQkFBbUIsRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELDJDQUFZLEdBQVosVUFBYSxLQUFVO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQsa0RBQW1CLEdBQW5CLFVBQW9CLEVBQW9CO1FBQXhDLGlCQUVDO1FBREMsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFNLE9BQUEsRUFBRSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQztJQUM3QyxDQUFDO0lBRUQsbURBQW9CLEdBQXBCLFVBQXFCLEVBQWM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDRDQUFhLEdBQWIsVUFBYyxVQUFtQjtRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7SUFoRVE7UUFBUixLQUFLLEVBQUU7OztxREFPUDtJQUVRO1FBQVIsS0FBSyxFQUFFOzs7b0VBV1A7SUFNRDtRQURDLFlBQVksQ0FBQyxRQUFRLENBQUM7OzBEQUNZO0lBR25DO1FBREMsWUFBWSxDQUFDLE1BQU0sQ0FBQzs7MkRBQ2U7SUFqQ3pCLG9CQUFvQjtRQVRoQyxTQUFTLENBQUM7WUFDVCw4Q0FBOEM7WUFDOUMsUUFBUSxFQUFFLHlDQUF5QztZQUNuRCxTQUFTLEVBQUUsQ0FBQztvQkFDVixPQUFPLEVBQUUsc0JBQXNCO29CQUMvQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxzQkFBb0IsRUFBcEIsQ0FBb0IsQ0FBQztvQkFDbkQsS0FBSyxFQUFFLElBQUk7aUJBQ1osQ0FBQztTQUNILENBQUM7aURBcUNvQixTQUFTO1lBQ1AsVUFBVTtPQXJDckIsb0JBQW9CLENBcUVoQztJQUFELDJCQUFDO0NBQUEsQUFyRUQsSUFxRUM7U0FyRVksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtQ29udHJvbFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHsgRm9ybVZpZXdBZGFwdGVyLCBOR1JYX0ZPUk1fVklFV19BREFQVEVSIH0gZnJvbSAnLi92aWV3LWFkYXB0ZXInO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpkaXJlY3RpdmUtY2xhc3Mtc3VmZml4XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnaW5wdXRbdHlwZT1yYWRpb11bbmdyeEZvcm1Db250cm9sU3RhdGVdJyxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HUlhfRk9STV9WSUVXX0FEQVBURVIsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmdyeFJhZGlvVmlld0FkYXB0ZXIpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTmdyeFJhZGlvVmlld0FkYXB0ZXIgaW1wbGVtZW50cyBGb3JtVmlld0FkYXB0ZXIsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgc3RhdGU6IEZvcm1Db250cm9sU3RhdGU8YW55PjtcbiAgcHJpdmF0ZSBuYXRpdmVOYW1lV2FzU2V0ID0gZmFsc2U7XG5cbiAgQElucHV0KCkgc2V0IHZhbHVlKHZhbDogYW55KSB7XG4gICAgaWYgKHZhbCAhPT0gdGhpcy5sYXRlc3RWYWx1ZSkge1xuICAgICAgdGhpcy5sYXRlc3RWYWx1ZSA9IHZhbDtcbiAgICAgIGlmICh0aGlzLmlzQ2hlY2tlZCkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgc2V0IG5ncnhGb3JtQ29udHJvbFN0YXRlKHZhbHVlOiBGb3JtQ29udHJvbFN0YXRlPGFueT4pIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBjb250cm9sIHN0YXRlIG11c3Qgbm90IGJlIHVuZGVmaW5lZCEnKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0gdmFsdWU7XG4gICAgY29uc3QgbmF0aXZlTmFtZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm5hbWU7XG4gICAgY29uc3Qgc2hvdWxkU2V0TmF0aXZlTmFtZSA9IHZhbHVlLmlkICE9PSBuYXRpdmVOYW1lICYmIHRoaXMubmF0aXZlTmFtZVdhc1NldDtcbiAgICBpZiAoc2hvdWxkU2V0TmF0aXZlTmFtZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25hbWUnLCB2YWx1ZS5pZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsYXRlc3RWYWx1ZTogYW55O1xuICBwcml2YXRlIGlzQ2hlY2tlZDogYm9vbGVhbjtcblxuICBASG9zdExpc3RlbmVyKCdjaGFuZ2UnKVxuICBvbkNoYW5nZTogKCkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMFxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDBcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNDaGVja2VkID0gKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQ7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgbmF0aXZlTmFtZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm5hbWU7XG4gICAgY29uc3Qgc2hvdWxkU2V0TmF0aXZlTmFtZSA9IHRoaXMuc3RhdGUuaWQgIT09IG5hdGl2ZU5hbWUgJiYgIW5hdGl2ZU5hbWU7XG4gICAgaWYgKHNob3VsZFNldE5hdGl2ZU5hbWUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICduYW1lJywgdGhpcy5zdGF0ZS5pZCk7XG4gICAgICB0aGlzLm5hdGl2ZU5hbWVXYXNTZXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHNldFZpZXdWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5pc0NoZWNrZWQgPSB2YWx1ZSA9PT0gdGhpcy5sYXRlc3RWYWx1ZTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2hlY2tlZCcsIHRoaXMuaXNDaGVja2VkKTtcbiAgfVxuXG4gIHNldE9uQ2hhbmdlQ2FsbGJhY2soZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gKCkgPT4gZm4odGhpcy5sYXRlc3RWYWx1ZSk7XG4gIH1cblxuICBzZXRPblRvdWNoZWRDYWxsYmFjayhmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXRJc0Rpc2FibGVkKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgfVxufVxuIl19