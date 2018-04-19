import { Middleware, MiddlewareAPI, Dispatch, Action } from 'redux';

export const objectToJson: Middleware = (api: MiddlewareAPI<any>) =>
    (next: Dispatch<Action>) =>
        <A extends Action>(action: A): A => {
            return next(Object.assign({}, action));
        };