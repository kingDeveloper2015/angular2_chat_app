import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './../../../x-shared';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthResolver implements Resolve<any> {
	constructor(
		private userService: UserService
		) {

	}

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
		): any {
		return 'authresolver not implemented yet';
	}
}