import * as React from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import history from './history';
import App from './App';
import Submit from './components/submit/submitReview';
import { appStore } from './App-store';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (
        <Router history={history}>
            <Provider store={appStore}>
                <div>
                    <Route path="/" component={App} />
                    <Route path="/submit_review" component={Submit} />
                </div>
            </Provider>
        </Router>
    );
};