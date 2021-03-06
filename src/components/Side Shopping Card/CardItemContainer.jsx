import React from 'react'
import CardItem from "./CardItem";

const CardItemContainer = (props)=>{
    return(
        <div className="side-card">
            {
                props.cardItems.map((item) => {
                    return (
                        <CardItem item={item} key={Math.random()}/>
                    )
                })
            }

        </div>
    )
}

export default CardItemContainer