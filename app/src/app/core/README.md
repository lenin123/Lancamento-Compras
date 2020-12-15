# Módulo Principal

`~/src/app/core` \_
Este módulo é para classes usadas pelo app.module. Recursos
sempre carregados, como protetores de rota, interceptores HTTP e
serviços no nível do aplicativo, como o ThemeService e o log, pertencem a este
diretório.

.. Nota::
Este módulo é recomendado para um `alias de caminho <path-alias.html>` \_
para ** @app **

## Serviço de Logger

Sistema logger simples, com a possibilidade de registrar saídas personalizadas.

Quatro níveis de log diferentes são fornecidos, com os métodos correspondentes: - debug: para informações sobre depuração - info: para status informativo do aplicativo (sucesso, ...) - warning: para erros não críticos que não impedem o comportamento normal do aplicativo - error: para erros críticos que impedem o comportamento normal do aplicativo

### Exemplo de uso:

```
    import {Logger} from 'app/core/logger.service';

    const log = new logger('myFile');
    ...
    log.debug ('algo aconteceu');
```

### Para desativar os logs de depuração e informações em produção, adicione este trecho ao seu componente raiz:

```
   export class AppComponent implements OnInit {
       ngOnInit() {
           if (environment.production) {
               Logger.enableProductionMode();
           }
           ...
       }
   }
```

### Observações

- Se você deseja processar logs através de outras saídas além do console, você pode adicionar funções LogOutput a Logger.outputs.
- LogLevel.Off nunca é emitido e usado, apenas com a propriedade Logger.level para desativar os logs.
