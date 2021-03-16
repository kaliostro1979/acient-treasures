import React from 'react'

const ProductDescription = (props)=>{




    return(
        <div className="product-info__desc">
            <strong>Handmade Chain Geri and Freki Viking Necklace with Thor Hammer Mjolnir!</strong>
            <p>{props.current.description}</p>
        </div>
    )
}

export default ProductDescription