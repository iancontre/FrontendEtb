import { RouterModule } from '@angular/router';  // Asegúrate de importar RouterModule
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,  // Marca el componente como standalone
  imports: [RouterModule],  // Asegúrate de importar RouterModule si estás usando Router
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'Dashboard';


}
