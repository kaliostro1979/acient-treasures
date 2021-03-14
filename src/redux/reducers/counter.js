import {DECREMENT_ITEMS, INCREMENT_ITEMS} from "../types";

const initialState = {
    value: 1
}

export const counterReducer = (state = initialState, action)=>{
    switch (action.type){
        case INCREMENT_ITEMS:
            return {...state, value: state.value + 1}
        case DECREMENT_ITEMS:
            return {...state, value: state.value - 1}
        default:
            return state
    }
}