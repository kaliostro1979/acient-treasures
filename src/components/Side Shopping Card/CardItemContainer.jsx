import React from 'react'
import CardItem from "./CardItem";

const CardItemContainer = (props)=>{




    return(
        <div className="side-card">
            {
                props.cardItems.map((item) => {
                    return (
                        <CardItem item={item}/>
                    )
                })
            }

        </div>
    )
}

export default CardItemContainer