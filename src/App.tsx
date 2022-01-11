import { myContainer } from './di/container/inversify';
import { TYPES } from './di/container/types';
import { ClientService } from './di/services/client.service';

function App() {
	const clientService = myContainer.get<ClientService>(TYPES.ClientService);

	return <div>{clientService.getPrices()}</div>;
}

export default App;
