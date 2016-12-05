import { Injectable } from '@angular/core';

import { AngularFire } from 'angularfire2';

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
		return this.af.auth.login(credentials).then(
			() => console.log("LOGIN SUCCESSFULLY")
		);
	}
}