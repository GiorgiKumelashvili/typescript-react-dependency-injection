import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { myContainer } from './di/container/inversify';
import { TYPES } from './di/container/types';
import { ClientService } from './di/services/client.service';

const clientService = myContainer.get<ClientService>(TYPES.ClientService);
clientService.logger();

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
