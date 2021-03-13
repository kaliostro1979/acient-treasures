import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {incrementItems} from "../../redux/actions/incrementItems";
import {decrementItems} from "../../redux/actions/decrementItems";

const SideShoppingCardItem = ()=>{

    const counterValue = useSelector(state=>state.itemsCounter)
    const dispatch = useDispatch()

    const handleIncrement = ()=>{
        dispatch(incrementItems())
    }

    const handleDecrement = ()=>{
        dispatch(decrementItems())
    }


    return(
        <div className="side-card__item">
            <div className="side-card__item__pic" style={{ backgroundImage: `url(/assets/images/item-images/item-1.jpg)` }}>

            </div>
            <div className="side-card__item__body">
                <p className="side-card__item__body__desc">
                    Handmade Stainless Steel Massive Wolf Chain with Odin’s Protection Charm - 50cm / 20in
                </p>
                <div className="side-card__item__body__price">
                    <div className="side-card__item__body__price__offer">
                        <span>$</span><span>19.95</span>
                    </div>
                    <div className="side-card__item__body__price__real">
                        <span>$</span><span>29.95</span>
                    </div>
                </div>
                <div className="side-card__item__body__counter">
                    <button className="dec" onClick={handleDecrement} disabled={counterValue.value === 0}>-</button>
                    <input className="side-card__item__body__counter__value" value={counterValue.value}/>
                    <button className="inc" onClick={handleIncrement}>+</button>
                </div>
            </div>
        </div>
    )
}


export default SideShoppingCardItem