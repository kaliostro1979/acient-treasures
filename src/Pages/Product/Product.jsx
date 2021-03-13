import React from 'react'
import Select from 'react-select'
import ItemCounter from "../../components/Counter/ItemCounter";
import Button from "../../components/Button";

const Product = ()=>{

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <div className="product-main">
            <div className="product-gallery">
                <img src="/assets/images/item-images/item-1.jpg" alt=""/>
                <div className="product-gallery__thumbs">
                    <img src="" alt=""/>
                </div>
            </div>
            <div className="product-info">
                <div className="product-info__title">
                    <span>Handmade Stainless Steel Kings Chain Viking Geri And Freki Mjolnir Necklace</span>
                </div>
                <div className="product-info__select">
                    <p>Choose your length</p>
                    <div className="product-info__select-wrapper">
                        <select name="lenght-select">
                            <option defaultValue="60 CM (24 INCHES)">60 CM (24 INCHES)</option>
                            <option value="60 CM (24 INCHES)">60 CM (24 INCHES)</option>
                            <option value="60 CM (24 INCHES)">60 CM (24 INCHES)</option>
                        </select>
                    </div>
                </div>
                <div className="product-info__price">
                    <span>$19.95</span>
                    <small>Tax included</small>
                </div>
                <div className="product-info__control">
                    <ItemCounter/>
                    <button className="product-info__control__add-btn">Add to Card</button>
                </div>
                <div className="product-info__desc">
                    <strong>Handmade Chain Geri and Freki Viking Necklace with Thor Hammer Mjolnir!</strong>
                    <p>The Kings chain was worn by Viking kings as a status symbol as the name applies. This is a 100% handmade Stainless Steel Chain. The crafting is a very time consuming process to put together the chain link by link.
                    </p>
                    <p>The hand made chain connects together with a lobster clamp.</p>

                </div>
            </div>
        </div>
    )
}

export default Product