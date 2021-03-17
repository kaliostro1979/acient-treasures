import React from 'react'
import Home from "../../Pages/Home/Home";
import {Route} from "react-router";
import MobileMenu from "../Mobile menu/MobileMenu";
import SideShoppingCard from "../Side Shopping Card/SideShopingCard";
import Product from "../../Pages/Product/Product";
import Store from "../../Pages/Store/Store";
import ShoppingCard from "../../Pages/ShoppingCard/ShoppingCard";
import {cardUrl, homeUrl, productsUrl, searchUrl} from "../../URL";
import SearchPage from "../../Pages/Search/SearchPage";
import {Container} from 'react-bootstrap'




const Layout = ()=>{

    return (
        <Container fluid={true}>
            <Route activeClassName="active-link" exact path={homeUrl} component={Home}/>
            <Route activeClassName="active-link" exact path={productsUrl} component={Store}/>
            <Route activeClassName="active-link" exact path={productsUrl + '/:id'} component={Product}/>
            <Route activeClassName="active-link" exact path={cardUrl} component={ShoppingCard}/>
            <Route activeClassName="active-link" exact path={searchUrl} component={SearchPage}/>
            <MobileMenu/>
            <SideShoppingCard/>
        </Container>
    )
}

export default Layout