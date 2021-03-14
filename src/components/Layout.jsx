import React from 'react'
import Home from "../Pages/Home/Home";
import {Route} from "react-router";
import MobileMenu from "./Mobile menu/MobileMenu";
import SideShoppingCard from "./Side Shopping Card/sideShopingCard";
import Product from "../Pages/Product/Product";
import Store from "../Pages/Store/Store";




const Layout = ()=>{
    return (
        <>
            <Route exact path="/" component={Home}/>
            <Route exact path="/products" component={Store}/>
            <Route exact path="/products/:id" component={Product}/>
            <MobileMenu/>
            <SideShoppingCard/>
        </>
    )
}

export default Layout