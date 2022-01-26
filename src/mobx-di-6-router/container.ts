import { Container } from 'inversify';

export const myContainer = new Container({ autoBindInjectable: true, defaultScope: 'Singleton' });
