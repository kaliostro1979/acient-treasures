import {DECREMENT_CARD_ITEMS, GET_CARD_ALL_ITEMS, INCREMENT_CARD_ITEMS} from "../types";



export const cardAllItemsReducer = (state = '', action)=>{
    switch (action.type){
        case GET_CARD_ALL_ITEMS:
            return action.payload
        case DECREMENT_CARD_ITEMS:
            return state = action.payload
        case INCREMENT_CARD_ITEMS:
            return state = action.payload
        default:
            return state
    }
}