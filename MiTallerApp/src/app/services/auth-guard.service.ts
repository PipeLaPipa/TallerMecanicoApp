import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public router: Router, public authService: AuthenticationService) { }

  canActivate(): boolean {
    return this.authService.isAuthenticated();
  }

}
