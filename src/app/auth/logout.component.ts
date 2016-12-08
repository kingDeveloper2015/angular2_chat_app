import { Component, OnInit } from '@angular/core';
import { UserService } from './../shared';
import { Router } from '@angular/router';
@Component({
	template: ''
})
export class LogoutComponent implements OnInit {
	constructor(private userService: UserService, private router: Router) { }

	ngOnInit() {

		this.userService.logout();
		this.router.navigate(['home']);
	}
}