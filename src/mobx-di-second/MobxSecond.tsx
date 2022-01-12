import { Provider } from 'mobx-react';
import * as React from 'react';
import Casual from './Casual';
import Store from './store';

const store = {
	store: new Store(),
};

export default class MobxSecond extends React.Component {
	public render() {
		return (
			<Provider {...store}>
				<div>
					<Casual />
				</div>
			</Provider>
		);
	}
}
