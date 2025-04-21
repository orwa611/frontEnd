import { Author } from "./author";

export interface Article {
    title: string,
    author: Author,
    content: string,
    tags: Array<string>,
    _id: string,
    date: string,
    image: string

}
