import { Routes } from '@angular/router';

import { authGuard } from './auth.guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./login/login')
        .then(m => m.LoginComponent)
  },

  {
    path: 'registro',
    loadComponent: () =>
      import('./login/login')
        .then(m => m.LoginComponent)
  },

  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./dashboard/dashboard')
        .then(m => m.DashboardComponent)
  },

  {
    path: 'gastos',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./lista-gastos/lista-gastos')
        .then(m => m.ListaGastosComponent)
  },

  {
    path: 'gastos/nuevo',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./formulario-gasto/formulario-gasto')
        .then(m => m.FormularioGastoComponent)
  },

  {
    path: 'gastos/:id/editar',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./formulario-gasto/formulario-gasto')
        .then(m => m.FormularioGastoComponent)
  },

  {
    path: 'gastos/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./detalle-gasto/detalle-gasto')
        .then(m => m.DetalleGastoComponent)
  },

  {
    path: 'categorias',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./categorias/categorias')
        .then(m => m.CategoriasComponent)
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];