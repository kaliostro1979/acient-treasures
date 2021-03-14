import React, {useEffect, useState} from 'react'
import ItemCounter from "../../components/Counter/ItemCounter";
import {useSelector} from "react-redux";


const Product = ({history}) => {

    const current = useSelector(state => state.currentItem)
    const [selectedImage, setSelectedImage] = useState(current.image)
    const itemFromLocalStorage = localStorage.getItem('currentItem')
    const currentItem = JSON.parse(itemFromLocalStorage)


    useEffect(() => {
        setSelectedImage(currentItem.image)
    }, [currentItem.image])


    const handleAddToCard = (id) => {
        let cardItems = []
        if (localStorage.getItem('cardItems')) {
            cardItems = JSON.parse(localStorage.getItem('cardItems'));
        }
        cardItems.push(currentItem);
        localStorage.setItem('cardItems', JSON.stringify(cardItems))
        history.push('/shopping-card')
    }



    return (
        <div className="product-main">
            <div className="product-gallery-main">
                <div className="product-gallery" style={{backgroundImage: `url(${selectedImage})`}}>

                </div>
                <div className="product-gallery__thumbs-wrapper">
                    {
                        currentItem.images.map((item, i) => {
                            return (
                                <div
                                    className="product-gallery__thumbs-wrapper-item"
                                    style={{backgroundImage: `url(${item})`}}
                                    key={Math.random()}
                                    onClick={() => {
                                        setSelectedImage(item)
                                    }}
                                >
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="product-info">
                <div className="product-info__title">
                    <span>{currentItem.title}</span>
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
                        <span>${currentItem.offerPrice}</span>
                        <small>Tax included</small>
                    </div>
                    <div className="product-info__control">
                        <ItemCounter/>
                        <button className="product-info__control__add-btn" onClick={()=>{handleAddToCard(currentItem.id)}}>Add to
                            Card
                        </button>
                    </div>
                </div>
                <div className="product-info__desc">
                    <strong>Handmade Chain Geri and Freki Viking Necklace with Thor Hammer Mjolnir!</strong>
                    <p>{currentItem.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Product