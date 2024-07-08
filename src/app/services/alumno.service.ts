import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../reportes/validador/validador.component';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
 
  constructor(private http: HttpClient) {}

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>('http://localhost:3000/alumnos');
  }

  deleteAlumnos(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/alumnos/${id}');
  }

  updateAlumnos(id: number, alumno: Alumno): Observable<any> {
    return this.http.put('http://localhost:3000/alumnos/${id}', alumno);
  }
}