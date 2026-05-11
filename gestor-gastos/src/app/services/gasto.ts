import { Injectable } from '@angular/core';
import { Gasto, Categoria } from '../models/gasto.model';

@Injectable({ providedIn: 'root' })
export class GastoService {

  gastos: Gasto[] = [
    { id: 1, concepto: 'Ropa', descripcion: 'Ropa de verano',
      importe: 50.67, fecha: new Date('2026-04-25'), categoriaId: 3 },
    { id: 2, concepto: 'Comida', descripcion: 'Gastos varios',
      importe: 10.25, fecha: new Date('2026-04-22'), categoriaId: 2 },
    { id: 3, concepto: 'Ahorros', descripcion: 'Dinero en la hucha',
      importe: 100, fecha: new Date('2026-04-29'), categoriaId: 1 }
  ];

  categorias: Categoria[] = [
    { id: 1, nombre: 'General', color: '#FF6B6B' },
    { id: 2, nombre: 'Ocio',    color: '#4ECDC4' },
    { id: 3, nombre: 'Ropa',    color: '#45B7D1' }
  ];

  guardarDatos() {
    localStorage.setItem('gastos', JSON.stringify(this.gastos));
    localStorage.setItem('categorias', JSON.stringify(this.categorias));
  }

  cargarDatos() {
    const g = localStorage.getItem('gastos');
    const c = localStorage.getItem('categorias');
    if (g) this.gastos = JSON.parse(g);
    if (c) this.categorias = JSON.parse(c);
  }

  agregarGasto(gasto: Gasto) {
    gasto.id = Math.max(...this.gastos.map(g => g.id), 0) + 1;
    this.gastos.push(gasto);
    this.guardarDatos();
  }

  editarGasto(gasto: Gasto) {
    this.gastos = this.gastos.map(g => g.id === gasto.id ? gasto : g);
    this.guardarDatos();
  }

  eliminarGasto(id: number) {
    this.gastos = this.gastos.filter(g => g.id !== id);
    this.guardarDatos();
  }

  obtenerGastos(filtro: string = '') {
    if (filtro.trim() === '') return this.gastos;
    const f = filtro.toLowerCase();
    return this.gastos.filter(g =>
      g.concepto.toLowerCase().includes(f) ||
      g.descripcion.toLowerCase().includes(f)
    );
  }

  agregarCategoria(cat: Categoria) {
    cat.id = Math.max(...this.categorias.map(c => c.id), 0) + 1;
    this.categorias.push(cat);
    this.guardarDatos();
  }

  editarCategoria(cat: Categoria) {
    this.categorias = this.categorias.map(c => c.id === cat.id ? cat : c);
    this.guardarDatos();
  }

  eliminarCategoria(id: number) {
    if (this.gastos.some(g => g.categoriaId === id)) {
      alert('No puedes borrar una categoría con gastos asociados');
      return;
    }
    this.categorias = this.categorias.filter(c => c.id !== id);
    this.guardarDatos();
  }

  get totalGastado() {
    return this.gastos.reduce((sum, g) => sum + g.importe, 0);
  }

  get numeroGastos() {
    return this.gastos.length;
  }

  get categoriaConMasGasto() {
    if (!this.gastos.length) return 'Sin gastos';
    const totales = this.categorias.map(cat => ({
      nombre: cat.nombre,
      total: this.gastos
        .filter(g => g.categoriaId === cat.id)
        .reduce((sum, g) => sum + g.importe, 0)
    }));
    const top = totales.reduce((max, c) => c.total > max.total ? c : max);
    return top.total > 0 ? top.nombre : 'Sin gastos';
  }
}
