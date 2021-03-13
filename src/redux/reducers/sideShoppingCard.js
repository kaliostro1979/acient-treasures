import {CLOSE_SIDE_SHOPPING_CARD, OPEN_SIDE_SHOPPING_CARD} from "../types";

const initialState = {
    open: false
}

export const sideShoppingCardReducer = (state=initialState, action)=>{
    switch (action.type){
        case OPEN_SIDE_SHOPPING_CARD:
            return {...state, open: true}
        case CLOSE_SIDE_SHOPPING_CARD:
            return {...state, open: false}
        default:
            return state
    }
}