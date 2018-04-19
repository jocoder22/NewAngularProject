import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { FormComponentComponent } from './form-component/form-component.component';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';
import { SwitchComponentComponent } from './switch-component/switch-component.component';


const appRoutes: Routes = [
  {
    path: 'list', component: ListcomponentComponent
  },
  {
    path: 'Form', component: FormComponentComponent
  },
  {
    path: 'Switch', component: SwitchComponentComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
