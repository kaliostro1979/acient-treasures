import React from 'react'
import {Link} from "react-router-dom";
import ItemCountLabel from "./ItemsCountLabel";
import {useDispatch, useSelector} from "react-redux";
import {openSideShoppingCard} from "../../../redux/actions/openSideShoppingCard";

const NavigationMenu = () => {

    const dispatch = useDispatch()

    const handleCardState = ()=>{
        dispatch(openSideShoppingCard())
    }


    return (
        <div className="navigation-menu_main">
            <ul className="navigation-items__list">
                <li><Link to="/vikings">Vikings</Link></li>
                <li><Link to="/ancient-egypt">Ancient Egypt</Link></li>
                <li><Link to="/celtics">Celtics</Link></li>
                <li><Link to="/sale">Sale</Link></li>
            </ul>
            <div className="navigation-icons">
                <ul>
                    <li>
                        <img src="/assets/images/icons/search-icon.png" alt=""/>
                    </li>
                    <li onClick={handleCardState}>
                        <ItemCountLabel/>
                        <img src="/assets/images/icons/bag-icon.png" alt=""/>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default NavigationMenu