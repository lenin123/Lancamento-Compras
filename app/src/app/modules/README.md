# Diretório de módulos

`~/src/app/modules`\_

O diretório modules contém uma coleção de módulos que são cada
independentes um do outro. Isso permite que o Angular carregue apenas o módulo que
requer exibir a solicitação, economizando largura de banda e acelerando o
aplicação inteira.

Para isso, cada módulo deve ter seu próprio roteamento, que é um
O recurso de rota `loadChildren` definido no `AppRoutingModule`. Isto é
também coberto na `documentação do layout <layout.html>` \_

Uma rota pode ter filhos e cada filho pode ter uma propriedade loadChildren.
De `app-routing.module.ts`:

.. code-block:: ts

{
path: '',
component: ContentLayoutComponent,
children: [
{
path: 'dashboard',
loadChildren: () =>
import('./modules/home/home.module').then(m => m.HomeModule)
},
{
path: 'about',
loadChildren: () =>
import('./modules/about/about.module').then(m => m.AboutModule)
},
{
path: 'contact',
loadChildren: () =>
import('./modules/contact/contact.module').then(m => m.ContactModule)
}
]
},

Cada filho deve ter seu próprio caminho base a partir do qual ele pode carregar filhos de um
no diretório `modules`. Aqui está o roteamento da página Sobre:

.. code-block:: ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
{
path: '',
component: AboutComponent
}
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AboutRoutingModule { }

É necessário adicionar as rotas filho ao RouterModule
através de `forChild`.

Além de rotear qualquer módulo dentro do diretório `modules` pode ser tão simples ou
complicado como você deseja.

## Instalação

mkdir src/app/modules

Para cada novo módulo, execute `ng generate module modules / NewModule`
