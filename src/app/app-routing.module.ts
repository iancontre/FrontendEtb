import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElementosComponent } from './elementos/elementos.component';
import { TablaInfoComponent } from './tabla-info/tabla-info.component';
import { ActualizarDatosComponent } from './actualizar-datos/actualizar-datos.component';
import { ModuloParametrizacionComponent } from './modulo-parametrizacion/modulo-parametrizacion.component';
import { AprobarFechaComponent } from './aprobar-fecha/aprobar-fecha.component';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'elementosaCargo', component: ElementosComponent},
  { path: 'tablaInfo', component: TablaInfoComponent},
  { path: 'actualizarDatos', component: ActualizarDatosComponent},
  { path: 'moduloParametrizacion', component: ModuloParametrizacionComponent},
  { path: 'aprobarFecha', component: AprobarFechaComponent},
];
