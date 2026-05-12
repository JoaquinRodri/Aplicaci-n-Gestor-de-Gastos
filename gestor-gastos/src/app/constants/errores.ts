export const ERRORES = {

    general: {
        requerido: 'Este campo es obligatorio'
    },

    nombre: {
        minimo: 'El nombre debe tener al menos 3 caracteres',
        maximo: 'El nombre debe tener menos de 20 caracteres',
        sinEspacios: 'El nombre no puede contener espacios',
        enUso: 'El nombre ya esta en uso'
    },

    password: {
        minimo: 'La contraseña debe tener al menos 6 caracteres',
        maximo: 'La contraseña no puede superar los 20 caracteres',
        patron: 'La contraseña debe tener al menos una letra mayuscula y un numero'
    },

    credenciales: 'Usuario o contraseña incorrectos',

    concepto: {
        requerido: 'El concepto es obligatorio',
        minimo: 'El concepto debe tener al menos 3 caracteres',
        maximo: 'El concepto no puede superar los 50 caracteres'
    },

    descripcion: {
        minimo: 'La descripcion debe tener al menos 5 caracteres',
    },

    importe: {
        requerido: 'El importe es obligatorio',
        minimo: 'El importe debe ser mayor que 0',
        maximo: 'El importe no puede superar los 99999 euros'
    },

    fecha: {
        requerida: 'La fecha es obligatoria',
    },

    categoria: {
        requerida: 'Debes seleccionar una categoria'
    }

};