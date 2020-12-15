APP - Estrutura de diretório padrão
===========================

Essa é a estrutura de diretórios que este repositório recomenda. Está listado aqui
em um só lugar como referência.

Sobre
-----

Inspirada na postagem original do blog, essa estrutura usa todo o diretório
estrutura de peças e é uma instalação direta.


Estrutura de árvore
--------------

:: 

  . 
  ├── e2e
  │   └── src
  ├── media
  └── src
      ├── app
      │   ├── core (@app)
      │   ├── data
      │   ├── layout
      │   ├── modules
      │   └── shared (@shared)
      ├── assets
      ├── environments (@env) [@env links to environment file]
      └── styles
          └── themes        

Alias Path
==========
Os aliases de caminho simplificam os caminhos, fornecendo um link para o caminho em vez de
usando o nome completo do caminho. Usá-los fará com que seu código
mais fácil de ler e manter.


Criar aliases
--------------
Execute este comando para instalar o programa json que usaremos para modificar
``tsconfig.json`` ::

  npm install -g json

Para criar um alias, execute este comando no diretório do aplicativo raiz:

    json -f tsconfig.json -I -e "this.compilerOptions.paths['@app/*'] = ['app/core/*']"


O ``@app`` é o alias. O caminho, ``app/core/*`` neste exemplo, é o
caminho do diretório raiz ``src`` para o diretório que você deseja alias.

Para que o json possa adicionar caminhos ao seu tsconfig.json, "caminhos" deve existir em compilerOptions. Caso contrário, você receberá um erro ao executar os comandos para adicionar caminhos específicos. "caminhos" podem ser adicionados assim:

    json -f tsconfig.json -I -e "this.compilerOptions['paths'] = {}"

Aliases recomendados
-------------------
Recomendados são aliases para `core <core.html>` _, `shared <shared.html>` _,
`módulos <modules.html>` _ e ``environment``. Esses aliases serão
simplifique seu desenvolvimento ::

  json -f tsconfig.json -I -e "this.compilerOptions.paths['@app/*'] = ['app/core/*']"
  json -f tsconfig.json -I -e "this.compilerOptions.paths['@shared/*'] = ['app/shared/*']"
  json -f tsconfig.json -I -e "this.compilerOptions.paths['@modules/*'] = ['app/modules/*']"
  json -f tsconfig.json -I -e "this.compilerOptions.paths['@env'] = ['environments/environment']"

Observe que o alias para @env vai diretamente para o arquivo de ambiente.

Usando aliases
-------------
Quando você tiver aliases definidos como ``@shared``, poderá atalho seu ``use``
instruções usando o alias::

  import {SharedModule} from '../../shared/shared.module';

torna-se::

  import { SharedModule } from '@shared/shared.module';

O alias do ambiente ``@env`` para um arquivo é usado desta maneira:

  import { environment } from '@env';


Instalar localmente
===============
Você pode instalar este aplicativo localmente e executá-lo. Supondo que você já tenha
``typescript``, ``npm`` e ``ng`` instalados, clonam este repositório, cd no diretório
diretório e execute ``npm install`` ::

  git clone https://github.com/lenin123/Lancamento-Compras.git
  npm install

Incluído neste pacote estão alguns scripts npm personalizados. Aqui está uma lista de
comandos (pipelines) de execução do npm e suas descrições::

  npm start     -> Execute a Aplicação. server on http://localhost:4200/
  npm run build -> Buildar a solução angular que irá gerar uma pasta bundles
  npm run test  -> Executa os testes


API - Estrutura Padrão
===========================

Essa estrutura de api é um modelo sem a utilização de banco de dados aonde conseguimos simular com 
exatidão um retorno de api rest mockado.

Rodando Aplicação
-----

É necessário seguir uma sequência de comandos abrindo via cmd ou git bash:
- npm install -g json-server
- cd [caminho até a pasta api]
- json-server --watch db.json

