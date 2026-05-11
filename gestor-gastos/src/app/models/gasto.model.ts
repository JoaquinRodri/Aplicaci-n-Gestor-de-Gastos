export interface Gasto {
  id: number;
  concepto: string;
  descripcion: string;
  importe: number;
  fecha: Date;
  categoriaId: number;
  usuarioId:number;
  notas?: string;
}

export interface Categoria {
  id: number;
  nombre: string;
  color: string;
}

export interface Usuario {
  id: number;
  nombre: string;
  password: string;
  rol: 'admin' | 'usuario';
}