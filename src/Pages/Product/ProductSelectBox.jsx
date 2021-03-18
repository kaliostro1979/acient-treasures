import React from 'react'

const ProductSelectBox = (props)=>{
    
    return(
        <div className="product-info__select">
            <p>Choose your length</p>
            <div className={props.current.lengths ? "product-info__select-wrapper" : "product-info__select-wrapper hidden"}>
                <select name="lenght-select" style={{ display:  props.current.lengths ? "inline-block" : "none"}}>
                    {
                        props.current.lengths && props.current.lengths.map((e)=>{
                            return <option defaultValue={e} key={Math.random()}>{e}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default ProductSelectBox