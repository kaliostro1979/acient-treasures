import {DECREMENT_ITEMS, INCREMENT_ITEMS} from "../types";


export const incrementItems = () => {
    return {
        type: INCREMENT_ITEMS
    }
}

export const decrementItems = ()=>{
    return{
        type: DECREMENT_ITEMS
    }
}