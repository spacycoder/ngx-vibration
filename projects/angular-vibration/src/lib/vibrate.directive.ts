import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { AngularVibrationService } from './angular-vibration.service';

@Directive({
  selector: '[avVibrate]'
})
export class VibrateDirective {
  @Input()
  vibrationPattern: number[];
  red = false;

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
    if (this.red) {
      this.elementRef.nativeElement.style.backgroundColor = 'white';
    } else {
      this.elementRef.nativeElement.style.backgroundColor = 'red';
    }
  }
}
