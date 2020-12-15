import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './layout/master/master.component';

// Alterar para esse formato quando for pro ambiente novo
const routes: Routes = [
  {
    path: '',
    redirectTo: 'lancamento-conta',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: 'lancamento-conta',
        loadChildren: () =>
          import('@modules/home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: 'lancamento-conta', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      initialNavigation: true
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
