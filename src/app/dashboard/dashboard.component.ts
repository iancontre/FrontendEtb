import { RouterModule } from '@angular/router';  // Asegúrate de importar RouterModule
import { Component } from '@angular/core';
import { MenubarComponent } from '../menubar/menubar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,  
  imports: [RouterModule, MenubarComponent], 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'Dashboard';
}
