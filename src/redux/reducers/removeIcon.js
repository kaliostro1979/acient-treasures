import {HIDE_REMOVE_ICON, SHOW_REMOVE_ICON} from "../types";



export const removeIconReducer = (state = false, action)=>{
    switch (action.type){
        case SHOW_REMOVE_ICON:
            return state = true
        case HIDE_REMOVE_ICON:
            return state = false
        default:
            return state
    }
}