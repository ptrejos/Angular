import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { AlumnoService } from 'src/app/services/alumno.service';

export interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
}

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class MantenimientoComponent implements OnInit {
  alumno: Alumno;

  constructor(
    public dialogRef: MatDialogRef<MantenimientoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private alumnoService: AlumnoService
  ) {
    this.alumno = { ...data.element };
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  modificarRegistro(id: number, alumno: Alumno): void {
    this.alumnoService.updateAlumnos(id, alumno).subscribe((dato) => {
      
    });
    this.dialogRef.close(id);
  }
}
