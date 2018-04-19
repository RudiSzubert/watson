import { combineReducers } from 'redux';
import { Actions } from '../../actions/actionType';
import { ActionTypeKeys } from '../../enums/ActionTypeKeys';
import { IAppState } from '../../App-state';

const createReviewFailure = (state: IAppState = {}, action: Actions) => {
    if (action.type === ActionTypeKeys.CREATE_REVIEW_FAILURE) {
        return state;
    }
    return state;
};

const createReviewSuccess = (state: IAppState = {}, action: Actions) => {
    if (action.type === ActionTypeKeys.CREATE_REVIEW_SUCCESS) {
        return state;
    }
    return state;
};

const createReview = combineReducers({
    createReviewFailure,
    createReviewSuccess
});

export default createReview;