import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';


export const AppRoutes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'mantenimiento',
    component: FullComponent,  
    canActivate:[authGuard],
    children: [      
      {
        path:'',
        loadChildren:
          ()=>import('./reportes/reportes.module').then(m=>m.ReportesModule)
      },
      {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
      },           
    ]
  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'**',
    component:LoginComponent
  }
];
