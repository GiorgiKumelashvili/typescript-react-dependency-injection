import { Provider } from 'inversify-react';
import { Casual } from './Casual';
import { Container } from 'inversify';

const myContainer = new Container({ autoBindInjectable: true, defaultScope: 'Singleton' });

const MobxFifth = () => (
	<Provider container={myContainer}>
		<Casual />
	</Provider>
);

export default MobxFifth;
