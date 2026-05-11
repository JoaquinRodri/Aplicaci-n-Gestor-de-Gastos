import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { GastoService } from '../services/gasto';

import { AuthService } from '../services/auth';

import { Categoria } from '../models/gasto.model';

@Component({
  selector: 'app-categorias',
  imports: [CommonModule, FormsModule],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class CategoriasComponent {

  gastoService = inject(GastoService);

  authService = inject(AuthService);

  mostrarFormulario = false;

  categoriaEditando: Categoria | null = null;

  form: Categoria = {
    id: 0,
    nombre: '',
    color: '#ff6600'
  };

  get categorias() {

    return this.gastoService.categorias;
  }

  get esAdmin() {

    return this.authService.esAdmin();
  }

  abrirFormulario() {

    this.mostrarFormulario = true;

    this.categoriaEditando = null;

    this.form = {
      id: 0,
      nombre: '',
      color: '#ff6600'
    };
  }

  editarCategoria(cat: Categoria) {

    this.mostrarFormulario = true;

    this.categoriaEditando = cat;

    this.form = {
      ...cat
    };
  }

  guardar() {

    if (!this.form.nombre.trim()) {

      alert('El nombre es obligatorio');

      return;
    }

    if (this.categoriaEditando) {

      this.gastoService.editarCategoria(this.form);

    } else {

      this.gastoService.agregarCategoria(this.form);
    }

    this.mostrarFormulario = false;
  }

  cancelar() {

    this.mostrarFormulario = false;
  }

  eliminar(id: number) {

    this.gastoService.eliminarCategoria(id);
  }
}