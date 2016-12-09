import { Component, OnInit } from '@angular/core';

import { UserService } from './../shared';

import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

	message: string;
	authType: string;

	loading = false;

	authForm: FormGroup;
	title: string;

	constructor(
		private userService: UserService,
		private route: ActivatedRoute,
		private router: Router,
		private fb: FormBuilder
		) {

		this.authForm = this.fb.group({
			'email': '',
			'password': ''
		})
	}

	ngOnInit() {
		this.route.url.subscribe(
			(data) => {
				this.authType = data[data.length - 1].path;
				this.title = this.authType === 'login' ? 'Login' : 'Register';
				if (this.authType === 'register') {
					this.authForm.addControl('displayName', new FormControl());
				}
			}
		)
	}

	submit(email, password) {
		if (this.authForm.invalid) return;
		this.loading = true;
		this.message = null;
		this.userService.attempAuth(this.authType, this.authForm.value)
			.subscribe(
				user => {
					console.log('USER: ', user);
					this.router.navigate(['/']);
				},
				err => {
					this.loading = false;
					this.message = err.message;
				}
			);
	}
}
