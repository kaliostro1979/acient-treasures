import {GET_ALL_ITEMS} from "../types";

const initialState = []

export const allItemsReducer = (state = initialState,action)=>{
    switch (action.type){
        case GET_ALL_ITEMS:
            return state = action.payload
        default:
            return state
    }
}