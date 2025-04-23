import { Article } from "./article";

export interface Author {
    _id: string;
    name: string;
    lastname: string;
    email: string;
    image: string;
    about: string | undefined;
    publishedPosts: number;
    articles: Article[];
}
