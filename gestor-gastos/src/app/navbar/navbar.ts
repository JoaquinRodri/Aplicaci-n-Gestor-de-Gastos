import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../services/auth'; // Asumiendo la ruta del servicio de la Persona 1

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  // Inyectamos el Router para la navegación y el AuthService para el logout
  private router = inject(Router);
  authService = inject(Auth); // 7.1: Inyectar AuthService para acceder al usuario activo

  // 7.1: Método logout
  logout() {
    this.authService.logout(); // Llama al método del servicio
    this.router.navigate(['/login']); // Navega a la página de login
  }
}