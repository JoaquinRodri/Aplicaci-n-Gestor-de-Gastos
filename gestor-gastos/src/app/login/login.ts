import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ERRORES } from '../constants/errores';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [ReactiveFormsModule]
})
export class LoginComponent implements OnInit {

  router = inject(Router);
  auth = inject(Auth);
  fb = inject(FormBuilder);

  ERRORES = ERRORES;

  mensajeError: string = '';
  modoRegistro: boolean = false;

  formularioLogin: FormGroup = this.fb.group({
    nombre: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]],
    password: ['', [
      Validators.required,
      Validators.pattern(this.auth.passwordPattern)
    ]]
  });

  formularioRegistro: FormGroup = this.fb.group({
    nombre: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^\S+$/)
    ]],
    password: ['', [
      Validators.required,
      Validators.pattern(this.auth.passwordPattern)
    ]]
  });

  ngOnInit() {
    this.modoRegistro = this.router.url.includes('registro');
  }

  login() {
    if (this.formularioLogin.invalid) {
      this.formularioLogin.markAllAsTouched();
      return;
    }

    const { nombre, password } = this.formularioLogin.value;

    const ok = this.auth.login(nombre, password);

    if (!ok) {
      this.mensajeError = ERRORES.credenciales;
      return;
    }

    this.auth.guardarSesion();
    this.router.navigate(['/dashboard']);
  }

  registro() {
    if (this.formularioRegistro.invalid) {
      this.formularioRegistro.markAllAsTouched();
      return;
    }

    const { nombre, password } = this.formularioRegistro.value;

    const ok = this.auth.registro(nombre, password);

    if (!ok) {
      this.mensajeError = ERRORES.nombre.enUso;
      return;
    }

    this.router.navigate(['/login']);
  }

  irALogin() {
    this.router.navigate(['/login']);
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }
}
