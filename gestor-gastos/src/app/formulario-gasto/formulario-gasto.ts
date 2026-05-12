import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GastoService } from '../services/gasto';
import { Gasto } from '../models/gasto.model';

@Component({
  selector: 'app-formulario-gasto',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-gasto.html',
  styleUrl: './formulario-gasto.css'
})
export class FormularioGastoComponent implements OnInit {

  gastoService = inject(GastoService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  modoEdicion = false;
  fechaString = '';

  gasto: Gasto = {
    id: 0,
    concepto: '',
    descripcion: '',
    importe: 0,
    fecha: new Date(),
    categoriaId: 0,
    usuarioId: 0
  };

  ngOnInit() {

    // Comprueba si hay un id en la URL para saber si es edicion o creacion
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.modoEdicion = true;

      const encontrado = this.gastoService.gastos.find(g => g.id === +id);

      if (encontrado) {

        this.gasto = { ...encontrado };

        // Convierte Date a string para el input type=date
        this.fechaString = new Date(this.gasto.fecha)
          .toISOString()
          .split('T')[0];
      }

    } else {

      this.fechaString = new Date()
        .toISOString()
        .split('T')[0];
    }
  }

  guardar() {

    if (!this.gasto.concepto || this.gasto.importe <= 0 || !this.gasto.categoriaId) {
      alert('Rellena todos los campos obligatorios');
      return;
    }

    // Convierte el string de vuelta a Date antes de guardar
    this.gasto.fecha = new Date(this.fechaString);
    this.gasto.categoriaId = +this.gasto.categoriaId;
    
    if (this.modoEdicion) {
      this.gastoService.editarGasto(this.gasto);
    } else {
      this.gastoService.agregarGasto(this.gasto);
    }

    this.router.navigate(['/gastos']);
  }

  cancelar() {
    this.router.navigate(['/gastos']);
  }

  get categorias() {
    return this.gastoService.categorias;
  }
}