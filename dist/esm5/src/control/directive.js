import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostBinding, HostListener, Inject, Input, Optional, Self, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ActionsSubject } from '@ngrx/store';
import { FocusAction, MarkAsDirtyAction, MarkAsTouchedAction, SetValueAction, UnfocusAction } from '../actions';
import { selectViewAdapter } from '../view-adapter/util';
import { NGRX_FORM_VIEW_ADAPTER } from '../view-adapter/view-adapter';
import { NgrxValueConverters } from './value-converter';
export var NGRX_UPDATE_ON_TYPE;
(function (NGRX_UPDATE_ON_TYPE) {
    NGRX_UPDATE_ON_TYPE["CHANGE"] = "change";
    NGRX_UPDATE_ON_TYPE["BLUR"] = "blur";
    NGRX_UPDATE_ON_TYPE["NEVER"] = "never";
})(NGRX_UPDATE_ON_TYPE || (NGRX_UPDATE_ON_TYPE = {}));
var ControlValueAccessorAdapter = /** @class */ (function () {
    function ControlValueAccessorAdapter(valueAccessor) {
        this.valueAccessor = valueAccessor;
    }
    ControlValueAccessorAdapter.prototype.setViewValue = function (value) {
        this.valueAccessor.writeValue(value);
    };
    ControlValueAccessorAdapter.prototype.setOnChangeCallback = function (fn) {
        this.valueAccessor.registerOnChange(fn);
    };
    ControlValueAccessorAdapter.prototype.setOnTouchedCallback = function (fn) {
        this.valueAccessor.registerOnTouched(fn);
    };
    ControlValueAccessorAdapter.prototype.setIsDisabled = function (isDisabled) {
        if (this.valueAccessor.setDisabledState) {
            this.valueAccessor.setDisabledState(isDisabled);
        }
    };
    return ControlValueAccessorAdapter;
}());
var NgrxFormControlDirective = /** @class */ (function () {
    function NgrxFormControlDirective(el, 
    // for the dom parameter the `null` type must be last to ensure that in the compiled output
    // there is no reference to the Document type to support non-browser platforms
    dom, actionsSubject, viewAdapters, valueAccessors) {
        this.el = el;
        this.dom = dom;
        this.actionsSubject = actionsSubject;
        this.isInitialized = false;
        this.focusTrackingIsEnabled = false;
        this.ngrxUpdateOn = NGRX_UPDATE_ON_TYPE.CHANGE;
        this.ngrxValueConverter = NgrxValueConverters.default();
        viewAdapters = viewAdapters || [];
        valueAccessors = valueAccessors || [];
        if (valueAccessors.length > 1) {
            throw new Error('More than one custom control value accessor matches!');
        }
        this.viewAdapter = valueAccessors.length > 0
            ? new ControlValueAccessorAdapter(valueAccessors[0])
            : selectViewAdapter(viewAdapters);
    }
    Object.defineProperty(NgrxFormControlDirective.prototype, "ngrxFormControlState", {
        set: function (newState) {
            if (!newState) {
                throw new Error('The control state must not be undefined!');
            }
            var oldState = this.state;
            this.state = newState;
            if (this.isInitialized) {
                this.updateViewIfControlIdChanged(newState, oldState);
                this.updateViewIfValueChanged(newState, oldState);
                this.updateViewIfIsDisabledChanged(newState, oldState);
                this.updateViewIfIsFocusedChanged(newState, oldState);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxFormControlDirective.prototype, "ngrxEnableFocusTracking", {
        set: function (value) {
            if (value && !this.dom) {
                throw new Error('focus tracking is only supported on the browser platform');
            }
            this.focusTrackingIsEnabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxFormControlDirective.prototype, "focusRegionStartAttr", {
        // TODO: move this into a separate directive
        // automatically apply the attribute that's used by the CDK to set initial focus
        get: function () {
            return this.state && this.state.isFocused ? '' : null;
        },
        enumerable: true,
        configurable: true
    });
    NgrxFormControlDirective.prototype.updateViewIfControlIdChanged = function (newState, oldState) {
        if (oldState && newState.id === oldState.id) {
            return;
        }
        this.stateValue = newState.value;
        this.viewValue = this.ngrxValueConverter.convertStateToViewValue(this.stateValue);
        this.viewAdapter.setViewValue(this.viewValue);
        if (this.viewAdapter.setIsDisabled) {
            this.viewAdapter.setIsDisabled(newState.isDisabled);
        }
    };
    NgrxFormControlDirective.prototype.updateViewIfValueChanged = function (newState, _) {
        if (newState.value === this.stateValue) {
            return;
        }
        this.stateValue = newState.value;
        this.viewValue = this.ngrxValueConverter.convertStateToViewValue(newState.value);
        this.viewAdapter.setViewValue(this.viewValue);
    };
    NgrxFormControlDirective.prototype.updateViewIfIsDisabledChanged = function (newState, oldState) {
        if (!this.viewAdapter.setIsDisabled) {
            return;
        }
        if (oldState && newState.isDisabled === oldState.isDisabled) {
            return;
        }
        this.viewAdapter.setIsDisabled(newState.isDisabled);
    };
    NgrxFormControlDirective.prototype.updateViewIfIsFocusedChanged = function (newState, oldState) {
        if (!this.focusTrackingIsEnabled) {
            return;
        }
        if (oldState && newState.isFocused === oldState.isFocused) {
            return;
        }
        if (newState.isFocused) {
            this.el.nativeElement.focus();
        }
        else {
            this.el.nativeElement.blur();
        }
    };
    NgrxFormControlDirective.prototype.dispatchAction = function (action) {
        if (this.actionsSubject !== null) {
            this.actionsSubject.next(action);
        }
        else {
            throw new Error('ActionsSubject must be present in order to dispatch actions!');
        }
    };
    NgrxFormControlDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.state) {
            throw new Error('The form state must not be undefined!');
        }
        this.isInitialized = true;
        this.updateViewIfControlIdChanged(this.state, undefined);
        this.updateViewIfValueChanged(this.state, undefined);
        this.updateViewIfIsDisabledChanged(this.state, undefined);
        this.updateViewIfIsFocusedChanged(this.state, undefined);
        var dispatchMarkAsDirtyAction = function () {
            if (_this.state.isPristine) {
                _this.dispatchAction(new MarkAsDirtyAction(_this.state.id));
            }
        };
        var dispatchSetValueAction = function () {
            _this.stateValue = _this.ngrxValueConverter.convertViewToStateValue(_this.viewValue);
            if (_this.stateValue !== _this.state.value) {
                _this.dispatchAction(new SetValueAction(_this.state.id, _this.stateValue));
                dispatchMarkAsDirtyAction();
            }
        };
        this.viewAdapter.setOnChangeCallback(function (viewValue) {
            _this.viewValue = viewValue;
            if (_this.ngrxUpdateOn === NGRX_UPDATE_ON_TYPE.CHANGE) {
                dispatchSetValueAction();
            }
        });
        this.viewAdapter.setOnTouchedCallback(function () {
            if (!_this.state.isTouched && _this.ngrxUpdateOn !== NGRX_UPDATE_ON_TYPE.NEVER) {
                _this.dispatchAction(new MarkAsTouchedAction(_this.state.id));
            }
            if (_this.ngrxUpdateOn === NGRX_UPDATE_ON_TYPE.BLUR) {
                dispatchSetValueAction();
            }
        });
    };
    NgrxFormControlDirective.prototype.ngAfterViewInit = function () {
        // we need to update the view again after it was initialized since some
        // controls depend on child elements for setting the value (e.g. selects)
        this.viewAdapter.setViewValue(this.viewValue);
        if (this.viewAdapter.setIsDisabled) {
            this.viewAdapter.setIsDisabled(this.state.isDisabled);
        }
    };
    NgrxFormControlDirective.prototype.onFocusChange = function () {
        if (!this.focusTrackingIsEnabled) {
            return;
        }
        var isControlFocused = this.el.nativeElement === this.dom.activeElement;
        if (isControlFocused !== this.state.isFocused) {
            this.dispatchAction(isControlFocused ? new FocusAction(this.state.id) : new UnfocusAction(this.state.id));
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], NgrxFormControlDirective.prototype, "ngrxFormControlState", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NgrxFormControlDirective.prototype, "ngrxUpdateOn", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], NgrxFormControlDirective.prototype, "ngrxEnableFocusTracking", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NgrxFormControlDirective.prototype, "ngrxValueConverter", void 0);
    tslib_1.__decorate([
        HostBinding('attr.cdk-focus-region-start'),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], NgrxFormControlDirective.prototype, "focusRegionStartAttr", null);
    tslib_1.__decorate([
        HostListener('focusin'),
        HostListener('focusout'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], NgrxFormControlDirective.prototype, "onFocusChange", null);
    NgrxFormControlDirective = tslib_1.__decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: ':not([ngrxFormsAction])[ngrxFormControlState]',
        }),
        tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(DOCUMENT)),
        tslib_1.__param(2, Optional()), tslib_1.__param(2, Inject(ActionsSubject)),
        tslib_1.__param(3, Self()), tslib_1.__param(3, Optional()), tslib_1.__param(3, Inject(NGRX_FORM_VIEW_ADAPTER)),
        tslib_1.__param(4, Self()), tslib_1.__param(4, Optional()), tslib_1.__param(4, Inject(NG_VALUE_ACCESSOR)),
        tslib_1.__metadata("design:paramtypes", [ElementRef, Object, Object, Array, Array])
    ], NgrxFormControlDirective);
    return NgrxFormControlDirective;
}());
export { NgrxFormControlDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy9jb250cm9sL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFFTCxRQUFRLEVBQ1IsSUFBSSxHQUNMLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTdDLE9BQU8sRUFBVyxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV6SCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkYsT0FBTyxFQUFzQixtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTTVFLE1BQU0sQ0FBTixJQUFZLG1CQUlYO0FBSkQsV0FBWSxtQkFBbUI7SUFDN0Isd0NBQWlCLENBQUE7SUFDakIsb0NBQWEsQ0FBQTtJQUNiLHNDQUFlLENBQUE7QUFDakIsQ0FBQyxFQUpXLG1CQUFtQixLQUFuQixtQkFBbUIsUUFJOUI7QUFFRDtJQUNFLHFDQUFvQixhQUFtQztRQUFuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7SUFBSSxDQUFDO0lBRTVELGtEQUFZLEdBQVosVUFBYSxLQUFVO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx5REFBbUIsR0FBbkIsVUFB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RVE7UUFBUixLQUFLLEVBQUU7O3dFQUFzRztJQUlsRTtRQUEzQyxXQUFXLENBQUMsNkJBQTZCLENBQUM7Ozt3RUFFMUM7SUEwSkQ7UUFGQyxZQUFZLENBQUMsU0FBUyxDQUFDO1FBQ3ZCLFlBQVksQ0FBQyxVQUFVLENBQUM7Ozs7aUVBVXhCO0lBdE1VLHdCQUF3QjtRQUpwQyxTQUFTLENBQUM7WUFDVCw4Q0FBOEM7WUFDOUMsUUFBUSxFQUFFLCtDQUErQztTQUMxRCxDQUFDO1FBeURHLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzVCLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ2xDLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUNsRCxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUE7aURBTmxDLFVBQVU7T0FyRGIsd0JBQXdCLENBdU1wQztJQUFELCtCQUFDO0NBQUEsQUF2TUQsSUF1TUM7U0F2TVksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBTZWxmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGlvbnNTdWJqZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBBY3Rpb25zLCBGb2N1c0FjdGlvbiwgTWFya0FzRGlydHlBY3Rpb24sIE1hcmtBc1RvdWNoZWRBY3Rpb24sIFNldFZhbHVlQWN0aW9uLCBVbmZvY3VzQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbFN0YXRlLCBGb3JtQ29udHJvbFZhbHVlVHlwZXMgfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgeyBzZWxlY3RWaWV3QWRhcHRlciB9IGZyb20gJy4uL3ZpZXctYWRhcHRlci91dGlsJztcbmltcG9ydCB7IEZvcm1WaWV3QWRhcHRlciwgTkdSWF9GT1JNX1ZJRVdfQURBUFRFUiB9IGZyb20gJy4uL3ZpZXctYWRhcHRlci92aWV3LWFkYXB0ZXInO1xuaW1wb3J0IHsgTmdyeFZhbHVlQ29udmVydGVyLCBOZ3J4VmFsdWVDb252ZXJ0ZXJzIH0gZnJvbSAnLi92YWx1ZS1jb252ZXJ0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50IHtcbiAgYWN0aXZlRWxlbWVudDogYW55O1xufVxuXG5leHBvcnQgZW51bSBOR1JYX1VQREFURV9PTl9UWVBFIHtcbiAgQ0hBTkdFID0gJ2NoYW5nZScsXG4gIEJMVVIgPSAnYmx1cicsXG4gIE5FVkVSID0gJ25ldmVyJyxcbn1cblxuY2xhc3MgQ29udHJvbFZhbHVlQWNjZXNzb3JBZGFwdGVyIGltcGxlbWVudHMgRm9ybVZpZXdBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWx1ZUFjY2Vzc29yOiBDb250cm9sVmFsdWVBY2Nlc3NvcikgeyB9XG5cbiAgc2V0Vmlld1ZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBzZXRPbkNoYW5nZUNhbGxiYWNrKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWVBY2Nlc3Nvci5yZWdpc3Rlck9uQ2hhbmdlKGZuKTtcbiAgfVxuICBzZXRPblRvdWNoZWRDYWxsYmFjayhmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWVBY2Nlc3Nvci5yZWdpc3Rlck9uVG91Y2hlZChmbik7XG4gIH1cblxuICBzZXRJc0Rpc2FibGVkKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy52YWx1ZUFjY2Vzc29yLnNldERpc2FibGVkU3RhdGUpIHtcbiAgICAgIHRoaXMudmFsdWVBY2Nlc3Nvci5zZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQpO1xuICAgIH1cbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJzpub3QoW25ncnhGb3Jtc0FjdGlvbl0pW25ncnhGb3JtQ29udHJvbFN0YXRlXScsXG59KVxuZXhwb3J0IGNsYXNzIE5ncnhGb3JtQ29udHJvbERpcmVjdGl2ZTxUU3RhdGVWYWx1ZSBleHRlbmRzIEZvcm1Db250cm9sVmFsdWVUeXBlcywgVFZpZXdWYWx1ZSA9IFRTdGF0ZVZhbHVlPiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG4gIHByaXZhdGUgaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuICBwcml2YXRlIGZvY3VzVHJhY2tpbmdJc0VuYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKSBzZXQgbmdyeEZvcm1Db250cm9sU3RhdGUobmV3U3RhdGU6IEZvcm1Db250cm9sU3RhdGU8VFN0YXRlVmFsdWU+KSB7XG4gICAgaWYgKCFuZXdTdGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgY29udHJvbCBzdGF0ZSBtdXN0IG5vdCBiZSB1bmRlZmluZWQhJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcblxuICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlVmlld0lmQ29udHJvbElkQ2hhbmdlZChuZXdTdGF0ZSwgb2xkU3RhdGUpO1xuICAgICAgdGhpcy51cGRhdGVWaWV3SWZWYWx1ZUNoYW5nZWQobmV3U3RhdGUsIG9sZFN0YXRlKTtcbiAgICAgIHRoaXMudXBkYXRlVmlld0lmSXNEaXNhYmxlZENoYW5nZWQobmV3U3RhdGUsIG9sZFN0YXRlKTtcbiAgICAgIHRoaXMudXBkYXRlVmlld0lmSXNGb2N1c2VkQ2hhbmdlZChuZXdTdGF0ZSwgb2xkU3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpIG5ncnhVcGRhdGVPbjogTkdSWF9VUERBVEVfT05fVFlQRSA9IE5HUlhfVVBEQVRFX09OX1RZUEUuQ0hBTkdFO1xuICBASW5wdXQoKSBzZXQgbmdyeEVuYWJsZUZvY3VzVHJhY2tpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgJiYgIXRoaXMuZG9tKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZvY3VzIHRyYWNraW5nIGlzIG9ubHkgc3VwcG9ydGVkIG9uIHRoZSBicm93c2VyIHBsYXRmb3JtJyk7XG4gICAgfVxuXG4gICAgdGhpcy5mb2N1c1RyYWNraW5nSXNFbmFibGVkID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKSBuZ3J4VmFsdWVDb252ZXJ0ZXI6IE5ncnhWYWx1ZUNvbnZlcnRlcjxUVmlld1ZhbHVlLCBUU3RhdGVWYWx1ZT4gPSBOZ3J4VmFsdWVDb252ZXJ0ZXJzLmRlZmF1bHQ8YW55PigpO1xuXG4gIC8vIFRPRE86IG1vdmUgdGhpcyBpbnRvIGEgc2VwYXJhdGUgZGlyZWN0aXZlXG4gIC8vIGF1dG9tYXRpY2FsbHkgYXBwbHkgdGhlIGF0dHJpYnV0ZSB0aGF0J3MgdXNlZCBieSB0aGUgQ0RLIHRvIHNldCBpbml0aWFsIGZvY3VzXG4gIEBIb3N0QmluZGluZygnYXR0ci5jZGstZm9jdXMtcmVnaW9uLXN0YXJ0JykgZ2V0IGZvY3VzUmVnaW9uU3RhcnRBdHRyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlICYmIHRoaXMuc3RhdGUuaXNGb2N1c2VkID8gJycgOiBudWxsO1xuICB9XG5cbiAgc3RhdGU6IEZvcm1Db250cm9sU3RhdGU8VFN0YXRlVmFsdWU+O1xuXG4gIHByaXZhdGUgdmlld0FkYXB0ZXI6IEZvcm1WaWV3QWRhcHRlcjtcblxuICAvLyB3ZSBoYXZlIHRvIHN0b3JlIHRoZSBsYXRlc3Qga25vd24gc3RhdGUgdmFsdWUgc2luY2UgbW9zdCBpbnB1dCBlbGVtZW50cyBkb24ndCBwbGF5IG5pY2VseSB3aXRoXG4gIC8vIHNldHRpbmcgdGhlIHNhbWUgdmFsdWUgYWdhaW4gKGUuZy4gaW5wdXQgZWxlbWVudHMgbW92ZSB0aGUgY3Vyc29yIHRvIHRoZSBlbmQgb2YgdGhlIGlucHV0IHdoZW5cbiAgLy8gYSBuZXcgdmFsdWUgaXMgc2V0IHdoaWNoIG1lYW5zIHdoZW5ldmVyIHRoZSB1c2VyIHR5cGVzIHNvbWV0aGluZyB0aGUgY3Vyc29yIGlzIGZvcmNlZCB0byB0aGVcbiAgLy8gZW5kIG9mIHRoZSBpbnB1dCkgd2hpY2ggd291bGQgZm9yIGV4YW1wbGUgaGFwcGVuIGV2ZXJ5IHRpbWUgYSBuZXcgdmFsdWUgaXMgcHVzaGVkIHRvIHRoZSBzdGF0ZVxuICAvLyBzaW5jZSB3aGVuIHRoZSBhY3Rpb24gdG8gdXBkYXRlIHRoZSBzdGF0ZSBpcyBkaXNwYXRjaGVkIGEgbmV3IHN0YXRlIHdpbGwgYmUgcmVjZWl2ZWQgaW5zaWRlXG4gIC8vIHRoZSBkaXJlY3RpdmUsIHdoaWNoIGluIHR1cm4gd291bGQgdHJpZ2dlciBhIHZpZXcgdXBkYXRlOyB0byBwcmV2ZW50IHRoaXMgYmVoYXZpb3Igd2UgY29tcGFyZVxuICAvLyB0aGUgbGF0ZXN0IGtub3duIHN0YXRlIHZhbHVlIHdpdGggdGhlIHZhbHVlIHRvIGJlIHNldCBhbmQgZmlsdGVyIG91dCB0aG9zZSB2YWx1ZXMgdGhhdCBhcmUgZXF1YWxcbiAgLy8gdG8gdGhlIGxhdGVzdCBrbm93biB2YWx1ZVxuICBwcml2YXRlIHZpZXdWYWx1ZTogVFZpZXdWYWx1ZTtcbiAgcHJpdmF0ZSBzdGF0ZVZhbHVlOiBUU3RhdGVWYWx1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIC8vIGZvciB0aGUgZG9tIHBhcmFtZXRlciB0aGUgYG51bGxgIHR5cGUgbXVzdCBiZSBsYXN0IHRvIGVuc3VyZSB0aGF0IGluIHRoZSBjb21waWxlZCBvdXRwdXRcbiAgICAvLyB0aGVyZSBpcyBubyByZWZlcmVuY2UgdG8gdGhlIERvY3VtZW50IHR5cGUgdG8gc3VwcG9ydCBub24tYnJvd3NlciBwbGF0Zm9ybXNcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvbTogRG9jdW1lbnQgfCBudWxsLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQWN0aW9uc1N1YmplY3QpIHByaXZhdGUgYWN0aW9uc1N1YmplY3Q6IEFjdGlvbnNTdWJqZWN0IHwgbnVsbCxcbiAgICBAU2VsZigpIEBPcHRpb25hbCgpIEBJbmplY3QoTkdSWF9GT1JNX1ZJRVdfQURBUFRFUikgdmlld0FkYXB0ZXJzOiBGb3JtVmlld0FkYXB0ZXJbXSxcbiAgICBAU2VsZigpIEBPcHRpb25hbCgpIEBJbmplY3QoTkdfVkFMVUVfQUNDRVNTT1IpIHZhbHVlQWNjZXNzb3JzOiBDb250cm9sVmFsdWVBY2Nlc3NvcltdLFxuICApIHtcbiAgICB2aWV3QWRhcHRlcnMgPSB2aWV3QWRhcHRlcnMgfHwgW107XG4gICAgdmFsdWVBY2Nlc3NvcnMgPSB2YWx1ZUFjY2Vzc29ycyB8fCBbXTtcblxuICAgIGlmICh2YWx1ZUFjY2Vzc29ycy5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01vcmUgdGhhbiBvbmUgY3VzdG9tIGNvbnRyb2wgdmFsdWUgYWNjZXNzb3IgbWF0Y2hlcyEnKTtcbiAgICB9XG5cbiAgICB0aGlzLnZpZXdBZGFwdGVyID0gdmFsdWVBY2Nlc3NvcnMubGVuZ3RoID4gMFxuICAgICAgPyBuZXcgQ29udHJvbFZhbHVlQWNjZXNzb3JBZGFwdGVyKHZhbHVlQWNjZXNzb3JzWzBdKVxuICAgICAgOiBzZWxlY3RWaWV3QWRhcHRlcih2aWV3QWRhcHRlcnMpO1xuICB9XG5cbiAgdXBkYXRlVmlld0lmQ29udHJvbElkQ2hhbmdlZChuZXdTdGF0ZTogRm9ybUNvbnRyb2xTdGF0ZTxUU3RhdGVWYWx1ZT4sIG9sZFN0YXRlOiBGb3JtQ29udHJvbFN0YXRlPFRTdGF0ZVZhbHVlPiB8IHVuZGVmaW5lZCkge1xuICAgIGlmIChvbGRTdGF0ZSAmJiBuZXdTdGF0ZS5pZCA9PT0gb2xkU3RhdGUuaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlVmFsdWUgPSBuZXdTdGF0ZS52YWx1ZTtcbiAgICB0aGlzLnZpZXdWYWx1ZSA9IHRoaXMubmdyeFZhbHVlQ29udmVydGVyLmNvbnZlcnRTdGF0ZVRvVmlld1ZhbHVlKHRoaXMuc3RhdGVWYWx1ZSk7XG4gICAgdGhpcy52aWV3QWRhcHRlci5zZXRWaWV3VmFsdWUodGhpcy52aWV3VmFsdWUpO1xuICAgIGlmICh0aGlzLnZpZXdBZGFwdGVyLnNldElzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudmlld0FkYXB0ZXIuc2V0SXNEaXNhYmxlZChuZXdTdGF0ZS5pc0Rpc2FibGVkKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVWaWV3SWZWYWx1ZUNoYW5nZWQobmV3U3RhdGU6IEZvcm1Db250cm9sU3RhdGU8VFN0YXRlVmFsdWU+LCBfOiBGb3JtQ29udHJvbFN0YXRlPFRTdGF0ZVZhbHVlPiB8IHVuZGVmaW5lZCkge1xuICAgIGlmIChuZXdTdGF0ZS52YWx1ZSA9PT0gdGhpcy5zdGF0ZVZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZVZhbHVlID0gbmV3U3RhdGUudmFsdWU7XG4gICAgdGhpcy52aWV3VmFsdWUgPSB0aGlzLm5ncnhWYWx1ZUNvbnZlcnRlci5jb252ZXJ0U3RhdGVUb1ZpZXdWYWx1ZShuZXdTdGF0ZS52YWx1ZSk7XG4gICAgdGhpcy52aWV3QWRhcHRlci5zZXRWaWV3VmFsdWUodGhpcy52aWV3VmFsdWUpO1xuICB9XG5cbiAgdXBkYXRlVmlld0lmSXNEaXNhYmxlZENoYW5nZWQobmV3U3RhdGU6IEZvcm1Db250cm9sU3RhdGU8VFN0YXRlVmFsdWU+LCBvbGRTdGF0ZTogRm9ybUNvbnRyb2xTdGF0ZTxUU3RhdGVWYWx1ZT4gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAoIXRoaXMudmlld0FkYXB0ZXIuc2V0SXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvbGRTdGF0ZSAmJiBuZXdTdGF0ZS5pc0Rpc2FibGVkID09PSBvbGRTdGF0ZS5pc0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy52aWV3QWRhcHRlci5zZXRJc0Rpc2FibGVkKG5ld1N0YXRlLmlzRGlzYWJsZWQpO1xuICB9XG5cbiAgdXBkYXRlVmlld0lmSXNGb2N1c2VkQ2hhbmdlZChuZXdTdGF0ZTogRm9ybUNvbnRyb2xTdGF0ZTxUU3RhdGVWYWx1ZT4sIG9sZFN0YXRlOiBGb3JtQ29udHJvbFN0YXRlPFRTdGF0ZVZhbHVlPiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICghdGhpcy5mb2N1c1RyYWNraW5nSXNFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9sZFN0YXRlICYmIG5ld1N0YXRlLmlzRm9jdXNlZCA9PT0gb2xkU3RhdGUuaXNGb2N1c2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5ld1N0YXRlLmlzRm9jdXNlZCkge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGRpc3BhdGNoQWN0aW9uKGFjdGlvbjogQWN0aW9uczxUU3RhdGVWYWx1ZT4pIHtcbiAgICBpZiAodGhpcy5hY3Rpb25zU3ViamVjdCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5hY3Rpb25zU3ViamVjdC5uZXh0KGFjdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9uc1N1YmplY3QgbXVzdCBiZSBwcmVzZW50IGluIG9yZGVyIHRvIGRpc3BhdGNoIGFjdGlvbnMhJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBmb3JtIHN0YXRlIG11c3Qgbm90IGJlIHVuZGVmaW5lZCEnKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgdGhpcy51cGRhdGVWaWV3SWZDb250cm9sSWRDaGFuZ2VkKHRoaXMuc3RhdGUsIHVuZGVmaW5lZCk7XG4gICAgdGhpcy51cGRhdGVWaWV3SWZWYWx1ZUNoYW5nZWQodGhpcy5zdGF0ZSwgdW5kZWZpbmVkKTtcbiAgICB0aGlzLnVwZGF0ZVZpZXdJZklzRGlzYWJsZWRDaGFuZ2VkKHRoaXMuc3RhdGUsIHVuZGVmaW5lZCk7XG4gICAgdGhpcy51cGRhdGVWaWV3SWZJc0ZvY3VzZWRDaGFuZ2VkKHRoaXMuc3RhdGUsIHVuZGVmaW5lZCk7XG5cbiAgICBjb25zdCBkaXNwYXRjaE1hcmtBc0RpcnR5QWN0aW9uID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuaXNQcmlzdGluZSkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoQWN0aW9uKG5ldyBNYXJrQXNEaXJ0eUFjdGlvbih0aGlzLnN0YXRlLmlkKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGRpc3BhdGNoU2V0VmFsdWVBY3Rpb24gPSAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlVmFsdWUgPSB0aGlzLm5ncnhWYWx1ZUNvbnZlcnRlci5jb252ZXJ0Vmlld1RvU3RhdGVWYWx1ZSh0aGlzLnZpZXdWYWx1ZSk7XG4gICAgICBpZiAodGhpcy5zdGF0ZVZhbHVlICE9PSB0aGlzLnN0YXRlLnZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hBY3Rpb24obmV3IFNldFZhbHVlQWN0aW9uKHRoaXMuc3RhdGUuaWQsIHRoaXMuc3RhdGVWYWx1ZSkpO1xuXG4gICAgICAgIGRpc3BhdGNoTWFya0FzRGlydHlBY3Rpb24oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy52aWV3QWRhcHRlci5zZXRPbkNoYW5nZUNhbGxiYWNrKCh2aWV3VmFsdWU6IFRWaWV3VmFsdWUpID0+IHtcbiAgICAgIHRoaXMudmlld1ZhbHVlID0gdmlld1ZhbHVlO1xuXG4gICAgICBpZiAodGhpcy5uZ3J4VXBkYXRlT24gPT09IE5HUlhfVVBEQVRFX09OX1RZUEUuQ0hBTkdFKSB7XG4gICAgICAgIGRpc3BhdGNoU2V0VmFsdWVBY3Rpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudmlld0FkYXB0ZXIuc2V0T25Ub3VjaGVkQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzVG91Y2hlZCAmJiB0aGlzLm5ncnhVcGRhdGVPbiAhPT0gTkdSWF9VUERBVEVfT05fVFlQRS5ORVZFUikge1xuICAgICAgICB0aGlzLmRpc3BhdGNoQWN0aW9uKG5ldyBNYXJrQXNUb3VjaGVkQWN0aW9uKHRoaXMuc3RhdGUuaWQpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubmdyeFVwZGF0ZU9uID09PSBOR1JYX1VQREFURV9PTl9UWVBFLkJMVVIpIHtcbiAgICAgICAgZGlzcGF0Y2hTZXRWYWx1ZUFjdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSB2aWV3IGFnYWluIGFmdGVyIGl0IHdhcyBpbml0aWFsaXplZCBzaW5jZSBzb21lXG4gICAgLy8gY29udHJvbHMgZGVwZW5kIG9uIGNoaWxkIGVsZW1lbnRzIGZvciBzZXR0aW5nIHRoZSB2YWx1ZSAoZS5nLiBzZWxlY3RzKVxuICAgIHRoaXMudmlld0FkYXB0ZXIuc2V0Vmlld1ZhbHVlKHRoaXMudmlld1ZhbHVlKTtcbiAgICBpZiAodGhpcy52aWV3QWRhcHRlci5zZXRJc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLnZpZXdBZGFwdGVyLnNldElzRGlzYWJsZWQodGhpcy5zdGF0ZS5pc0Rpc2FibGVkKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1c2luJylcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXNvdXQnKVxuICBvbkZvY3VzQ2hhbmdlKCkge1xuICAgIGlmICghdGhpcy5mb2N1c1RyYWNraW5nSXNFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaXNDb250cm9sRm9jdXNlZCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudCA9PT0gdGhpcy5kb20hLmFjdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGlzQ29udHJvbEZvY3VzZWQgIT09IHRoaXMuc3RhdGUuaXNGb2N1c2VkKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoQWN0aW9uKGlzQ29udHJvbEZvY3VzZWQgPyBuZXcgRm9jdXNBY3Rpb24odGhpcy5zdGF0ZS5pZCkgOiBuZXcgVW5mb2N1c0FjdGlvbih0aGlzLnN0YXRlLmlkKSk7XG4gICAgfVxuICB9XG59XG4iXX0=