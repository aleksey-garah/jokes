import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService, AppConfigService } from './services';
import { EuDatePipe } from './pipes';
import { BackButtonComponent } from './components';

@NgModule({
  declarations: [EuDatePipe, BackButtonComponent],
  exports: [EuDatePipe, BackButtonComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ ApiService, AppConfigService ]
    };
  }
}
