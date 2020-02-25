import * as tslib_1 from "tslib";
import { Directive, ElementRef, forwardRef, Host, HostListener, Input, Optional, Renderer2, } from '@angular/core';
import { NGRX_FORM_VIEW_ADAPTER } from './view-adapter';
// tslint:disable:directive-class-suffix
var NgrxSelectMultipleViewAdapter = /** @class */ (function () {
    function NgrxSelectMultipleViewAdapter(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.options = {};
        this.optionValues = {};
        this.idCounter = 0;
        this.selectedIds = [];
        this.nativeIdWasSet = false;
        this.onChangeFn = function () { return void 0; };
        this.onTouched = function () { return void 0; };
    }
    NgrxSelectMultipleViewAdapter_1 = NgrxSelectMultipleViewAdapter;
    Object.defineProperty(NgrxSelectMultipleViewAdapter.prototype, "ngrxFormControlState", {
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
    NgrxSelectMultipleViewAdapter.prototype.ngAfterViewInit = function () {
        var nativeId = this.elementRef.nativeElement.id;
        var shouldSetNativeId = this.state.id !== nativeId && !nativeId;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', this.state.id);
            this.nativeIdWasSet = true;
        }
    };
    NgrxSelectMultipleViewAdapter.prototype.setViewValue = function (value) {
        var _this = this;
        if (value === null) {
            value = [];
        }
        if (!Array.isArray(value)) {
            throw new Error("the value provided to a NgrxSelectMultipleViewAdapter must be null or an array; got " + value + " of type " + typeof value); // `
        }
        this.selectedIds = value.map(function (v) { return _this.getOptionId(v); }).filter(function (id) { return id !== null; }).map(function (id) { return id; });
        Object.keys(this.options).forEach(function (id) { return _this.options[id].isSelected = _this.selectedIds.indexOf(id) >= 0; });
    };
    NgrxSelectMultipleViewAdapter.prototype.onChange = function () {
        var _this = this;
        this.selectedIds = Object.keys(this.options).filter(function (id) { return _this.options[id].isSelected; });
        var value = this.selectedIds.map(function (id) { return _this.optionValues[id]; });
        this.onChangeFn(value);
    };
    NgrxSelectMultipleViewAdapter.prototype.setOnChangeCallback = function (fn) {
        this.onChangeFn = fn;
    };
    NgrxSelectMultipleViewAdapter.prototype.setOnTouchedCallback = function (fn) {
        this.onTouched = fn;
    };
    NgrxSelectMultipleViewAdapter.prototype.setIsDisabled = function (isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    };
    NgrxSelectMultipleViewAdapter.prototype.registerOption = function (option) {
        var id = this.idCounter.toString();
        this.options[id] = option;
        this.idCounter += 1;
        return id;
    };
    NgrxSelectMultipleViewAdapter.prototype.updateOptionValue = function (id, value) {
        this.optionValues[id] = value;
        if (this.selectedIds.indexOf(id) >= 0) {
            this.onChange();
        }
    };
    NgrxSelectMultipleViewAdapter.prototype.deregisterOption = function (id) {
        delete this.options[id];
        delete this.optionValues[id];
    };
    NgrxSelectMultipleViewAdapter.prototype.getOptionId = function (value) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(Array.from(Object.keys(this.optionValues))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var id = _c.value;
                if (this.optionValues[id] === value) {
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
    var NgrxSelectMultipleViewAdapter_1;
    tslib_1.__decorate([
        HostListener('blur'),
        tslib_1.__metadata("design:type", Function)
    ], NgrxSelectMultipleViewAdapter.prototype, "onTouched", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], NgrxSelectMultipleViewAdapter.prototype, "ngrxFormControlState", null);
    tslib_1.__decorate([
        HostListener('change'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], NgrxSelectMultipleViewAdapter.prototype, "onChange", null);
    NgrxSelectMultipleViewAdapter = NgrxSelectMultipleViewAdapter_1 = tslib_1.__decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'select[multiple][ngrxFormControlState]',
            providers: [{
                    provide: NGRX_FORM_VIEW_ADAPTER,
                    useExisting: forwardRef(function () { return NgrxSelectMultipleViewAdapter_1; }),
                    multi: true,
                }],
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2, ElementRef])
    ], NgrxSelectMultipleViewAdapter);
    return NgrxSelectMultipleViewAdapter;
}());
export { NgrxSelectMultipleViewAdapter };
var ɵ0 = function () { return ''; }, ɵ1 = function () { return void 0; }, ɵ2 = function () { return void 0; };
var NULL_VIEW_ADAPTER = {
    registerOption: ɵ0,
    deregisterOption: ɵ1,
    updateOptionValue: ɵ2,
};
var ɵ3 = function () { return void 0; };
var NULL_RENDERER = {
    setProperty: ɵ3,
};
var NgrxSelectMultipleOption = /** @class */ (function () {
    function NgrxSelectMultipleOption(element, renderer, viewAdapter) {
        this.element = element;
        this.renderer = renderer;
        this.viewAdapter = viewAdapter;
        this.renderer = viewAdapter ? renderer : NULL_RENDERER;
        this.viewAdapter = viewAdapter || NULL_VIEW_ADAPTER;
        this.id = this.viewAdapter.registerOption(this);
    }
    Object.defineProperty(NgrxSelectMultipleOption.prototype, "value", {
        set: function (value) {
            this.viewAdapter.updateOptionValue(this.id, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxSelectMultipleOption.prototype, "isSelected", {
        get: function () {
            return this.element.nativeElement.selected;
        },
        set: function (selected) {
            this.renderer.setProperty(this.element.nativeElement, 'selected', selected);
        },
        enumerable: true,
        configurable: true
    });
    NgrxSelectMultipleOption.prototype.ngOnInit = function () {
        this.renderer.setProperty(this.element.nativeElement, 'value', this.id);
    };
    NgrxSelectMultipleOption.prototype.ngOnDestroy = function () {
        this.viewAdapter.deregisterOption(this.id);
    };
    tslib_1.__decorate([
        Input('value'),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], NgrxSelectMultipleOption.prototype, "value", null);
    NgrxSelectMultipleOption = tslib_1.__decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'option',
        }),
        tslib_1.__param(2, Host()), tslib_1.__param(2, Optional()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            Renderer2,
            NgrxSelectMultipleViewAdapter])
    ], NgrxSelectMultipleOption);
    return NgrxSelectMultipleOption;
}());
export { NgrxSelectMultipleOption };
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW11bHRpcGxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy92aWV3LWFkYXB0ZXIvc2VsZWN0LW11bHRpcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsSUFBSSxFQUNKLFlBQVksRUFDWixLQUFLLEVBR0wsUUFBUSxFQUNSLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsd0NBQXdDO0FBV3hDO0lBMEJFLHVDQUFvQixRQUFtQixFQUFVLFVBQXNCO1FBQW5ELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBeEIvRCxZQUFPLEdBQStDLEVBQUUsQ0FBQztRQUN6RCxpQkFBWSxHQUEwQixFQUFFLENBQUM7UUFDekMsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRS9CLGVBQVUsR0FBeUIsY0FBTSxPQUFBLEtBQUssQ0FBQyxFQUFOLENBQU0sQ0FBQztRQUdoRCxjQUFTLEdBQWUsY0FBTSxPQUFBLEtBQUssQ0FBQyxFQUFOLENBQU0sQ0FBQTtJQWV1QyxDQUFDO3NDQTFCakUsNkJBQTZCO0lBYS9CLHNCQUFJLCtEQUFvQjthQUF4QixVQUF5QixLQUE0QjtZQUM1RCxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQzthQUM3RDtZQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztZQUNsRCxJQUFNLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxFQUFFLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDdkUsSUFBSSxpQkFBaUIsRUFBRTtnQkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMxRTtRQUNILENBQUM7OztPQUFBO0lBSUQsdURBQWUsR0FBZjtRQUNFLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUNsRCxJQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsRSxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELG9EQUFZLEdBQVosVUFBYSxLQUFVO1FBQXZCLGlCQVdDO1FBVkMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ2xCLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDWjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMseUZBQXVGLEtBQUssaUJBQVksT0FBTyxLQUFPLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDOUk7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxLQUFLLElBQUksRUFBWCxDQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFZLEVBQVosQ0FBWSxDQUFDLENBQUM7UUFDekcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUEvRCxDQUErRCxDQUFDLENBQUM7SUFDM0csQ0FBQztJQUdELGdEQUFRLEdBQVI7UUFEQSxpQkFLQztRQUhDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQTNCLENBQTJCLENBQUMsQ0FBQztRQUN2RixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCwyREFBbUIsR0FBbkIsVUFBb0IsRUFBd0I7UUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELDREQUFvQixHQUFwQixVQUFxQixFQUFjO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxxREFBYSxHQUFiLFVBQWMsVUFBbUI7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCxzREFBYyxHQUFkLFVBQWUsTUFBZ0M7UUFDN0MsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQztRQUNwQixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCx5REFBaUIsR0FBakIsVUFBa0IsRUFBVSxFQUFFLEtBQVU7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFOUIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUVELHdEQUFnQixHQUFoQixVQUFpQixFQUFVO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVPLG1EQUFXLEdBQW5CLFVBQW9CLEtBQVU7OztZQUM1QixLQUFpQixJQUFBLEtBQUEsaUJBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO2dCQUF4RCxJQUFNLEVBQUUsV0FBQTtnQkFDWCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssS0FBSyxFQUFFO29CQUNuQyxPQUFPLEVBQUUsQ0FBQztpQkFDWDthQUNGOzs7Ozs7Ozs7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7O0lBdEZEO1FBREMsWUFBWSxDQUFDLE1BQU0sQ0FBQzs7b0VBQ2U7SUFFM0I7UUFBUixLQUFLLEVBQUU7Ozs2RUFXUDtJQTJCRDtRQURDLFlBQVksQ0FBQyxRQUFRLENBQUM7Ozs7aUVBS3RCO0lBdkRVLDZCQUE2QjtRQVR6QyxTQUFTLENBQUM7WUFDVCw4Q0FBOEM7WUFDOUMsUUFBUSxFQUFFLHdDQUF3QztZQUNsRCxTQUFTLEVBQUUsQ0FBQztvQkFDVixPQUFPLEVBQUUsc0JBQXNCO29CQUMvQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSwrQkFBNkIsRUFBN0IsQ0FBNkIsQ0FBQztvQkFDNUQsS0FBSyxFQUFFLElBQUk7aUJBQ1osQ0FBQztTQUNILENBQUM7aURBMkI4QixTQUFTLEVBQXNCLFVBQVU7T0ExQjVELDZCQUE2QixDQWtHekM7SUFBRCxvQ0FBQztDQUFBLEFBbEdELElBa0dDO1NBbEdZLDZCQUE2QjtTQXFHeEIsY0FBTSxPQUFBLEVBQUUsRUFBRixDQUFFLE9BQ04sY0FBTSxPQUFBLEtBQUssQ0FBQyxFQUFOLENBQU0sT0FDWCxjQUFNLE9BQUEsS0FBSyxDQUFDLEVBQU4sQ0FBTTtBQUhqQyxJQUFNLGlCQUFpQixHQUFrQztJQUN2RCxjQUFjLElBQVU7SUFDeEIsZ0JBQWdCLElBQWM7SUFDOUIsaUJBQWlCLElBQWM7Q0FDekIsQ0FBQztTQUdNLGNBQU0sT0FBQSxLQUFLLENBQUMsRUFBTixDQUFNO0FBRDNCLElBQU0sYUFBYSxHQUFjO0lBQy9CLFdBQVcsSUFBYztDQUNuQixDQUFDO0FBTVQ7SUFHRSxrQ0FDVSxPQUFtQixFQUNuQixRQUFtQixFQUNDLFdBQTBDO1FBRjlELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNDLGdCQUFXLEdBQVgsV0FBVyxDQUErQjtRQUV0RSxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLElBQUksaUJBQWlCLENBQUM7UUFDcEQsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBR0Qsc0JBQUksMkNBQUs7YUFBVCxVQUFVLEtBQVU7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JELENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0RBQVU7YUFJZDtZQUNFLE9BQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFtQyxDQUFDLFFBQVEsQ0FBQztRQUNwRSxDQUFDO2FBTkQsVUFBZSxRQUFpQjtZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDOUUsQ0FBQzs7O09BQUE7SUFNRCwyQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsOENBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFsQkQ7UUFEQyxLQUFLLENBQUMsT0FBTyxDQUFDOzs7eURBR2Q7SUFoQlUsd0JBQXdCO1FBSnBDLFNBQVMsQ0FBQztZQUNULDhDQUE4QztZQUM5QyxRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDO1FBT0csbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFGRixVQUFVO1lBQ1QsU0FBUztZQUNjLDZCQUE2QjtPQU43RCx3QkFBd0IsQ0FpQ3BDO0lBQUQsK0JBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQWpDWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3QsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9ybUNvbnRyb2xTdGF0ZSB9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7IEZvcm1WaWV3QWRhcHRlciwgTkdSWF9GT1JNX1ZJRVdfQURBUFRFUiB9IGZyb20gJy4vdmlldy1hZGFwdGVyJztcblxuLy8gdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NlbGVjdFttdWx0aXBsZV1bbmdyeEZvcm1Db250cm9sU3RhdGVdJyxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HUlhfRk9STV9WSUVXX0FEQVBURVIsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmdyeFNlbGVjdE11bHRpcGxlVmlld0FkYXB0ZXIpLFxuICAgIG11bHRpOiB0cnVlLFxuICB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTmdyeFNlbGVjdE11bHRpcGxlVmlld0FkYXB0ZXIgaW1wbGVtZW50cyBGb3JtVmlld0FkYXB0ZXIsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIHN0YXRlOiBGb3JtQ29udHJvbFN0YXRlPGFueT47XG4gIHByaXZhdGUgb3B0aW9uczogeyBbaWQ6IHN0cmluZ106IE5ncnhTZWxlY3RNdWx0aXBsZU9wdGlvbiB9ID0ge307XG4gIHByaXZhdGUgb3B0aW9uVmFsdWVzOiB7IFtpZDogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgcHJpdmF0ZSBpZENvdW50ZXIgPSAwO1xuICBwcml2YXRlIHNlbGVjdGVkSWRzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIG5hdGl2ZUlkV2FzU2V0ID0gZmFsc2U7XG5cbiAgb25DaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDA7XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMFxuXG4gIEBJbnB1dCgpIHNldCBuZ3J4Rm9ybUNvbnRyb2xTdGF0ZSh2YWx1ZTogRm9ybUNvbnRyb2xTdGF0ZTxhbnk+KSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgY29udHJvbCBzdGF0ZSBtdXN0IG5vdCBiZSB1bmRlZmluZWQhJyk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHZhbHVlO1xuICAgIGNvbnN0IG5hdGl2ZUlkID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaWQ7XG4gICAgY29uc3Qgc2hvdWxkU2V0TmF0aXZlSWQgPSB2YWx1ZS5pZCAhPT0gbmF0aXZlSWQgJiYgdGhpcy5uYXRpdmVJZFdhc1NldDtcbiAgICBpZiAoc2hvdWxkU2V0TmF0aXZlSWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdpZCcsIHZhbHVlLmlkKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IG5hdGl2ZUlkID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaWQ7XG4gICAgY29uc3Qgc2hvdWxkU2V0TmF0aXZlSWQgPSB0aGlzLnN0YXRlLmlkICE9PSBuYXRpdmVJZCAmJiAhbmF0aXZlSWQ7XG4gICAgaWYgKHNob3VsZFNldE5hdGl2ZUlkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaWQnLCB0aGlzLnN0YXRlLmlkKTtcbiAgICAgIHRoaXMubmF0aXZlSWRXYXNTZXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHNldFZpZXdWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IFtdO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdGhlIHZhbHVlIHByb3ZpZGVkIHRvIGEgTmdyeFNlbGVjdE11bHRpcGxlVmlld0FkYXB0ZXIgbXVzdCBiZSBudWxsIG9yIGFuIGFycmF5OyBnb3QgJHt2YWx1ZX0gb2YgdHlwZSAke3R5cGVvZiB2YWx1ZX1gKTsgLy8gYFxuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWRJZHMgPSB2YWx1ZS5tYXAodiA9PiB0aGlzLmdldE9wdGlvbklkKHYpKS5maWx0ZXIoaWQgPT4gaWQgIT09IG51bGwpLm1hcChpZCA9PiBpZCBhcyBzdHJpbmcpO1xuICAgIE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucykuZm9yRWFjaChpZCA9PiB0aGlzLm9wdGlvbnNbaWRdLmlzU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkSWRzLmluZGV4T2YoaWQpID49IDApO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2hhbmdlJylcbiAgb25DaGFuZ2UoKSB7XG4gICAgdGhpcy5zZWxlY3RlZElkcyA9IE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucykuZmlsdGVyKGlkID0+IHRoaXMub3B0aW9uc1tpZF0uaXNTZWxlY3RlZCk7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdGVkSWRzLm1hcChpZCA9PiB0aGlzLm9wdGlvblZhbHVlc1tpZF0pO1xuICAgIHRoaXMub25DaGFuZ2VGbih2YWx1ZSk7XG4gIH1cblxuICBzZXRPbkNoYW5nZUNhbGxiYWNrKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCkge1xuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgc2V0T25Ub3VjaGVkQ2FsbGJhY2soZm46ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0SXNEaXNhYmxlZChpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gIH1cblxuICByZWdpc3Rlck9wdGlvbihvcHRpb246IE5ncnhTZWxlY3RNdWx0aXBsZU9wdGlvbikge1xuICAgIGNvbnN0IGlkID0gdGhpcy5pZENvdW50ZXIudG9TdHJpbmcoKTtcbiAgICB0aGlzLm9wdGlvbnNbaWRdID0gb3B0aW9uO1xuICAgIHRoaXMuaWRDb3VudGVyICs9IDE7XG4gICAgcmV0dXJuIGlkO1xuICB9XG5cbiAgdXBkYXRlT3B0aW9uVmFsdWUoaWQ6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIHRoaXMub3B0aW9uVmFsdWVzW2lkXSA9IHZhbHVlO1xuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJZHMuaW5kZXhPZihpZCkgPj0gMCkge1xuICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIGRlcmVnaXN0ZXJPcHRpb24oaWQ6IHN0cmluZykge1xuICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnNbaWRdO1xuICAgIGRlbGV0ZSB0aGlzLm9wdGlvblZhbHVlc1tpZF07XG4gIH1cblxuICBwcml2YXRlIGdldE9wdGlvbklkKHZhbHVlOiBhbnkpIHtcbiAgICBmb3IgKGNvbnN0IGlkIG9mIEFycmF5LmZyb20oT2JqZWN0LmtleXModGhpcy5vcHRpb25WYWx1ZXMpKSkge1xuICAgICAgaWYgKHRoaXMub3B0aW9uVmFsdWVzW2lkXSA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmNvbnN0IE5VTExfVklFV19BREFQVEVSOiBOZ3J4U2VsZWN0TXVsdGlwbGVWaWV3QWRhcHRlciA9IHtcbiAgcmVnaXN0ZXJPcHRpb246ICgpID0+ICcnLFxuICBkZXJlZ2lzdGVyT3B0aW9uOiAoKSA9PiB2b2lkIDAsXG4gIHVwZGF0ZU9wdGlvblZhbHVlOiAoKSA9PiB2b2lkIDAsXG59IGFzIGFueTtcblxuY29uc3QgTlVMTF9SRU5ERVJFUjogUmVuZGVyZXIyID0ge1xuICBzZXRQcm9wZXJ0eTogKCkgPT4gdm9pZCAwLFxufSBhcyBhbnk7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnb3B0aW9uJyxcbn0pXG5leHBvcnQgY2xhc3MgTmdyeFNlbGVjdE11bHRpcGxlT3B0aW9uIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwcml2YXRlIHZpZXdBZGFwdGVyOiBOZ3J4U2VsZWN0TXVsdGlwbGVWaWV3QWRhcHRlcixcbiAgKSB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHZpZXdBZGFwdGVyID8gcmVuZGVyZXIgOiBOVUxMX1JFTkRFUkVSO1xuICAgIHRoaXMudmlld0FkYXB0ZXIgPSB2aWV3QWRhcHRlciB8fCBOVUxMX1ZJRVdfQURBUFRFUjtcbiAgICB0aGlzLmlkID0gdGhpcy52aWV3QWRhcHRlci5yZWdpc3Rlck9wdGlvbih0aGlzKTtcbiAgfVxuXG4gIEBJbnB1dCgndmFsdWUnKVxuICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMudmlld0FkYXB0ZXIudXBkYXRlT3B0aW9uVmFsdWUodGhpcy5pZCwgdmFsdWUpO1xuICB9XG5cbiAgc2V0IGlzU2VsZWN0ZWQoc2VsZWN0ZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gIH1cblxuICBnZXQgaXNTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxPcHRpb25FbGVtZW50KS5zZWxlY3RlZDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHRoaXMuaWQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy52aWV3QWRhcHRlci5kZXJlZ2lzdGVyT3B0aW9uKHRoaXMuaWQpO1xuICB9XG59XG4iXX0=