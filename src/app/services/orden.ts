import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orden } from '../interfaces/orden';

@Injectable({ providedIn: 'root' })
export class OrdenService {
  private url = 'https://localhost:7094/api/ordenes';
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<Orden[]>(this.url);
  }
  create(orden: Orden) {
    return this.http.post<Orden>(this.url, orden);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
