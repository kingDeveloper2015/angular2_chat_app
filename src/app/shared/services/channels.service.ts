import { Injectable } from '@angular/core';

import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Rx';
import 'rxjs/operator/map';
import 'rxjs/operator/catch';

@Injectable()
export class ChannelsService {
	constructor(
		private af: AngularFire
	) {

	}

	getAll(): Observable<any[]> {
		return this.af.database.list('channels');
	}
}