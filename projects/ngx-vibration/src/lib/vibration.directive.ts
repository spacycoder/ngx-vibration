import { Directive, HostListener, Input } from '@angular/core';
import { NgxVibrationService } from './ngx-vibration.service';

@Directive({
  selector: "[ngxVibration]",
})
export class VibrationDirective {
  private vibratePattern: number[];

  /**
   * Handle directive arguments
   * Accepts pattern or digits as string or number
   */
  @Input('ngxVibration')
  set inputPattern(input: number[] | number | string) {
    if (typeof input === 'string') {
      if (input) {
        if (!input.match(/^\d+$/)) {
          // The input does not match a number
          throw new Error('At least one number is expected as vibration pattern');
        }
        // Building the pattern from the given number
        this.vibratePattern = [parseInt(input, 10)];
      } else {
        // No input was given, falling back to module config
        const defaultPattern = this.vibrationService.config?.defaultPattern;
        if (!defaultPattern) {
          throw new Error('No pattern provided in vibrate() call nor module configuration');
        }
        this.vibratePattern = defaultPattern;
      }
    } else if (typeof input === 'number') {
      // Building the pattern from the given number
      this.vibratePattern = [input];
    } else {
      this.vibratePattern = input;
    }
  }

  constructor(private vibrationService: NgxVibrationService) {}

  @HostListener("touch")
  @HostListener("click")
  private vibrate() {
    this.vibrationService.vibrate(this.vibratePattern);
  }
}
