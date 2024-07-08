import { Component, OnInit } from '@angular/core';
import { ValidarService } from '../services/validar.service';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';
import { JsonService } from '../ws/json.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usuario = "";
  public password = "";
  public loginValid = true;
  public validacionCredencial = false;

  constructor(private jsonService:JsonService, private validarService:ValidarService, private localStorage:LocalStorageService, private router:Router){  }

  ngOnInit(): void {
    this.localStorage.clear();
  }

  public onSubmit():void{
    this.validarService.validarUsuario(this.usuario, this.password).subscribe((data) => {
      if(data.length == 0){
        this.validacionCredencial = true;        
      }else{
        this.jsonService.getToken().subscribe((data) => {
          this.localStorage.setItem("token", data.token);
          this.localStorage.setItem("valido", "true");
          this.localStorage.setItem("usuario", this.usuario);
          this.validacionCredencial = false;
          this.router.navigate(['/mantenimiento']);        
        });        
      }
    });
  }
}
