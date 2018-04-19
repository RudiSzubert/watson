export class Review {
    email: string;
    name: string;
    text: string;
    sentimentScore?: string;
    publish?: boolean;
    createdAt: string = '';
    constructor(data: object) {
        Object.assign(this, data);
    }
}