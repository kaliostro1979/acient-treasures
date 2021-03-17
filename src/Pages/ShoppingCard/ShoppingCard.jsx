import React from 'react'
import SideShoppingCard from "../../components/Side Shopping Card/SideShopingCard";
import {Link} from "react-router-dom";
import {productsUrl} from "../../URL";
import {Row, Col} from "react-bootstrap";


const ShoppingCard = () => {
    return (
        <Row>
            <Col lg={6}>
            <div className="shoppingCard">
                <SideShoppingCard/>
                <div className="continue-shopping">
                    <Link to={productsUrl}>
                        Continue Shopping
                    </Link>
                </div>
            </div>
            </Col>
        </Row>
    )
}

export default ShoppingCard