import { Service } from '@angular/core';
import { Cliente } from '../Interface/cliente';

@Service()
export class PsService {
  private listaClientes: Cliente[] = [];

  guardar(cliente: Cliente) {
    this.listaClientes.push(cliente);
  }

  mostrar(): Cliente[] {
    return this.listaClientes;
  }
}

export { PsService as ClienteService };
