  import { Routes } from '@angular/router';
  import { LoginComponent } from './login/login';
  export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: LoginComponent },

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard',
      loadComponent: () => import('./dashboard/dashboard').then(m => m.DashboardComponent) },
    { path: 'gastos',
      loadComponent: () => import('./lista-gastos/lista-gastos').then(m => m.ListaGastosComponent) },
    { path: 'gastos/nuevo',
      loadComponent: () => import('./formulario-gasto/formulario-gasto').then(m => m.FormularioGastoComponent) },
    { path: 'gastos/:id/editar',
      loadComponent: () => import('./formulario-gasto/formulario-gasto').then(m => m.FormularioGastoComponent) },
    { path: 'gastos/:id',
      loadComponent: () => import('./detalle-gasto/detalle-gasto').then(m => m.DetalleGastoComponent) },
    { path: 'categorias',
      loadComponent: () => import('./categorias/categorias').then(m => m.CategoriasComponent) },
    { path: '**', redirectTo: 'dashboard' }
  ];