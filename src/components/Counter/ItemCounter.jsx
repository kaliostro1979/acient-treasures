import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {incrementItems} from "../../redux/actions/incrementItems";
import {decrementItems} from "../../redux/actions/decrementItems";

const ItemCounter = ()=>{
    const counterValue = useSelector(state=>state.itemsCounter)
    const dispatch = useDispatch()


    const handleIncrement = ()=>{
        dispatch(incrementItems())
    }

    const handleDecrement = ()=>{
        dispatch(decrementItems())
    }


    return(
        <div className="side-card__item__body__counter">
            <button className="dec" onClick={handleDecrement} disabled={counterValue.value === 0}>-</button>
            <input className="side-card__item__body__counter__value" value={counterValue.value} disabled/>
            <button className="inc" onClick={handleIncrement}>+</button>
        </div>
    )
}

export default ItemCounter