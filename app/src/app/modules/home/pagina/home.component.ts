import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/**
 * Componente página principal lançamento de contas cliente
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /**
   * Contrutor do componente da home da página de lançamento de contas cliente
   * @memberof HomeComponent
   */
  constructor() {}

  /** Incialização */
  ngOnInit(): void {}
}
