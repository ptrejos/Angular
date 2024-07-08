import { NgModule } from '@angular/core';
import { ReportesComponent } from './reportes.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReportesRoutes } from './reportes.routing';
import { ValidadorComponent } from './validador/validador.component';
import { DetalleComponent } from './validador/detalle/detalle.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    DetalleComponent
  ],
  imports: [
    CommonModule,     
    RouterModule.forChild(ReportesRoutes),
    ReportesComponent,
    ValidadorComponent,
    MatCardModule
  ]
})
export class ReportesModule { }
