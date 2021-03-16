import {CLOSE_SEARCH_FIELD, OPEN_SEARCH_FIELD} from "../types";

export const searchFieldReducer = (state = false, action)=>{
    switch (action.type){
        case OPEN_SEARCH_FIELD:
            return state = true
        case CLOSE_SEARCH_FIELD:
            return state = false
        default:
            return state
    }
}