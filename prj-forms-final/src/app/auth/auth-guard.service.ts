import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthServiceService ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    // If Auth Serivce isAuthenticated return false, the route cannot activate.
    return this.authService.isAuthenticated();
  }

}