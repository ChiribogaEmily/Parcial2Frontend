import { Cliente } from './cliente';
import { Menu } from './menu';

export interface Orden {
  ordenId: number;
  clienteId: number;
  menuId: number;
  cantidad: number;
  fecha?: string;
  total?: number;
  cliente?: Cliente;
  menu?: Menu;
}
