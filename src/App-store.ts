import { createStore, Store, applyMiddleware } from 'redux';
import reducers from './reducers/reducers';
import { objectToJson } from './middleware/objectToJson';

export const appStore: Store =
    createStore(reducers, applyMiddleware(objectToJson));