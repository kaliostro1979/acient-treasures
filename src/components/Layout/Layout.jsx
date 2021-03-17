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


const Layout = () => {

    return (
        <>
            <Route activeClassName="active-link" exact path={homeUrl} component={Home}/>
            <Container fluid={true}>
                <Route exact path={productsUrl} component={Store}/>
                <Route exact path={productsUrl + '/:id'} component={Product}/>
                <Route exact path={cardUrl} component={ShoppingCard}/>
                <Route exact path={searchUrl} component={SearchPage}/>
                <MobileMenu/>
                <SideShoppingCard/>
            </Container>
        </>
    )
}

export default Layout