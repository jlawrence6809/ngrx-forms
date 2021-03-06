import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, EventEmitter, Inject, Optional, Output, Self, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NGRX_FORM_VIEW_ADAPTER } from '../view-adapter/view-adapter';
import { NgrxFormControlDirective } from './directive';
let NgrxLocalFormControlDirective = class NgrxLocalFormControlDirective extends NgrxFormControlDirective {
    constructor(el, dom, viewAdapters, valueAccessors) {
        super(el, dom, null, viewAdapters, valueAccessors);
        this.ngrxFormsAction = new EventEmitter();
    }
    dispatchAction(action) {
        this.ngrxFormsAction.emit(action);
    }
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
export { NgrxLocalFormControlDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RhdGUtZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy9jb250cm9sL2xvY2FsLXN0YXRlLWRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEdBQ0wsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXpFLE9BQU8sRUFBbUIsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RixPQUFPLEVBQVksd0JBQXdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFNakUsSUFBYSw2QkFBNkIsR0FBMUMsTUFBYSw2QkFDWCxTQUFRLHdCQUFpRDtJQUl6RCxZQUNFLEVBQWMsRUFDZ0IsR0FBb0IsRUFDRSxZQUErQixFQUNwQyxjQUFzQztRQUVyRixLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBUjNDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQXdCLENBQUM7SUFTckUsQ0FBQztJQUVTLGNBQWMsQ0FBQyxNQUE0QjtRQUNuRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0YsQ0FBQTtBQWRXO0lBQVQsTUFBTSxFQUFFOztzRUFBNEQ7QUFIMUQsNkJBQTZCO0lBSnpDLFNBQVMsQ0FBQztRQUNULDhDQUE4QztRQUM5QyxRQUFRLEVBQUUseUNBQXlDO0tBQ3BELENBQUM7SUFRRyxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUM1QixtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUE7SUFDbEQsbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBOzZDQUgxQyxVQUFVO0dBTkwsNkJBQTZCLENBaUJ6QztTQWpCWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTZWxmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xWYWx1ZVR5cGVzIH0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHsgRm9ybVZpZXdBZGFwdGVyLCBOR1JYX0ZPUk1fVklFV19BREFQVEVSIH0gZnJvbSAnLi4vdmlldy1hZGFwdGVyL3ZpZXctYWRhcHRlcic7XG5pbXBvcnQgeyBEb2N1bWVudCwgTmdyeEZvcm1Db250cm9sRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tuZ3J4Rm9ybUNvbnRyb2xTdGF0ZV1bbmdyeEZvcm1zQWN0aW9uXScsXG59KVxuZXhwb3J0IGNsYXNzIE5ncnhMb2NhbEZvcm1Db250cm9sRGlyZWN0aXZlPFRTdGF0ZVZhbHVlIGV4dGVuZHMgRm9ybUNvbnRyb2xWYWx1ZVR5cGVzLCBUVmlld1ZhbHVlID0gVFN0YXRlVmFsdWU+XG4gIGV4dGVuZHMgTmdyeEZvcm1Db250cm9sRGlyZWN0aXZlPFRTdGF0ZVZhbHVlLCBUVmlld1ZhbHVlPiB7XG5cbiAgQE91dHB1dCgpIG5ncnhGb3Jtc0FjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8QWN0aW9uczxUU3RhdGVWYWx1ZT4+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgZG9tOiBEb2N1bWVudCB8IG51bGwsXG4gICAgQFNlbGYoKSBAT3B0aW9uYWwoKSBASW5qZWN0KE5HUlhfRk9STV9WSUVXX0FEQVBURVIpIHZpZXdBZGFwdGVyczogRm9ybVZpZXdBZGFwdGVyW10sXG4gICAgQFNlbGYoKSBAT3B0aW9uYWwoKSBASW5qZWN0KE5HX1ZBTFVFX0FDQ0VTU09SKSB2YWx1ZUFjY2Vzc29yczogQ29udHJvbFZhbHVlQWNjZXNzb3JbXSxcbiAgKSB7XG4gICAgc3VwZXIoZWwsIGRvbSwgbnVsbCwgdmlld0FkYXB0ZXJzLCB2YWx1ZUFjY2Vzc29ycyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGlzcGF0Y2hBY3Rpb24oYWN0aW9uOiBBY3Rpb25zPFRTdGF0ZVZhbHVlPikge1xuICAgIHRoaXMubmdyeEZvcm1zQWN0aW9uLmVtaXQoYWN0aW9uKTtcbiAgfVxufVxuIl19