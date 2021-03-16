import {FILTER_ALL_ITEMS, GET_ALL_ITEMS} from "../types";

export const fetchAllItems = ()=>{
    return async (dispatch)=>{
        const allItems = await fetch('http://localhost:3000/items.json')
            .then(res=>res.json())
        dispatch(getAllItems(allItems))
    }
}


export const filterAllItems = (input)=>{
    return async (dispatch)=>{
        const allItems = await fetch('http://localhost:3000/items.json')
            .then(res=>res.json())
        const newArray = allItems.filter((i)=>{
            return i.title.match(input)
        })
        dispatch(filterAllItemsAction(newArray))
    }
}


export const getAllItems = (items)=>{
    return({
        type: GET_ALL_ITEMS,
        payload: items
    })
}

export const filterAllItemsAction = (items)=>{
    return({
        type: FILTER_ALL_ITEMS,
        payload: items
    })
}
