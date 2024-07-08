import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef  } from '@angular/material/dialog';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,  
  MatDialogTitle
  
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AlumnoService } from 'src/app/services/alumno.service';


@Component({
  selector: 'app-detalle',
   templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
 
})
export class DetalleComponent implements OnInit {
  constructor(
    public dialogRef:MatDialogRef<DetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data :any,
    private alumnoService:AlumnoService  ){}

  ngOnInit(): void {
    console.log(this.data);
  }

  //Cierra el Cuadro de Dialogo
  onClose():void{
    this.dialogRef.close();
  }
//Eliminar alumno 
  eliminarRegistro(id:number){

    this.alumnoService.deleteAlumnos(id).subscribe((dato) =>{
      
    });
    this.dialogRef.close(this.data.element.id);
  }

}
