import { Review } from './review';

export class Book {
    _id: string;
    title: string;
    reviews: [Review] = [new Review()];
}
