import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './../../shared';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LogoutResolver implements Resolve<any> {
	// constructor(
	// 	private authService: AuthService
	// ){ }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
		// return this.authService.logout();

	}
}