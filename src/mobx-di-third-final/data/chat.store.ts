import { injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';

@injectable()
export class ChatStore {
	chatMessages = ['rogor xar', 'aramishavs'];

	constructor() {
		makeAutoObservable(this);
	}
}
