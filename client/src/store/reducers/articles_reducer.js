import {
    GET_ARTICLES,
    GET_ARTICLE
} from '../types';

export default function articleReducer(state={},action){
    switch(action.type){
        case GET_ARTICLES:
            return { ...state, articles:action.payload }
        case GET_ARTICLE:
            return {...state, current: action.payload }
        default:
            return state
    }
}