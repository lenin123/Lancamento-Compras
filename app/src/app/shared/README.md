# Módulo compartilhado

`~/src/app/shared`\_

O módulo compartilhado contém classes e recursos que são usados ​​em mais
de um módulo carregado dinamicamente. Sempre carregando com o
aplicação, os componentes compartilhados estão prontos sempre que um módulo os solicitar.

O módulo compartilhado é um bom lugar para importar e exportar o `FormsModule`
e o `ReactiveFormsModule`. Também é bom para o `FontAwesomeModule`
e qualquer outro recurso usado por alguns módulos algumas vezes, mas nem todos
módulos o tempo todo.

.. Nota::
Este módulo é recomendado para um `alias de caminho <path-alias.html>` \_
para ** @ compartilhado **

## Instalação

ng generate module Shared
