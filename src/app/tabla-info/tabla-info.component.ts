import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarComponent } from '../menubar/menubar.component';
@Component({
    selector: 'app-tabla-info',
    imports: [RouterModule, MenubarComponent],
    templateUrl: './tabla-info.component.html',
    styleUrl: './tabla-info.component.css'
})
export class TablaInfoComponent {
  Gerencia = "Direccion de gestion operativa";
  Vicepresidencia = "Vicepresidencia Experiencia";
  NomJefeInmediato = "Sergio Alfonso";
  AdminInventario = "Pepita Perez";
  NumTelefono = "35965986";
  Correo = "perez@gmail.com";
  Backup = "Mendoza";
  Correo2 = "perez@gmail.com";
}
