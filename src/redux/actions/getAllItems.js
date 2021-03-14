import {GET_ALL_ITEMS} from "../types";

export const fetchAllItems = ()=>{
    return async (dispatch)=>{
        const allItems = await fetch('http://localhost:3000/items.json')
            .then(res=>res.json())
        dispatch(getAllItems(allItems))
    }
}

export const getAllItems = (items)=>{
    return({
        type: GET_ALL_ITEMS,
        payload: items
    })
}
