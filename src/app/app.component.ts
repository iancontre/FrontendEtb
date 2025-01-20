import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Necesario para el ruteo





// Asegúrate de importar las rutas

@Component({
    selector: 'app-root',
    imports: [RouterModule],
    templateUrl: './app.component.html',
    styleUrls: []
})
export class AppComponent {
  title = 'Mi Aplicación Angular';
}
