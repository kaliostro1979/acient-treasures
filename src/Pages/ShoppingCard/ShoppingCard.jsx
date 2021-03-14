import React from 'react'
import SideShoppingCard from "../../components/Side Shopping Card/SideShopingCard";
import {Link} from "react-router-dom";
import {productsUrl} from "../../URL";


const ShoppingCard = () => {
    return (
        <div className="shoppingCard">
            <SideShoppingCard/>
            <div className="continue-shopping">
                <Link to={productsUrl}>
                    Continue Shopping
                </Link>
            </div>
        </div>
    )
}

export default ShoppingCard