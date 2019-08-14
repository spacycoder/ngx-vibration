import { Directive, Input, HostListener } from '@angular/core';
import { AngularVibrationService } from './angular-vibration.service';

@Directive({
  selector: '[ngxVibrate]'
})
export class VibrateDirective {
  @Input()
  vibrationPattern: number[];

  constructor(private vibrationService: AngularVibrationService) {}

  @HostListener('click')
  private vibrate() {
    this.vibrationService.vibrate(this.vibrationPattern);
  }
}
