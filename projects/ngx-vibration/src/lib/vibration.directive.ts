import { Directive, Input, HostListener } from "@angular/core";
import { NgxVibrationService } from "./ngx-vibration.service";

@Directive({
  selector: "[ngxVibration]",
})
export class VibrationDirective {
  @Input("ngxVibration")
  vibratePattern: number[];

  constructor(private vibrationService: NgxVibrationService) {}

  @HostListener("touch")
  @HostListener("click")
  private vibrate() {
    this.vibrationService.vibrate(this.vibratePattern);
  }
}
