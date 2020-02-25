import * as tslib_1 from "tslib";
import { Directive, HostListener, Inject, Input, Optional } from '@angular/core';
import { ActionsSubject } from '@ngrx/store';
import { MarkAsSubmittedAction } from '../actions';
let NgrxFormDirective = class NgrxFormDirective {
    constructor(actionsSubject) {
        this.actionsSubject = actionsSubject;
        this.actionsSubject = actionsSubject;
    }
    dispatchAction(action) {
        if (this.actionsSubject !== null) {
            this.actionsSubject.next(action);
        }
        else {
            throw new Error('ActionsSubject must be present in order to dispatch actions!');
        }
    }
    ngOnInit() {
        if (!this.state) {
            throw new Error('The form state must not be undefined!');
        }
    }
    onSubmit(event) {
        event.preventDefault();
        if (this.state.isUnsubmitted) {
            this.dispatchAction(new MarkAsSubmittedAction(this.state.id));
        }
    }
};
tslib_1.__decorate([
    Input('ngrxFormState'),
    tslib_1.__metadata("design:type", Object)
], NgrxFormDirective.prototype, "state", void 0);
tslib_1.__decorate([
    HostListener('submit', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], NgrxFormDirective.prototype, "onSubmit", null);
NgrxFormDirective = tslib_1.__decorate([
    Directive({
        // tslint:disable-next-line:directive-selector
        selector: 'form:not([ngrxFormsAction])[ngrxFormState]',
    }),
    tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(ActionsSubject)),
    tslib_1.__metadata("design:paramtypes", [Object])
], NgrxFormDirective);
export { NgrxFormDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy9ncm91cC9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQVUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFN0MsT0FBTyxFQUFXLHFCQUFxQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBWTVELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBSTVCLFlBQzhDLGNBQXFDO1FBQXJDLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUVqRixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN2QyxDQUFDO0lBRVMsY0FBYyxDQUFDLE1BQXVCO1FBQzlDLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxJQUFJLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsOERBQThELENBQUMsQ0FBQztTQUNqRjtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDO0lBR0QsUUFBUSxDQUFDLEtBQWtCO1FBQ3pCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDL0Q7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQTdCeUI7SUFBdkIsS0FBSyxDQUFDLGVBQWUsQ0FBQzs7Z0RBQStCO0FBdUJ0RDtJQURDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OztpREFNbEM7QUE5QlUsaUJBQWlCO0lBSjdCLFNBQVMsQ0FBQztRQUNULDhDQUE4QztRQUM5QyxRQUFRLEVBQUUsNENBQTRDO0tBQ3ZELENBQUM7SUFNRyxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQTs7R0FMMUIsaUJBQWlCLENBK0I3QjtTQS9CWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBJbnB1dCwgT25Jbml0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9uc1N1YmplY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IEFjdGlvbnMsIE1hcmtBc1N1Ym1pdHRlZEFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgRm9ybUdyb3VwU3RhdGUgfSBmcm9tICcuLi9zdGF0ZSc7XG5cbi8vIHRoaXMgaW50ZXJmYWNlIGp1c3QgZXhpc3RzIHRvIHByZXZlbnQgYSBkaXJlY3QgcmVmZXJlbmNlIHRvXG4vLyBgRXZlbnRgIGluIG91ciBjb2RlLCB3aGljaCBvdGhlcndpc2UgY2F1c2VzIGlzc3VlcyBpbiBOYXRpdmVTY3JpcHRcbi8vIGFwcGxpY2F0aW9uc1xuaW50ZXJmYWNlIEN1c3RvbUV2ZW50IGV4dGVuZHMgRXZlbnQgeyB9XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZm9ybTpub3QoW25ncnhGb3Jtc0FjdGlvbl0pW25ncnhGb3JtU3RhdGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgTmdyeEZvcm1EaXJlY3RpdmU8VFZhbHVlIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiBhbnkgfT4gaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnbmdyeEZvcm1TdGF0ZScpIHN0YXRlOiBGb3JtR3JvdXBTdGF0ZTxUVmFsdWU+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQWN0aW9uc1N1YmplY3QpIHByaXZhdGUgYWN0aW9uc1N1YmplY3Q6IEFjdGlvbnNTdWJqZWN0IHwgbnVsbFxuICApIHtcbiAgICB0aGlzLmFjdGlvbnNTdWJqZWN0ID0gYWN0aW9uc1N1YmplY3Q7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGlzcGF0Y2hBY3Rpb24oYWN0aW9uOiBBY3Rpb25zPFRWYWx1ZT4pIHtcbiAgICBpZiAodGhpcy5hY3Rpb25zU3ViamVjdCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5hY3Rpb25zU3ViamVjdC5uZXh0KGFjdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9uc1N1YmplY3QgbXVzdCBiZSBwcmVzZW50IGluIG9yZGVyIHRvIGRpc3BhdGNoIGFjdGlvbnMhJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBmb3JtIHN0YXRlIG11c3Qgbm90IGJlIHVuZGVmaW5lZCEnKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdzdWJtaXQnLCBbJyRldmVudCddKVxuICBvblN1Ym1pdChldmVudDogQ3VzdG9tRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLnN0YXRlLmlzVW5zdWJtaXR0ZWQpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hBY3Rpb24obmV3IE1hcmtBc1N1Ym1pdHRlZEFjdGlvbih0aGlzLnN0YXRlLmlkKSk7XG4gICAgfVxuICB9XG59XG4iXX0=