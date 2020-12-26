import {
    GET_ARTICLES,
    GET_ARTICLE,
    ADD_ARTICLE,
    GET_ADMIN_ARTICLES,
    CLEAR_CURRENT_ARTICLE,
    UPDATE_ARTICLE_STATUS
} from '../types';

export default function articleReducer(state={},action){
    switch(action.type){
        case GET_ARTICLES:
            return { ...state, articles:action.payload }
        case GET_ARTICLE:
            return {...state, current: action.payload }
        case ADD_ARTICLE:
            return {...state, lastAdded: action.payload, success:true }
        case GET_ADMIN_ARTICLES:
            return {...state, adminArticles: action.payload }
        case CLEAR_CURRENT_ARTICLE:
            return {...state, current:'' }
        case UPDATE_ARTICLE_STATUS:
            return { ...state,
                adminArticles:{
                    ...state.adminArticles,
                    docs: action.payload
                }
            }
        default:
            return state
    }
}