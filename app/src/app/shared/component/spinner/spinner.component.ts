import { Component, Input, OnInit } from '@angular/core';

/**
 * Componente que simula um carregando
 */
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  /** Carregando  */
  @Input() public isLoading = false;

  /** Mensagem pós carregamento */
  @Input() public message: string;
}
