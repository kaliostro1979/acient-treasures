import {GET_CARD_ALL_ITEMS} from "../types";


export const fetchCardItems = ()=>{
    return (dispatch)=>{
        let storageCardItems = localStorage.getItem('cardItems')
        let cardItemsArray = JSON.parse(storageCardItems)
        dispatch(getCardAllItems(cardItemsArray))
    }
}




export const getCardAllItems = (cardItemsArray)=>{
    return ({
        type: GET_CARD_ALL_ITEMS,
        payload: cardItemsArray
    })
}
