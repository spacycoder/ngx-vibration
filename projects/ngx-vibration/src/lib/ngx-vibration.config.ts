import { InjectionToken } from '@angular/core';

export interface NgxVibrationConfig {
    defaultPattern?: number[];
}

export const GLOBAL_CONFIG_TOKEN = new InjectionToken<NgxVibrationConfig>(
    'GLOBAL_CONFIG'
);
