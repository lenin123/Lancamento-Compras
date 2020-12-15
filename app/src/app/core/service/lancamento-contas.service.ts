import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LancamentoContasService {
  _url = environment.serverUrl;
  _headers = new HttpHeaders({ 'api-version': environment.apiVersion });

  constructor(private http: HttpClient) {}

  getConsultaByLancamentoConta(): Observable<LancamentoContasService> {
    return this.http.get<LancamentoContasService>(
      `${this._url}/obterLancamentoConta`,
      { headers: this._headers }
    );
  }
}
