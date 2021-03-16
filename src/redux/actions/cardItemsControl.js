import {ADD_TO_CARD} from "../types";
import {fetchCardItems} from "./getCardAllItems";



export const handleAddToCard = ()=>{
    let cardItems = []
    return (dispatch)=>{
        const currentStr = localStorage.getItem('currentItem')
        const current = JSON.parse(currentStr)
        cardItems = [...cardItems, current];
        localStorage.setItem('cardItems', JSON.stringify(cardItems))
        dispatch(cardItemsControl(cardItems))
        dispatch(fetchCardItems())
    }
}

export const cardItemsControl = (cardItems)=>{
    return({
        type: ADD_TO_CARD,
        payload: cardItems
    })
}



export const handleRemoveItem = (id)=>{
    return (dispatch)=>{
        let storageCardItems = localStorage.getItem('cardItems')
        let cardItemsArray = JSON.parse(storageCardItems)
        const index = cardItemsArray.map((item)=>{
            return item.id
        }).indexOf(id)
        cardItemsArray.splice(index, 1)
        localStorage.setItem('cardItems', JSON.stringify(cardItemsArray))
        cardItemsArray.length === 0 && localStorage.removeItem('cardItems')
        dispatch(removeFromCard(cardItemsArray))
        dispatch(fetchCardItems())
    }
}

export const removeFromCard = (cardItemsArray)=>{
    return({
        type: ADD_TO_CARD,
        payload: cardItemsArray
    })
}

