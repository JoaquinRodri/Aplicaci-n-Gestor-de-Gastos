import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard').then(m => m.DashboardComponent)
  },
  {
    path: 'gastos',
    loadComponent: () =>
      import('./lista-gastos/lista-gastos').then(m => m.ListaGastosComponent)
  },
  {
    path: 'gastos/nuevo',
    loadComponent: () =>
      import('./formulario-gasto/formulario-gasto').then(m => m.FormularioGastoComponent)
  },
  {
    path: 'gastos/:id/editar',
    loadComponent: () =>
      import('./formulario-gasto/formulario-gasto').then(m => m.FormularioGastoComponent)
  },
  {
    path: 'categorias',
    loadComponent: () =>
      import('./categorias/categorias').then(m => m.CategoriasComponent)
  },
  { path: '**', redirectTo: 'dashboard' }
];