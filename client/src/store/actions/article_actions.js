import * as articles from './index';
import axios from 'axios';
import { getAuthHeader } from '../../utils/tools';


axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getArticles = (sort) => {
    return async(dispatch,getState)=>{
        try{
            const arts = await axios.post(`/api/articles/loadmore`,sort);
            const prevArts = getState().articles.articles;
            let newArts = [...arts.data];

            if(prevArts){
                newArts = [...prevArts,...arts.data];
            }
            dispatch(articles.getArticles(newArts));
        } catch(error){
            dispatch(articles.errorGlobal('Upps error loading articles'))
        }
    }
}

export const getArticle = (id) => {
    return async (dispatch)=>{
        try{
            const request = await axios.get(`/api/articles/get_byid/${id}`);
            dispatch(articles.getArticle(request.data[0]))
        } catch(error){
            dispatch(articles.errorGlobal(error.response.data.message))
        }
    }
}


export const addArticle = (article) => {
    return async(dispatch)=>{
        try{
            const request = await axios.post(`/api/articles/admin/add_articles`,article,getAuthHeader());

            dispatch(articles.addArticle(request.data));
            dispatch(articles.successGlobal('Good obi one !!'))
        }catch(error){
            dispatch(articles.errorGlobal(error.response.data.message))
        }
    }
}

export const getPaginateArticles = (page=1,limit=5) => {
    return async(dispatch)=> {
        try{
            const request = await axios.post(`/api/articles/admin/paginate`,{
                page,
                limit
            }, getAuthHeader());

            dispatch(articles.getPaginateArticles(request.data))
        } catch(error) {
            dispatch(articles.errorGlobal(error.response.data.message))
        }
    }
}

