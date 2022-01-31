import { injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import { RouteComponentProps } from 'react-router-dom';

// type RouterLocation = RouteProps['location'];
type RouterHistory = RouteComponentProps['history'];

@injectable()
class RouterStore {
    private _history: RouterHistory; // not updated at all

    constructor() {
        makeAutoObservable(this);
    }

    setHistory(history: RouterHistory) {
        this._history = history;
    }

    // getters
    // all types of getters except url param

    getUrl() {
        return window.location.href;
    }

    getHistory() {
        return this._history;
    }

    getLocation() {
        return this._history?.location;
    }

    getQueryParameter(key: string) {
        const urlSearchParams = new URLSearchParams(this.getLocation()?.search);
        return urlSearchParams.get(key);
    }

    get historyNotNull() {
        return this._history !== null && this._history !== undefined;
    }
}

export default RouterStore;
