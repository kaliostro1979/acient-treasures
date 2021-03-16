import React from 'react'

const ProductPrices = (props)=>{

    return(
        <div className="product-info__price">
            <span>${props.current.offerPrice}</span>
            <small>Tax included</small>
        </div>
    )
}

export default ProductPrices