import 'reflect-metadata';
import ReactDOM from 'react-dom';
import MobxFirst from './mobx-di/MobxFirst';
import MobxSecond from './mobx-di-2/MobxSecond';
import MobxThird from './mobx-di-3/MobxThird';
import MobxFourth from './mobx-di-4/MobxFourth';

/**
 * ? information
 *
 * 		| modules used are :  inversify, mobx, inversify-react, mobx-react, reflect-metadata
 */

ReactDOM.render(
	<div>
		<MobxFourth />
		<MobxThird />
		<MobxSecond />
		<MobxFirst />
	</div>,
	document.getElementById('root')
);
