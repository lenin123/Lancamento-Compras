import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';

import { CoreModule } from '@app/core.module';
import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

/**
 * Modulo que carrega os módulos principais
 * - BrowserModule (Possibita a utilização de rotas)
 * - AuthModule (Possibilita a autenticação da aplicação)
 * - CoreModule
 * - SharedModule (Possibilita a utilização de todos os componentes e plugins gerais)
 * - LayoutModule (Possibilita a utilização de componentes que irão aparecer na grande maioria das vezes)
 * - AppRoutingModule (Possibilita a utilização das rotas gerais)
 */
@NgModule({
  declarations: [AppComponent],
  imports: [
    // angular
    BrowserModule,

    // core & layout & shared
    CoreModule,
    SharedModule,
    LayoutModule,

    // app
    AppRoutingModule,

    BrowserAnimationsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-PT' }],
  bootstrap: [AppComponent],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
