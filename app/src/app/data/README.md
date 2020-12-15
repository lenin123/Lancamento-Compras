# Data Module

`~/src/app/data`

O módulo de dados é um diretório de nível superior e mantém o esquema (modelos / entidades)
e serviços (repositórios) para dados consumidos pelo aplicativo.

Por padrão, existem dois subdiretórios::

~/src/app/data
/schema
/service

O diretório do esquema contém os arquivos de definição de classe para estruturas de dados.
Um exemplo de estrutura de dados:

.. code-block:: ts

export class Project {
link: string;
title: string;
thumbnail: string;
}

O diretório de serviço mantém os serviços para buscar dados.
Os arquivos de serviço não são necessariamente uma correspondência 1: 1 com os arquivos de esquema.
Um arquivo de serviço de exemplo:

.. code-block:: ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from '../schema/project';
import { ApiService } from './api.service';

const routes = {
projects: '/projects',
project: (id: number) => `/projects/${id}`
};

@Injectable({
providedIn: 'root'
})
export class ProjectService {
constructor(
private apiService: ApiService) {}

      getAll(): Observable<Array<Project>> {
          return this.apiService.get(routes.projects);
      }

      getSingle(id: number): Observable<Project> {
          return this.apiService.get(routes.project(id));
      }

}

## Várias fontes de dados

Se o aplicativo consumir dados de mais de uma fonte, então os dados
diretório deve ser reestruturado para conter subdiretórios para cada dado
fonte. Não crie vários módulos para cada fonte de dados::

.. code-block:: ts

~/src/app/data
/data-source-one
/schema
/service
/data-source-two
/schema
/service
/data.module.ts

## Padrão de nomeação de esquema

Um arquivo de esquema é muito parecido com um arquivo de entidade em um Mapeador Relacional de Objetos.
Esse arquivo de esquema é central para o consumo de dados e
portanto, não precisa de decoradores superficiais, como chamá-lo de `ProjectSchema`
ou `ProjectModel`. Os esquemas são especiais porque são o único nome simples
classe no aplicativo.

## Instalação

.. code-block:: ts

    ng generate module Data
