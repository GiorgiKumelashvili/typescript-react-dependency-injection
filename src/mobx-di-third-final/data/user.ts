import { injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';

@injectable()
export class UserStore {
	user = {
		name: 'giorgi',
		age: 21,
	};

	constructor() {
		makeAutoObservable(this);
	}
}
