import {CLOSE_SIDE_SHOPPING_CARD, OPEN_SIDE_SHOPPING_CARD} from "../types";

export const openShoppingCardStatus = ()=>{
    return {
        type: OPEN_SIDE_SHOPPING_CARD
    }
}

export const closeSideShoppingCard = ()=>{
    return {
        type: CLOSE_SIDE_SHOPPING_CARD,
    }
}