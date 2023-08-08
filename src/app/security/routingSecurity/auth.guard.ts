import {ActivatedRouteSnapshot, CanActivateChildFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../../services/authenticator/auth.service";

export const authGuard: CanActivateChildFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
{
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn)
  {
    return true;
  }

  return router.parseUrl('/login');
};
