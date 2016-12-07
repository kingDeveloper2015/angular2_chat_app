import {Injectable} from '@angular/core';

import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from "rxjs/Rx";

import { AngularFire } from  'angularfire2';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private af: AngularFire
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
					return Observable.of(false);
				}
			})
	}
}