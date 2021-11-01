import './App.css';
import { myContainer } from './inversify';
import { Inj, TYPES } from './testing';

function App() {
	const inj = myContainer.get<Inj>(TYPES.Inj);

	return <div>{inj.log()}</div>;
}

export default App;
