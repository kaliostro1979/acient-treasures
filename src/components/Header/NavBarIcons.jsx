import React from 'react'
import { FiSearch, FiShoppingCart } from "react-icons/fi"
import ItemCountLabel from "./ItemsCountLabel";
import {Link} from "react-router-dom";


const NavBarIcons = ()=>{
    return(
        <div className="navigation-icons">
            <ul>
                <li>
                    <img src="/assets/images/icons/search-icon.png" alt=""/>
                </li>
                <li>
                    <ItemCountLabel/>
                    <img src="/assets/images/icons/bag-icon.png" alt=""/>
                </li>
            </ul>
        </div>
    )
}

export default NavBarIcons