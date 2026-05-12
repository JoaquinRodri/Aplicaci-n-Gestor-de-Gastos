export const ERRORES = {

  general: {
    requerido: 'Este campo es obligatorio'
  },

  concepto: {
    requerido: 'El concepto es obligatorio',
    minimo: 'El concepto debe tener al menos 3 caracteres',
    maximo: 'El concepto no puede superar los 50 caracteres'
  },

  descripcion: {
    minimo: 'La descripcion debe tener al menos 5 caracteres'
  },

  importe: {
    requerido: 'El importe es obligatorio',
    minimo: 'El importe debe ser mayor que 0',
    maximo: 'El importe no puede superar 99999'
  },

  fecha: {
    requerida: 'La fecha es obligatoria'
  },

  categoria: {
    requerida: 'Debes seleccionar una categoria'
  },

  nombre: {
    minimo: 'El nombre debe tener al menos 3 caracteres',
    maximo: 'El nombre no puede superar los 20 caracteres',
    sinEspacios: 'El nombre no puede contener espacios',
    enUso: 'Este nombre de usuario ya esta en uso'
  },

  password: {
    minimo: 'La contrasena debe tener al menos 6 caracteres',
    maximo: 'La contrasena no puede superar los 20 caracteres',
    patron: 'La contrasena debe tener al menos una mayuscula y un numero'
  },

  credenciales: 'Usuario o contrasena incorrectos'
};