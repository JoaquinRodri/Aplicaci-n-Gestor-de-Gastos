import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [FormsModule]
})
export class LoginComponent implements OnInit {

  nombre: string = '';
  password: string = '';
  modoRegistro: boolean = false;
  mensajeError: string = '';

  router = inject(Router);
  auth = inject(Auth);

  ngOnInit() {
    this.modoRegistro = this.router.url.includes('registro');
  }

  login() {
    const ok = this.auth.login(this.nombre, this.password);

    if (ok) {
      this.auth.guardarSesion();
      this.router.navigate(['/dashboard']);
    } else {
      this.mensajeError = 'Usuario o contraseña incorrectos';
    }
  }

  registro() {
    const ok = this.auth.registro(this.nombre, this.password);

    if (ok) {
      this.router.navigate(['/login']);
    } else {
      this.mensajeError = 'Ese nombre de usuario ya existe';
    }
  }

  irALogin() {
    this.router.navigate(['/login']);
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }
}
