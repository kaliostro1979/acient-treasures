import React from 'react'
import Logo from "./Logo";
import NavigationMenu from "./Navbar components/NavigationMenu";
import BurgerButton from "./Navbar components/BurgerButton";
import StoreBagButton from "./Navbar components/StoreBagButton";
import Search from "../Search field/Search";
import {useSelector} from "react-redux";


const Navigation = () => {

    const allItems = useSelector(state => state.allItems)

    return (
        <div className="navigation-wrapper">
            <div className="navigation-main">
                <BurgerButton/>
                <Logo/>
                <NavigationMenu/>
                <StoreBagButton/>
            </div>
            <Search allItems={allItems}/>
        </div>
    )
}

export default Navigation