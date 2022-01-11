import React from 'react';
import { useEffect } from 'react';
import { myContainer } from './di/container/inversify';
import { TYPES } from './di/container/types';
import { ClientService } from './di/services/client.service';
import { useStore } from './store';

class App extends React.Component<{}, {}> {
	// @inject(ElfState) private elfState: ElfState;
	// @inject(ElfService) private elfService: ElfService;

	public render() {
		return (
			<div>
				{/* <div>{JSON.stringify(userStore.user)}</div> */}
				<div>{clientService.getPrices()}</div>
			</div>
		);
	}
}

// function App() {
// 	const clientService = myContainer.get<ClientService>(TYPES.ClientService);
// 	const store = useStore();

// 	useEffect(() => {
// 		console.log(store.getAll());
// 	}, []);

// 	return (
// 		<div>
// 			{/* <div>{JSON.stringify(userStore.user)}</div> */}
// 			<div>{clientService.getPrices()}</div>
// 		</div>
// 	);
// }

export default App;
