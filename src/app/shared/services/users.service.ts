import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class UserService {

	constructor(
		private authService: AuthService
	) { }


}