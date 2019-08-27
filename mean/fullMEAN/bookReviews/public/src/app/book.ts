import { Review } from './review';

export class Book {
    title: string;
    reviews: [Review] = [new Review()];
}
