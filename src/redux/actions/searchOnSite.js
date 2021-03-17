import {SEARCH_ON_SITE} from "../types";


let searchResults = []

export const makeSearch = (value)=>{
    console.log(value);
    return async (dispatch)=>{
        const allItemsArray = await fetch('http://localhost:3000/items.json')
            .then(res => res.json())
        searchResults = allItemsArray.filter((item)=>item.title.toLowerCase().match(value))
        console.log(searchResults);
        dispatch(searchOnSite(searchResults))
    }
}



export const searchOnSite = (items)=>{
    return({
        type: SEARCH_ON_SITE,
        payload: items
    })
}