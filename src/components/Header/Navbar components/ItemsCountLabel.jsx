import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchCardItems} from "../../../redux/actions/getCardAllItems";

const ItemCountLabel = ()=>{

    const cardItems = useSelector(state=>state.cardAllItems)
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(fetchCardItems())
    },[dispatch])

    return(
        <div className="items-count">
            <span>{cardItems.length}</span>
        </div>
    )
}

export default ItemCountLabel