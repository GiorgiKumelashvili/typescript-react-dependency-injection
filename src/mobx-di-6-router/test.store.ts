import { injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';

@injectable()
export class TestStore {
	public num = 0;

	constructor() {
		makeAutoObservable(this);
	}

	toggleNum() {
		this.num++;
	}
}
