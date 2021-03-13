import React from 'react'
import SideShoppingCardItem from "./SideShoppingCardItem";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {closeSideShoppingCard} from "../../redux/actions/closeSideShoppingCard";


const SideShoppingCard = () => {

    const cardState = useSelector(state=>state.sideShoppingCard)
    const dispatch = useDispatch()

    const handleCardState = ()=>{
        dispatch(closeSideShoppingCard())
    }

    return (
        <div className={cardState.open ? "side-card__main__open side-card__main" : "side-card__main"}>
            <div className="side-card__header">
                <p>Cart (<span>8</span>items)</p>
                <div className="side-card__header__close" onClick={handleCardState}>
                    <img src="/assets/images/icons/close-dark.png" alt=""/>
                </div>
            </div>
            <div className="side-card">
                <SideShoppingCardItem/>
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
    )
}


export default SideShoppingCard