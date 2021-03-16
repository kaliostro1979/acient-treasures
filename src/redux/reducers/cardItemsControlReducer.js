import {ADD_TO_CARD, REMOVE_FROM_CARD} from "../types";

const initialState = []

export const addToShoppingCardReducer = (state = initialState, action)=>{
    switch (action.type){
        case ADD_TO_CARD:
            return [...state, action.payload]
        case REMOVE_FROM_CARD:
            return action.payload
        default:
            return state
    }
}