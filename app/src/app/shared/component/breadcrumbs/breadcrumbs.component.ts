import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

/**
 * Componente para fazer o breadcrumb das páginas
 */
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent implements OnInit {
  /** Titulo da página em questão */
  @Input() tituloPagina: string;

  /** Tag referente a página */
  @Input() tagPagina: string;

  /** Array de navegação no breadcrumb */
  public navegacao = [];

  /** Construtor */
  constructor() {}

  /** Incializa o breadcrumb */
  ngOnInit() {
    this.construirNavegacao();
  }

  /** Função que constroe a navegação apartir da tag passada */
  construirNavegacao() {
    switch (this.tagPagina) {
      case 'home':
        this.navegacao = [];
        break;
      default:
        break;
    }
  }
}
