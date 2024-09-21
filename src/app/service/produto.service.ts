import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'process';
import { appConfig } from '../app.config';
import { API_CONFIG } from '../config/api.config';
import { Produto } from '../model/produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Produto[]>{

    return this.http.get<Produto[]>(`${API_CONFIG.baseUrl}/api/produtos`);

  }

  findById(id: any): Observable<Produto>{

    const url = `${API_CONFIG.baseUrl}/produtos/${id}`;
    return this.http.get<Produto>(url)

  }

  create(produto: Produto):Observable<Produto>{

    return this.http.post<Produto>(`${API_CONFIG.baseUrl}/api/produtos`, produto);

  }

  update(produto: Produto): Observable<Produto> {
    const url = `${API_CONFIG.baseUrl}/api/produtos/${produto.id}`;
    return this.http.put<Produto>(url, produto);

  }


  delete(produto: Produto): Observable<void> {
    return this.http.delete<void>(`${API_CONFIG.baseUrl}/api/produtos/${produto.id}`)
  }




}
