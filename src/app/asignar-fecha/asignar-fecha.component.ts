import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common'; 
import { MenubarComponent } from '../menubar/menubar.component';

@Component({
  selector: 'app-asignar-fecha',
  standalone: true,
  imports: [RouterModule,NgxPaginationModule,CommonModule,MenubarComponent],
  templateUrl: './asignar-fecha.component.html',
  styleUrl: './asignar-fecha.component.css'
})
export class AsignarFechaComponent {

}
