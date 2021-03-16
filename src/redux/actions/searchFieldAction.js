import {CLOSE_SEARCH_FIELD, OPEN_SEARCH_FIELD} from "../types";


export const openSearchField = ()=>{
    return ({
        type: OPEN_SEARCH_FIELD
    })
}

export const closeSearchField = ()=>{
    return ({
        type: CLOSE_SEARCH_FIELD
    })
}



