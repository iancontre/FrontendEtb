import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarComponent } from '../menubar/menubar.component';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
  selector: 'app-elementos',
  standalone: true,

  imports: [RouterModule,MenubarComponent,DetalleComponent],


  templateUrl: './elementos.component.html',
  styleUrl: './elementos.component.css'
})
export class ElementosComponent {

}
