import { RouterModule } from '@angular/router'; 
import { Component } from '@angular/core';
import { MenubarComponent } from '../menubar/menubar.component';

@Component({
    selector: 'app-dashboard',
    imports: [RouterModule, MenubarComponent],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'Dashboard';

}
