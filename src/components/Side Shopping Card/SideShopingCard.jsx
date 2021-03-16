import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchCardItems} from "../../redux/actions/getCardAllItems";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import CardItemContainer from "./CardItemContainer";


const SideShoppingCard = () => {
    const cardState = useSelector(state => state.sideShoppingCard)
    const cardItems = useSelector(state => state.cardAllItems)
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


    if (cardItems) {
        return (
            <div className={cardState.open ? "side-card__main__open side-card__main" : "side-card__main"}>
                <CardHeader/>
                <CardItemContainer cardItems={cardItems}/>
                <CardFooter sum={sum}/>
            </div>
        )
    }

    return (
        <div className={cardState.open ? "side-card__main__open side-card__main" : "side-card__main"}>
            <CardHeader/>
            <CardFooter sum={sum}/>
        </div>
    )
}


export default SideShoppingCard