import { ArrayType } from '@angular/compiler';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


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
  nombre:string;
  color: string;
}

type VistaActual = 'lista' | 'formulario' | 'categorias' | 'dashboard';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestor-gastos');

  vistaActual: VistaActual = 'dashboard';

  gastos: Gasto[] = [
    {id: 1, concepto: "Ropa", descripcion: "Ropa para verano", importe: 50.67, fecha: new Date('25-04-2026'), categoriaId: 3},
    {id: 2, concepto: "Comida y bebida", descripcion: "Gastos varios", importe: 10.25, fecha: new Date('22-04-2026'), categoriaId: 2},
    {id: 3, concepto: "Ahorros", descripcion: "He metido en la hucha dinero", importe: 100, fecha: new Date('29-04-2026'), categoriaId: 1}];

  categorias: Categoria[] = [
    {id:1, nombre: "General", color:"#FF6B6B"},
    {id:2, nombre: "Ocio", color:"#4ECDC4"},
    {id:3, nombre: "Ropa", color:"#45B7D1"}];

  
}
