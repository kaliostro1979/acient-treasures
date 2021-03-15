import {GET_CURRENT_ITEM, SET_CURRENT_ITEM} from "../types";

const initialState = ''

export const currentItemReducer = (state = initialState, action)=>{
    switch (action.type){
        case SET_CURRENT_ITEM:
            return state = action.payload
        case GET_CURRENT_ITEM:
            return state = action.payload
        default:
            return state
    }
}