import React, {useContext, useEffect} from 'react'
import SideShoppingCardItem from "./SideShoppingCardItem";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {closeSideShoppingCard} from "../../redux/actions/closeSideShoppingCard";

import {incrementItems} from "../../redux/actions/incrementItems";
import {decrementItems} from "../../redux/actions/decrementItems";
import {Context} from "../../context/context";


const SideShoppingCard = () => {

    const { items } = useContext(Context)

    const cardState = useSelector(state=>state.sideShoppingCard)
    const counterValue = useSelector(state=>state.itemsCounter)
    const dispatch = useDispatch()

    const handleCardState = ()=>{
        dispatch(closeSideShoppingCard())
    }


    const handleIncrement = ()=>{
        dispatch(incrementItems())
    }

    const handleDecrement = ()=>{
        dispatch(decrementItems())
    }


    return (
        <div className="side-card-overlay">
            <div className={cardState.open ? "side-card__main__open side-card__main" : "side-card__main"}>
                <div className="side-card__header">
                    <p>Cart (<span>8</span>items)</p>
                    <div className="side-card__header__close" onClick={handleCardState}>
                        <img src="/assets/images/icons/close-dark.png" alt=""/>
                    </div>
                </div>
                <div className="side-card">

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
                                <input className="side-card__item__body__counter__value" value={counterValue.value} disabled/>
                                <button className="inc" onClick={handleIncrement}>+</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="side-card__footer">
                    <div className="side-card__footer__total">
                        <span>Subtotal</span>
                        <span>$144.95</span>
                    </div>
                    <div className="side-card__footer__buttons">
                        <ul>
                            <Link to="/cart">
                                <li>View cart</li>
                            </Link>
                            <Link to="/checkout">
                                <li>Proceed to checkout</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SideShoppingCard