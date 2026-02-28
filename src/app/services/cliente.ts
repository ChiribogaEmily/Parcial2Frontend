import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../interfaces/cliente';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private url = 'https://localhost:7094/api/clientes';
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<Cliente[]>(this.url);
  }
  create(cliente: Cliente) {
    return this.http.post<Cliente>(this.url, cliente);
  }
  update(id: number, cliente: Cliente) {
    return this.http.put(`${this.url}/${id}`, cliente);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
