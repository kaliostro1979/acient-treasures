import {FILTER_ALL_ITEMS, GET_ALL_ITEMS} from "../types";



export const allItemsReducer = (state = [],action)=>{
    console.log(action.payload);
    switch (action.type){
        case GET_ALL_ITEMS:
            return state = action.payload
        case FILTER_ALL_ITEMS:
            return state = action.payload
        default:
            return state
    }
}