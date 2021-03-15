import React from 'react'
import {useDispatch} from "react-redux";
import {handleDecrement, handleIncrement} from "../../redux/actions/counterAction";

const ItemCounter = (props) => {
    const dispatch = useDispatch()




    return (
        <div className="side-card__item__body__counter">
            <button className="dec" onClick={()=>{dispatch(handleDecrement(props.current))}} disabled = {props.current.quantity === 1}>-</button>
            <input className="side-card__item__body__counter__value" value={props.current.quantity} disabled/>
            <button className="inc" onClick={()=>{dispatch(handleIncrement(props.current))}}>+</button>
        </div>
    )
}

export default ItemCounter