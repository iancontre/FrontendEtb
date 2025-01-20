import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-login',
    imports: [FormsModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private readonly router: Router) {}

  onSubmit() {
    console.log('Iniciar sesión');
    // Navegar a la ruta del dashboard
    this.router.navigate(['/dashboard']);
  }
}
