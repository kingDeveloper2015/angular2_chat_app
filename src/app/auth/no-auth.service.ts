import {Injectable} from '@angular/core';

import { AuthGuard } from './../shared';

import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from "rxjs/Rx";

import { AngularFire } from 'angularfire2';

@Injectable()
export class NoAuthGuard implements CanActivate {
	constructor(
		private authGuard: AuthGuard,
		private router: Router,
		private af: AngularFire
	) {	}

	canActivate(
		route:ActivatedRouteSnapshot,
		state:RouterStateSnapshot):Observable<boolean> {

		return this.af.auth
			.first()
			.mergeMap((user) => {
				if (user && user.auth) {
					this.router.navigate(['/channels']);
					return Observable.of(false);
				} else {
					return Observable.of(true);
				}
			})
	}
}