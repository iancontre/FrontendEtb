import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Necesario para el ruteo
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElementosComponent } from './elementos/elementos.component';

import { DetalleComponent } from './detalle/detalle.component';




// Asegúrate de importar las rutas

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterModule, LoginComponent, DashboardComponent, ElementosComponent,DetalleComponent], 


  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi Aplicación Angular';
}
