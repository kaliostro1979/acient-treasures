import React from 'react'
import {Link} from "react-router-dom";
import ItemCountLabel from "./ItemsCountLabel";
import {useDispatch, useSelector} from "react-redux";
import {ancientEgyptUrl, celticsUrl, productsUrl, saleUrl, vikingsUrl} from "../../../URL";
import {openShoppingCardStatus} from "../../../redux/actions/sideShoppingCardStatus";
import {clearSearchField, closeSearchField, openSearchField} from "../../../redux/actions/searchFieldAction";

const NavigationMenu = () => {
    const search = useSelector(state => state.searchField)
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
                        <div
                            className="search-icon_open"
                            style={{display: search ? "none" : "block"}}
                            onClick={()=>{dispatch(openSearchField())}}
                        >
                        <img
                            className="search-icon"
                            src="/assets/images/icons/search-icon.png"
                            alt=""
                        />
                        </div>
                        <div
                            className="search-icon_close"
                            style={{display: search ? "block" : "none"}}
                            onClick={()=>{dispatch(clearSearchField())}}
                        >
                        <img
                            className="search-icon"
                            src="/assets/images/icons/close-dark.png"
                            alt=""/>
                        </div>
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