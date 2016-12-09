import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs/Rx';

import { AngularFire } from 'angularfire2';

import { User } from './../models';

@Injectable()
export class UserService {

	private _currentUserSubject = new BehaviorSubject<User>(new User());

	public currentUser = this._currentUserSubject.asObservable().distinctUntilChanged();
	public isAuthenticated: Observable<boolean>;

	constructor(
		private af: AngularFire
		) {
		this.isAuthenticated = this.af.auth.map(state => {
			return state != null;
		})
	}

	populate() {
		this.af.auth.map(authState => {
			if (!authState) return Observable.throw('no auth detected');
			return new User({id: authState.uid})
		})
		.flatMap(user => {
			return this.requestUserData(user);
		})
		.subscribe();
	}

	setAuth(user: User) {
		this._currentUserSubject.next(user);
	}

	purgeAuth() {
		this._currentUserSubject.next(new User());
	}

	attempAuth(type: string, credentials): Observable<User> {
		let promise: any;
		if (type === 'login') {
			promise = this.af.auth.login(credentials).then((authState) => {
				let user = new User({id: authState.uid});
				return user;
			});	
			return Observable.fromPromise(<Promise<User>>promise)
			.flatMap(user => {
				return this.requestUserData(user);
			})
		} else {
			promise = this.af.auth.createUser(credentials).then((authState) => {				
				let user = new User({id: authState.uid});
				user.displayName = credentials.displayName;
				// save users to firebase database
				this.af.database.object('/users/' + user.id).set(user);
				this.setAuth(user);
				return user;
			});
			return Observable.fromPromise(<Promise<User>>promise) ;
		}
		
	}

	logout() {
		this.af.auth.logout();
		this.purgeAuth();
	}

	getCurrentUser(): User {
		return this._currentUserSubject.value;
	}

	requestUserData(user): Observable<User> {
		return this.af.database.object('/users/' + user.id)
		.map(res => {
			user.displayName = res.displayName;
			this.setAuth(user);
			return user;
		});
	}
}