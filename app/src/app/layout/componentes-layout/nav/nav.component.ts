import { Component, OnInit, OnChanges } from '@angular/core';

/**
 * Componente utilizado em todas as páginas como o menu de navegação
 */
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

// @ts-ignore
export class NavComponent implements OnInit, OnChanges {
  /**
   * Construtor do menu de navegação
   */
  constructor() {}

  /** Função que capta as alterações */
  ngOnChanges(): void {}

  /** Inicialização */
  ngOnInit() {}
}
