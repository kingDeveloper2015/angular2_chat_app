import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs/Rx';

import { AngularFire } from 'angularfire2';

import { User } from './../models';

@Injectable()
export class UserService {

	private _currentUserSubject = new BehaviorSubject<User>(null);

	public currentUser = this._currentUserSubject.asObservable().distinctUntilChanged();
	public isAuthenticated: Observable<boolean>;

	constructor(
		private af: AngularFire
	) {
		this.isAuthenticated = this.af.auth.map(state => {
			return state != null;
		})
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
				this.setAuth(user);
				return user;
			});
		} else {
				promise = this.af.auth.createUser(credentials).then((authState) => {
				let user = new User({id: authState.uid});
				user.displayName = credentials.displayName;
				// save users to firebase database
				console.log('USER TO SAVE: ', user);
				this.af.database.object('/users' + user.id).set(user);
				this.setAuth(user);
				return user;
			});
		}
		return Observable.fromPromise(<Promise<User>>promise) ;
	}

	logout() {
		this.af.auth.logout();
		this.purgeAuth();
	}


}