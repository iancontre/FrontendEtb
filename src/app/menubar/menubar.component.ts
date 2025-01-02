import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {
  isSubmenuOpen = false; 

  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }
  keepSubmenuOpen() {
    // Este método no hace nada, solo se usa para evitar que el submenú se cierre
    // Puedes agregar lógica aquí si necesitas hacer algo más
  }

  }

