import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {closeSideShoppingCard} from "../../redux/actions/sideShoppingCardStatus";

const CardHeader = (props)=>{

    const cardItems = useSelector(state => state.cardAllItems)
    const dispatch = useDispatch()

    return(
        <div className="side-card__header">
            <p>Cart (<span>{cardItems ? cardItems.length : 0}</span> items)</p>
            <div className="side-card__header__close" onClick={()=>{dispatch(closeSideShoppingCard())}}>
                <img src="/assets/images/icons/close-dark.png" alt=""/>
            </div>
        </div>
    )
}

export default CardHeader