import 'reflect-metadata';
import ReactDOM from 'react-dom';
// import MobxFirst from './mobx-di/MobxFirst';
// import MobxSecond from './mobx-di-2/MobxSecond';
// import MobxThird from './mobx-di-3/MobxThird';
// import MobxFourth from './mobx-di-4/MobxFourth';
// import MobxFifth from './mobx-di-5/MobxFifth';
import MobxSixth from './mobx-di-6-router/MobxSixth';

/**
 * ? information
 *
 * 		| modules used are :  inversify, mobx, inversify-react, mobx-react, reflect-metadata
 */

ReactDOM.render(
	<div>
		<MobxSixth />
		{/* <MobxFifth /> */}
		{/* <MobxFourth />
		<MobxThird />
		<MobxSecond />
		<MobxFirst /> */}
	</div>,
	document.getElementById('root')
);
