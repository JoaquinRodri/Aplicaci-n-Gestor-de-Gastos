import { Injectable } from '@angular/core';
import { Usuario } from '../models/gasto.model';

@Injectable({
  providedIn: 'root',
})
export class Auth {

 constructor() {
  this.cargarUsuarios();
  this.cargarSesion();
}

  usuarios: Usuario[] = [];
  usuarioActivo: Usuario | null = null;

  private readonly usuarioAdmin = {
    id: 0,
    nombre: 'admin',
    password: 'admin',
    rol: 'admin' as 'admin'
  };

  readonly passwordPattern = /^(?=.*[A-Z])(?=.*\d).{6,20}$/;

  login(nombre:string, password:string): boolean{
    // comprueba que el usuario es admin
    if (nombre === this.usuarioAdmin.nombre && 
      password === this.usuarioAdmin.password) {
      this.usuarioActivo = this.usuarioAdmin;
      return true;
    }

    // busca en el array si el usuario esta registrado.
    const usuario = this.usuarios.find(u => u.nombre === nombre &&
       u.password === password);
      if (usuario) {
        this.usuarioActivo = usuario;
        return true;
      }

      return false;

  }

  registro(nombre:string, password:string): boolean{

    const usuario = this.usuarios.find(u => u.nombre === nombre);
    if (usuario) {
        alert(`El nombre de ${nombre} esta en uso.`);
        return false;
      };

      const nuevoUsuario = {
        id: Math.max(...this.usuarios.map(u => u.id), 0) + 1,
        nombre: nombre,
        password: password,
        rol: 'usuario' as 'usuario'
      };

      this.usuarios.push(nuevoUsuario);
      this.guardarUsuarios();

      return true;

    }

    guardarUsuarios() {
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

  logout(){
    this.usuarioActivo = null;
    localStorage.removeItem('sesion');
  }

  estaLogueado(): boolean{
    if(this.usuarioActivo !== null) return true;
    return false;
  }

  esAdmin(): boolean{
    if (this.usuarioActivo?.rol === 'admin') return true;
    return false;
  }

  guardarSesion(){
    localStorage.setItem('sesion', JSON.stringify(this.usuarioActivo));
  }

  cargarSesion(){
    const sesion = localStorage.getItem('sesion');
    if (sesion) this.usuarioActivo = JSON.parse(sesion);
  }

  cargarUsuarios(){
    const usuarios = localStorage.getItem('usuarios');
    if (usuarios) this.usuarios = JSON.parse(usuarios)
  }

  }


