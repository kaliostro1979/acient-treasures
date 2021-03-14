import React from 'react'
import ItemCountLabel from "./ItemsCountLabel";
import {useDispatch} from "react-redux";
import {openShoppingCardStatus} from "../../../redux/actions/sideShoppingCardStatus";

const SearchButton = ()=>{

    const dispatch = useDispatch()



    return(
        <div className="navbar-icons bag-icon mobile-bag__icon" onClick={()=>{dispatch(openShoppingCardStatus())}}>
            <ItemCountLabel/>
            <img src="/assets/images/icons/bag-icon.png" alt=""/>
        </div>
    )
}

export default SearchButton