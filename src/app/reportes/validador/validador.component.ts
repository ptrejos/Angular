import { Component, OnInit, inject } from '@angular/core';
import {ValidausuarioService} from '../../services/validausuario.service';
import { AlumnoService } from 'src/app/services/alumno.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { elementAt } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DetalleComponent } from './detalle/detalle.component';
import { MantenimientoComponent } from './detalle/editar.component';


export interface Alumno{
  id:number,
  nombre:string,
  apellido:string,
  edad:number
}

@Component({
  selector: 'app-validador',
  standalone:true,
  templateUrl: './validador.component.html',
  styleUrls: ['./validador.component.scss'],
  imports: [MatTableModule, MatButtonModule, MatIconModule]
})
export class ValidadorComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Nombre', 'Apellido', 'Edad', 'Acciones'];
  dataSource:Alumno[] = [];
  dataSourceTemp:Alumno[] = [];
  readonly dialog = inject(MatDialog);

  constructor(private alumnoService:AlumnoService) { }

  ngOnInit(): void {
    this.alumnoService.getAlumnos().subscribe((alumnos) =>{
        this.dataSource = alumnos;
               
    });    
  }

  eliminarAlumno(element:any, enterAnimationDuration:string, exitAnimationDuration:string):void{
    const dialogRef = this.dialog.open(
      DetalleComponent, {
        data: {element},
        width:'250px', 
        enterAnimationDuration,
        exitAnimationDuration
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      this.alumnoService.getAlumnos().subscribe((alumnos) =>{
        this.dataSource = alumnos;
             
    });    
    });

  }

  actualizarAlumno(element:any, enterAnimationDuration:string, exitAnimationDuration:string):void{
    const dialogRef = this.dialog.open(
      MantenimientoComponent, {
        data: {element},
        width:'350px', 
        enterAnimationDuration,
        exitAnimationDuration
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      this.alumnoService.getAlumnos().subscribe((alumnos) =>{
        this.dataSource = alumnos;
          
    });    
    });

  }
}
