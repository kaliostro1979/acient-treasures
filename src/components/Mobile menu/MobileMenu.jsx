import React from 'react'
import { FiSearch } from "react-icons/fi";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {closeMobileMenu} from "../../redux/actions/mobileMenu";
import {ancientEgyptUrl, celticsUrl, saleUrl, vikingsUrl} from "../../URL";


const MobileMenu = ()=>{
    const menuState = useSelector(state=>state.mobileMenu)
    const dispatch = useDispatch()


    return(
        <div className={ menuState.open ? "mobile-menu-open mobile-menu" : "mobile-menu"}>
            <div className="mobile-menu__close" onClick={()=>{dispatch(closeMobileMenu())}}>
                <img src="/assets/images/icons/close.png" alt=""/>
            </div>
            <div className="mobile-menu__inner">
                <form className="mobile-menu__inner__search">
                    <input type="text" placeholder="Type your search"/>
                    <button type="submit"><FiSearch/></button>
                </form>
                <ul className="mobile-menu__inner__list">
                    <li><Link to={vikingsUrl}>Vikings</Link></li>
                    <li><Link to={ancientEgyptUrl}>Ancient Egypt</Link></li>
                    <li><Link to={celticsUrl}>Celtics</Link></li>
                    <li><Link to={saleUrl}>SALE</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default MobileMenu