import {FILTER_BY_CATEGORY} from "../types";
import {fetchAllItems} from "./getAllItems";

let filterArray = []
export const filter = (value, checked, allItems)=>{
    filterArray = [...filterArray, value]
    console.log(filterArray);
    console.log(allItems);
    let filteredItems = []
    return (dispatch)=>{
        if(allItems){
            filteredItems = [...allItems.filter((item)=>{
                return checked ? item.category.match(value) : dispatch(fetchAllItems())
            })]
        }

        /*dispatch(filterByCategory(filteredItems))*/
    }
}



export const filterByCategory = (items)=>{
    return({
        type: FILTER_BY_CATEGORY,
        payload: items
    })
}