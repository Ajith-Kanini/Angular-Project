import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../Authentication/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  private isAllowed(): boolean {
    if(localStorage.getItem('jwtToken'))
      return true;
    else return false;
  }
  canActivate(): boolean {
    if (this.isAllowed()) {
      return true;
    } else {

     if(confirm('Authenticated users only allowed!!!'))
     {
      this.router.navigate(['/Login']);
     }
     return false;

    }
  }

}
