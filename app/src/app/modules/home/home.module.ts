import { NgModule } from '@angular/core';

// Consulta Principal
import { HomeComponent } from './pagina/home.component';

import { HomeRoutingModule } from './home.routing';

import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@app/core.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, CoreModule, HomeRoutingModule],
  exports: [],
  providers: [],
  entryComponents: []
})
export class HomeModule {}
