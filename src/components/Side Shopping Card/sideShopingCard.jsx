import React, {useContext, useMemo, useState} from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {closeSideShoppingCard} from "../../redux/actions/closeSideShoppingCard";

import {incrementItems} from "../../redux/actions/incrementItems";
import {decrementItems} from "../../redux/actions/decrementItems";
import {Context} from "../../context/context";


const SideShoppingCard = () => {
    
    const [allItems, setAllItems] = useState([])
    const [prices, setPrices] = useState([])

    const cardState = useSelector(state=>state.sideShoppingCard)
    const counterValue = useSelector(state=>state.itemsCounter)
    const dispatch = useDispatch()

    const price = []

    const allItemsFromLocalStorage = localStorage.getItem('cardItems')




    const totalSum = ()=>{
        allItems.map((item)=>{
            price.push(item.offerPrice)
        })
        setPrices(price)
    }

    const sum = prices.reduce(function(acc, val) { return acc + val; }, 0)


    useMemo(()=>{
        if(allItemsFromLocalStorage !== null){
            const allItemsA = JSON.parse(allItemsFromLocalStorage)
            setAllItems(allItemsA)
        }
        totalSum()
    },[allItemsFromLocalStorage])

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
                    <p>Cart (<span>{allItems.length}</span> items)</p>
                    <div className="side-card__header__close" onClick={handleCardState}>
                        <img src="/assets/images/icons/close-dark.png" alt=""/>
                    </div>
                </div>
                <div className="side-card">
                    {
                        allItems.map((item)=>{
                            return(
                                <div className="side-card__item" key={item.id}>

                                    <div className="side-card__item__pic" style={{ backgroundImage: `url(${item.image})` }}>

                                    </div>
                                    <div className="side-card__item__body">
                                        <Link className="side-card__item__body__desc" to={"/product/" + item.id} onClick={handleCardState}>
                                            {item.title}
                                        </Link>
                                        <div className="side-card__item__body__price">
                                            <div className="side-card__item__body__price__offer">
                                                <span>$</span><span>{item.offerPrice}</span>
                                            </div>
                                            <div className="side-card__item__body__price__real">
                                                <span>$</span><span>{item.price}</span>
                                            </div>
                                        </div>
                                        <div className="side-card__item__body__counter">
                                            <button className="dec" onClick={handleDecrement} disabled={counterValue.value === 0}>-</button>
                                            <input className="side-card__item__body__counter__value" value={counterValue.value} disabled/>
                                            <button className="inc" onClick={handleIncrement}>+</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
                <div className="side-card__footer">
                    <div className="side-card__footer__total">
                        <span>Subtotal</span>
                        <span>${Math.round(sum).toFixed(2)}</span>
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