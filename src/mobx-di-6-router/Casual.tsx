import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { routerDeclares } from './router.declares';
import { WatchRouterHistory } from './watchRouterHistory';

export const Casual = () => (
    <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    Home
                </Link>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/users">
                                Users
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about/1">
                                About Nested
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <Switch>
            <WatchRouterHistory>
                <div className="container mt-5">
                    {Object.values(routerDeclares).map((el) => (
                        <Route
                            path={el.name}
                            exact={'exact' in el ? el?.exact : true}
                            component={el.component}
                            key={'key' + el.name}
                        />
                    ))}
                </div>
            </WatchRouterHistory>
        </Switch>
    </Router>
);
