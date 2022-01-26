import { useHistory, useParams } from 'react-router-dom';
import { useInjection } from 'inversify-react';
import { observer } from 'mobx-react';
import { Fragment } from 'react';
import RouterStore from './router-store';

export const Users = observer(() => <h1>Users</h1>);
export const About = observer(() => <h1>About</h1>);
export const AboutNested = observer(() => {
    const routerParams = useParams();

    return (
        <Fragment>
            <h1>About Nested</h1>
            <pre>router url param: {JSON.stringify(routerParams)}</pre>
        </Fragment>
    );
});

export const Home = observer(() => {
    const routerStore = useInjection(RouterStore);
    const history = useHistory();

    return (
        <Fragment>
            <p>==============[content ☝]=================</p>
            <pre>router location data: {JSON.stringify(history.location)}</pre>

            <p>router query param x: {routerStore.getQueryParameter('x') ?? 'null'}</p>

            <button className="btn btn-dark" onClick={() => routerStore.getHistory().push('/about')}>
                redirect to about
            </button>
            <button className="btn btn-dark ms-2" onClick={() => routerStore.getHistory().push('/about/2')}>
                redirect to about with url param
            </button>
            <button
                className="btn btn-dark ms-2"
                onClick={() => routerStore.getHistory().push('/about/3?x=2&y=3&z=4')}
            >
                redirect to about with query
            </button>
        </Fragment>
    );
});
