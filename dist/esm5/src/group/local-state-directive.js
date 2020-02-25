import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Output } from '@angular/core';
import { NgrxFormDirective } from './directive';
var NgrxLocalFormDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NgrxLocalFormDirective, _super);
    function NgrxLocalFormDirective() {
        var _this = _super.call(this, null) || this;
        _this.ngrxFormsAction = new EventEmitter();
        return _this;
    }
    NgrxLocalFormDirective.prototype.dispatchAction = function (action) {
        this.ngrxFormsAction.emit(action);
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], NgrxLocalFormDirective.prototype, "ngrxFormsAction", void 0);
    NgrxLocalFormDirective = tslib_1.__decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'form[ngrxFormState][ngrxFormsAction]',
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NgrxLocalFormDirective);
    return NgrxLocalFormDirective;
}(NgrxFormDirective));
export { NgrxLocalFormDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RhdGUtZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy9ncm91cC9sb2NhbC1zdGF0ZS1kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFNaEQ7SUFDVSxrREFBeUI7SUFJakM7UUFBQSxZQUNFLGtCQUFNLElBQUksQ0FBQyxTQUNaO1FBSlMscUJBQWUsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQzs7SUFJaEUsQ0FBQztJQUVTLCtDQUFjLEdBQXhCLFVBQXlCLE1BQXVCO1FBQzlDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFSUztRQUFULE1BQU0sRUFBRTs7bUVBQXVEO0lBSHJELHNCQUFzQjtRQUpsQyxTQUFTLENBQUM7WUFDVCw4Q0FBOEM7WUFDOUMsUUFBUSxFQUFFLHNDQUFzQztTQUNqRCxDQUFDOztPQUNXLHNCQUFzQixDQVlsQztJQUFELDZCQUFDO0NBQUEsQUFaRCxDQUNVLGlCQUFpQixHQVcxQjtTQVpZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgTmdyeEZvcm1EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZm9ybVtuZ3J4Rm9ybVN0YXRlXVtuZ3J4Rm9ybXNBY3Rpb25dJyxcbn0pXG5leHBvcnQgY2xhc3MgTmdyeExvY2FsRm9ybURpcmVjdGl2ZTxUVmFsdWUgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IGFueSB9PlxuICBleHRlbmRzIE5ncnhGb3JtRGlyZWN0aXZlPFRWYWx1ZT4ge1xuXG4gIEBPdXRwdXQoKSBuZ3J4Rm9ybXNBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPEFjdGlvbnM8VFZhbHVlPj4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihudWxsKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkaXNwYXRjaEFjdGlvbihhY3Rpb246IEFjdGlvbnM8VFZhbHVlPikge1xuICAgIHRoaXMubmdyeEZvcm1zQWN0aW9uLmVtaXQoYWN0aW9uKTtcbiAgfVxufVxuIl19