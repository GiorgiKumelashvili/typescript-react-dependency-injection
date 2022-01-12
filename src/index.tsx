import 'reflect-metadata';
import ReactDOM from 'react-dom';
import MobxFirst from './mobx-di/MobxFirst';
import MobxSecond from './mobx-di-second/MobxSecond';
import MobxThird from './mobx-di-third/MobxThird';

ReactDOM.render(
	<div>
		<MobxFirst />
		<MobxSecond />
		<MobxThird />
	</div>,
	document.getElementById('root')
);
