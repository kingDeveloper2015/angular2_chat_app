import { Injectable } from '@angular/core';

import { AngularFire } from 'angularfire2';

import { Observable } from 'rxjs/Rx';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class AuthService {

	isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
	isAuthenticated = this.isAuthenticatedSubject.asObservable();

	constructor(
		private af: AngularFire
	) {		
		af.auth.subscribe(user => {
			if (user && user.auth) {
				this.isAuthenticatedSubject.next(true);
			} else {
				this.isAuthenticatedSubject.next(false);
			}
		})
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
		return this.af.auth.login(credentials).then(() => {
			this.isAuthenticatedSubject.next(true);
		});
	}

	logout() {
		this.af.auth.logout();
		this.isAuthenticatedSubject.next(false);
	}

	currentUserId(): Observable<string> {
		return this.af.auth.map(state => state.uid);
	}
}