import {CanMatchFn} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';

export const isAuthorizedMatcher: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  return authService.isAuthorized$
}
