import React, {useState} from 'react'

const ProductGallery = (props)=>{

    const [selectedImage, setSelectedImage] = useState(props.current && props.current.image)


    return(
        <div className="product-gallery-main">
            <div className="product-gallery" style={{backgroundImage: `url(${selectedImage})`}}>

            </div>
            <div className="product-gallery__thumbs-wrapper">
                {
                    props.current.images.map((item, i) => {
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
    )
}

export default ProductGallery