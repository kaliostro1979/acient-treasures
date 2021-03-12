import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {closeMobileMenu} from "../../../redux/actions/closeMobileMenu";
import {openMobileMenu} from "../../../redux/actions/openMobileMenu";



const BurgerButton = ()=>{

    const menuState = useSelector(state=>state.mobileMenu)
    const dispatch = useDispatch()

    const handleMenuState = ()=>{
        dispatch(openMobileMenu())
    }



    return(
        <div className="burger-button" onClick={handleMenuState}>
            <img src="/assets/images/icons/burger.png" alt=""/>
        </div>
    )
}

export default BurgerButton