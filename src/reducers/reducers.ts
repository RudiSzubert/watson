import { combineReducers } from 'redux';
import createReview from './reviews/create';
import updateReview from './reviews/update';

const reducers = combineReducers({
    createReview,
    updateReview
});

export default reducers;