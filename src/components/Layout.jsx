import React from 'react'
import Home from "../Pages/Home/Home";
import {Route} from "react-router";
import MobileMenu from "./Mobile menu/MobileMenu";
import SideShoppingCard from "./Side Shopping Card/sideShopingCard";




const Layout = ()=>{
    return (
        <>
            <Route path="/" component={Home}/>
            <MobileMenu/>
            <SideShoppingCard/>
        </>
    )
}

export default Layout