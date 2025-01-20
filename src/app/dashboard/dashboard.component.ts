// import { RouterModule } from '@angular/router'; 
// import { Component } from '@angular/core';
// import { MenubarComponent } from '../menubar/menubar.component';

// @Component({
//   selector: 'app-dashboard',
//   standalone: true,  
//   imports: [RouterModule, MenubarComponent], 
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent {
//   title = 'Dashboard';

// }

import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigService } from '../../../config.service';  
import { MenubarComponent } from '../menubar/menubar.component'; // Importa tu servicio

@Component({
  selector: 'app-dashboard',
  standalone: true,  
  imports: [RouterModule, MenubarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any = {};  // Aquí almaceno los datos del usuario

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    const currentUser = this.configService.getUser();
    if (currentUser) {
      this.user = currentUser;  // Si hay datos, asignarlos a la variable user
    }
  }
}
