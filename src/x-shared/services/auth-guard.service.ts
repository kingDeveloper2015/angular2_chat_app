import {Injectable} from '@angular/core';

import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from "rxjs/Rx";

import { AngularFire } from  'angularfire2';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private af: AngularFire,
		private router: Router
	) {	}

	canActivate(
		route:ActivatedRouteSnapshot,
		state:RouterStateSnapshot):Observable<boolean> {
		return this.af.auth
			.first()
			.mergeMap((user) => {
				if (user && user.auth) {
					return Observable.of(true);
				} else {
					this.router.navigate(['/login']);
					return Observable.of(false);
				}
			})
	}
}