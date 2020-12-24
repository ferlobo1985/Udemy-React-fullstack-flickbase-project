import {
    ERROR_GLOBAL,
    SUCCESS_GLOBAL
} from '../types';

export default function notificationReducer(state={},action){
    switch(action.type){
        case ERROR_GLOBAL:
            return { ...state, error: true, msg:action.payload }
        case SUCCESS_GLOBAL:
            return { ...state, success: true, msg:action.payload }
        default:
            return state
    }
}