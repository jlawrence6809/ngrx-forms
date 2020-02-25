import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { NgrxFormControlDirective } from './control/directive';
import { NgrxLocalFormControlDirective } from './control/local-state-directive';
import { NgrxFormDirective } from './group/directive';
import { NgrxLocalFormDirective } from './group/local-state-directive';
import { NgrxStatusCssClassesDirective } from './status-css-classes.directive';
import { NgrxCheckboxViewAdapter } from './view-adapter/checkbox';
import { NgrxDefaultViewAdapter } from './view-adapter/default';
import { NgrxNumberViewAdapter } from './view-adapter/number';
import { NgrxFallbackSelectOption } from './view-adapter/option';
import { NgrxRadioViewAdapter } from './view-adapter/radio';
import { NgrxRangeViewAdapter } from './view-adapter/range';
import { NgrxSelectOption, NgrxSelectViewAdapter } from './view-adapter/select';
import { NgrxSelectMultipleOption, NgrxSelectMultipleViewAdapter } from './view-adapter/select-multiple';
var exportsAndDeclarations = [
    NgrxFormControlDirective,
    NgrxLocalFormControlDirective,
    NgrxFormDirective,
    NgrxLocalFormDirective,
    NgrxCheckboxViewAdapter,
    NgrxDefaultViewAdapter,
    NgrxNumberViewAdapter,
    NgrxRadioViewAdapter,
    NgrxRangeViewAdapter,
    NgrxSelectMultipleOption,
    NgrxSelectMultipleViewAdapter,
    NgrxSelectOption,
    NgrxSelectViewAdapter,
    NgrxFallbackSelectOption,
    NgrxStatusCssClassesDirective,
];
var NgrxFormsModule = /** @class */ (function () {
    function NgrxFormsModule() {
    }
    NgrxFormsModule = tslib_1.__decorate([
        NgModule({
            declarations: exportsAndDeclarations,
            exports: exportsAndDeclarations,
        })
    ], NgrxFormsModule);
    return NgrxFormsModule;
}());
export { NgrxFormsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdkUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLDZCQUE2QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFekcsSUFBTSxzQkFBc0IsR0FBRztJQUM3Qix3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLDZCQUE2QjtDQUM5QixDQUFDO0FBTUY7SUFBQTtJQUErQixDQUFDO0lBQW5CLGVBQWU7UUFKM0IsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLHNCQUFzQjtZQUNwQyxPQUFPLEVBQUUsc0JBQXNCO1NBQ2hDLENBQUM7T0FDVyxlQUFlLENBQUk7SUFBRCxzQkFBQztDQUFBLEFBQWhDLElBQWdDO1NBQW5CLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3J4Rm9ybUNvbnRyb2xEaXJlY3RpdmUgfSBmcm9tICcuL2NvbnRyb2wvZGlyZWN0aXZlJztcbmltcG9ydCB7IE5ncnhMb2NhbEZvcm1Db250cm9sRGlyZWN0aXZlIH0gZnJvbSAnLi9jb250cm9sL2xvY2FsLXN0YXRlLWRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3J4Rm9ybURpcmVjdGl2ZSB9IGZyb20gJy4vZ3JvdXAvZGlyZWN0aXZlJztcbmltcG9ydCB7IE5ncnhMb2NhbEZvcm1EaXJlY3RpdmUgfSBmcm9tICcuL2dyb3VwL2xvY2FsLXN0YXRlLWRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3J4U3RhdHVzQ3NzQ2xhc3Nlc0RpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdHVzLWNzcy1jbGFzc2VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3J4Q2hlY2tib3hWaWV3QWRhcHRlciB9IGZyb20gJy4vdmlldy1hZGFwdGVyL2NoZWNrYm94JztcbmltcG9ydCB7IE5ncnhEZWZhdWx0Vmlld0FkYXB0ZXIgfSBmcm9tICcuL3ZpZXctYWRhcHRlci9kZWZhdWx0JztcbmltcG9ydCB7IE5ncnhOdW1iZXJWaWV3QWRhcHRlciB9IGZyb20gJy4vdmlldy1hZGFwdGVyL251bWJlcic7XG5pbXBvcnQgeyBOZ3J4RmFsbGJhY2tTZWxlY3RPcHRpb24gfSBmcm9tICcuL3ZpZXctYWRhcHRlci9vcHRpb24nO1xuaW1wb3J0IHsgTmdyeFJhZGlvVmlld0FkYXB0ZXIgfSBmcm9tICcuL3ZpZXctYWRhcHRlci9yYWRpbyc7XG5pbXBvcnQgeyBOZ3J4UmFuZ2VWaWV3QWRhcHRlciB9IGZyb20gJy4vdmlldy1hZGFwdGVyL3JhbmdlJztcbmltcG9ydCB7IE5ncnhTZWxlY3RPcHRpb24sIE5ncnhTZWxlY3RWaWV3QWRhcHRlciB9IGZyb20gJy4vdmlldy1hZGFwdGVyL3NlbGVjdCc7XG5pbXBvcnQgeyBOZ3J4U2VsZWN0TXVsdGlwbGVPcHRpb24sIE5ncnhTZWxlY3RNdWx0aXBsZVZpZXdBZGFwdGVyIH0gZnJvbSAnLi92aWV3LWFkYXB0ZXIvc2VsZWN0LW11bHRpcGxlJztcblxuY29uc3QgZXhwb3J0c0FuZERlY2xhcmF0aW9ucyA9IFtcbiAgTmdyeEZvcm1Db250cm9sRGlyZWN0aXZlLFxuICBOZ3J4TG9jYWxGb3JtQ29udHJvbERpcmVjdGl2ZSxcbiAgTmdyeEZvcm1EaXJlY3RpdmUsXG4gIE5ncnhMb2NhbEZvcm1EaXJlY3RpdmUsXG4gIE5ncnhDaGVja2JveFZpZXdBZGFwdGVyLFxuICBOZ3J4RGVmYXVsdFZpZXdBZGFwdGVyLFxuICBOZ3J4TnVtYmVyVmlld0FkYXB0ZXIsXG4gIE5ncnhSYWRpb1ZpZXdBZGFwdGVyLFxuICBOZ3J4UmFuZ2VWaWV3QWRhcHRlcixcbiAgTmdyeFNlbGVjdE11bHRpcGxlT3B0aW9uLFxuICBOZ3J4U2VsZWN0TXVsdGlwbGVWaWV3QWRhcHRlcixcbiAgTmdyeFNlbGVjdE9wdGlvbixcbiAgTmdyeFNlbGVjdFZpZXdBZGFwdGVyLFxuICBOZ3J4RmFsbGJhY2tTZWxlY3RPcHRpb24sXG4gIE5ncnhTdGF0dXNDc3NDbGFzc2VzRGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBleHBvcnRzQW5kRGVjbGFyYXRpb25zLFxuICBleHBvcnRzOiBleHBvcnRzQW5kRGVjbGFyYXRpb25zLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3J4Rm9ybXNNb2R1bGUgeyB9XG4iXX0=