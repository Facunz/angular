import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio';
import { DashboardComponent } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', redirectTo: '', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];
