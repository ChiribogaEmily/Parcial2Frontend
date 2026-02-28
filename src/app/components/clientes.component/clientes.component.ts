import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../interfaces/cliente';
import { ClienteService } from '../../services/cliente';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clientes.component.html',

})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  form: Cliente = { clienteId: 0, nombre: '', apellido: '', email: '', telefono: '' };
  editando = false;

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this.clienteService.getAll().subscribe((d) => (this.clientes = d));
  }

  guardar() {
    if (this.editando) {
      this.clienteService.update(this.form.clienteId, this.form).subscribe(() => {
        this.cargar();
        this.reset();
      });
    } else {
      this.clienteService.create(this.form).subscribe(() => {
        this.cargar();
        this.reset();
      });
    }
  }

  editar(c: Cliente) {
    this.form = { ...c };
    this.editando = true;
  }

  eliminar(id: number) {
    this.clienteService.delete(id).subscribe(() => this.cargar());
  }

  reset() {
    this.form = { clienteId: 0, nombre: '', apellido: '', email: '', telefono: '' };
    this.editando = false;
  }
}
