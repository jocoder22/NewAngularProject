
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponentComponent } from './form-component/form-component.component';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';
import { SwitchComponentComponent } from './switch-component/switch-component.component';
import { AuthGuard } from './auth-guard-service';
import { LoginComponentComponent } from './login-component/login-component.component';


const appRoutes: Routes = [
  {
    path: 'List', component: ListcomponentComponent, canActivate: [AuthGuard]
  },
  {
    path: 'Form', component: FormComponentComponent, canActivate: [AuthGuard]
  },
  {
    path: 'Switch', component: SwitchComponentComponent, canActivate: [AuthGuard]
  },
  {
    path: 'Log_auth', component: LoginComponentComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
