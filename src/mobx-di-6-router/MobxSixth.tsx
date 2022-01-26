import { Provider } from 'inversify-react';
import { Casual } from './Casual';
import { myContainer } from './container';

const MobxSixth = () => (
	<Provider container={myContainer}>
		<Casual />
	</Provider>
);

export default MobxSixth;
