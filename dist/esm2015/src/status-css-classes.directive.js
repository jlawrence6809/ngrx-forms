import * as tslib_1 from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
/**
 * Lists the available status class names based on the property
 * they are depending on.
 */
export const NGRX_STATUS_CLASS_NAMES = {
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
let NgrxStatusCssClassesDirective = class NgrxStatusCssClassesDirective {
    set ngrxFormControlState(state) {
        this.state = state;
    }
    set ngrxFormState(state) {
        this.state = state;
    }
    get isValid() {
        return this.state.isValid;
    }
    get isInvalid() {
        return this.state.isInvalid;
    }
    get isDirty() {
        return this.state.isDirty;
    }
    get isPristine() {
        return this.state.isPristine;
    }
    get isTouched() {
        return this.state.isTouched;
    }
    get isUntouched() {
        return this.state.isUntouched;
    }
    get isSubmitted() {
        return this.state.isSubmitted;
    }
    get isUnsubmitted() {
        return this.state.isUnsubmitted;
    }
    get isValidationPending() {
        return this.state.isValidationPending;
    }
};
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
    HostBinding(`class.${NGRX_STATUS_CLASS_NAMES.isValid}`),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], NgrxStatusCssClassesDirective.prototype, "isValid", null);
tslib_1.__decorate([
    HostBinding(`class.${NGRX_STATUS_CLASS_NAMES.isInvalid}`),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], NgrxStatusCssClassesDirective.prototype, "isInvalid", null);
tslib_1.__decorate([
    HostBinding(`class.${NGRX_STATUS_CLASS_NAMES.isDirty}`),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], NgrxStatusCssClassesDirective.prototype, "isDirty", null);
tslib_1.__decorate([
    HostBinding(`class.${NGRX_STATUS_CLASS_NAMES.isPristine}`),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], NgrxStatusCssClassesDirective.prototype, "isPristine", null);
tslib_1.__decorate([
    HostBinding(`class.${NGRX_STATUS_CLASS_NAMES.isTouched}`),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], NgrxStatusCssClassesDirective.prototype, "isTouched", null);
tslib_1.__decorate([
    HostBinding(`class.${NGRX_STATUS_CLASS_NAMES.isUntouched}`),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], NgrxStatusCssClassesDirective.prototype, "isUntouched", null);
tslib_1.__decorate([
    HostBinding(`class.${NGRX_STATUS_CLASS_NAMES.isSubmitted}`),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], NgrxStatusCssClassesDirective.prototype, "isSubmitted", null);
tslib_1.__decorate([
    HostBinding(`class.${NGRX_STATUS_CLASS_NAMES.isUnsubmitted}`),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], NgrxStatusCssClassesDirective.prototype, "isUnsubmitted", null);
tslib_1.__decorate([
    HostBinding(`class.${NGRX_STATUS_CLASS_NAMES.isValidationPending}`),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [])
], NgrxStatusCssClassesDirective.prototype, "isValidationPending", null);
NgrxStatusCssClassesDirective = tslib_1.__decorate([
    Directive({
        // tslint:disable-next-line:directive-selector
        selector: 'form[ngrxFormState],[ngrxFormControlState]',
    })
], NgrxStatusCssClassesDirective);
export { NgrxStatusCssClassesDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWNzcy1jbGFzc2VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvc3RhdHVzLWNzcy1jbGFzc2VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzlEOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFHO0lBQ3JDLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0IsU0FBUyxFQUFFLG9CQUFvQjtJQUMvQixPQUFPLEVBQUUsa0JBQWtCO0lBQzNCLFVBQVUsRUFBRSxxQkFBcUI7SUFDakMsU0FBUyxFQUFFLG9CQUFvQjtJQUMvQixXQUFXLEVBQUUsc0JBQXNCO0lBQ25DLFdBQVcsRUFBRSxzQkFBc0I7SUFDbkMsYUFBYSxFQUFFLHdCQUF3QjtJQUN2QyxtQkFBbUIsRUFBRSwrQkFBK0I7Q0FDckQsQ0FBQztBQU1GLElBQWEsNkJBQTZCLEdBQTFDLE1BQWEsNkJBQTZCO0lBSXhDLElBQUksb0JBQW9CLENBQUMsS0FBZ0M7UUFDdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUdELElBQUksYUFBYSxDQUFDLEtBQWdDO1FBQ2hELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFHRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUFHRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFHRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUFHRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFHRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFHRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ2hDLENBQUM7SUFHRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ2hDLENBQUM7SUFHRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO0lBQ2xDLENBQUM7SUFHRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7SUFDeEMsQ0FBQztDQUNGLENBQUE7QUFyREM7SUFEQyxLQUFLLEVBQUU7Ozt5RUFHUDtBQUdEO0lBREMsS0FBSyxFQUFFOzs7a0VBR1A7QUFHRDtJQURDLFdBQVcsQ0FBQyxTQUFTLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxDQUFDOzs7NERBR3ZEO0FBR0Q7SUFEQyxXQUFXLENBQUMsU0FBUyx1QkFBdUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7OzhEQUd6RDtBQUdEO0lBREMsV0FBVyxDQUFDLFNBQVMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLENBQUM7Ozs0REFHdkQ7QUFHRDtJQURDLFdBQVcsQ0FBQyxTQUFTLHVCQUF1QixDQUFDLFVBQVUsRUFBRSxDQUFDOzs7K0RBRzFEO0FBR0Q7SUFEQyxXQUFXLENBQUMsU0FBUyx1QkFBdUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7OzhEQUd6RDtBQUdEO0lBREMsV0FBVyxDQUFDLFNBQVMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLENBQUM7OztnRUFHM0Q7QUFHRDtJQURDLFdBQVcsQ0FBQyxTQUFTLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDOzs7Z0VBRzNEO0FBR0Q7SUFEQyxXQUFXLENBQUMsU0FBUyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7O2tFQUc3RDtBQUdEO0lBREMsV0FBVyxDQUFDLFNBQVMsdUJBQXVCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzs7O3dFQUduRTtBQXhEVSw2QkFBNkI7SUFKekMsU0FBUyxDQUFDO1FBQ1QsOENBQThDO1FBQzlDLFFBQVEsRUFBRSw0Q0FBNEM7S0FDdkQsQ0FBQztHQUNXLDZCQUE2QixDQXlEekM7U0F6RFksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbFN0YXRlIH0gZnJvbSAnLi9zdGF0ZSc7XG5cbi8qKlxuICogTGlzdHMgdGhlIGF2YWlsYWJsZSBzdGF0dXMgY2xhc3MgbmFtZXMgYmFzZWQgb24gdGhlIHByb3BlcnR5XG4gKiB0aGV5IGFyZSBkZXBlbmRpbmcgb24uXG4gKi9cbmV4cG9ydCBjb25zdCBOR1JYX1NUQVRVU19DTEFTU19OQU1FUyA9IHtcbiAgaXNWYWxpZDogJ25ncngtZm9ybXMtdmFsaWQnLFxuICBpc0ludmFsaWQ6ICduZ3J4LWZvcm1zLWludmFsaWQnLFxuICBpc0RpcnR5OiAnbmdyeC1mb3Jtcy1kaXJ0eScsXG4gIGlzUHJpc3RpbmU6ICduZ3J4LWZvcm1zLXByaXN0aW5lJyxcbiAgaXNUb3VjaGVkOiAnbmdyeC1mb3Jtcy10b3VjaGVkJyxcbiAgaXNVbnRvdWNoZWQ6ICduZ3J4LWZvcm1zLXVudG91Y2hlZCcsXG4gIGlzU3VibWl0dGVkOiAnbmdyeC1mb3Jtcy1zdWJtaXR0ZWQnLFxuICBpc1Vuc3VibWl0dGVkOiAnbmdyeC1mb3Jtcy11bnN1Ym1pdHRlZCcsXG4gIGlzVmFsaWRhdGlvblBlbmRpbmc6ICduZ3J4LWZvcm1zLXZhbGlkYXRpb24tcGVuZGluZycsXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2Zvcm1bbmdyeEZvcm1TdGF0ZV0sW25ncnhGb3JtQ29udHJvbFN0YXRlXScsXG59KVxuZXhwb3J0IGNsYXNzIE5ncnhTdGF0dXNDc3NDbGFzc2VzRGlyZWN0aXZlIHtcbiAgcHJpdmF0ZSBzdGF0ZTogQWJzdHJhY3RDb250cm9sU3RhdGU8YW55PjtcblxuICBASW5wdXQoKVxuICBzZXQgbmdyeEZvcm1Db250cm9sU3RhdGUoc3RhdGU6IEFic3RyYWN0Q29udHJvbFN0YXRlPGFueT4pIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbmdyeEZvcm1TdGF0ZShzdGF0ZTogQWJzdHJhY3RDb250cm9sU3RhdGU8YW55Pikge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuJHtOR1JYX1NUQVRVU19DTEFTU19OQU1FUy5pc1ZhbGlkfWApXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmlzVmFsaWQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLiR7TkdSWF9TVEFUVVNfQ0xBU1NfTkFNRVMuaXNJbnZhbGlkfWApXG4gIGdldCBpc0ludmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNJbnZhbGlkO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKGBjbGFzcy4ke05HUlhfU1RBVFVTX0NMQVNTX05BTUVTLmlzRGlydHl9YClcbiAgZ2V0IGlzRGlydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNEaXJ0eTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuJHtOR1JYX1NUQVRVU19DTEFTU19OQU1FUy5pc1ByaXN0aW5lfWApXG4gIGdldCBpc1ByaXN0aW5lKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmlzUHJpc3RpbmU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLiR7TkdSWF9TVEFUVVNfQ0xBU1NfTkFNRVMuaXNUb3VjaGVkfWApXG4gIGdldCBpc1RvdWNoZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNUb3VjaGVkO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKGBjbGFzcy4ke05HUlhfU1RBVFVTX0NMQVNTX05BTUVTLmlzVW50b3VjaGVkfWApXG4gIGdldCBpc1VudG91Y2hlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pc1VudG91Y2hlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuJHtOR1JYX1NUQVRVU19DTEFTU19OQU1FUy5pc1N1Ym1pdHRlZH1gKVxuICBnZXQgaXNTdWJtaXR0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNTdWJtaXR0ZWQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLiR7TkdSWF9TVEFUVVNfQ0xBU1NfTkFNRVMuaXNVbnN1Ym1pdHRlZH1gKVxuICBnZXQgaXNVbnN1Ym1pdHRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pc1Vuc3VibWl0dGVkO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKGBjbGFzcy4ke05HUlhfU1RBVFVTX0NMQVNTX05BTUVTLmlzVmFsaWRhdGlvblBlbmRpbmd9YClcbiAgZ2V0IGlzVmFsaWRhdGlvblBlbmRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaXNWYWxpZGF0aW9uUGVuZGluZztcbiAgfVxufVxuIl19