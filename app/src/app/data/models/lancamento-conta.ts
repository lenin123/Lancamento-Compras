import { TotalLancamento } from './total-lancamento';
import { ListaControleLancamento } from './lista-controle-lancamento';

export class LancamentoConta {
  totalControleLancamento: TotalLancamento;
  listaControleLancamento: ListaControleLancamento[];
  indice: number;
  tamanhoPagina: number;
  totalElements: number;
}
