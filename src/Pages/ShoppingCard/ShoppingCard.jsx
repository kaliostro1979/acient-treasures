import React from 'react'
import SideShoppingCard from "../../components/Side Shopping Card/SideShopingCard";
import {Link} from "react-router-dom";


const ShoppingCard = () => {
    return (
        <div className="shoppingCard">
            <SideShoppingCard/>
            <div className="continue-shopping">
                <Link to="/products">

                    Continue Shopping
                </Link>
            </div>
        </div>
    )
}

export default ShoppingCard