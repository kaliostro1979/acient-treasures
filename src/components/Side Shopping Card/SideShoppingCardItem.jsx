import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import ItemCounter from "../ItemCounter";
import {useDispatch, useSelector} from "react-redux";
import {showRemoveIcon} from "../../redux/actions/showRemoveIcon";
import {hideRemoveIcon} from "../../redux/actions/hideRemoveIcon";

const SideShoppingCardItem = ({item, handleDecrement, handleIncrement, handleCardState, allItems})=>{

    return(
        <div>

        </div>
    )
}


export default SideShoppingCardItem