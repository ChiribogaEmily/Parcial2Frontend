import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private url = 'https://localhost:7094/api/menus';
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<Menu[]>(this.url);
  }
  create(menu: Menu) {
    return this.http.post<Menu>(this.url, menu);
  }
  update(id: number, m: Menu) {
    return this.http.put(`${this.url}/${id}`, m);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
