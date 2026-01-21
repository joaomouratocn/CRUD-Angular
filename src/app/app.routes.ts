import { Routes } from '@angular/router';
import { ConsultComponent } from './consult-component/consult-component';
import { RegisterComponent } from './register-component/register-component';

export const routes: Routes = [
    {path:'consult', component:ConsultComponent},
    {path:'register', component:RegisterComponent}
];
