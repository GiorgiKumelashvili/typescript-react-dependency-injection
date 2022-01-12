import { inject, injectable } from 'inversify';
import { TYPES } from '../container/types';
import { ChatStore } from './chat.store';
import { UserStore } from './user';

@injectable()
export class AppController {
	@inject(TYPES.UserStore) public userStore: UserStore;
	@inject(TYPES.ChatStore) public chatStore: ChatStore;

	logger() {
		console.log(this.userStore.user);
		console.log(this.chatStore.chatMessages);
	}
}
