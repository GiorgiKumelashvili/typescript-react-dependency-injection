import { injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import { RouteProps, RouteComponentProps } from 'react-router-dom';

type RouterLocation = RouteProps['location'];
type RouterHistory = RouteComponentProps['history'];

@injectable()
class RouterStore {
    private _location: RouterLocation;
    private _history: RouterHistory; // not updated at all

    constructor() {
        makeAutoObservable(this);
    }

    getUrl() {
        return window.location.href;
    }

    getQueryParameter(key: string) {
        const urlSearchParams = new URLSearchParams(this._location?.search);
        return urlSearchParams.get(key);
    }

    getLocation() {
        return this._location;
    }

    getHistory() {
        return this._history;
    }

    // setters

    setLocation(location: RouterLocation) {
        this._location = location;
    }

    setHistory(history: RouterHistory) {
        this._history = history;
    }
}

export default RouterStore;
