import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarComponent } from '../menubar/menubar.component';


@Component({
    selector: 'app-elementos',
    imports: [RouterModule, MenubarComponent],
    templateUrl: './elementos.component.html',
    styleUrl: './elementos.component.css'
})
export class ElementosComponent {

}
