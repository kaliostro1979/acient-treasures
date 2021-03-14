import {GET_CARD_ALL_ITEMS} from "../types";



export const cardAllItemsReducer = (state = [], action)=>{
    switch (action.type){
        case GET_CARD_ALL_ITEMS:
            return action.payload
        default:
            return state
    }
}