import * as tslib_1 from "tslib";
import { Directive, HostListener, Inject, Input, Optional } from '@angular/core';
import { ActionsSubject } from '@ngrx/store';
import { MarkAsSubmittedAction } from '../actions';
var NgrxFormDirective = /** @class */ (function () {
    function NgrxFormDirective(actionsSubject) {
        this.actionsSubject = actionsSubject;
        this.actionsSubject = actionsSubject;
    }
    NgrxFormDirective.prototype.dispatchAction = function (action) {
        if (this.actionsSubject !== null) {
            this.actionsSubject.next(action);
        }
        else {
            throw new Error('ActionsSubject must be present in order to dispatch actions!');
        }
    };
    NgrxFormDirective.prototype.ngOnInit = function () {
        if (!this.state) {
            throw new Error('The form state must not be undefined!');
        }
    };
    NgrxFormDirective.prototype.onSubmit = function (event) {
        event.preventDefault();
        if (this.state.isUnsubmitted) {
            this.dispatchAction(new MarkAsSubmittedAction(this.state.id));
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
    return NgrxFormDirective;
}());
export { NgrxFormDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy9ncm91cC9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQVUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFN0MsT0FBTyxFQUFXLHFCQUFxQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBWTVEO0lBSUUsMkJBQzhDLGNBQXFDO1FBQXJDLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUVqRixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN2QyxDQUFDO0lBRVMsMENBQWMsR0FBeEIsVUFBeUIsTUFBdUI7UUFDOUMsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLElBQUksRUFBRTtZQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsQzthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO1NBQ2pGO0lBQ0gsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztTQUMxRDtJQUNILENBQUM7SUFHRCxvQ0FBUSxHQUFSLFVBQVMsS0FBa0I7UUFDekIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvRDtJQUNILENBQUM7SUE1QnVCO1FBQXZCLEtBQUssQ0FBQyxlQUFlLENBQUM7O29EQUErQjtJQXVCdEQ7UUFEQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7cURBTWxDO0lBOUJVLGlCQUFpQjtRQUo3QixTQUFTLENBQUM7WUFDVCw4Q0FBOEM7WUFDOUMsUUFBUSxFQUFFLDRDQUE0QztTQUN2RCxDQUFDO1FBTUcsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUE7O09BTDFCLGlCQUFpQixDQStCN0I7SUFBRCx3QkFBQztDQUFBLEFBL0JELElBK0JDO1NBL0JZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbmplY3QsIElucHV0LCBPbkluaXQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zU3ViamVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgQWN0aW9ucywgTWFya0FzU3VibWl0dGVkQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBGb3JtR3JvdXBTdGF0ZSB9IGZyb20gJy4uL3N0YXRlJztcblxuLy8gdGhpcyBpbnRlcmZhY2UganVzdCBleGlzdHMgdG8gcHJldmVudCBhIGRpcmVjdCByZWZlcmVuY2UgdG9cbi8vIGBFdmVudGAgaW4gb3VyIGNvZGUsIHdoaWNoIG90aGVyd2lzZSBjYXVzZXMgaXNzdWVzIGluIE5hdGl2ZVNjcmlwdFxuLy8gYXBwbGljYXRpb25zXG5pbnRlcmZhY2UgQ3VzdG9tRXZlbnQgZXh0ZW5kcyBFdmVudCB7IH1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdmb3JtOm5vdChbbmdyeEZvcm1zQWN0aW9uXSlbbmdyeEZvcm1TdGF0ZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3J4Rm9ybURpcmVjdGl2ZTxUVmFsdWUgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IGFueSB9PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1pbnB1dC1yZW5hbWVcbiAgQElucHV0KCduZ3J4Rm9ybVN0YXRlJykgc3RhdGU6IEZvcm1Hcm91cFN0YXRlPFRWYWx1ZT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBY3Rpb25zU3ViamVjdCkgcHJpdmF0ZSBhY3Rpb25zU3ViamVjdDogQWN0aW9uc1N1YmplY3QgfCBudWxsXG4gICkge1xuICAgIHRoaXMuYWN0aW9uc1N1YmplY3QgPSBhY3Rpb25zU3ViamVjdDtcbiAgfVxuXG4gIHByb3RlY3RlZCBkaXNwYXRjaEFjdGlvbihhY3Rpb246IEFjdGlvbnM8VFZhbHVlPikge1xuICAgIGlmICh0aGlzLmFjdGlvbnNTdWJqZWN0ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmFjdGlvbnNTdWJqZWN0Lm5leHQoYWN0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zU3ViamVjdCBtdXN0IGJlIHByZXNlbnQgaW4gb3JkZXIgdG8gZGlzcGF0Y2ggYWN0aW9ucyEnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGZvcm0gc3RhdGUgbXVzdCBub3QgYmUgdW5kZWZpbmVkIScpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3N1Ym1pdCcsIFsnJGV2ZW50J10pXG4gIG9uU3VibWl0KGV2ZW50OiBDdXN0b21FdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNVbnN1Ym1pdHRlZCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEFjdGlvbihuZXcgTWFya0FzU3VibWl0dGVkQWN0aW9uKHRoaXMuc3RhdGUuaWQpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==