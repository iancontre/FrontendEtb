import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElementosComponent } from './elementos/elementos.component';
import { DetalleComponent } from './detalle/detalle.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'elementosaCargo', component: ElementosComponent},
  {path: 'detalleElementos', component: DetalleComponent}

];
