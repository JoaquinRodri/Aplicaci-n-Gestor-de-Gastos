import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { GastoService } from '../services/gasto';
import { Gasto } from '../models/gasto.model';

import { ERRORES } from '../constants/errores';

@Component({
  selector: 'app-formulario-gasto',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-gasto.html',
  styleUrl: './formulario-gasto.css'
})
export class FormularioGastoComponent implements OnInit {

  fb = inject(FormBuilder);

  gastoService = inject(GastoService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  ERRORES = ERRORES;

  modoEdicion = false;

  gastoId = 0;

  formularioGasto: FormGroup = this.fb.group({

    concepto: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]
    ],

    descripcion: [
      '',
      [
        Validators.minLength(5)
      ]
    ],

    importe: [
      0,
      [
        Validators.required,
        Validators.min(0.01),
        Validators.max(99999)
      ]
    ],

    fecha: [
      '',
      [
        Validators.required
      ]
    ],

    categoriaId: [
      0,
      [
        Validators.required,
        Validators.min(1)
      ]
    ],

    notas: ['']
  });

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.modoEdicion = true;

      const encontrado = this.gastoService.gastos.find(g => g.id === +id);

      if (encontrado) {

        this.gastoId = encontrado.id;

        this.formularioGasto.patchValue({

          concepto: encontrado.concepto,
          descripcion: encontrado.descripcion,
          importe: encontrado.importe,

          fecha: new Date(encontrado.fecha)
            .toISOString()
            .split('T')[0],

          categoriaId: encontrado.categoriaId,
          notas: encontrado.notas || ''
        });
      }

    } else {

      this.formularioGasto.patchValue({

        fecha: new Date()
          .toISOString()
          .split('T')[0]
      });
    }
  }

  guardar() {

    if (this.formularioGasto.invalid) {

      this.formularioGasto.markAllAsTouched();

      return;
    }

<<<<<<< HEAD
    const valores = this.formularioGasto.value;

    const gasto: Gasto = {

      id: this.gastoId,

      concepto: valores.concepto,

      descripcion: valores.descripcion,

      importe: +valores.importe,

      fecha: new Date(valores.fecha),

      categoriaId: +valores.categoriaId,

      usuarioId: 0,

      notas: valores.notas
    };

=======
    // Convierte el string de vuelta a Date antes de guardar
    this.gasto.fecha = new Date(this.fechaString);
    this.gasto.categoriaId = +this.gasto.categoriaId;
    
>>>>>>> feature-anton
    if (this.modoEdicion) {

      this.gastoService.editarGasto(gasto);

    } else {

      this.gastoService.agregarGasto(gasto);
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