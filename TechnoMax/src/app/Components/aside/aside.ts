import { Component, inject, signal } from '@angular/core';
import { Cliente } from '../../Interface/cliente';
import { form, min, required, FormField } from '@angular/forms/signals';
import { PsService } from '../../Service/ps.service';
import Swal from 'sweetalert2';

@Component({
  imports: [FormField],
  selector: 'app-aside',
  styleUrl: './aside.css',
  templateUrl: './aside.html',
})
export class Aside {
  private clienteService = inject(PsService);

  listaClientes: Cliente[] = this.clienteService.mostrar();

  clienteModelo = signal<Cliente>({ nombre: '', edad: 0, telefono: '' });

  clienteFormulario = form(this.clienteModelo, (esquema) => {
    required(esquema.nombre, { message: 'El nombre es obligatorio' });
    min(esquema.edad, 18, { message: 'Debes tener como mínimo 18 años' });
    required(esquema.telefono, { message: 'El teléfono es obligatorio' });
  });

  constructor() {
    this.mostrarClientes();
  }

  guardar(evento: Event) {
    evento.preventDefault();
    const cliente: Cliente = {
      nombre: this.clienteModelo().nombre,
      edad: Number(this.clienteModelo().edad),
      telefono: this.clienteModelo().telefono,
    };
    this.clienteService.guardar(cliente);
    Swal.fire({
      title: '¡Registro Exitoso!',
      text: 'Tus datos fueron recibidos. Nuestro equipo de TechnoMax se pondrá en contacto contigo a la brevedad.',
      icon: 'success',
      confirmButtonColor: '#0d6efd',
    });
    this.mostrarClientes();
    this.limpiar();
  }

  mostrarClientes() {
    this.listaClientes = this.clienteService.mostrar();
  }

  limpiar() {
    this.clienteModelo.set({ nombre: '', edad: 0, telefono: '' });
  }
}
