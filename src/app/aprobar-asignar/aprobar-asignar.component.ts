import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common'; 
import { MenubarComponent } from '../menubar/menubar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,NgxPaginationModule,CommonModule,MenubarComponent],
  templateUrl: './aprobar-asignar.component.html',
  styleUrls: ['./aprobar-asignar.component.css']
})
export class AprobarAsignarComponent {
  p: number = 1;
  items = [
    {
      cedula: '1078446576',
      etb: 'cra 8 # 20-56',
      nombres: 'Juan Pérez',
      cargo: 'Ingeniero',
      correo: 'jose.hernandezetb.com',
      telefonoContacto: '3015476235',
      numeroCentroCosto: '001B',
      centroCosto: 'cra 8 # 20-56',
      numeroVicepresidencia: 'A003',
      vicepresidencia: 'cra 8 # 20-56',
      jefeInmediato: 'Carlos Martínez',
      centralUbicacion: 'cra 8 # 20-56'
  },
  {
      cedula: '1078446577',
      etb: 'cra 8 # 20-57',
      nombres: 'Ana Gómez',
      cargo: 'Abogada',
      correo: 'maria.perez@etb.com',
      telefonoContacto: '3015476236',
      numeroCentroCosto: '001C',
      centroCosto: 'cra 8 # 20-57',
      numeroVicepresidencia: 'A004',
      vicepresidencia: 'cra 8 # 20-57',
      jefeInmediato: 'Carlos Martínez',
      centralUbicacion: 'cra 8 # 20-57'
  },
  {
    cedula: '1078446577',
    etb: 'cra 8 # 20-57',
    nombres: 'Ana Gómez',
    cargo: 'Abogada',
    correo: 'maria.perez@etb.com',
    telefonoContacto: '3015476236',
    numeroCentroCosto: '001C',
    centroCosto: 'cra 8 # 20-57',
    numeroVicepresidencia: 'A004',
    vicepresidencia: 'cra 8 # 20-57',
    jefeInmediato: 'Carlos Martínez',
    centralUbicacion: 'cra 8 # 20-57'
}
  ]
}
