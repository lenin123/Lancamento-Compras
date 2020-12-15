import { DadosDomicilioBancario } from './dados-domicilio-bancario';

export class LancamentoContaCorrenteCliente {
  numeroRemessaBanco: number;
  nomeSituacaoRemessa: string;
  dadosDomicilioBancario: DadosDomicilioBancario;
  nomeTipoOperacao: string;
}
