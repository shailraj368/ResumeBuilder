// import { CanActivateFn } from '@angular/router';

// export const authGuardGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { Injectable } from '@angular/core';

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';

import { UserAuthService } from './service/user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: UserAuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,

    state: RouterStateSnapshot
  ): UrlTree | boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['login']); // go to login if not authenticated

      return false;
    }

    return true;
  }
}
