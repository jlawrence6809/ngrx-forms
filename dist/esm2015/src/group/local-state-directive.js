import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Output } from '@angular/core';
import { NgrxFormDirective } from './directive';
let NgrxLocalFormDirective = class NgrxLocalFormDirective extends NgrxFormDirective {
    constructor() {
        super(null);
        this.ngrxFormsAction = new EventEmitter();
    }
    dispatchAction(action) {
        this.ngrxFormsAction.emit(action);
    }
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
export { NgrxLocalFormDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RhdGUtZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdyeC1mb3Jtcy8iLCJzb3VyY2VzIjpbInNyYy9ncm91cC9sb2NhbC1zdGF0ZS1kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFNaEQsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFDWCxTQUFRLGlCQUF5QjtJQUlqQztRQUNFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUhKLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUFJaEUsQ0FBQztJQUVTLGNBQWMsQ0FBQyxNQUF1QjtRQUM5QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0YsQ0FBQTtBQVRXO0lBQVQsTUFBTSxFQUFFOzsrREFBdUQ7QUFIckQsc0JBQXNCO0lBSmxDLFNBQVMsQ0FBQztRQUNULDhDQUE4QztRQUM5QyxRQUFRLEVBQUUsc0NBQXNDO0tBQ2pELENBQUM7O0dBQ1csc0JBQXNCLENBWWxDO1NBWlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBOZ3J4Rm9ybURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdmb3JtW25ncnhGb3JtU3RhdGVdW25ncnhGb3Jtc0FjdGlvbl0nLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3J4TG9jYWxGb3JtRGlyZWN0aXZlPFRWYWx1ZSBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogYW55IH0+XG4gIGV4dGVuZHMgTmdyeEZvcm1EaXJlY3RpdmU8VFZhbHVlPiB7XG5cbiAgQE91dHB1dCgpIG5ncnhGb3Jtc0FjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8QWN0aW9uczxUVmFsdWU+PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKG51bGwpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRpc3BhdGNoQWN0aW9uKGFjdGlvbjogQWN0aW9uczxUVmFsdWU+KSB7XG4gICAgdGhpcy5uZ3J4Rm9ybXNBY3Rpb24uZW1pdChhY3Rpb24pO1xuICB9XG59XG4iXX0=