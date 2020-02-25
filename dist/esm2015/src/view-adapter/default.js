import * as tslib_1 from "tslib";
var NgrxDefaultViewAdapter_1;
import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, forwardRef, HostListener, Inject, Input, Optional, PLATFORM_ID, Renderer2 } from '@angular/core';
import { NGRX_FORM_VIEW_ADAPTER } from './view-adapter';
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function isAndroid(navigator) {
    return /android (\d+)/.test(navigator.userAgent.toLowerCase());
}
// tslint:disable:directive-class-suffix
// tslint:disable:directive-selector
// TODO: since this directive has a side-effect (setting the element's id attribute)
// it should not blacklist other types of inputs but instead it should somehow figure
// out whether it is the "active" view adapter and only perform its side effects if it
// is active
let NgrxDefaultViewAdapter = NgrxDefaultViewAdapter_1 = class NgrxDefaultViewAdapter {
    constructor(renderer, elementRef, platformId = null, 
    // we use a special injection string that should never exist at runtime to allow mocking this dependency for testing
    navigator = null) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.platformId = platformId;
        this.nativeIdWasSet = false;
        this.onChange = () => void 0;
        this.onTouched = () => void 0;
        /** Whether the user is creating a composition string (IME events). */
        this.isComposing = false;
        this.isCompositionSupported = isPlatformBrowser(this.platformId || '') && !isAndroid(navigator || window.navigator);
    }
    set ngrxFormControlState(value) {
        if (!value) {
            throw new Error('The control state must not be undefined!');
        }
        this.state = value;
        const nativeId = this.elementRef.nativeElement.id;
        const shouldSetNativeId = value.id !== nativeId && this.nativeIdWasSet;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', value.id);
        }
    }
    ngAfterViewInit() {
        const nativeId = this.elementRef.nativeElement.id;
        const shouldSetNativeId = this.state.id !== nativeId && !nativeId;
        if (shouldSetNativeId) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'id', this.state.id);
            this.nativeIdWasSet = true;
        }
    }
    setViewValue(value) {
        const normalizedValue = value == null ? '' : value;
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
    }
    setOnChangeCallback(fn) {
        this.onChange = fn;
    }
    setOnTouchedCallback(fn) {
        this.onTouched = fn;
    }
    setIsDisabled(isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    }
    handleInput({ target }) {
        if (this.isCompositionSupported && this.isComposing) {
            return;
        }
        this.onChange(target.value);
    }
    compositionStart() {
        this.isComposing = true;
    }
    compositionEnd({ target }) {
        this.isComposing = false;
        if (this.isCompositionSupported) {
            this.onChange(target.value);
        }
    }
};
tslib_1.__decorate([
    HostListener('blur'),
    tslib_1.__metadata("design:type", Function)
], NgrxDefaultViewAdapter.prototype, "onTouched", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], NgrxDefaultViewAdapter.prototype, "ngrxFormControlState", null);
tslib_1.__decorate([
    HostListener('input', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], NgrxDefaultViewAdapter.prototype, "handleInput", null);
tslib_1.__decorate([
    HostListener('compositionstart'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], NgrxDefaultViewAdapter.prototype, "compositionStart", null);
tslib_1.__decorate([
    HostListener('compositionend', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], NgrxDefaultViewAdapter.prototype, "compositionEnd", null);
NgrxDefaultViewAdapter = NgrxDefaultViewAdapter_1 = tslib_1.__decorate([
    Directive({
        selector: 'input:not([type=checkbox]):not([type=number]):not([type=radio]):not([type=range])[ngrxFormControlState],textarea[ngrxFormControlState]',
        providers: [{
                provide: NGRX_FORM_VIEW_ADAPTER,
                useExisting: forwardRef(() => NgrxDefaultViewAdapter_1),
                multi: true,
            }],
    }),
    tslib_1.__param(2, Optional()), tslib_1.__param(2, Inject(PLATFORM_ID)),
    tslib_1.__param(3, Optional()), tslib_1.__param(3, Inject('ngrx-forms/never')),
    tslib_1.__metadata("design:paramtypes", [Renderer2,
        ElementRef, Object, Object])
], NgrxDefaultViewAdapter);
export { NgrxDefaultViewAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvdmlldy1hZGFwdGVyL2RlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2hKLE9BQU8sRUFBbUIsc0JBQXNCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU16RTs7O0dBR0c7QUFDSCxTQUFTLFNBQVMsQ0FBQyxTQUFvQjtJQUNyQyxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQ2pFLENBQUM7QUFFRCx3Q0FBd0M7QUFDeEMsb0NBQW9DO0FBRXBDLG9GQUFvRjtBQUNwRixxRkFBcUY7QUFDckYsc0ZBQXNGO0FBQ3RGLFlBQVk7QUFTWixJQUFhLHNCQUFzQiw4QkFBbkMsTUFBYSxzQkFBc0I7SUEwQmpDLFlBQ1UsUUFBbUIsRUFDbkIsVUFBc0IsRUFDVyxhQUE0QixJQUFJO0lBQ3pFLG9IQUFvSDtJQUM1RSxZQUE4QixJQUFJO1FBSmxFLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNXLGVBQVUsR0FBVixVQUFVLENBQXNCO1FBM0JuRSxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUUvQixhQUFRLEdBQXlCLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRzlDLGNBQVMsR0FBZSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQWVwQyxzRUFBc0U7UUFDOUQsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFVMUIsSUFB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UDtBQTJDRDtJQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozt5REFPakM7QUFHRDtJQURDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQzs7Ozs4REFHaEM7QUFHRDtJQURDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OzREQU0xQztBQWxGVSxzQkFBc0I7SUFSbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHdJQUF3STtRQUNsSixTQUFTLEVBQUUsQ0FBQztnQkFDVixPQUFPLEVBQUUsc0JBQXNCO2dCQUMvQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUFzQixDQUFDO2dCQUNyRCxLQUFLLEVBQUUsSUFBSTthQUNaLENBQUM7S0FDSCxDQUFDO0lBOEJHLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBRS9CLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUE7NkNBSnJCLFNBQVM7UUFDUCxVQUFVO0dBNUJyQixzQkFBc0IsQ0FtRmxDO1NBbkZZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgSG9zdExpc3RlbmVyLCBJbmplY3QsIElucHV0LCBPcHRpb25hbCwgUExBVEZPUk1fSUQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb3JtQ29udHJvbFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHsgRm9ybVZpZXdBZGFwdGVyLCBOR1JYX0ZPUk1fVklFV19BREFQVEVSIH0gZnJvbSAnLi92aWV3LWFkYXB0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRvciB7XG4gIHVzZXJBZ2VudDogc3RyaW5nO1xufVxuXG4vKipcbiAqIFdlIG11c3QgY2hlY2sgd2hldGhlciB0aGUgYWdlbnQgaXMgQW5kcm9pZCBiZWNhdXNlIGNvbXBvc2l0aW9uIGV2ZW50c1xuICogYmVoYXZlIGRpZmZlcmVudGx5IGJldHdlZW4gaU9TIGFuZCBBbmRyb2lkLlxuICovXG5mdW5jdGlvbiBpc0FuZHJvaWQobmF2aWdhdG9yOiBOYXZpZ2F0b3IpOiBib29sZWFuIHtcbiAgcmV0dXJuIC9hbmRyb2lkIChcXGQrKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpkaXJlY3RpdmUtY2xhc3Mtc3VmZml4XG4vLyB0c2xpbnQ6ZGlzYWJsZTpkaXJlY3RpdmUtc2VsZWN0b3JcblxuLy8gVE9ETzogc2luY2UgdGhpcyBkaXJlY3RpdmUgaGFzIGEgc2lkZS1lZmZlY3QgKHNldHRpbmcgdGhlIGVsZW1lbnQncyBpZCBhdHRyaWJ1dGUpXG4vLyBpdCBzaG91bGQgbm90IGJsYWNrbGlzdCBvdGhlciB0eXBlcyBvZiBpbnB1dHMgYnV0IGluc3RlYWQgaXQgc2hvdWxkIHNvbWVob3cgZmlndXJlXG4vLyBvdXQgd2hldGhlciBpdCBpcyB0aGUgXCJhY3RpdmVcIiB2aWV3IGFkYXB0ZXIgYW5kIG9ubHkgcGVyZm9ybSBpdHMgc2lkZSBlZmZlY3RzIGlmIGl0XG4vLyBpcyBhY3RpdmVcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2lucHV0Om5vdChbdHlwZT1jaGVja2JveF0pOm5vdChbdHlwZT1udW1iZXJdKTpub3QoW3R5cGU9cmFkaW9dKTpub3QoW3R5cGU9cmFuZ2VdKVtuZ3J4Rm9ybUNvbnRyb2xTdGF0ZV0sdGV4dGFyZWFbbmdyeEZvcm1Db250cm9sU3RhdGVdJyxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HUlhfRk9STV9WSUVXX0FEQVBURVIsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmdyeERlZmF1bHRWaWV3QWRhcHRlciksXG4gICAgbXVsdGk6IHRydWUsXG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3J4RGVmYXVsdFZpZXdBZGFwdGVyIGltcGxlbWVudHMgRm9ybVZpZXdBZGFwdGVyLCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBzdGF0ZTogRm9ybUNvbnRyb2xTdGF0ZTxhbnk+O1xuICBwcml2YXRlIG5hdGl2ZUlkV2FzU2V0ID0gZmFsc2U7XG5cbiAgb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4gdm9pZCAwO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDBcblxuICBASW5wdXQoKSBzZXQgbmdyeEZvcm1Db250cm9sU3RhdGUodmFsdWU6IEZvcm1Db250cm9sU3RhdGU8YW55Pikge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGNvbnRyb2wgc3RhdGUgbXVzdCBub3QgYmUgdW5kZWZpbmVkIScpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB2YWx1ZTtcbiAgICBjb25zdCBuYXRpdmVJZCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlkO1xuICAgIGNvbnN0IHNob3VsZFNldE5hdGl2ZUlkID0gdmFsdWUuaWQgIT09IG5hdGl2ZUlkICYmIHRoaXMubmF0aXZlSWRXYXNTZXQ7XG4gICAgaWYgKHNob3VsZFNldE5hdGl2ZUlkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaWQnLCB2YWx1ZS5pZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHVzZXIgaXMgY3JlYXRpbmcgYSBjb21wb3NpdGlvbiBzdHJpbmcgKElNRSBldmVudHMpLiAqL1xuICBwcml2YXRlIGlzQ29tcG9zaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgaXNDb21wb3NpdGlvblN1cHBvcnRlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4gICAgLy8gd2UgdXNlIGEgc3BlY2lhbCBpbmplY3Rpb24gc3RyaW5nIHRoYXQgc2hvdWxkIG5ldmVyIGV4aXN0IGF0IHJ1bnRpbWUgdG8gYWxsb3cgbW9ja2luZyB0aGlzIGRlcGVuZGVuY3kgZm9yIHRlc3RpbmdcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KCduZ3J4LWZvcm1zL25ldmVyJykgbmF2aWdhdG9yOiBOYXZpZ2F0b3IgfCBudWxsID0gbnVsbCxcbiAgKSB7XG4gICAgdGhpcy5pc0NvbXBvc2l0aW9uU3VwcG9ydGVkID0gaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkIHx8ICcnKSAmJiAhaXNBbmRyb2lkKG5hdmlnYXRvciB8fCB3aW5kb3cubmF2aWdhdG9yKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBuYXRpdmVJZCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlkO1xuICAgIGNvbnN0IHNob3VsZFNldE5hdGl2ZUlkID0gdGhpcy5zdGF0ZS5pZCAhPT0gbmF0aXZlSWQgJiYgIW5hdGl2ZUlkO1xuICAgIGlmIChzaG91bGRTZXROYXRpdmVJZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2lkJywgdGhpcy5zdGF0ZS5pZCk7XG4gICAgICB0aGlzLm5hdGl2ZUlkV2FzU2V0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBzZXRWaWV3VmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIG5vcm1hbGl6ZWRWYWx1ZSk7XG4gIH1cblxuICBzZXRPbkNoYW5nZUNhbGxiYWNrKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHNldE9uVG91Y2hlZENhbGxiYWNrKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldElzRGlzYWJsZWQoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxuICBoYW5kbGVJbnB1dCh7IHRhcmdldCB9OiB7IHRhcmdldDogSFRNTElucHV0RWxlbWVudCB9KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNDb21wb3NpdGlvblN1cHBvcnRlZCAmJiB0aGlzLmlzQ29tcG9zaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vbkNoYW5nZSh0YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY29tcG9zaXRpb25zdGFydCcpXG4gIGNvbXBvc2l0aW9uU3RhcnQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0NvbXBvc2luZyA9IHRydWU7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjb21wb3NpdGlvbmVuZCcsIFsnJGV2ZW50J10pXG4gIGNvbXBvc2l0aW9uRW5kKHsgdGFyZ2V0IH06IHsgdGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50IH0pOiB2b2lkIHtcbiAgICB0aGlzLmlzQ29tcG9zaW5nID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuaXNDb21wb3NpdGlvblN1cHBvcnRlZCkge1xuICAgICAgdGhpcy5vbkNoYW5nZSh0YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIl19