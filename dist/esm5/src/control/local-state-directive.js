import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, EventEmitter, Inject, Optional, Output, Self, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGRX_FORM_VIEW_ADAPTER } from '../view-adapter/view-adapter';
import { NgrxFormControlDirective } from './directive';
var NgrxLocalFormControlDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NgrxLocalFormControlDirective, _super);
    function NgrxLocalFormControlDirective(el, dom, viewAdapters, valueAccessors) {
        var _this = _super.call(this, el, dom, null, viewAdapters, valueAccessors) || this;
        _this.ngrxFormsAction = new EventEmitter();
        return _this;
    }
    NgrxLocalFormControlDirective.prototype.dispatchAction = function (action) {
        this.ngrxFormsAction.emit(action);
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], NgrxLocalFormControlDirective.prototype, "ngrxFormsAction", void 0);
    NgrxLocalFormControlDirective = tslib_1.__decorate([
        Directive({
            // tslint:disable-next-line:directive-selector
            selector: '[ngrxFormControlState][ngrxFormsAction]',
        }),
        tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(DOCUMENT)),
        tslib_1.__param(2, Self()), tslib_1.__param(2, Optional()), tslib_1.__param(2, Inject(NGRX_FORM_VIEW_ADAPTER)),
        tslib_1.__param(3, Self()), tslib_1.__param(3, Optional()), tslib_1.__param(3, Inject(NG_VALUE_ACCESSOR)),
        tslib_1.__metadata("design:paramtypes", [ElementRef, Object, Array, Array])
    ], NgrxLocalFormControlDirective);
    return NgrxLocalFormControlDirective;
}(NgrxFormControlDirective));
export { NgrxLocalFormControlDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RhdGUtZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy9jb250cm9sL2xvY2FsLXN0YXRlLWRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEdBQ0wsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXpFLE9BQU8sRUFBbUIsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RixPQUFPLEVBQVksd0JBQXdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFNakU7SUFDVSx5REFBaUQ7SUFJekQsdUNBQ0UsRUFBYyxFQUNnQixHQUFvQixFQUNFLFlBQStCLEVBQ3BDLGNBQXNDO1FBSnZGLFlBTUUsa0JBQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLGNBQWMsQ0FBQyxTQUNuRDtRQVRTLHFCQUFlLEdBQUcsSUFBSSxZQUFZLEVBQXdCLENBQUM7O0lBU3JFLENBQUM7SUFFUyxzREFBYyxHQUF4QixVQUF5QixNQUE0QjtRQUNuRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBYlM7UUFBVCxNQUFNLEVBQUU7OzBFQUE0RDtJQUgxRCw2QkFBNkI7UUFKekMsU0FBUyxDQUFDO1lBQ1QsOENBQThDO1lBQzlDLFFBQVEsRUFBRSx5Q0FBeUM7U0FDcEQsQ0FBQztRQVFHLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzVCLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUNsRCxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUE7aURBSDFDLFVBQVU7T0FOTCw2QkFBNkIsQ0FpQnpDO0lBQUQsb0NBQUM7Q0FBQSxBQWpCRCxDQUNVLHdCQUF3QixHQWdCakM7U0FqQlksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IEZvcm1Db250cm9sVmFsdWVUeXBlcyB9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7IEZvcm1WaWV3QWRhcHRlciwgTkdSWF9GT1JNX1ZJRVdfQURBUFRFUiB9IGZyb20gJy4uL3ZpZXctYWRhcHRlci92aWV3LWFkYXB0ZXInO1xuaW1wb3J0IHsgRG9jdW1lbnQsIE5ncnhGb3JtQ29udHJvbERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbmdyeEZvcm1Db250cm9sU3RhdGVdW25ncnhGb3Jtc0FjdGlvbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3J4TG9jYWxGb3JtQ29udHJvbERpcmVjdGl2ZTxUU3RhdGVWYWx1ZSBleHRlbmRzIEZvcm1Db250cm9sVmFsdWVUeXBlcywgVFZpZXdWYWx1ZSA9IFRTdGF0ZVZhbHVlPlxuICBleHRlbmRzIE5ncnhGb3JtQ29udHJvbERpcmVjdGl2ZTxUU3RhdGVWYWx1ZSwgVFZpZXdWYWx1ZT4ge1xuXG4gIEBPdXRwdXQoKSBuZ3J4Rm9ybXNBY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyPEFjdGlvbnM8VFN0YXRlVmFsdWU+PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIGRvbTogRG9jdW1lbnQgfCBudWxsLFxuICAgIEBTZWxmKCkgQE9wdGlvbmFsKCkgQEluamVjdChOR1JYX0ZPUk1fVklFV19BREFQVEVSKSB2aWV3QWRhcHRlcnM6IEZvcm1WaWV3QWRhcHRlcltdLFxuICAgIEBTZWxmKCkgQE9wdGlvbmFsKCkgQEluamVjdChOR19WQUxVRV9BQ0NFU1NPUikgdmFsdWVBY2Nlc3NvcnM6IENvbnRyb2xWYWx1ZUFjY2Vzc29yW10sXG4gICkge1xuICAgIHN1cGVyKGVsLCBkb20sIG51bGwsIHZpZXdBZGFwdGVycywgdmFsdWVBY2Nlc3NvcnMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRpc3BhdGNoQWN0aW9uKGFjdGlvbjogQWN0aW9uczxUU3RhdGVWYWx1ZT4pIHtcbiAgICB0aGlzLm5ncnhGb3Jtc0FjdGlvbi5lbWl0KGFjdGlvbik7XG4gIH1cbn1cbiJdfQ==