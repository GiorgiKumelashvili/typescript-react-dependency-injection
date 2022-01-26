import { useInjection } from 'inversify-react';
import { FC, useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import RouterStore from './router-store';

export const WatchHistoryMobx: FC = props => {
	const history = useHistory();
	const routerStore = useInjection(RouterStore);

	useEffect(() => {
		routerStore.setHistory(history);
		routerStore.setLocation(history.location);
		history.listen(location => routerStore.setLocation(location));
	}, [history, routerStore]);

	return <Fragment>{props.children}</Fragment>;
};
