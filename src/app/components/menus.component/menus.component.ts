import { Component, OnInit } from '@angular/core';
import { Menu } from '../../interfaces/menu';
import { MenuService } from '../../services/menu';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menus',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menus.component.html',
})
export class MenusComponent implements OnInit {
  menus: Menu[] = [];
  form: Menu = { menuId: 0, nombre: '', descripcion: '', precio: 0, disponible: true };
  editando = false;

  constructor(private menuService: MenuService) {}
  ngOnInit() {
    this.cargar();
  }
  cargar() {
    this.menuService.getAll().subscribe((d) => (this.menus = d));
  }

  guardar() {
    if (this.editando)
      this.menuService.update(this.form.menuId, this.form).subscribe(() => {
        this.cargar();
        this.reset();
      });
    else
      this.menuService.create(this.form).subscribe(() => {
        this.cargar();
        this.reset();
      });
  }
  editar(m: Menu) {
    this.form = { ...m };
    this.editando = true;
  }
  eliminar(id: number) {
    this.menuService.delete(id).subscribe(() => this.cargar());
  }
  reset() {
    this.form = { menuId: 0, nombre: '', descripcion: '', precio: 0, disponible: true };
    this.editando = false;
  }
}
