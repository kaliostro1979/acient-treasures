import React from 'react'
import {Link} from "react-router-dom";
import {cardUrl, checkoutUrl} from "../../URL";
import {closeSideShoppingCard} from "../../redux/actions/sideShoppingCardStatus";
import {useDispatch} from "react-redux";

const CardFooter = (props)=>{

    const dispatch = useDispatch()

    return(
        <div className="side-card__footer">
            <div className="side-card__footer__total">
                <span>Subtotal</span>
                <span>${props.sum ? props.sum.toFixed(1) : 0}</span>
            </div>
            <div className="side-card__footer__buttons">
                <ul>
                    <Link to={cardUrl} onClick={()=>{dispatch(closeSideShoppingCard())}}>
                        <li>View cart</li>
                    </Link>
                    <Link to={checkoutUrl}>
                        <li>Proceed to checkout</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default CardFooter