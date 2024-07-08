import { Routes } from '@angular/router';

import { ReportesComponent } from './reportes.component';
import { ValidadorComponent } from './validador/validador.component';

export const ReportesRoutes: Routes = [{
  path: '',
  component: ReportesComponent
},
{
  path: 'personal',
  component: ReportesComponent
},
{
  path: 'reportes',
  component: ValidadorComponent
}

];