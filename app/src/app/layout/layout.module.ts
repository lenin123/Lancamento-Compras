import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { NavComponent } from './componentes-layout/nav/nav.component';

import { SharedModule } from '@shared/shared.module';

/**
 * Módulo utilizado funcionalidades de layout
 */
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MasterComponent, NavComponent],
  imports: [CommonModule, SharedModule]
})
export class LayoutModule {}
