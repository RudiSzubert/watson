import { ActionTypeKeys } from '../../enums/ActionTypeKeys';

export class CreateReviewFailure {
    readonly type = ActionTypeKeys.CREATE_REVIEW_FAILURE;
    constructor(public error: string) {}
}

export class CreateReviewSuccess {
    readonly type = ActionTypeKeys.CREATE_REVIEW_SUCCESS;
    constructor(public data: object) {}
}

export type ReviewsCreate = CreateReviewSuccess | CreateReviewFailure;