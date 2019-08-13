import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularVibrationService {

  constructor() { }

  vibrate(vibratePattern: number[]): boolean {
    const supportsVibration = window.navigator.vibrate;
    if (supportsVibration) {
      window.navigator.vibrate(vibratePattern);
    }

    return !!supportsVibration;
  }

  cancelVibration(): boolean {
    const supportsVibration = window.navigator.vibrate;
    if (supportsVibration) {
      window.navigator.vibrate(0);
    }

    return !!supportsVibration;
  }

  hasVibrationSupport(): boolean {
    return  !!window.navigator.vibrate;
  }
}
