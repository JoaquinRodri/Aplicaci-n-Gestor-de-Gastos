export interface Gasto {
  id: number;
  concepto: string;
  descripcion: string;
  importe: number;
  fecha: Date;
  categoriaId: number;
  notas?: string;
}

export interface Categoria {
  id: number;
  nombre: string;
  color: string;
}