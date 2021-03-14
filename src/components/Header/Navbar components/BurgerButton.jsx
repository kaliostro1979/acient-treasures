import React from 'react'
import {useDispatch} from "react-redux";
import {openMobileMenu} from "../../../redux/actions/mobileMenu";



const BurgerButton = ()=>{
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