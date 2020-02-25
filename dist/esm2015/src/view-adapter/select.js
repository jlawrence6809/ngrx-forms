import * as tslib_1 from "tslib";
var NgrxSelectViewAdapter_1;
import { Directive, ElementRef, forwardRef, Host, HostListener, Input, Optional, Renderer2, } from '@angular/core';
import { NGRX_FORM_VIEW_ADAPTER } from './view-adapter';
// tslint:disable:directive-class-suffix
let NgrxSelectViewAdapter = NgrxSelectViewAdapter_1 = class NgrxSelectViewAdapter {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.optionMap = {};
        this.idCounter = 0;
        this.selectedId = null;
        this.value = undefined;
        this.nativeIdWasSet = false;
        this.onChangeFn = () => void 0;
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
        this.value = value;
        this.selectedId = this.getOptionId(value);
        if (this.selectedId === null) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'selectedIndex', -1);
        }
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', this.selectedId);
    }
    onChange({ target }) {
        this.selectedId = target.value;
        const value = this.optionMap[this.selectedId];
        this.value = value;
        this.onChangeFn(value);
    }
    setOnChangeCallback(fn) {
        this.onChangeFn = fn;
    }
    setOnTouchedCallback(fn) {
        this.onTouched = fn;
    }
    setIsDisabled(isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    }
    createOptionId() {
        const id = this.idCounter.toString();
        this.idCounter += 1;
        return id;
    }
    updateOptionValue(id, value) {
        this.optionMap[id] = value;
        if (this.selectedId === id) {
            this.onChangeFn(value);
        }
        else if (value === this.value) {
            this.setViewValue(value);
        }
    }
    deregisterOption(id) {
        delete this.optionMap[id];
    }
    getOptionId(value) {
        for (const id of Array.from(Object.keys(this.optionMap))) {
            if (this.optionMap[id] === value) {
                return id;
            }
        }
        return null;
    }
};
tslib_1.__decorate([
    HostListener('blur'),
    tslib_1.__metadata("design:type", Function)
], NgrxSelectViewAdapter.prototype, "onTouched", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], NgrxSelectViewAdapter.prototype, "ngrxFormControlState", null);
tslib_1.__decorate([
    HostListener('change', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], NgrxSelectViewAdapter.prototype, "onChange", null);
NgrxSelectViewAdapter = NgrxSelectViewAdapter_1 = tslib_1.__decorate([
    Directive({
        // tslint:disable-next-line:directive-selector
        selector: 'select:not([multiple])[ngrxFormControlState]',
        providers: [{
                provide: NGRX_FORM_VIEW_ADAPTER,
                useExisting: forwardRef(() => NgrxSelectViewAdapter_1),
                multi: true,
            }],
    }),
    tslib_1.__metadata("design:paramtypes", [Renderer2, ElementRef])
], NgrxSelectViewAdapter);
export { NgrxSelectViewAdapter };
const ɵ0 = () => '', ɵ1 = () => void 0, ɵ2 = () => void 0;
const NULL_VIEW_ADAPTER = {
    createOptionId: ɵ0,
    deregisterOption: ɵ1,
    updateOptionValue: ɵ2,
};
const ɵ3 = () => void 0;
const NULL_RENDERER = {
    setProperty: ɵ3,
};
let NgrxSelectOption = class NgrxSelectOption {
    constructor(element, renderer, viewAdapter) {
        this.element = element;
        this.renderer = renderer;
        this.viewAdapter = viewAdapter;
        this.isInitialized = false;
        this.renderer = viewAdapter ? renderer : NULL_RENDERER;
        this.viewAdapter = viewAdapter || NULL_VIEW_ADAPTER;
        this.id = this.viewAdapter.createOptionId();
    }
    set value(value) {
        // this cannot be done inside ngOnInit since the value property
        // must be already set when the option value is updated in the view
        // adapter and the initial binding of 'value' happens before
        // ngOnInit runs
        if (!this.isInitialized) {
            this.isInitialized = true;
            this.renderer.setProperty(this.element.nativeElement, 'value', this.id);
        }
        this.viewAdapter.updateOptionValue(this.id, value);
    }
    ngOnDestroy() {
        this.viewAdapter.deregisterOption(this.id);
    }
};
tslib_1.__decorate([
    Input('value'),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], NgrxSelectOption.prototype, "value", null);
NgrxSelectOption = tslib_1.__decorate([
    Directive({
        // tslint:disable-next-line:directive-selector
        selector: 'option',
    }),
    tslib_1.__param(2, Host()), tslib_1.__param(2, Optional()),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        Renderer2,
        NgrxSelectViewAdapter])
], NgrxSelectOption);
export { NgrxSelectOption };
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy92aWV3LWFkYXB0ZXIvc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLElBQUksRUFDSixZQUFZLEVBQ1osS0FBSyxFQUVMLFFBQVEsRUFDUixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFtQixzQkFBc0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLHdDQUF3QztBQVd4QyxJQUFhLHFCQUFxQiw2QkFBbEMsTUFBYSxxQkFBcUI7SUEwQmhDLFlBQW9CLFFBQW1CLEVBQVUsVUFBc0I7UUFBbkQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUF4Qi9ELGNBQVMsR0FBMEIsRUFBRSxDQUFDO1FBQ3RDLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxlQUFVLEdBQWtCLElBQUksQ0FBQztRQUNqQyxVQUFLLEdBQVEsU0FBUyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRS9CLGVBQVUsR0FBeUIsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFHaEQsY0FBUyxHQUFlLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBZXVDLENBQUM7SUFibkUsSUFBSSxvQkFBb0IsQ0FBQyxLQUE0QjtRQUM1RCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1NBQzdEO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1FBQ2xELE1BQU0saUJBQWlCLEdBQUcsS0FBSyxDQUFDLEVBQUUsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUN2RSxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDO0lBSUQsZUFBZTtRQUNiLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUNsRCxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsRSxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFVO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9FO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBR0QsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFpQztRQUNoRCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDL0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsbUJBQW1CLENBQUMsRUFBd0I7UUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELG9CQUFvQixDQUFDLEVBQWM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGFBQWEsQ0FBQyxVQUFtQjtRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVELGNBQWM7UUFDWixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQVUsRUFBRSxLQUFVO1FBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBRTNCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QjthQUFNLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFVO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU8sV0FBVyxDQUFDLEtBQVU7UUFDNUIsS0FBSyxNQUFNLEVBQUUsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUU7WUFDeEQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEtBQUssRUFBRTtnQkFDaEMsT0FBTyxFQUFFLENBQUM7YUFDWDtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YsQ0FBQTtBQXJGQztJQURDLFlBQVksQ0FBQyxNQUFNLENBQUM7O3dEQUNlO0FBRTNCO0lBQVIsS0FBSyxFQUFFOzs7aUVBV1A7QUF3QkQ7SUFEQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7cURBTWxDO0FBckRVLHFCQUFxQjtJQVRqQyxTQUFTLENBQUM7UUFDVCw4Q0FBOEM7UUFDOUMsUUFBUSxFQUFFLDhDQUE4QztRQUN4RCxTQUFTLEVBQUUsQ0FBQztnQkFDVixPQUFPLEVBQUUsc0JBQXNCO2dCQUMvQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUFxQixDQUFDO2dCQUNwRCxLQUFLLEVBQUUsSUFBSTthQUNaLENBQUM7S0FDSCxDQUFDOzZDQTJCOEIsU0FBUyxFQUFzQixVQUFVO0dBMUI1RCxxQkFBcUIsQ0FnR2pDO1NBaEdZLHFCQUFxQjtXQW1HaEIsR0FBRyxFQUFFLENBQUMsRUFBRSxPQUNOLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUNYLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztBQUhqQyxNQUFNLGlCQUFpQixHQUEwQjtJQUMvQyxjQUFjLElBQVU7SUFDeEIsZ0JBQWdCLElBQWM7SUFDOUIsaUJBQWlCLElBQWM7Q0FDekIsQ0FBQztXQUdNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztBQUQzQixNQUFNLGFBQWEsR0FBYztJQUMvQixXQUFXLElBQWM7Q0FDbkIsQ0FBQztBQU1ULElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBSTNCLFlBQ1UsT0FBbUIsRUFDbkIsUUFBbUIsRUFDQyxXQUFrQztRQUZ0RCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDQyxnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFOeEQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFRNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxJQUFJLGlCQUFpQixDQUFDO1FBQ3BELElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBR0QsSUFBSSxLQUFLLENBQUMsS0FBVTtRQUNsQiwrREFBK0Q7UUFDL0QsbUVBQW1FO1FBQ25FLDREQUE0RDtRQUM1RCxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6RTtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDRixDQUFBO0FBaEJDO0lBREMsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7OzZDQVlkO0FBMUJVLGdCQUFnQjtJQUo1QixTQUFTLENBQUM7UUFDVCw4Q0FBOEM7UUFDOUMsUUFBUSxFQUFFLFFBQVE7S0FDbkIsQ0FBQztJQVFHLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7NkNBRkYsVUFBVTtRQUNULFNBQVM7UUFDYyxxQkFBcUI7R0FQckQsZ0JBQWdCLENBK0I1QjtTQS9CWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3QsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1Db250cm9sU3RhdGUgfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgeyBGb3JtVmlld0FkYXB0ZXIsIE5HUlhfRk9STV9WSUVXX0FEQVBURVIgfSBmcm9tICcuL3ZpZXctYWRhcHRlcic7XG5cbi8vIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzZWxlY3Q6bm90KFttdWx0aXBsZV0pW25ncnhGb3JtQ29udHJvbFN0YXRlXScsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR1JYX0ZPUk1fVklFV19BREFQVEVSLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5ncnhTZWxlY3RWaWV3QWRhcHRlciksXG4gICAgbXVsdGk6IHRydWUsXG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3J4U2VsZWN0Vmlld0FkYXB0ZXIgaW1wbGVtZW50cyBGb3JtVmlld0FkYXB0ZXIsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIHN0YXRlOiBGb3JtQ29udHJvbFN0YXRlPGFueT47XG4gIHByaXZhdGUgb3B0aW9uTWFwOiB7IFtpZDogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgcHJpdmF0ZSBpZENvdW50ZXIgPSAwO1xuICBwcml2YXRlIHNlbGVjdGVkSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHZhbHVlOiBhbnkgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgbmF0aXZlSWRXYXNTZXQgPSBmYWxzZTtcblxuICBvbkNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcblxuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gdm9pZCAwXG5cbiAgQElucHV0KCkgc2V0IG5ncnhGb3JtQ29udHJvbFN0YXRlKHZhbHVlOiBGb3JtQ29udHJvbFN0YXRlPGFueT4pIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBjb250cm9sIHN0YXRlIG11c3Qgbm90IGJlIHVuZGVmaW5lZCEnKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0gdmFsdWU7XG4gICAgY29uc3QgbmF0aXZlSWQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pZDtcbiAgICBjb25zdCBzaG91bGRTZXROYXRpdmVJZCA9IHZhbHVlLmlkICE9PSBuYXRpdmVJZCAmJiB0aGlzLm5hdGl2ZUlkV2FzU2V0O1xuICAgIGlmIChzaG91bGRTZXROYXRpdmVJZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2lkJywgdmFsdWUuaWQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgbmF0aXZlSWQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pZDtcbiAgICBjb25zdCBzaG91bGRTZXROYXRpdmVJZCA9IHRoaXMuc3RhdGUuaWQgIT09IG5hdGl2ZUlkICYmICFuYXRpdmVJZDtcbiAgICBpZiAoc2hvdWxkU2V0TmF0aXZlSWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdpZCcsIHRoaXMuc3RhdGUuaWQpO1xuICAgICAgdGhpcy5uYXRpdmVJZFdhc1NldCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgc2V0Vmlld1ZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5zZWxlY3RlZElkID0gdGhpcy5nZXRPcHRpb25JZCh2YWx1ZSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJZCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3NlbGVjdGVkSW5kZXgnLCAtMSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdGhpcy5zZWxlY3RlZElkKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NoYW5nZScsIFsnJGV2ZW50J10pXG4gIG9uQ2hhbmdlKHsgdGFyZ2V0IH06IHsgdGFyZ2V0OiBIVE1MT3B0aW9uRWxlbWVudCB9KSB7XG4gICAgdGhpcy5zZWxlY3RlZElkID0gdGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5vcHRpb25NYXBbdGhpcy5zZWxlY3RlZElkXTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZUZuKHZhbHVlKTtcbiAgfVxuXG4gIHNldE9uQ2hhbmdlQ2FsbGJhY2soZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICBzZXRPblRvdWNoZWRDYWxsYmFjayhmbjogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXRJc0Rpc2FibGVkKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgfVxuXG4gIGNyZWF0ZU9wdGlvbklkKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5pZENvdW50ZXIudG9TdHJpbmcoKTtcbiAgICB0aGlzLmlkQ291bnRlciArPSAxO1xuICAgIHJldHVybiBpZDtcbiAgfVxuXG4gIHVwZGF0ZU9wdGlvblZhbHVlKGlkOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLm9wdGlvbk1hcFtpZF0gPSB2YWx1ZTtcblxuICAgIGlmICh0aGlzLnNlbGVjdGVkSWQgPT09IGlkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlRm4odmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0Vmlld1ZhbHVlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBkZXJlZ2lzdGVyT3B0aW9uKGlkOiBzdHJpbmcpIHtcbiAgICBkZWxldGUgdGhpcy5vcHRpb25NYXBbaWRdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcHRpb25JZCh2YWx1ZTogYW55KSB7XG4gICAgZm9yIChjb25zdCBpZCBvZiBBcnJheS5mcm9tKE9iamVjdC5rZXlzKHRoaXMub3B0aW9uTWFwKSkpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbk1hcFtpZF0gPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5jb25zdCBOVUxMX1ZJRVdfQURBUFRFUjogTmdyeFNlbGVjdFZpZXdBZGFwdGVyID0ge1xuICBjcmVhdGVPcHRpb25JZDogKCkgPT4gJycsXG4gIGRlcmVnaXN0ZXJPcHRpb246ICgpID0+IHZvaWQgMCxcbiAgdXBkYXRlT3B0aW9uVmFsdWU6ICgpID0+IHZvaWQgMCxcbn0gYXMgYW55O1xuXG5jb25zdCBOVUxMX1JFTkRFUkVSOiBSZW5kZXJlcjIgPSB7XG4gIHNldFByb3BlcnR5OiAoKSA9PiB2b2lkIDAsXG59IGFzIGFueTtcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdvcHRpb24nLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3J4U2VsZWN0T3B0aW9uIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpc0luaXRpYWxpemVkID0gZmFsc2U7XG4gIGlkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHByaXZhdGUgdmlld0FkYXB0ZXI6IE5ncnhTZWxlY3RWaWV3QWRhcHRlcixcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHZpZXdBZGFwdGVyID8gcmVuZGVyZXIgOiBOVUxMX1JFTkRFUkVSO1xuICAgIHRoaXMudmlld0FkYXB0ZXIgPSB2aWV3QWRhcHRlciB8fCBOVUxMX1ZJRVdfQURBUFRFUjtcbiAgICB0aGlzLmlkID0gdGhpcy52aWV3QWRhcHRlci5jcmVhdGVPcHRpb25JZCgpO1xuICB9XG5cbiAgQElucHV0KCd2YWx1ZScpXG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgLy8gdGhpcyBjYW5ub3QgYmUgZG9uZSBpbnNpZGUgbmdPbkluaXQgc2luY2UgdGhlIHZhbHVlIHByb3BlcnR5XG4gICAgLy8gbXVzdCBiZSBhbHJlYWR5IHNldCB3aGVuIHRoZSBvcHRpb24gdmFsdWUgaXMgdXBkYXRlZCBpbiB0aGUgdmlld1xuICAgIC8vIGFkYXB0ZXIgYW5kIHRoZSBpbml0aWFsIGJpbmRpbmcgb2YgJ3ZhbHVlJyBoYXBwZW5zIGJlZm9yZVxuICAgIC8vIG5nT25Jbml0IHJ1bnNcbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHRoaXMuaWQpO1xuICAgIH1cblxuICAgIHRoaXMudmlld0FkYXB0ZXIudXBkYXRlT3B0aW9uVmFsdWUodGhpcy5pZCwgdmFsdWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy52aWV3QWRhcHRlci5kZXJlZ2lzdGVyT3B0aW9uKHRoaXMuaWQpO1xuICB9XG59XG4iXX0=