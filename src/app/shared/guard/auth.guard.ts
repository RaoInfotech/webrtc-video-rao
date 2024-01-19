import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from "../../shared/services/auth.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(public authService: AuthService, public router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable < boolean > | Promise < boolean > | boolean {
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      console.log('You are not authenticated!', next.queryParams['call']);
      
      this.router.navigate(['sign-in'], {
        
        queryParams: {
          returnUrl: state.url,
          call: next.queryParams['call'], // Preserve 'call' parameter
        },
      });
      return false;
    }
  }

}