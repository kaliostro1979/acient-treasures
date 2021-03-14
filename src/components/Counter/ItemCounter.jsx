import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {incrementItems} from "../../redux/actions/counterAction";
import {decrementItems} from "../../redux/actions/counterAction";

const ItemCounter = () => {
    const counterValue = useSelector(state=>state.counter)
    const dispatch = useDispatch()


    return (
        <div className="side-card__item__body__counter">
            <button className="dec" onClick={()=>{dispatch(decrementItems())}} disabled = {counterValue.value === 1}>-</button>
            <input className="side-card__item__body__counter__value" value={counterValue.value} disabled/>
            <button className="inc" onClick={()=>{dispatch(incrementItems())}}>+</button>
        </div>
    )
}

export default ItemCounter