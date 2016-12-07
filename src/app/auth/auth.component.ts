import { Component, OnInit } from '@angular/core';

import { AuthService } from './../shared';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

	message: string;
	authType: string;

	loading = false;

	constructor(
		private authService: AuthService,
		private route: ActivatedRoute,
		private router: Router
		) {
		route.url.subscribe(
			(data) => {
				this.authType = data[data.length - 1].path;
			}
		)
	}

	ngOnInit() {
	}

	getTitle(): string {
		return this.authType === 'login' ? 'Login': 'Register';
	}

	submit(email, password) {
		this.loading = true;
		this.message = null;
		if (this.authType === 'register') {
			this.authService.register(email, password).catch(
				(err) => {
					this.message = err.message;
					this.loading = false;
				}
			)
		} else {
			this.authService.login(email, password)
			.then(
				() => {
					console.log('LOGIN SUCCESSFULLY');
					this.router.navigate(['/channels']);
				}
			)
			.catch(
				(err) => {
					this.message = err.message;
					this.loading = false;
				}
			)
		}
	}
}
