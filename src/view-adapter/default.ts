import { Directive, ElementRef, forwardRef, HostListener, Renderer2 } from '@angular/core';
import { ɵgetDOM as getDOM } from '@angular/platform-browser';

import { FormViewAdapter, NGRX_FORM_VIEW_ADAPTER } from './view-adapter';

/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function isAndroid(): boolean {
  const userAgent = getDOM() ? getDOM().getUserAgent() : '';
  return /android (\d+)/.test(userAgent.toLowerCase());
}

// tslint:disable:directive-class-suffix

@Directive({
  selector: 'input:not([type=checkbox])[ngrxFormControlState],textarea[ngrxFormControlState]',
  providers: [{
    provide: NGRX_FORM_VIEW_ADAPTER,
    useExisting: forwardRef(() => NgrxDefaultViewAdapter),
    multi: true,
  }],
})
export class NgrxDefaultViewAdapter implements FormViewAdapter {
  onChange: (value: any) => void = () => void 0;

  @HostListener('blur')
  onTouched: () => void = () => void 0

  /** Whether the user is creating a composition string (IME events). */
  private isComposing = false;
  private isCompositionSupported = !isAndroid();

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  setViewValue(value: any): void {
    const normalizedValue = value == null ? '' : value;
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
  }

  setOnChangeCallback(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  setOnTouchedCallback(fn: () => void): void {
    this.onTouched = fn;
  }

  setIsDisabled(isDisabled: boolean): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
  }

  @HostListener('change')
  handleInput(value: any): void {
    if (this.isCompositionSupported && this.isComposing) {
      return;
    }

    this.onChange(value);
  }

  @HostListener('compositionstart')
  compositionStart(): void {
    this.isComposing = true;
  }

  @HostListener('compositionend', ['$event'])
  compositionEnd(event: UIEvent): void {
    this.isComposing = false;
    if (this.isCompositionSupported) {
      this.onChange((event.target as HTMLInputElement).value);
    }
  }
}
