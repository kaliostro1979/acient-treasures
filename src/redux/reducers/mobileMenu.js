import {CLOSE_MOBILE_MENU, OPEN_MOBILE_MENU} from "../types";

const initialState = {
    open: false
}

export const mobileMenu = (state = initialState, action)=>{
    switch (action.type){
        case OPEN_MOBILE_MENU:
            return {...state, open: true}
        case CLOSE_MOBILE_MENU:
            return {...state, open: false}
        default:
            return state
    }
}