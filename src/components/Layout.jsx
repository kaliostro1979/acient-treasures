import React from 'react'
import Home from "../Pages/Home/Home";
import {Route} from "react-router";
import MobileMenu from "./Mobile menu/MobileMenu";
import SideShoppingCard from "./Side Shopping Card/sideShopingCard";
import Product from "../Pages/Product/Product";




const Layout = ()=>{
    return (
        <>
            <Route exact path="/" component={Home}/>
            <Route exact path="/product" component={Product}/>
            <MobileMenu/>
            <SideShoppingCard/>
        </>
    )
}

export default Layout