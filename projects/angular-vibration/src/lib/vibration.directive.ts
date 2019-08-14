import { Directive, Input, HostListener } from '@angular/core';
import { AngularVibrationService } from './angular-vibration.service';

@Directive({
  selector: '[ngxVibration]'
})
export class VibrationDirective {
  @Input('ngxVibration')
  vibratePattern: number[];

  constructor(private vibrationService: AngularVibrationService) {}

  @HostListener('click')
  private vibrate() {
    this.vibrationService.vibrate(this.vibratePattern);
  }
}
