import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { AngularVibrationService } from './angular-vibration.service';

@Directive({
  selector: '[ngxVibrate]'
})
export class VibrateDirective {
  @Input()
  vibrationPattern: number[];

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private vibrationService: AngularVibrationService
  ) {
    this.listenToMouseClick();
  }

  private listenToMouseClick() {
    this.renderer.listen(this.elementRef.nativeElement, 'click', () =>
      this.vibrationService.vibrate(this.vibrationPattern)
    );
  }
}
