import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ValidarService {

  constructor(private http:HttpClient) { }

  obtenerUrl():string{    
    return `${environment.urlProtocol}${environment.urlHost}:${environment.urlPort}/${environment.urlApi}`;  
  }

  validarUsuario(nombre:String, password:String):Observable<any>{    
    console.log(`${this.obtenerUrl()}/validarUsuario?usuario=${nombre}&pass=${password}`);
    return this.http.get(
      `${this.obtenerUrl()}/getMisFormularios?usuario=${nombre}&pass=${password}`);
  }

  cargarPermisos(nombre:String):Observable<any>{
    return this.http.get(
      `${this.obtenerUrl()}?usuario=${nombre}`);  
  }
}
