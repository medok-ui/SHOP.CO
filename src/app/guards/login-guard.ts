import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = () => {
  const route = inject(Router);
  const isAuth = localStorage.getItem('saved-form-login');

  if (isAuth) return true;
  route.navigate(['/login']);

  return false;
};
