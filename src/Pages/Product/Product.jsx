import React, {useContext, useEffect, useState} from 'react'
import ItemCounter from "../../components/Counter/ItemCounter";
import {Context} from "../../context/context";

const Product = ()=>{

    const {items} = useContext(Context)
    const [imageThumb, setImageThumb] = useState([])
    const [selectedImage, setSelectedImage] = useState('')

    const thumbs = ()=> {
        items.map((i)=>{
            setImageThumb(i.images)
            setSelectedImage(i.image)
        })
    }

    useEffect(()=>{
        thumbs()
    },[items])




    return (
        <div className="product-main">
            <div className="product-gallery-main">
                <div className="product-gallery" style={{ backgroundImage: `url(${selectedImage})` }}>

                </div>
                <div className="product-gallery__thumbs-wrapper">
                    {
                        imageThumb.map((item, i)=>{
                            return(
                                <div
                                    className="product-gallery__thumbs-wrapper-item"
                                    style={{ backgroundImage: `url(${item})` }}
                                    key={Math.random()}
                                    onClick={()=>{setSelectedImage(item)}}
                                >

                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="product-info">
                <div className="product-info__title">
                    <span>Handmade Stainless Steel Kings Chain Viking Geri And Freki Mjolnir Necklace</span>
                </div>
                <div className="product-control__wrapper">
                    <div className="product-info__select">
                        <p>Choose your length</p>
                        <div className="product-info__select-wrapper">
                            <select name="lenght-select">
                                <option defaultValue="60 CM (24 INCHES)">60 CM (24 INCHES)</option>
                                <option value="60 CM (26 INCHES)">60 CM (26 INCHES)</option>
                                <option value="60 CM (28 INCHES)">60 CM (28 INCHES)</option>
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