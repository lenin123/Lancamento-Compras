# Diretório de Layout

`~/src/app/layout`\_

O diretório de layout é um contêiner de componentes declarados no diretório
AppModule. O diretório contém componentes de conteúdo no nível da página, como um
rodapé, navegação e cabeçalho comuns. Ele também contém layouts de página para o
seções diferentes do seu aplicativo.

Componentes como rodapé e navegação são tratados da maneira Angular importando
eles em um modelo:

.. code-block:: html

    <app-nav></app-nav>

Os layouts são tratados de uma maneira bastante inteligente. Usando rotas filho, um nível superior
A rota pode definir um layout a ser usado para seus filhos. Cada módulo possui seu próprio
roteamento para que o nível superior `AppRoutingModule` inclua o módulo como filho de
uma rota. Este bloco de código é retirado de `app-routing.module.ts` e aparado
de conteúdo extra:

.. code-block:: ts

    {
      path: '',
      component: ContentLayoutComponent,
      children: [
        {
          path: 'dashboard',
          loadChildren: () =>
            import('./modules/home/home.module').then(m => m.HomeModule)
        }
      ]
    }

Quando uma rota é chamada em `/dashboard`, o `ContentLayoutComponent` é usado
como um layout e o manuseio do roteamento são entregues ao HomeModule.
O `ContentLayoutComponent` possui um `router-outlet`:

.. code-block:: html

  <div [class]="theme">
    <div class="mat-app-background">
      <app-nav></app-nav>

      <div class="container">
        <router-outlet></router-outlet>
      </div>

      <app-footer (changeTheme)="onThemeChange($event)"></app-footer>
    </div>

  </div>

Esse `router-outlet` é usado para exibir uma rota e um componente definidos no
roteamento do `HomeRoutingModule`:

.. code-block: ts

export const routes: Routes = [
{
path: '',
children: [
{
path: 'home',
component: HomeComponent
},
{
path: 'projects/:id',
component: ProjectDetailsComponent,
resolve: {
project: ProjectResolver
}
}
]
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class HomeRoutingModule { }

Portanto, as rotas são `/dashboard` e `/dashboard/projects/:id` e usam
o ContentLayoutComponent para seu layout.

## Instalação

mkdir src/app/layout
ng generate component layout/Header
ng generate component layout/Footer
