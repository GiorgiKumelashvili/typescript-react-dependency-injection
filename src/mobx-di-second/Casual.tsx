import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Store from './store';

interface IProps {
	store?: Store;
}

@inject('store')
@observer
export default class Casual extends React.Component<IProps, {}> {
	public render() {
		return (
			<div>
				<h1>{this.props.store!.num}</h1>
				<h2>{this.props.store!.retunum}</h2>
				<h2>{this.props.store!.addNum}</h2>
				<button onClick={this.onClickAdd}>inc</button>
			</div>
		);
	}

	public onClickAdd = () => {
		this.props.store!.add();
	};
}
