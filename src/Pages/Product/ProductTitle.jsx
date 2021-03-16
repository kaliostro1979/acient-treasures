import React from 'react'

const ProductTitle = (props)=>{




    return(
        <div className="product-info__title">
            <span>{props.current.title}</span>
        </div>
    )
}

export default ProductTitle