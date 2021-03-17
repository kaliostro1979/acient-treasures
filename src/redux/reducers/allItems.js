import {FILTER_ALL_ITEMS, FILTER_BY_CATEGORY, FILTER_BY_PRICE, GET_ALL_ITEMS} from "../types";



export const allItemsReducer = (state = [],action)=>{
    switch (action.type){
        case GET_ALL_ITEMS:
            return state = action.payload
        case FILTER_ALL_ITEMS:
            return state = action.payload
        case FILTER_BY_CATEGORY:
            return state = action.payload
        case FILTER_BY_PRICE:
            return state = action.payload
        default:
            return state
    }
}