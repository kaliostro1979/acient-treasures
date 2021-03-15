import {DECREMENT_ITEMS, INCREMENT_ITEMS} from "../types";



export const handleIncrement = (current) => {
    return (dispatch)=>{
        current.quantity++
        current.calculatedPrice = Math.round(current.offerPrice * current.quantity).toFixed(2)
        localStorage.setItem('currentItem', JSON.stringify(current))
        current = localStorage.getItem('currentItem')
        dispatch(incrementItems(JSON.parse(current)))
    }
}


export const incrementItems = (calculatedPrice) => {
    return {
        type: INCREMENT_ITEMS,
        payload: calculatedPrice
    }
}


export const handleDecrement = (current) => {
    return (dispatch)=>{
        current.quantity--
        current.calculatedPrice = Math.round(current.offerPrice * current.quantity).toFixed(2)
        localStorage.setItem('currentItem', JSON.stringify(current))
        current = localStorage.getItem('currentItem')
        dispatch(decrementItems(JSON.parse(current)))
    }
}


export const decrementItems = (calculatedPrice)=>{
    return{
        type: DECREMENT_ITEMS,
        payload: calculatedPrice
    }
}