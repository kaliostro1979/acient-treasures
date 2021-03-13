import React from 'react'
import ItemCounter from "../Counter/ItemCounter";

const SideShoppingCardItem = ()=>{


    return(
        <div className="side-card__item">
            <div className="side-card__item__pic" style={{ backgroundImage: `url(/assets/images/item-images/item-1.jpg)` }}>

            </div>
            <div className="side-card__item__body">
                <p className="side-card__item__body__desc">
                    Handmade Stainless Steel Massive Wolf Chain with Odin’s Protection Charm - 50cm / 20in
                </p>
                <div className="side-card__item__body__price">
                    <div className="side-card__item__body__price__offer">
                        <span>$</span><span>19.95</span>
                    </div>
                    <div className="side-card__item__body__price__real">
                        <span>$</span><span>29.95</span>
                    </div>
                </div>
                <ItemCounter/>
            </div>
        </div>
    )
}


export default SideShoppingCardItem