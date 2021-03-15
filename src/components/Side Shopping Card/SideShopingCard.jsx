import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {closeSideShoppingCard} from "../../redux/actions/sideShoppingCardStatus";
import {hideRemoveIcon, showRemoveIcon} from "../../redux/actions/removeIconAction";
import {fetchCardItems} from "../../redux/actions/getCardAllItems";
import {cardUrl, checkoutUrl} from "../../URL";
import {handleRemoveItem} from "../../redux/actions/cardItemsControl";
import CardItemsCounter from "../Counter/CardItemsCounter";


const SideShoppingCard = () => {
    const cardState = useSelector(state => state.sideShoppingCard)
    const cardItems = useSelector(state => state.cardAllItems)
    const removeBtnStatus = useSelector(state=>state.removeIcon)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchCardItems())
    }, [dispatch])



    const totalSum = cardItems && cardItems.map((item) => {
        return +item.calculatedPrice
    })
    const sum = totalSum && totalSum.reduce(function (acc, val) {
        return acc + val;
    }, 0)


    if(cardItems){
        return (
            <div className={cardState.open ? "side-card__main__open side-card__main" : "side-card__main"}>
                <div className="side-card__header">
                    <p>Cart (<span>{cardItems.length}</span> items)</p>
                    <div className="side-card__header__close" onClick={()=>{dispatch(closeSideShoppingCard())}}>
                        <img src="/assets/images/icons/close-dark.png" alt=""/>
                    </div>
                </div>
                <div className="side-card">
                    {
                        cardItems.map((item) => {
                            return (
                                <div className="side-card__item"
                                     key={Math.random()}
                                     onMouseOver={() => {
                                         dispatch(showRemoveIcon())
                                     }}
                                     onMouseLeave={() => {
                                         dispatch(hideRemoveIcon())
                                     }}>
                                    <div className={removeBtnStatus ? "remove-icon remove-icon-show" : "remove-icon"}
                                         onClick={() => {dispatch(handleRemoveItem(item.id))}}>
                                        <img src="/assets/images/icons/remove.png" alt=""/>
                                    </div>
                                    <div className="side-card__item__pic"
                                         style={{backgroundImage: `url(${item.image})`}}>
                                    </div>
                                    <div className="side-card__item__body">
                                        <Link className="side-card__item__body__desc" to={"/product/" + item.id}
                                              onClick={()=>{dispatch(closeSideShoppingCard())}}>
                                            {item.title}
                                        </Link>
                                        <div className="side-card__item__body__price">
                                            <div className="side-card__item__body__price__offer">
                                                <span>$</span>
                                                <span>{item.calculatedPrice}</span>
                                            </div>
                                            <div className="side-card__item__body__price__real">
                                                <span>$</span><span>{item.price}</span>
                                            </div>
                                        </div>

                                        <CardItemsCounter id={item.id} item={item}/>

                                    </div>
                                </div>
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
                            <Link to={cardUrl}>
                                <li>View cart</li>
                            </Link>
                            <Link to={checkoutUrl}>
                                <li>Proceed to checkout</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className={cardState.open ? "side-card__main__open side-card__main" : "side-card__main"}>
            <div className="side-card__header">
                <p>Cart (<span>{cardItems ? cardItems.length : 0}</span> items)</p>
                <div className="side-card__header__close" onClick={()=>{dispatch(closeSideShoppingCard())}}>
                    <img src="/assets/images/icons/close-dark.png" alt=""/>
                </div>
            </div>

            <div className="side-card__footer">
                <div className="side-card__footer__total">
                    <span>Subtotal</span>
                    <span>${sum ? sum.toFixed(1) : 0}</span>
                </div>
                <div className="side-card__footer__buttons">
                    <ul>
                        <Link to={cardUrl}>
                            <li>View cart</li>
                        </Link>
                        <Link to={checkoutUrl}>
                            <li>Proceed to checkout</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default SideShoppingCard