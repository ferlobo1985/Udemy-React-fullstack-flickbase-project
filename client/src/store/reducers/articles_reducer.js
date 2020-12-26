import {
    GET_ARTICLES,
    GET_ARTICLE,
    ADD_ARTICLE,
    CLEAR_CURRENT_ARTICLE
} from '../types';

export default function articleReducer(state={},action){
    switch(action.type){
        case GET_ARTICLES:
            return { ...state, articles:action.payload }
        case GET_ARTICLE:
            return {...state, current: action.payload }
        case ADD_ARTICLE:
            return {...state, lastAdded: action.payload, success:true }
        case CLEAR_CURRENT_ARTICLE:
            return {...state, current:'' }
        default:
            return state
    }
}