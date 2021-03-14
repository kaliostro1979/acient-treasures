import {CLOSE_MOBILE_MENU, OPEN_MOBILE_MENU} from "../types";

export const openMobileMenu = ()=>{
    return {
        type: OPEN_MOBILE_MENU
    }
}

export const closeMobileMenu = ()=>{
    return {
        type: CLOSE_MOBILE_MENU,
    }
}