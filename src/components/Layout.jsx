import React from 'react'
import Home from "../Pages/Home/Home";
import {Route} from "react-router";
import MobileMenu from "./Mobile menu/MobileMenu";
import SideShoppingCard from "./Side Shopping Card/SideShopingCard";
import Product from "../Pages/Product/Product";
import Store from "../Pages/Store/Store";
import ShoppingCard from "../Pages/ShoppingCard/ShoppingCard";
import {cardUrl, homeUrl, productsUrl} from "../URL";




const Layout = ()=>{

    return (
        <>
            <Route activeClassName="active-link" exact path={homeUrl} component={Home}/>
            <Route activeClassName="active-link" exact path={productsUrl} component={Store}/>
            <Route activeClassName="active-link" exact path={productsUrl + '/:id'} component={Product}/>
            <Route activeClassName="active-link" exact path={cardUrl} component={ShoppingCard}/>
            <MobileMenu/>
            <SideShoppingCard/>
        </>
    )
}

export default Layout