import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularVibrationService {

  /**
   * Takes vibrationPattern as input and returns a boolean indicating success
   * @param vibratePattern An array of values describes alternating periods of time in which the device is vibrating and not vibrating.
   * @returns a boolean indicating whether or not the vibration was successfull.
   * Will return false if the browser doesn't suppport the vibration API.
   */
  vibrate(vibratePattern: number[]): boolean {
    const supportsVibration = window.navigator.vibrate;
    if (supportsVibration) {
      window.navigator.vibrate(vibratePattern);
    }

    return !!supportsVibration;
  }

  /**
   * Cancels the currently active vibrations
   * @returns a boolean indicating whether or not the vibration was successfull.
   * Will return false if the browser doesn't suppport the vibration API.
   */
  cancelVibration(): boolean {
    const supportsVibration = window.navigator.vibrate;
    if (supportsVibration) {
      window.navigator.vibrate(0);
    }

    return !!supportsVibration;
  }

  /**
   * Checks if the browser has support for the vibration API.
   * @returns a boolean indicating support for the vibration API.
   */
  hasVibrationSupport(): boolean {
    return !!window.navigator.vibrate;
  }
}
