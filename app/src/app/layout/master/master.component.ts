import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/**
 * Componente utilizado em todas as páginas como master carregando a estrutura base das páginas
 */
// @ts-ignore
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
// @ts-ignore
export class MasterComponent implements OnInit {
  /** Tema que está sendo utilizado */
  public theme = 'my-light-theme';

  /** @ignore */
  constructor() {}

  /** @ignore */
  ngOnInit() {}
}
