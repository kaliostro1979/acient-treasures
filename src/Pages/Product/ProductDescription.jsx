import React from 'react'

const ProductDescription = (props)=>{




    return(
        <div className="product-info__desc">
            <strong>{props.current.title}</strong>
            <p>{props.current.description}</p>
        </div>
    )
}

export default ProductDescription