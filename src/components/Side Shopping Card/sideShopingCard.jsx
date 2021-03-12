import React from 'react'

const SideShoppingCard = ()=>{
    return(
        <div className="side-card">
            <div className="side-card__header">
                <p>Cart (<span>8</span>items)</p>
                <div className="side-card__header__close">
                    <img src="/assets/images/icons/close-dark.png" alt=""/>
                </div>
            </div>
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
                    <div className="side-card__item__body__counter">
                        <button className="dec">-</button>
                        <div className="side-card__item__body__counter__value"><span>0</span></div>
                        <button className="inc">+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SideShoppingCard