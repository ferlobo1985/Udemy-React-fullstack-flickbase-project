import {
    GET_ARTICLES
} from '../types';

export const getArticles = (articles) => ({
    type: GET_ARTICLES,
    payload: articles
});