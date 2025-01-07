import { Component } from '@angular/core';
import { MenubarComponent } from '../menubar/menubar.component';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [MenubarComponent, CommonModule,FormsModule], 
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'] 
})
export class DetalleComponent {
  selectedTab = '1'; 
  
}
