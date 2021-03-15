import React, {useMemo, useState} from 'react'
import ItemCounter from "../../components/Counter/ItemCounter";
import {useDispatch, useSelector} from "react-redux";
import {handleAddToCard} from "../../redux/actions/cardItemsControl";
import {getItem} from "../../redux/actions/currentItemActions";


const Product = () => {

    const current = useSelector(state => state.currentItem)
    const [selectedImage, setSelectedImage] = useState(current && current.image)
    const dispatch = useDispatch()

    useMemo(() => {
        let isMounted = true;
        dispatch(getItem())
        return () => {
            isMounted = false
        };
    }, [dispatch])


    if (current) {
        return (
            <div className="product-main">
                <div className="product-gallery-main">
                    <div className="product-gallery" style={{backgroundImage: `url(${selectedImage})`}}>

                    </div>
                    <div className="product-gallery__thumbs-wrapper">
                        {
                            current.images.map((item, i) => {
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
                        <span>{current.title}</span>
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
                            <span>${current.offerPrice}</span>
                            <small>Tax included</small>
                        </div>
                        <div className="product-info__control">
                            <ItemCounter/>
                            <button className="product-info__control__add-btn" onClick={() => {
                                dispatch(handleAddToCard())
                            }}>Add to
                                Card
                            </button>
                        </div>
                    </div>
                    <div className="product-info__desc">
                        <strong>Handmade Chain Geri and Freki Viking Necklace with Thor Hammer Mjolnir!</strong>
                        <p>{current.description}</p>
                    </div>
                </div>
            </div>
        )
    }


}

export default Product