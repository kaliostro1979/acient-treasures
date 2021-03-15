import React from 'react'
import {useDispatch} from "react-redux";
import {decrementCardItemQuantity, incrementCardItemQuantity} from "../../redux/actions/changeCardItemQuantity";

const CardItemsCounter = (props) => {
    const dispatch = useDispatch()




    return (
        <div className="side-card__item__body__counter">
            <button className="dec" onClick={()=>{dispatch(decrementCardItemQuantity(props.id))}} disabled = {props.item.quantity === 1}>-</button>
            <input className="side-card__item__body__counter__value" value={props.item.quantity} disabled/>
            <button className="inc" onClick={()=>{dispatch(incrementCardItemQuantity(props.id))}}>+</button>
        </div>
    )
}

export default CardItemsCounter