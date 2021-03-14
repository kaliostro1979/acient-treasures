import React from 'react'

const ItemCounter = ({handleDecrement, item, handleIncrement})=>{
    return(
        <div className="side-card__item__body__counter" >
            <button className="dec" onClick={()=>{handleDecrement(item.id)}} disabled={item.quantity === 1}>-</button>
            <input
                className="side-card__item__body__counter__value"
                value={item.quantity}
                id={item.id}
                disabled
            />
            <button
                className="inc"
                onClick={()=>{handleIncrement(item.id)}}>+</button>
        </div>
    )
}


export default ItemCounter