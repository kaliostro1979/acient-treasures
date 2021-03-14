import React from 'react'
import {useDispatch} from "react-redux";
import {incrementItems} from "../../redux/actions/incrementItems";
import {decrementItems} from "../../redux/actions/decrementItems";

const ItemCounter = () => {
    const dispatch = useDispatch()
    const handleIncrement = () => {
        dispatch(incrementItems())
    }

    const handleDecrement = () => {
        dispatch(decrementItems())
    }


    return (
        <div className="side-card__item__body__counter">
            <button className="dec" onClick={handleDecrement}>-</button>
            <input className="side-card__item__body__counter__value" disabled/>
            <button className="inc" onClick={handleIncrement}>+</button>
        </div>
    )
}

export default ItemCounter