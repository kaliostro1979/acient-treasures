import React, {useEffect, useMemo, useRef, useState} from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {closeSideShoppingCard} from "../../redux/actions/closeSideShoppingCard";
import SideShoppingCardItem from "./SideShoppingCardItem";



const SideShoppingCard = () => {

    const [allItems, setAllItems] = useState([])
    const [prices, setPrices] = useState([])
    const [counterStart, setCounterStart] = useState(false)


    const cardState = useSelector(state => state.sideShoppingCard)
    const dispatch = useDispatch()

    const price = []

    const allItemsFromLocalStorage = localStorage.getItem('cardItems')


    useEffect(() => {
        setCounterStart(false)
        if (allItemsFromLocalStorage !== null) {
            const allItemsA = JSON.parse(allItemsFromLocalStorage)
            setAllItems(allItemsA)
            totalSum()
        }

    }, [allItemsFromLocalStorage, counterStart])

    const totalSum = () => {
        allItems.map((item) => {
            price.push(+item.calculatedPrice)
        })
        setPrices(price)
    }

    const sum = prices.reduce(function (acc, val) {
        return acc + val;
    }, 0)



    const handleCardState = () => {
        dispatch(closeSideShoppingCard())
    }

    const handleDecrement = (id) => {
        setCounterStart(true)
        let storageCardItems = localStorage.getItem('cardItems')
        let cardItemsArray = JSON.parse(storageCardItems)
        cardItemsArray.filter((cardItem)=>{
            if(cardItem.id === id){
                --cardItem.quantity
                cardItem.calculatedPrice = Math.round(cardItem.offerPrice * cardItem.quantity).toFixed(2)
            }
        })
        localStorage.setItem('cardItems', JSON.stringify(cardItemsArray))
    }

    const handleIncrement = (id)=>{
        setCounterStart(true)
        let storageCardItems = localStorage.getItem('cardItems')
        let cardItemsArray = JSON.parse(storageCardItems)
        cardItemsArray.filter((cardItem)=>{
            if(cardItem.id === id){
                ++cardItem.quantity
                return cardItem.calculatedPrice = Math.round(cardItem.offerPrice * cardItem.quantity).toFixed(2)
            }
        })
        localStorage.setItem('cardItems', JSON.stringify(cardItemsArray))
    }

    return (
        <div className={cardState.open ? "side-card__main__open side-card__main" : "side-card__main"}>
            <div className="side-card__header">
                <p>Cart (<span>{allItems.length}</span> items)</p>
                <div className="side-card__header__close" onClick={handleCardState}>
                    <img src="/assets/images/icons/close-dark.png" alt=""/>
                </div>
            </div>
            <div className="side-card">
                {
                    allItems.map((item) => {
                        return (
                            <SideShoppingCardItem
                                item={item}
                                handleDecrement={handleDecrement}
                                handleIncrement={handleIncrement}
                                handleCardState={handleCardState}
                                key={Math.random()}
                            />
                        )
                    })
                }


            </div>
            <div className="side-card__footer">
                <div className="side-card__footer__total">
                    <span>Subtotal</span>
                    <span>${sum.toFixed(1)}</span>
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