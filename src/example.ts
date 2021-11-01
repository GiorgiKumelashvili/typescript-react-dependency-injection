import { injectable } from 'inversify';

@injectable()
export class Test {
	printMessage() {
		console.log('I am alive!');
	}
}
