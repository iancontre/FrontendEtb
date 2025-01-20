import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConfigService } from '../../../config.service';  // Importa ConfigService

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router, private configService: ConfigService) {}  // Inyecta ConfigService

  onSubmit() {
    console.log('Iniciar sesión');
    
    this.configService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);

        // Guardar los datos del usuario en ConfigService
        if (response.user) {
          this.configService.setUser(response.user); // Guardar los datos del usuario
        }

        this.router.navigate(['/dashboard']); // Redirigir al dashboard
      },
      error: (error) => {
        console.error('Error en el login:', error);
        alert('Error de autenticación. Verifica tus credenciales.');
      },
      complete: () => {
        console.log('Proceso de login completado');
        alert('¡Bienvenido!');
      }
    });
  }
}
