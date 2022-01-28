import { useInjection } from 'inversify-react';
import { FC, useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import RouterStore from './router-store';

export const WatchHistoryMobx: FC = (props) => {
    const history = useHistory();
    const routerStore = useInjection(RouterStore);

    useEffect(() => {
        routerStore.setHistory(history);

        history.listen(() => routerStore.setHistory(history));
    }, [history, routerStore]);

    return <Fragment>{props.children}</Fragment>;
};
