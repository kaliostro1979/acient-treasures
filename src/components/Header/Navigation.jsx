import React from 'react'
import Logo from "./Logo";
import NavigationMenu from "./Navbar components/NavigationMenu";
import BurgerButton from "./Navbar components/BurgerButton";
import StoreBagButton from "./Navbar components/StoreBagButton";


const Navigation = () => {
    return (
        <div className="navigation-main">
            <BurgerButton/>
            <Logo/>
            <NavigationMenu/>
            <StoreBagButton/>
        </div>
    )
}

export default Navigation