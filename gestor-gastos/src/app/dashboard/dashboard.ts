import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GastoService } from '../services/gasto'; // 1. Quitada la extensión .ts (da error)
import { Gasto } from '../models/gasto.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})

export class DashboardComponent {
  public gastoService = inject(GastoService);

  get total() {
    return this.gastoService.totalGastado;
  }

  get cantidad() {
    return this.gastoService.numeroGastos;
  }

  get topCategoria() {
    return this.gastoService.categoriaConMasGasto;
  }

  get ultimosCinco(): Gasto[] {
    return [...this.gastoService.gastos]
      .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
      .slice(0, 5);
  }

  getNombreCategoria(id: number): string {
    const cat = this.gastoService.categorias.find((c: any) => c.id === id);
    return cat ? cat.nombre : 'Sin categoría';
  }
}
