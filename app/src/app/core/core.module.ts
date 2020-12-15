import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgxSpinnerModule } from 'ngx-spinner';
import { DateFormatPipe } from './pipes/dateFormat.pipe';

/**
 * Este módulo é para classes usadas pelo app.module. Recursos sempre carregados, como protetores de rota, interceptores HTTP e
 * serviços no nível do aplicativo, como o ThemeService e o log, pertencem a este diretório.
 */
@NgModule({
  declarations: [DateFormatPipe],
  imports: [HttpClientModule, NgxSpinnerModule],
  exports: [],
  providers: []
})
export class CoreModule {}
