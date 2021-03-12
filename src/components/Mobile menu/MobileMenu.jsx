import React from 'react'
import { FiSearch } from "react-icons/fi";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {closeMobileMenu} from "../../redux/actions/closeMobileMenu";


const MobileMenu = ()=>{
    const menuState = useSelector(state=>state.mobileMenu)
    const dispatch = useDispatch()

    const handleMenuState = ()=>{
        dispatch(closeMobileMenu())
    }


    return(
        <div className={ menuState.open ? "mobile-menu-open mobile-menu" : "mobile-menu"}>
            <div className="mobile-menu__close" onClick={handleMenuState}>
                <img src="/assets/images/icons/close.png" alt=""/>
            </div>
            <div className="mobile-menu__inner">
                <form className="mobile-menu__inner__search">
                    <input type="text" placeholder="Type your search"/>
                    <button type="submit"><FiSearch/></button>
                </form>
                <ul className="mobile-menu__inner__list">
                    <li><Link to="/vikings">Vikings</Link></li>
                    <li><Link to="/ancient-egypt">Ancient Egypt</Link></li>
                    <li><Link to="/celtics">Celtics</Link></li>
                    <li><Link to="/sale">SALE</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default MobileMenu