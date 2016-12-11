import { Injectable } from '@angular/core';

import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Rx';

import { Channel } from './../models/channel.model';

@Injectable()
export class ChannelsService {
	constructor(
		private af: AngularFire
	) {
	}

	getAll(): Observable<Channel[]> {
		return this.af.database.list('channels');
	}

	addMessage(channelId: string, message: any): Promise<boolean> {
		return this.af.database.list('/channels/' + channelId + '/messages').push(message).then(
			(data) => {
				return Promise.resolve(true)
			}
		).catch(Promise.reject)
	}
}