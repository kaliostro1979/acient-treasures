import {DECREMENT_ITEMS, GET_CURRENT_ITEM, INCREMENT_ITEMS, SET_CURRENT_ITEM} from "../types";

const initialState = ''

export const currentItemReducer = (state = initialState, action)=>{

    switch (action.type){
        case SET_CURRENT_ITEM:
            return state = action.payload
        case GET_CURRENT_ITEM:
            return state = action.payload
        case DECREMENT_ITEMS:
            return state = action.payload
        case INCREMENT_ITEMS:
            return state = action.payload
        default:
            return state
    }
}