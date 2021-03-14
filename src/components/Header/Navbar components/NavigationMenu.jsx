import React from 'react'
import {Link} from "react-router-dom";
import ItemCountLabel from "./ItemsCountLabel";
import {useDispatch} from "react-redux";
import {ancientEgyptUrl, celticsUrl, productsUrl, saleUrl, vikingsUrl} from "../../../URL";
import {openShoppingCardStatus} from "../../../redux/actions/sideShoppingCardStatus";

const NavigationMenu = () => {

    const dispatch = useDispatch()


    return (
        <div className="navigation-menu_main">
            <ul className="navigation-items__list">
                <li><Link to={productsUrl}>Store</Link></li>
                <li><Link to={vikingsUrl}>Vikings</Link></li>
                <li><Link to={ancientEgyptUrl}>Ancient Egypt</Link></li>
                <li><Link to={celticsUrl}>Celtics</Link></li>
                <li><Link to={saleUrl}>Sale</Link></li>
            </ul>
            <div className="navigation-icons">
                <ul>
                    <li>
                        <img src="/assets/images/icons/search-icon.png" alt=""/>
                    </li>
                    <li onClick={()=>{dispatch(openShoppingCardStatus())}}>
                        <ItemCountLabel/>
                        <img src="/assets/images/icons/bag-icon.png" alt=""/>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default NavigationMenu