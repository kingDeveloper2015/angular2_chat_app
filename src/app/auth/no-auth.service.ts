import {Injectable} from '@angular/core';

import { AuthGuard } from './../shared';

import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from "rxjs/Rx";

@Injectable()
export class NoAuthGuard implements CanActivate {
	constructor(
		private authGuard: AuthGuard,
		private router: Router
	) {	}

	canActivate(
		route:ActivatedRouteSnapshot,
		state:RouterStateSnapshot):Observable<boolean> {
		let authState = this.authGuard.canActivate(route, state);

		if (authState) {
			this.router.navigate(['/channels']);
		}
		return Observable.of(!authState);
	}
}