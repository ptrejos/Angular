import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ValidausuarioService {
  constructor(private http: HttpClient) { }

  obtenerValidacion(usuario:String, password:String): Observable<any> {    
    return this.http.get(`https://xsun.sunfruits.com.pe:9875/formulario/v1/getMisFormularios?usuario=${usuario}&pass=${password}`);
  }
}
