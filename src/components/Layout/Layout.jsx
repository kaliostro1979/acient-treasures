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
import {Col, Container, Row} from 'react-bootstrap'
import SiteSearch from "../Search field/SiteSearch";
import {useSelector} from "react-redux";


const Layout = () => {

    const searchField = useSelector(state=>state.searchField)

    return (
        <>
            <Container fluid={true}>
                <Row>
                    <Col lg={{order: 10, offset: 2}}>
                        <SiteSearch searchField={searchField}/>
                    </Col>
                </Row>
                <Route exact path={productsUrl} component={Store}/>
                <Route exact path={productsUrl + '/:id'} component={Product}/>
                <Route exact path={cardUrl} component={ShoppingCard}/>
                <Route exact path={searchUrl} component={SearchPage}/>
                <MobileMenu/>
                <SideShoppingCard/>
            </Container>
            <Route activeClassName="active-link" exact path={homeUrl} component={Home}/>
        </>
    )
}

export default Layout