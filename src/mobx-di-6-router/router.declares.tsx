import { createFrozeObject } from '../helpers/create_object';
import { About, AboutNested, Home, Users } from './routeComponents';

interface RouterDeclares {
    [key: string]: {
        name: string;
        exact?: boolean;
        component: () => JSX.Element;
        builder?: (...args: any) => string;
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

        builder(aboutId: number) {
            return this.name.replace(':aboutId', aboutId.toString());
        },
    },

    root: {
        name: '/',
        component: Home,
        exact: false,
    },
});
