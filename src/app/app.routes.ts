import { Routes } from '@angular/router';
import { BlankComponent } from './layout/blank/blank.component';
import { ContactComponent } from './layout/contact/contact.component';

export const routes: Routes = [
  // {path:'', redirectTo:'taiba-connect', pathMatch:'full'},
  {path:'', component:BlankComponent, title:'Tech2Earn'},
  // {path:'contact', component:ContactComponent, title:'Contact Us'},
];
