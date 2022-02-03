import { Container, decorate, injectable } from 'inversify';

interface Constructor {
    new (...args: any[]): any;
}

export abstract class IocContainerFinal {
    private static _IocContainer: Container;

    public static getContainer() {
        if (!this._IocContainer) {
            this._IocContainer = new Container();
        }

        return this._IocContainer;
    }
}

export function Singleton(cls: Constructor) {
    IocContainerFinal.getContainer().bind(cls).toSelf().inSingletonScope();
    decorate(injectable(), cls);
}

export function Injectable(cls: Constructor) {
    IocContainerFinal.getContainer().bind(cls).toSelf();
    decorate(injectable(), cls);
}
