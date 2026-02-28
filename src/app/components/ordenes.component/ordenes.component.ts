import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Orden } from '../../interfaces/orden';
import { Cliente } from '../../interfaces/cliente';
import { Menu } from '../../interfaces/menu';
import { MenuService } from '../../services/menu';
import { ClienteService } from '../../services/cliente';
import { OrdenService } from '../../services/orden';

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ordenes.component.html',

})
export class OrdenesComponent implements OnInit {
  ordenes: Orden[] = [];
  clientes: Cliente[] = [];
  menus: Menu[] = [];
  form: Orden = { ordenId: 0, clienteId: 0, menuId: 0, cantidad: 1 };

  constructor(
    private ordenService: OrdenService,
    private clienteService: ClienteService,
    private menuService: MenuService,
  ) {}

  ngOnInit() {
    this.cargar();
    this.clienteService.getAll().subscribe((d) => (this.clientes = d));
    this.menuService.getAll().subscribe((d) => (this.menus = d.filter((m) => m.disponible)));
  }

  cargar() {
    this.ordenService.getAll().subscribe((d) => (this.ordenes = d));
  }

  guardar() {
    this.ordenService.create(this.form).subscribe(() => {
      this.cargar();
      this.reset();
    });
  }

  eliminar(id: number) {
    this.ordenService.delete(id).subscribe(() => this.cargar());
  }

  reset() {
    this.form = { ordenId: 0, clienteId: 0, menuId: 0, cantidad: 1 };
  }
}
