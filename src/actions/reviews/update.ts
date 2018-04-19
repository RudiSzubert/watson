import { ActionTypeKeys } from '../../enums/ActionTypeKeys';

export class UpdateReviewFailure {
    readonly type = ActionTypeKeys.UPDATE_REVIEW_FAILURE;
    constructor(public error: string) {}
}

export class UpdateReviewSuccess {
    readonly type = ActionTypeKeys.UPDATE_REVIEW_SUCCESS;
    constructor(public data: object) {}
}

export type ReviewsUpdate = UpdateReviewFailure | UpdateReviewSuccess;