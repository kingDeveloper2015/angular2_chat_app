import { Injectable } from '@angular/core';

import { AngularFire } from 'angularfire2';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {


	constructor(
		private af: AngularFire
	) {
	}

	register(email: string, password: string): firebase.Promise<any> {
		let credentials = {
			email: email,
			password: password
		};
		return this.af.auth.createUser(credentials).then(
			() => console.log("REGISTER SUCCESSFULLY")
		);
	}

	login(email: string, password: string): firebase.Promise<any> {
		let credentials = {
			email: email,
			password: password
		};
		return this.af.auth.login(credentials);
	}

	logout() {
		this.af.auth.logout();
	}

	currentUserId(): Observable<string> {
		return this.af.auth.map(state => state.uid);
	}

	isAuthenticated(): Observable<boolean> {
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