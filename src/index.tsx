import 'reflect-metadata';
import ReactDOM from 'react-dom';
import MobxFirst from './mobx-di/MobxFirst';
import MobxSecond from './mobx-di-2/MobxSecond';
import MobxThird from './mobx-di-3/MobxThird';

ReactDOM.render(
	<div>
		<MobxThird />
		<MobxSecond />
		<MobxFirst />
	</div>,
	document.getElementById('root')
);
