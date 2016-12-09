import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './../services';
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
		return this.userService.requestAuthData().subscribe(console.log);
	}
}