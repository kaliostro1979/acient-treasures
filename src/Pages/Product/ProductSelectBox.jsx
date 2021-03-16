import React from 'react'

const ProductSelectBox = (props)=>{




    return(
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
    )
}

export default ProductSelectBox