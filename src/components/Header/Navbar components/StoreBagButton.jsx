import React from 'react'
import ItemCountLabel from "./ItemsCountLabel";
import {useDispatch} from "react-redux";
import {openSideShoppingCard} from "../../../redux/actions/openSideShoppingCard";

const SearchButton = ()=>{

    const dispatch = useDispatch()

    const handleCardState = ()=>{
        dispatch(openSideShoppingCard())
    }


    return(
        <div className="navbar-icons bag-icon mobile-bag__icon" onClick={handleCardState}>
            <ItemCountLabel/>
            <img src="/assets/images/icons/bag-icon.png" alt=""/>
        </div>
    )
}

export default SearchButton