import { ModuleWithProviders, NgModule } from '@angular/core';
import { VibrationDirective } from './vibration.directive';
import { GLOBAL_CONFIG_TOKEN, NgxVibrationConfig } from './ngx-vibration.config';

@NgModule({
  declarations: [VibrationDirective],
  imports: [],
  exports: [VibrationDirective],
})
export class NgxVibrationModule {
  static forRoot(config: NgxVibrationConfig): ModuleWithProviders<NgxVibrationModule> {
    return {
      ngModule: NgxVibrationModule,
      providers: [{ provide: GLOBAL_CONFIG_TOKEN, useValue: config }],
    };
  }
}

