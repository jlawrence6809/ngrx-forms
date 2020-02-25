import * as tslib_1 from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
/**
 * Lists the available status class names based on the property
 * they are depending on.
 */
export var NGRX_STATUS_CLASS_NAMES = {
    isValid: 'ngrx-forms-valid',
    isInvalid: 'ngrx-forms-invalid',
    isDirty: 'ngrx-forms-dirty',
    isPristine: 'ngrx-forms-pristine',
    isTouched: 'ngrx-forms-touched',
    isUntouched: 'ngrx-forms-untouched',
    isSubmitted: 'ngrx-forms-submitted',
    isUnsubmitted: 'ngrx-forms-unsubmitted',
    isValidationPending: 'ngrx-forms-validation-pending',
};
var NgrxStatusCssClassesDirective = /** @class */ (function () {
    function NgrxStatusCssClassesDirective() {
    }
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "ngrxFormControlState", {
        set: function (state) {
            this.state = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "ngrxFormState", {
        set: function (state) {
            this.state = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "isValid", {
        get: function () {
            return this.state.isValid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "isInvalid", {
        get: function () {
            return this.state.isInvalid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "isDirty", {
        get: function () {
            return this.state.isDirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "isPristine", {
        get: function () {
            return this.state.isPristine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "isTouched", {
        get: function () {
            return this.state.isTouched;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "isUntouched", {
        get: function () {
            return this.state.isUntouched;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "isSubmitted", {
        get: function () {
            return this.state.isSubmitted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "isUnsubmitted", {
        get: function () {
            return this.state.isUnsubmitted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgrxStatusCssClassesDirective.prototype, "isValidationPending", {
        get: function () {
            return this.state.isValidationPending;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], NgrxStatusCssClassesDirective.prototype, "ngrxFormControlState", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], NgrxStatusCssClassesDirective.prototype, "ngrxFormState", null);
    tslib_1.__decorate([
        HostBinding("class." + NGRX_STATUS_CLASS_NAMES.isValid),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], NgrxStatusCssClassesDirective.prototype, "isValid", null);
    tslib_1.__decorate([
        HostBinding("class." + NGRX_STATUS_CLASS_NAMES.isInvalid),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], NgrxStatusCssClassesDirective.prototype, "isInvalid", null);
    tslib_1.__decorate([
        HostBinding("class." + NGRX_STATUS_CLASS_NAMES.isDirty),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], NgrxStatusCssClassesDirective.prototype, "isDirty", null);
    tslib_1.__decorate([
        HostBinding("class." + NGRX_STATUS_CLASS_NAMES.isPristine),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], NgrxStatusCssClassesDirective.prototype, "isPristine", null);
    tslib_1.__decorate([
        HostBinding("class." + NGRX_STATUS_CLASS_NAMES.isTouched),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], NgrxStatusCssClassesDirective.prototype, "isTouched", null);
    tslib_1.__decorate([
        HostBinding("class." + NGRX_STATUS_CLASS_NAMES.isUntouched),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], NgrxStatusCssClassesDirective.prototype, "isUntouched", null);
    tslib_1.__decorate([
        HostBinding("class." + NGRX_STATUS_CLASS_NAMES.isSubmitted),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], NgrxStatusCssClassesDirective.prototype, "isSubmitted", null);
    tslib_1.__decorate([
        HostBinding("class." + NGRX_STATUS_CLASS_NAMES.isUnsubmitted),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], NgrxStatusCssClassesDirective.prototype, "isUnsubmitted", null);
    tslib_1.__decorate([
        HostBinding("class." + NGRX_STATUS_CLASS_NAMES.isValidationPending),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [])
    ], NgrxStatusCssClassesDirective.prototype, "isValidationPending", null);
    NgrxStatusCssClassesDirective = tslib_1.__decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'form[ngrxFormState],[ngrxFormControlState]',
        })
    ], NgrxStatusCssClassesDirective);
    return NgrxStatusCssClassesDirective;
}());
export { NgrxStatusCssClassesDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWNzcy1jbGFzc2VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvc3RhdHVzLWNzcy1jbGFzc2VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzlEOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxJQUFNLHVCQUF1QixHQUFHO0lBQ3JDLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0IsU0FBUyxFQUFFLG9CQUFvQjtJQUMvQixPQUFPLEVBQUUsa0JBQWtCO0lBQzNCLFVBQVUsRUFBRSxxQkFBcUI7SUFDakMsU0FBUyxFQUFFLG9CQUFvQjtJQUMvQixXQUFXLEVBQUUsc0JBQXNCO0lBQ25DLFdBQVcsRUFBRSxzQkFBc0I7SUFDbkMsYUFBYSxFQUFFLHdCQUF3QjtJQUN2QyxtQkFBbUIsRUFBRSwrQkFBK0I7Q0FDckQsQ0FBQztBQU1GO0lBQUE7SUF5REEsQ0FBQztJQXJEQyxzQkFBSSwrREFBb0I7YUFBeEIsVUFBeUIsS0FBZ0M7WUFDdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFHRCxzQkFBSSx3REFBYTthQUFqQixVQUFrQixLQUFnQztZQUNoRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLGtEQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksb0RBQVM7YUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFHRCxzQkFBSSxrREFBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLHFEQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksb0RBQVM7YUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFHRCxzQkFBSSxzREFBVzthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUdELHNCQUFJLHNEQUFXO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksd0RBQWE7YUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksOERBQW1CO2FBQXZCO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBcEREO1FBREMsS0FBSyxFQUFFOzs7NkVBR1A7SUFHRDtRQURDLEtBQUssRUFBRTs7O3NFQUdQO0lBR0Q7UUFEQyxXQUFXLENBQUMsV0FBUyx1QkFBdUIsQ0FBQyxPQUFTLENBQUM7OztnRUFHdkQ7SUFHRDtRQURDLFdBQVcsQ0FBQyxXQUFTLHVCQUF1QixDQUFDLFNBQVcsQ0FBQzs7O2tFQUd6RDtJQUdEO1FBREMsV0FBVyxDQUFDLFdBQVMsdUJBQXVCLENBQUMsT0FBUyxDQUFDOzs7Z0VBR3ZEO0lBR0Q7UUFEQyxXQUFXLENBQUMsV0FBUyx1QkFBdUIsQ0FBQyxVQUFZLENBQUM7OzttRUFHMUQ7SUFHRDtRQURDLFdBQVcsQ0FBQyxXQUFTLHVCQUF1QixDQUFDLFNBQVcsQ0FBQzs7O2tFQUd6RDtJQUdEO1FBREMsV0FBVyxDQUFDLFdBQVMsdUJBQXVCLENBQUMsV0FBYSxDQUFDOzs7b0VBRzNEO0lBR0Q7UUFEQyxXQUFXLENBQUMsV0FBUyx1QkFBdUIsQ0FBQyxXQUFhLENBQUM7OztvRUFHM0Q7SUFHRDtRQURDLFdBQVcsQ0FBQyxXQUFTLHVCQUF1QixDQUFDLGFBQWUsQ0FBQzs7O3NFQUc3RDtJQUdEO1FBREMsV0FBVyxDQUFDLFdBQVMsdUJBQXVCLENBQUMsbUJBQXFCLENBQUM7Ozs0RUFHbkU7SUF4RFUsNkJBQTZCO1FBSnpDLFNBQVMsQ0FBQztZQUNULDhDQUE4QztZQUM5QyxRQUFRLEVBQUUsNENBQTRDO1NBQ3ZELENBQUM7T0FDVyw2QkFBNkIsQ0F5RHpDO0lBQUQsb0NBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXpEWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sU3RhdGUgfSBmcm9tICcuL3N0YXRlJztcblxuLyoqXG4gKiBMaXN0cyB0aGUgYXZhaWxhYmxlIHN0YXR1cyBjbGFzcyBuYW1lcyBiYXNlZCBvbiB0aGUgcHJvcGVydHlcbiAqIHRoZXkgYXJlIGRlcGVuZGluZyBvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IE5HUlhfU1RBVFVTX0NMQVNTX05BTUVTID0ge1xuICBpc1ZhbGlkOiAnbmdyeC1mb3Jtcy12YWxpZCcsXG4gIGlzSW52YWxpZDogJ25ncngtZm9ybXMtaW52YWxpZCcsXG4gIGlzRGlydHk6ICduZ3J4LWZvcm1zLWRpcnR5JyxcbiAgaXNQcmlzdGluZTogJ25ncngtZm9ybXMtcHJpc3RpbmUnLFxuICBpc1RvdWNoZWQ6ICduZ3J4LWZvcm1zLXRvdWNoZWQnLFxuICBpc1VudG91Y2hlZDogJ25ncngtZm9ybXMtdW50b3VjaGVkJyxcbiAgaXNTdWJtaXR0ZWQ6ICduZ3J4LWZvcm1zLXN1Ym1pdHRlZCcsXG4gIGlzVW5zdWJtaXR0ZWQ6ICduZ3J4LWZvcm1zLXVuc3VibWl0dGVkJyxcbiAgaXNWYWxpZGF0aW9uUGVuZGluZzogJ25ncngtZm9ybXMtdmFsaWRhdGlvbi1wZW5kaW5nJyxcbn07XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZm9ybVtuZ3J4Rm9ybVN0YXRlXSxbbmdyeEZvcm1Db250cm9sU3RhdGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgTmdyeFN0YXR1c0Nzc0NsYXNzZXNEaXJlY3RpdmUge1xuICBwcml2YXRlIHN0YXRlOiBBYnN0cmFjdENvbnRyb2xTdGF0ZTxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuZ3J4Rm9ybUNvbnRyb2xTdGF0ZShzdGF0ZTogQWJzdHJhY3RDb250cm9sU3RhdGU8YW55Pikge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuZ3J4Rm9ybVN0YXRlKHN0YXRlOiBBYnN0cmFjdENvbnRyb2xTdGF0ZTxhbnk+KSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKGBjbGFzcy4ke05HUlhfU1RBVFVTX0NMQVNTX05BTUVTLmlzVmFsaWR9YClcbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNWYWxpZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuJHtOR1JYX1NUQVRVU19DTEFTU19OQU1FUy5pc0ludmFsaWR9YClcbiAgZ2V0IGlzSW52YWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pc0ludmFsaWQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLiR7TkdSWF9TVEFUVVNfQ0xBU1NfTkFNRVMuaXNEaXJ0eX1gKVxuICBnZXQgaXNEaXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pc0RpcnR5O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKGBjbGFzcy4ke05HUlhfU1RBVFVTX0NMQVNTX05BTUVTLmlzUHJpc3RpbmV9YClcbiAgZ2V0IGlzUHJpc3RpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNQcmlzdGluZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuJHtOR1JYX1NUQVRVU19DTEFTU19OQU1FUy5pc1RvdWNoZWR9YClcbiAgZ2V0IGlzVG91Y2hlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pc1RvdWNoZWQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLiR7TkdSWF9TVEFUVVNfQ0xBU1NfTkFNRVMuaXNVbnRvdWNoZWR9YClcbiAgZ2V0IGlzVW50b3VjaGVkKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmlzVW50b3VjaGVkO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKGBjbGFzcy4ke05HUlhfU1RBVFVTX0NMQVNTX05BTUVTLmlzU3VibWl0dGVkfWApXG4gIGdldCBpc1N1Ym1pdHRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pc1N1Ym1pdHRlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuJHtOR1JYX1NUQVRVU19DTEFTU19OQU1FUy5pc1Vuc3VibWl0dGVkfWApXG4gIGdldCBpc1Vuc3VibWl0dGVkKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmlzVW5zdWJtaXR0ZWQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLiR7TkdSWF9TVEFUVVNfQ0xBU1NfTkFNRVMuaXNWYWxpZGF0aW9uUGVuZGluZ31gKVxuICBnZXQgaXNWYWxpZGF0aW9uUGVuZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pc1ZhbGlkYXRpb25QZW5kaW5nO1xuICB9XG59XG4iXX0=