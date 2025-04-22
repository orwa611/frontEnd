import { Article } from "./article";

export interface ArticlesResponse {
    articles: Array<Article>;
    page: number;
    limit: number;
    totalArticles: number;
    totalPages: number;
}
