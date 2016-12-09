export class Channel {

	id: string;
	name: string;

	constructor(channel?) {
		this.id = channel && channel.id || '';
		this.name = channel && channel.name || '';
	}
}