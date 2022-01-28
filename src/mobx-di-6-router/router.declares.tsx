import { createFrozeObject } from '../helpers/create_object';
import { About, AboutNested, Home, Users } from './routeComponents';

interface RouterDeclares {
    [key: string]: {
        name: string;
        exact?: boolean;
        component: () => JSX.Element;
    };
}

export const routerDeclares = createFrozeObject<RouterDeclares>()({
    users: {
        name: '/users',
        component: Users,
    },

    about: {
        name: '/about',
        component: About,
    },

    aboutNested: {
        name: '/about/:aboutId',
        component: AboutNested,
    },

    root: {
        name: '/',
        component: Home,
        exact: false,
    },
});
