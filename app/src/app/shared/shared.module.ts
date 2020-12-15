import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';
import { MaterialModule } from './material.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMasonryModule } from 'ngx-masonry';
import { ClickOutsideModule } from 'ng-click-outside';
import { library } from '@fortawesome/fontawesome-svg-core';

import { BreadcrumbsComponent } from '@shared/component/breadcrumbs/breadcrumbs.component';
import { SpinnerComponent } from '@shared/component/spinner/spinner.component';

import {
  faUserCircle,
  faAsterisk,
  faHome,
  faStore,
  faChartLine,
  faQuestionCircle,
  faCog,
  faBars
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faUserCircle,
  faAsterisk,
  faHome,
  faStore,
  faChartLine,
  faQuestionCircle,
  faCog,
  faBars
);

/**
 * Modulo de componentes que poderão ser utilizados em varios lugares
 */
// @ts-ignore
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule,
    ClickOutsideModule
  ],
  declarations: [BreadcrumbsComponent, SpinnerComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    TextMaskModule,

    NgbModule,
    FontAwesomeModule,
    NgxMasonryModule,
    ClickOutsideModule,

    BreadcrumbsComponent,
    SpinnerComponent
  ]
})
export class SharedModule {}
