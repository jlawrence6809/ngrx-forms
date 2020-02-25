import * as tslib_1 from "tslib";
import { Directive, ElementRef, forwardRef, Host, HostListener, Input, Optional, Renderer2, } from '@angular/core';
import { NGRX_FORM_VIEW_ADAPTER } from './view-adapter';
// tslint:disable:directive-class-suffix
var NgrxSelectViewAdapter = /** @class */ (function () {
    function NgrxSelectViewAdapter(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.optionMap = {};
        this.idCounter = 0;
        this.selectedId = null;
        this.value = undefined;
        this.nativeIdWasSet = false;
        this.onChangeFn = function () { return void 0; };
        this.onTouched = function () { return void 0; };
    }
    NgrxSelectViewAdapter_1 = NgrxSelectViewAdapter;
    Object.defineProperty(NgrxSelectViewAdapter.prototype, "ngrxFormControlState", {
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
    NgrxSelectViewAdapter.prototype.ngAfterViewInit = function () {
        var nativeId = this.elementRef.nativeElement.id;
        var shouldSetNativeId = this.state.id !== nativeId && !nativeId;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', this.state.id);
            this.nativeIdWasSet = true;
        }
    };
    NgrxSelectViewAdapter.prototype.setViewValue = function (value) {
        this.value = value;
        this.selectedId = this.getOptionId(value);
        if (this.selectedId === null) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'selectedIndex', -1);
        }
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', this.selectedId);
    };
    NgrxSelectViewAdapter.prototype.onChange = function (_a) {
        var target = _a.target;
        this.selectedId = target.value;
        var value = this.optionMap[this.selectedId];
        this.value = value;
        this.onChangeFn(value);
    };
    NgrxSelectViewAdapter.prototype.setOnChangeCallback = function (fn) {
        this.onChangeFn = fn;
    };
    NgrxSelectViewAdapter.prototype.setOnTouchedCallback = function (fn) {
        this.onTouched = fn;
    };
    NgrxSelectViewAdapter.prototype.setIsDisabled = function (isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    };
    NgrxSelectViewAdapter.prototype.createOptionId = function () {
        var id = this.idCounter.toString();
        this.idCounter += 1;
        return id;
    };
    NgrxSelectViewAdapter.prototype.updateOptionValue = function (id, value) {
        this.optionMap[id] = value;
        if (this.selectedId === id) {
            this.onChangeFn(value);
        }
        else if (value === this.value) {
            this.setViewValue(value);
        }
    };
    NgrxSelectViewAdapter.prototype.deregisterOption = function (id) {
        delete this.optionMap[id];
    };
    NgrxSelectViewAdapter.prototype.getOptionId = function (value) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(Array.from(Object.keys(this.optionMap))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var id = _c.value;
                if (this.optionMap[id] === value) {
                    return id;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    var NgrxSelectViewAdapter_1;
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
                    useExisting: forwardRef(function () { return NgrxSelectViewAdapter_1; }),
                    multi: true,
                }],
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2, ElementRef])
    ], NgrxSelectViewAdapter);
    return NgrxSelectViewAdapter;
}());
export { NgrxSelectViewAdapter };
var ɵ0 = function () { return ''; }, ɵ1 = function () { return void 0; }, ɵ2 = function () { return void 0; };
var NULL_VIEW_ADAPTER = {
    createOptionId: ɵ0,
    deregisterOption: ɵ1,
    updateOptionValue: ɵ2,
};
var ɵ3 = function () { return void 0; };
var NULL_RENDERER = {
    setProperty: ɵ3,
};
var NgrxSelectOption = /** @class */ (function () {
    function NgrxSelectOption(element, renderer, viewAdapter) {
        this.element = element;
        this.renderer = renderer;
        this.viewAdapter = viewAdapter;
        this.isInitialized = false;
        this.renderer = viewAdapter ? renderer : NULL_RENDERER;
        this.viewAdapter = viewAdapter || NULL_VIEW_ADAPTER;
        this.id = this.viewAdapter.createOptionId();
    }
    Object.defineProperty(NgrxSelectOption.prototype, "value", {
        set: function (value) {
            // this cannot be done inside ngOnInit since the value property
            // must be already set when the option value is updated in the view
            // adapter and the initial binding of 'value' happens before
            // ngOnInit runs
            if (!this.isInitialized) {
                this.isInitialized = true;
                this.renderer.setProperty(this.element.nativeElement, 'value', this.id);
            }
            this.viewAdapter.updateOptionValue(this.id, value);
        },
        enumerable: true,
        configurable: true
    });
    NgrxSelectOption.prototype.ngOnDestroy = function () {
        this.viewAdapter.deregisterOption(this.id);
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
    return NgrxSelectOption;
}());
export { NgrxSelectOption };
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy92aWV3LWFkYXB0ZXIvc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsSUFBSSxFQUNKLFlBQVksRUFDWixLQUFLLEVBRUwsUUFBUSxFQUNSLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsd0NBQXdDO0FBV3hDO0lBMEJFLCtCQUFvQixRQUFtQixFQUFVLFVBQXNCO1FBQW5ELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBeEIvRCxjQUFTLEdBQTBCLEVBQUUsQ0FBQztRQUN0QyxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsZUFBVSxHQUFrQixJQUFJLENBQUM7UUFDakMsVUFBSyxHQUFRLFNBQVMsQ0FBQztRQUN2QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUUvQixlQUFVLEdBQXlCLGNBQU0sT0FBQSxLQUFLLENBQUMsRUFBTixDQUFNLENBQUM7UUFHaEQsY0FBUyxHQUFlLGNBQU0sT0FBQSxLQUFLLENBQUMsRUFBTixDQUFNLENBQUE7SUFldUMsQ0FBQzs4QkExQmpFLHFCQUFxQjtJQWF2QixzQkFBSSx1REFBb0I7YUFBeEIsVUFBeUIsS0FBNEI7WUFDNUQsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDVixNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7YUFDN0Q7WUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7WUFDbEQsSUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsRUFBRSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ3ZFLElBQUksaUJBQWlCLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDMUU7UUFDSCxDQUFDOzs7T0FBQTtJQUlELCtDQUFlLEdBQWY7UUFDRSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7UUFDbEQsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbEUsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCw0Q0FBWSxHQUFaLFVBQWEsS0FBVTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvRTtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUdELHdDQUFRLEdBQVIsVUFBUyxFQUF5QztZQUF2QyxrQkFBTTtRQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxtREFBbUIsR0FBbkIsVUFBb0IsRUFBd0I7UUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELG9EQUFvQixHQUFwQixVQUFxQixFQUFjO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCw2Q0FBYSxHQUFiLFVBQWMsVUFBbUI7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCw4Q0FBYyxHQUFkO1FBQ0UsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQztRQUNwQixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxpREFBaUIsR0FBakIsVUFBa0IsRUFBVSxFQUFFLEtBQVU7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFM0IsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtZQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELGdEQUFnQixHQUFoQixVQUFpQixFQUFVO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU8sMkNBQVcsR0FBbkIsVUFBb0IsS0FBVTs7O1lBQzVCLEtBQWlCLElBQUEsS0FBQSxpQkFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXJELElBQU0sRUFBRSxXQUFBO2dCQUNYLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLEVBQUU7b0JBQ2hDLE9BQU8sRUFBRSxDQUFDO2lCQUNYO2FBQ0Y7Ozs7Ozs7OztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7SUFwRkQ7UUFEQyxZQUFZLENBQUMsTUFBTSxDQUFDOzs0REFDZTtJQUUzQjtRQUFSLEtBQUssRUFBRTs7O3FFQVdQO0lBd0JEO1FBREMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O3lEQU1sQztJQXJEVSxxQkFBcUI7UUFUakMsU0FBUyxDQUFDO1lBQ1QsOENBQThDO1lBQzlDLFFBQVEsRUFBRSw4Q0FBOEM7WUFDeEQsU0FBUyxFQUFFLENBQUM7b0JBQ1YsT0FBTyxFQUFFLHNCQUFzQjtvQkFDL0IsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsdUJBQXFCLEVBQXJCLENBQXFCLENBQUM7b0JBQ3BELEtBQUssRUFBRSxJQUFJO2lCQUNaLENBQUM7U0FDSCxDQUFDO2lEQTJCOEIsU0FBUyxFQUFzQixVQUFVO09BMUI1RCxxQkFBcUIsQ0FnR2pDO0lBQUQsNEJBQUM7Q0FBQSxBQWhHRCxJQWdHQztTQWhHWSxxQkFBcUI7U0FtR2hCLGNBQU0sT0FBQSxFQUFFLEVBQUYsQ0FBRSxPQUNOLGNBQU0sT0FBQSxLQUFLLENBQUMsRUFBTixDQUFNLE9BQ1gsY0FBTSxPQUFBLEtBQUssQ0FBQyxFQUFOLENBQU07QUFIakMsSUFBTSxpQkFBaUIsR0FBMEI7SUFDL0MsY0FBYyxJQUFVO0lBQ3hCLGdCQUFnQixJQUFjO0lBQzlCLGlCQUFpQixJQUFjO0NBQ3pCLENBQUM7U0FHTSxjQUFNLE9BQUEsS0FBSyxDQUFDLEVBQU4sQ0FBTTtBQUQzQixJQUFNLGFBQWEsR0FBYztJQUMvQixXQUFXLElBQWM7Q0FDbkIsQ0FBQztBQU1UO0lBSUUsMEJBQ1UsT0FBbUIsRUFDbkIsUUFBbUIsRUFDQyxXQUFrQztRQUZ0RCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDQyxnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFOeEQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFRNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxJQUFJLGlCQUFpQixDQUFDO1FBQ3BELElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBR0Qsc0JBQUksbUNBQUs7YUFBVCxVQUFVLEtBQVU7WUFDbEIsK0RBQStEO1lBQy9ELG1FQUFtRTtZQUNuRSw0REFBNEQ7WUFDNUQsZ0JBQWdCO1lBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN6RTtZQUVELElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRCxDQUFDOzs7T0FBQTtJQUVELHNDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBZkQ7UUFEQyxLQUFLLENBQUMsT0FBTyxDQUFDOzs7aURBWWQ7SUExQlUsZ0JBQWdCO1FBSjVCLFNBQVMsQ0FBQztZQUNULDhDQUE4QztZQUM5QyxRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDO1FBUUcsbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFGRixVQUFVO1lBQ1QsU0FBUztZQUNjLHFCQUFxQjtPQVByRCxnQkFBZ0IsQ0ErQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQS9CWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3QsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1Db250cm9sU3RhdGUgfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgeyBGb3JtVmlld0FkYXB0ZXIsIE5HUlhfRk9STV9WSUVXX0FEQVBURVIgfSBmcm9tICcuL3ZpZXctYWRhcHRlcic7XG5cbi8vIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzZWxlY3Q6bm90KFttdWx0aXBsZV0pW25ncnhGb3JtQ29udHJvbFN0YXRlXScsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBOR1JYX0ZPUk1fVklFV19BREFQVEVSLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5ncnhTZWxlY3RWaWV3QWRhcHRlciksXG4gICAgbXVsdGk6IHRydWUsXG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3J4U2VsZWN0Vmlld0FkYXB0ZXIgaW1wbGVtZW50cyBGb3JtVmlld0FkYXB0ZXIsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIHN0YXRlOiBGb3JtQ29udHJvbFN0YXRlPGFueT47XG4gIHByaXZhdGUgb3B0aW9uTWFwOiB7IFtpZDogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgcHJpdmF0ZSBpZENvdW50ZXIgPSAwO1xuICBwcml2YXRlIHNlbGVjdGVkSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHZhbHVlOiBhbnkgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgbmF0aXZlSWRXYXNTZXQgPSBmYWxzZTtcblxuICBvbkNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcblxuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gdm9pZCAwXG5cbiAgQElucHV0KCkgc2V0IG5ncnhGb3JtQ29udHJvbFN0YXRlKHZhbHVlOiBGb3JtQ29udHJvbFN0YXRlPGFueT4pIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBjb250cm9sIHN0YXRlIG11c3Qgbm90IGJlIHVuZGVmaW5lZCEnKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0gdmFsdWU7XG4gICAgY29uc3QgbmF0aXZlSWQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pZDtcbiAgICBjb25zdCBzaG91bGRTZXROYXRpdmVJZCA9IHZhbHVlLmlkICE9PSBuYXRpdmVJZCAmJiB0aGlzLm5hdGl2ZUlkV2FzU2V0O1xuICAgIGlmIChzaG91bGRTZXROYXRpdmVJZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2lkJywgdmFsdWUuaWQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgbmF0aXZlSWQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pZDtcbiAgICBjb25zdCBzaG91bGRTZXROYXRpdmVJZCA9IHRoaXMuc3RhdGUuaWQgIT09IG5hdGl2ZUlkICYmICFuYXRpdmVJZDtcbiAgICBpZiAoc2hvdWxkU2V0TmF0aXZlSWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdpZCcsIHRoaXMuc3RhdGUuaWQpO1xuICAgICAgdGhpcy5uYXRpdmVJZFdhc1NldCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgc2V0Vmlld1ZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5zZWxlY3RlZElkID0gdGhpcy5nZXRPcHRpb25JZCh2YWx1ZSk7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJZCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3NlbGVjdGVkSW5kZXgnLCAtMSk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdGhpcy5zZWxlY3RlZElkKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NoYW5nZScsIFsnJGV2ZW50J10pXG4gIG9uQ2hhbmdlKHsgdGFyZ2V0IH06IHsgdGFyZ2V0OiBIVE1MT3B0aW9uRWxlbWVudCB9KSB7XG4gICAgdGhpcy5zZWxlY3RlZElkID0gdGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5vcHRpb25NYXBbdGhpcy5zZWxlY3RlZElkXTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZUZuKHZhbHVlKTtcbiAgfVxuXG4gIHNldE9uQ2hhbmdlQ2FsbGJhY2soZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICBzZXRPblRvdWNoZWRDYWxsYmFjayhmbjogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXRJc0Rpc2FibGVkKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcbiAgfVxuXG4gIGNyZWF0ZU9wdGlvbklkKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5pZENvdW50ZXIudG9TdHJpbmcoKTtcbiAgICB0aGlzLmlkQ291bnRlciArPSAxO1xuICAgIHJldHVybiBpZDtcbiAgfVxuXG4gIHVwZGF0ZU9wdGlvblZhbHVlKGlkOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLm9wdGlvbk1hcFtpZF0gPSB2YWx1ZTtcblxuICAgIGlmICh0aGlzLnNlbGVjdGVkSWQgPT09IGlkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlRm4odmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0Vmlld1ZhbHVlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBkZXJlZ2lzdGVyT3B0aW9uKGlkOiBzdHJpbmcpIHtcbiAgICBkZWxldGUgdGhpcy5vcHRpb25NYXBbaWRdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcHRpb25JZCh2YWx1ZTogYW55KSB7XG4gICAgZm9yIChjb25zdCBpZCBvZiBBcnJheS5mcm9tKE9iamVjdC5rZXlzKHRoaXMub3B0aW9uTWFwKSkpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbk1hcFtpZF0gPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5jb25zdCBOVUxMX1ZJRVdfQURBUFRFUjogTmdyeFNlbGVjdFZpZXdBZGFwdGVyID0ge1xuICBjcmVhdGVPcHRpb25JZDogKCkgPT4gJycsXG4gIGRlcmVnaXN0ZXJPcHRpb246ICgpID0+IHZvaWQgMCxcbiAgdXBkYXRlT3B0aW9uVmFsdWU6ICgpID0+IHZvaWQgMCxcbn0gYXMgYW55O1xuXG5jb25zdCBOVUxMX1JFTkRFUkVSOiBSZW5kZXJlcjIgPSB7XG4gIHNldFByb3BlcnR5OiAoKSA9PiB2b2lkIDAsXG59IGFzIGFueTtcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdvcHRpb24nLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3J4U2VsZWN0T3B0aW9uIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpc0luaXRpYWxpemVkID0gZmFsc2U7XG4gIGlkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHByaXZhdGUgdmlld0FkYXB0ZXI6IE5ncnhTZWxlY3RWaWV3QWRhcHRlcixcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHZpZXdBZGFwdGVyID8gcmVuZGVyZXIgOiBOVUxMX1JFTkRFUkVSO1xuICAgIHRoaXMudmlld0FkYXB0ZXIgPSB2aWV3QWRhcHRlciB8fCBOVUxMX1ZJRVdfQURBUFRFUjtcbiAgICB0aGlzLmlkID0gdGhpcy52aWV3QWRhcHRlci5jcmVhdGVPcHRpb25JZCgpO1xuICB9XG5cbiAgQElucHV0KCd2YWx1ZScpXG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgLy8gdGhpcyBjYW5ub3QgYmUgZG9uZSBpbnNpZGUgbmdPbkluaXQgc2luY2UgdGhlIHZhbHVlIHByb3BlcnR5XG4gICAgLy8gbXVzdCBiZSBhbHJlYWR5IHNldCB3aGVuIHRoZSBvcHRpb24gdmFsdWUgaXMgdXBkYXRlZCBpbiB0aGUgdmlld1xuICAgIC8vIGFkYXB0ZXIgYW5kIHRoZSBpbml0aWFsIGJpbmRpbmcgb2YgJ3ZhbHVlJyBoYXBwZW5zIGJlZm9yZVxuICAgIC8vIG5nT25Jbml0IHJ1bnNcbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHRoaXMuaWQpO1xuICAgIH1cblxuICAgIHRoaXMudmlld0FkYXB0ZXIudXBkYXRlT3B0aW9uVmFsdWUodGhpcy5pZCwgdmFsdWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy52aWV3QWRhcHRlci5kZXJlZ2lzdGVyT3B0aW9uKHRoaXMuaWQpO1xuICB9XG59XG4iXX0=