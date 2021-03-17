import {FILTER_BY_PRICE} from "../types";

let filteredArray = []
export const priceFilter = (minValue, maxValue)=>{

    return async (dispatch)=>{
        const allItemsArray = await fetch('http://localhost:3000/items.json')
            .then(res => res.json())
        console.log(minValue, maxValue);
        if(allItemsArray){
            filteredArray = allItemsArray.filter((item)=>{
                return item.offerPrice > minValue
            })
            console.log('after min ----- ', allItemsArray);
            filteredArray = filteredArray.filter((item)=>{
                return item.offerPrice < maxValue
            })

            console.log('after max ----- ',allItemsArray);
            console.log(filteredArray);
        }

        dispatch(filterByPrice(filteredArray))
    }
}



export const filterByPrice = (items)=>{
    return({
        type: FILTER_BY_PRICE,
        payload: items
    })
}