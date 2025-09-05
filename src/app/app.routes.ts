import { Routes } from '@angular/router';
import { BlankComponent } from './layout/blank/blank.component';

export const routes: Routes = [
  // {path:'', redirectTo:'taiba-connect', pathMatch:'full'},
  {path:'', component:BlankComponent, title:'LEAN'},
];
