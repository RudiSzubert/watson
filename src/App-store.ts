import { createStore, Store } from 'redux';
import { IAppState } from './App-state';
import reducers from './reducers/reducers';

export const appStore: Store<IAppState> =
    createStore(reducers);