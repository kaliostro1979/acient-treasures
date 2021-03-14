import {GET_ALL_ITEMS} from "../types";



export const allItemsReducer = (state = [],action)=>{
    switch (action.type){
        case GET_ALL_ITEMS:
            return state = action.payload
        default:
            return state
    }
}