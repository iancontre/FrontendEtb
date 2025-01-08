import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarComponent } from '../menubar/menubar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-modulo-parametrizacion',
  standalone: true,
  imports: [RouterModule,MenubarComponent,NgxPaginationModule,CommonModule],
  templateUrl: './modulo-parametrizacion.component.html',
  styleUrls: ['./modulo-parametrizacion.component.css']
})
export class ModuloParametrizacionComponent {
  p: number = 1; 
  items = [
    { cedula: '1078446576', etb: 'cra 8 # 20-56', nombres: 'Juan Pérez', cargo: 'Ingeniero', numeroCentroCosto: '001B', centroCosto: 'cra 8 # 20-56', numeroVicepresidencia: 'A003', vicepresidencia: 'cra 8 # 20-56', jefeInmediato: 'Carlos Martínez', adminInventario: 'Jose Hernandez', correoAdminInventario: 'jose.hernandezetb.com', telefonoAdminInventario: '3015476235' },
    { cedula: '1078446577', etb: 'cra 8 # 20-57', nombres: 'Ana Gómez', cargo: 'Abogada', numeroCentroCosto: '001C', centroCosto: 'cra 8 # 20-57', numeroVicepresidencia: 'A004', vicepresidencia: 'cra 8 # 20-57', jefeInmediato: 'Carlos Martínez', adminInventario: 'Maria Pérez', correoAdminInventario: 'maria.perez@etb.com', telefonoAdminInventario: '3015476236' },
    { cedula: '1078446578', etb: 'cra 8 # 20-58', nombres: 'Carlos Martínez', cargo: 'Contador', numeroCentroCosto: '001D', centroCosto: 'cra 8 # 20-58', numeroVicepresidencia: 'A005', vicepresidencia: 'cra 8 # 20-58', jefeInmediato: 'Carlos Martínez', adminInventario: 'Luis Gómez', correoAdminInventario: 'luis.gomez@etb.com', telefonoAdminInventario: '3015476237' },
    { cedula: '1078446578', etb: 'cra 8 # 20-58', nombres: 'Carlos Martínez', cargo: 'Contador', numeroCentroCosto: '001D', centroCosto: 'cra 8 # 20-58', numeroVicepresidencia: 'A005', vicepresidencia: 'cra 8 # 20-58', jefeInmediato: 'Carlos Martínez', adminInventario: 'Luis Gómez', correoAdminInventario: 'luis.gomez@etb.com', telefonoAdminInventario: '3015476237' },
    { cedula: '1078446578', etb: 'cra 8 # 20-58', nombres: 'Carlos Martínez', cargo: 'Contador', numeroCentroCosto: '001D', centroCosto: 'cra 8 # 20-58', numeroVicepresidencia: 'A005', vicepresidencia: 'cra 8 # 20-58', jefeInmediato: 'Carlos Martínez', adminInventario: 'Luis Gómez', correoAdminInventario: 'luis.gomez@etb.com', telefonoAdminInventario: '3015476237' }
  ];
}
