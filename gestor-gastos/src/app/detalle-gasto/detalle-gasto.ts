 import { Component, OnInit, inject } from '@angular/core';
  import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
  import { ActivatedRoute, Router } from '@angular/router';
  import { GastoService } from '../services/gasto';
  import { Gasto } from '../models/gasto.model';

  @Component({
    selector: 'app-detalle-gasto',
    imports: [CommonModule, DatePipe, CurrencyPipe],
    templateUrl: './detalle-gasto.html',
    styleUrl: './detalle-gasto.css'
  })
  export class DetalleGastoComponent implements OnInit {
    gastoService = inject(GastoService);
    router       = inject(Router);
    route        = inject(ActivatedRoute);

    gasto: Gasto | null = null;

    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        const encontrado = this.gastoService.gastos.find(g => g.id === +id);
        this.gasto = encontrado || null;
      }
    }

    nombreCategoria(id: number): string {
      const cat = this.gastoService.categorias.find(c => c.id === id);
      return cat ? cat.nombre : 'Sin categoria';
    }

    colorCategoria(id: number): string {
      const cat = this.gastoService.categorias.find(c => c.id === id);
      return cat ? cat.color : '#ccc';
    }

    volver() { this.router.navigate(['/gastos']); }

    editar() {
      if (this.gasto) this.router.navigate(['/gastos', this.gasto.id, 'editar']);
    }

    eliminar() {
      if (this.gasto && confirm('Seguro que quieres eliminar este gasto?')) {
        this.gastoService.eliminarGasto(this.gasto.id);
        this.router.navigate(['/gastos']);
      }
    }
  }