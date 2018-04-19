import { combineReducers } from 'redux';
import { Actions } from '../../actions/actionType';
import { ActionTypeKeys } from '../../enums/ActionTypeKeys';
import { IAppState } from '../../App-state';

const updateReviewFailure = (state: IAppState = {}, action: Actions) => {
    if (action.type === ActionTypeKeys.UPDATE_REVIEW_FAILURE) {
        return state;
    }
    return state;
};

const updateReviewSuccess = (state: IAppState = {}, action: Actions) => {
    if (action.type === ActionTypeKeys.UPDATE_REVIEW_SUCCESS) {
        return state;
    }
    return state;
};

const updateReview = combineReducers({
    updateReviewFailure,
    updateReviewSuccess
});

export default updateReview;