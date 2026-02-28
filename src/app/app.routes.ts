import { Routes } from '@angular/router';
import { MenusComponent } from './components/menus.component/menus.component';
import { ClientesComponent } from './components/clientes.component/clientes.component';
import { OrdenesComponent } from './components/ordenes.component/ordenes.component';

export const routes: Routes = [
  { path: 'menus', component: MenusComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'ordenes', component: OrdenesComponent },
  { path: '', redirectTo: 'menus', pathMatch: 'full' },
];
