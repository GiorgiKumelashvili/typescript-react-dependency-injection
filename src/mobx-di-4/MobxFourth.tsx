import 'reflect-metadata';
import * as React from 'react';
import { Provider } from 'inversify-react';
import { Casual } from './Casual';
import { Container } from 'inversify';

const myContainer = new Container({ autoBindInjectable: true });

export default class MobxFourth extends React.Component {
	public render() {
		return (
			<div>
				<Provider container={myContainer}>
					<Casual />
				</Provider>
			</div>
		);
	}
}
