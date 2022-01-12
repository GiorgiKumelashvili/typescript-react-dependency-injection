import 'reflect-metadata';
import ReactDOM from 'react-dom';
import MobxFirst from './mobx-di/MobxFirst';
import MobxSecond from './mobx-di-second/MobxSecond';

ReactDOM.render(
	<div>
		<MobxFirst />
		<MobxSecond />
	</div>,
	document.getElementById('root')
);
