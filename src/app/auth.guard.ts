import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './services/local-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';


export const authGuard: CanActivateFn = (route, state) => {
  const localStorage = inject(LocalStorageService);
  const router = inject(Router);
  const jwtHelper = inject(JwtHelperService);
  //Valido que el token no haya expirado
  const token = localStorage.getItem('token');
    if (token) {
      // Verificar si el token ha expirado
      const isExpired = jwtHelper.isTokenExpired(token);
      console.log('Token expirado:', isExpired);

      // Si el token no ha expirado, decodificarlo
      if (!isExpired) {
        const decodedToken = jwtHelper.decodeToken(token);
        console.log('Token decodificado:', decodedToken);
      } else {
        console.log('El token ha expirado, por favor inicie sesión nuevamente.');
      }
    } else {
      console.log('No se encontró ningún token.');
    }

  //const token = authService.getToken();
  console.log(localStorage.getItem('valido'));
  //const token = localStorage.getItem('valido')== 'true' ? true : false;
  console.log('token', token)
  if (token) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
