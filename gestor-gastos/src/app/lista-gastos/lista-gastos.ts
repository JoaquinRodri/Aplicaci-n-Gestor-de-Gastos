import { Component, inject } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GastoService } from '../services/gasto';

@Component({
  selector: 'app-lista-gastos',
  imports: [ CommonModule, DatePipe, CurrencyPipe, FormsModule],
  templateUrl: './lista-gastos.html',
  styleUrl: './lista-gastos.css',
})
export class ListaGastosComponent {
  gastoService = inject(GastoService);
  router = inject(Router);
  textoFiltro = '';

  mostrarModalEliminar = false;
  idGastoAEliminar: number | null = null;

   get gastos() {
    return this.gastoService.obtenerGastos(this.textoFiltro);
  }

  // Devuelve el nombre de la categoria a partir del id
  nombreCategoria(id: number): string {
    const cat = this.gastoService.categorias.find(c => c.id === id);
    return cat ? cat.nombre : 'Sin categoria';
  }

  // Devuelve el color de la categoria a partir del id
  colorCategoria(id: number): string {
    const cat = this.gastoService.categorias.find(c => c.id === id);
    return cat ? cat.color : '#ccc';
  }

  // Navega al formulario de edicion pasando el id del gasto
  irAEditar(id: number) {
    this.router.navigate(['/gastos', id, 'editar']);
  }

  // Navega al detalle del gasto
  irADetalle(id: number) {
    this.router.navigate(['/gastos', id]);
  }

  // Pide confirmacion y elimina el gasto
  // Abre el modal y guarda el id del gasto que se quiere borrar
  abrirModalEliminar(id: number): void {
    this.idGastoAEliminar = id;
    this.mostrarModalEliminar = true;
  }

  // Cierra el modal sin borrar nada
  cancelarEliminacion(): void {
    this.idGastoAEliminar = null;
    this.mostrarModalEliminar = false;
  }

  // Confirma la eliminación del gasto
  confirmarEliminacion(): void {
    if (this.idGastoAEliminar === null) {
      return;
    }

    this.gastoService.eliminarGasto(this.idGastoAEliminar);

    this.idGastoAEliminar = null;
    this.mostrarModalEliminar = false;
  }
}
