// import { Provider } from "mobx-react"
import * as React from 'react';
import Casual from './mobx-di/Casual';

// import Store  from './store/store';

// const store = {
//   store: new Store()
// }

class App extends React.Component {
	// public render() {
	//   return (
	//     <Provider {...store}>
	//     <div>
	//       <Casual  />
	//     </div>
	//     </Provider>
	//   );
	// }
	public render() {
		return (
			<div>
				<Casual />
			</div>
		);
	}
}

export default App;
