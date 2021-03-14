import {HIDE_REMOVE_ICON, SHOW_REMOVE_ICON} from "../types";

export const hideRemoveIcon = ()=>{
    return (
        {
            type: HIDE_REMOVE_ICON
        }
    )
}

export const showRemoveIcon = ()=>{
    return {
        type: SHOW_REMOVE_ICON
    }
}