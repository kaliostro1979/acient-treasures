import {FILTER_BY_CATEGORY} from "../types";
import {fetchAllItems} from "./getAllItems";


let filteredItems = []
let valuesArray = []
export const filter = (value, checked, allItems) => {
    return async (dispatch) => {
        const allItemsArray = await fetch('http://localhost:3000/items.json')
            .then(res => res.json())
        if (checked) {
            valuesArray.push(value)
            filteredItems = allItemsArray.filter(item => valuesArray.includes(item.category))
        }

        if (!checked) {
            const index = valuesArray.indexOf(value)
            if (index !== -1) {
                valuesArray.splice(index, 1);
                filteredItems = allItemsArray.filter(item => valuesArray.includes(item.category))
            }
        }

        if (filteredItems.length === 0 && !checked) {
            dispatch(fetchAllItems(allItemsArray))
        }

        dispatch(filterByCategory(filteredItems))
    }
}


export const filterByCategory = (items) => {
    return ({
        type: FILTER_BY_CATEGORY,
        payload: items
    })
}