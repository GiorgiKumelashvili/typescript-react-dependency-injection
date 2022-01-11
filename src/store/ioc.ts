import { injectable, Container } from 'inversify';
import { fluentProvide } from 'inversify-binding-decorators';
import 'reflect-metadata';

import getDecorators from 'inversify-inject-decorators';

export const AppContainer = new Container();

const provideSingleton = (identifier: any) => {
	return fluentProvide(identifier).inSingletonScope().done();
};

// const provide = makeFluentProvideDecorator(AppContainer);

export const inject = getDecorators(AppContainer).lazyInject;
