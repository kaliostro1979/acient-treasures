import {DECREMENT_CARD_ITEMS, INCREMENT_CARD_ITEMS} from "../types";



export const decrementCardItemQuantity = (id)=>{

    return (dispatch)=>{
        const cardItemsArray = localStorage.getItem('cardItems')
        const cardItems = JSON.parse(cardItemsArray)
        cardItems.filter((cardItem) => {
            if (cardItem.id === id) {
                --cardItem.quantity
                return cardItem.calculatedPrice = Math.round(cardItem.offerPrice * cardItem.quantity).toFixed(2)
            }
        })
        localStorage.setItem('cardItems', JSON.stringify(cardItems))
        dispatch(decrementCard(cardItems))
    }
}


export const decrementCard = (calculatedArray)=>{
    return({
        type: DECREMENT_CARD_ITEMS,
        payload: calculatedArray
    })
}


export const incrementCardItemQuantity = (id)=>{

    return (dispatch)=>{
        const cardItemsArray = localStorage.getItem('cardItems')
        const cardItems = JSON.parse(cardItemsArray)
        cardItems.filter((cardItem) => {
            if (cardItem.id === id) {
                ++cardItem.quantity
                return cardItem.calculatedPrice = Math.round(cardItem.offerPrice * cardItem.quantity).toFixed(2)
            }
        })
        localStorage.setItem('cardItems', JSON.stringify(cardItems))
        dispatch(incrementCard(cardItems))
    }
}





export const incrementCard = (calculatedArray)=>{
    return({
        type: INCREMENT_CARD_ITEMS,
        payload: calculatedArray
    })
}
