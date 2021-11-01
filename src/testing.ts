import { inject, injectable } from 'inversify';
import { Test } from './example';

export const TYPES = {
	Test: Symbol.for('Test'),
	Inj: Symbol.for('Inj'),
};

@injectable()
export class Inj {
	@inject(TYPES.Test)
	private test: Test;

	public log() {
		this.test.printMessage();
		return 123;
	}
}
