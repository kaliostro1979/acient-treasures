import {GET_CURRENT_ITEM} from "../types";

const initialState = {
    id: 1,
    title: "",
    description: "",
    image : "",
    images: [],
    price: 0,
    offerPrice: 0
}

export const currentItemReducer = (state = initialState, action)=>{
    switch (action.type){
        case GET_CURRENT_ITEM:
            return action.payload
        default:
            return state
    }
}