import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

interface Gasto {
  id: number;
  concepto: string;
  descripcion: string;
  importe: number;
  fecha: Date;
  categoriaId: number;
  notas?: string;
}

interface Categoria {
  id: number;
  nombre: string;
  color: string;
}

type VistaActual = 'lista' | 'formulario' | 'categorias' | 'dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, DatePipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {

  vistaActual: VistaActual = 'dashboard';

  gastos: Gasto[] = [
    { id: 1, concepto: "Ropa", descripcion: "Ropa para verano", importe: 50.67, fecha: new Date('2026-04-25'), categoriaId: 3 },
    { id: 2, concepto: "Comida y bebida", descripcion: "Gastos varios", importe: 10.25, fecha: new Date('2026-04-22'), categoriaId: 2 },
    { id: 3, concepto: "Ahorros", descripcion: "He metido en la hucha dinero", importe: 100, fecha: new Date('2026-04-29'), categoriaId: 1 }
  ];

  categorias: Categoria[] = [
    { id: 1, nombre: "General", color: "#FF6B6B" },
    { id: 2, nombre: "Ocio", color: "#4ECDC4" },
    { id: 3, nombre: "Ropa", color: "#45B7D1" }
  ];

  guardarDatos() {
    localStorage.setItem('gastos', JSON.stringify(this.gastos));
    localStorage.setItem('categorias', JSON.stringify(this.categorias));
  }

  cargarDatos() {
    const gastos = localStorage.getItem('gastos');
    const categorias = localStorage.getItem('categorias');

    if (gastos) this.gastos = JSON.parse(gastos);
    if (categorias) this.categorias = JSON.parse(categorias);
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  eliminarGasto(id: number) {
    this.gastos = this.gastos.filter(gasto => gasto.id !== id);
    this.guardarDatos();
  }

  agregarGasto(gasto: Gasto) {
    gasto.id = Math.max(...this.gastos.map(g => g.id), 0) + 1;
    this.gastos.push(gasto);
    this.guardarDatos();
  }

  editarGasto(gasto: Gasto) {
    this.gastos = this.gastos.map(gastoActual =>
      gastoActual.id === gasto.id ? gasto : gastoActual
    );
    this.guardarDatos();
  }

  agregarCategoria(categoria: Categoria) {
    categoria.id = Math.max(...this.categorias.map(c => c.id), 0) + 1;
    this.categorias.push(categoria);
    this.guardarDatos();
  }

  editarCategoria(categoria: Categoria) {
    this.categorias = this.categorias.map(categoriaActual =>
      categoriaActual.id === categoria.id ? categoria : categoriaActual
    );
    this.guardarDatos();
  }

  eliminarCategoria(id: number) {
    if (this.gastos.some(g => g.categoriaId === id)) {
      alert('No puedes borrar una categoría con gastos asociados');
      return;
    }
    this.categorias = this.categorias.filter(categoria => categoria.id !== id);
    this.guardarDatos();
  }

  this.categorias = this.categorias.filter(categoria => categoria.id !== id);
  this.guardarDatos();
}
 



  cambiarVista(vista: VistaActual) {
    this.vistaActual = vista;
  }

  textoFiltro: string = '';

  obtenerGastos(filtro: string = '') {
    if (filtro.trim() === '') {
      return this.gastos;
    }

    filtro = filtro.toLowerCase();

    return this.gastos.filter(g =>
      g.descripcion.toLowerCase().includes(filtro) ||
      g.concepto.toLowerCase().includes(filtro)
    );
/*

>>>>>>> 31b42e1548b3777703e01c5a3894670440c04aee
cambiarVista(vista: VistaActual) {
  this.vistaActual = vista;
}
 get totalGastado(): number {
    return this.gastos.reduce((sum, g) => sum + g.importe, 0);
  }

  get numeroGastos(): number {
    return this.gastos.length;
  }

  get categoriaConMasGasto(): string {
    if (this.gastos.length === 0) return 'Sin gastos';
    const totales = this.categorias.map(cat => ({
      nombre: cat.nombre,
      total: this.gastos.filter(g => g.categoriaId === cat.id).reduce((sum, g) => sum + g.importe, 0)
    }));
    const top = totales.reduce((max, cat) => cat.total > max.total ? cat : max);
    return top.total > 0 ? top.nombre : 'Sin gastos';

  }*/
}}
