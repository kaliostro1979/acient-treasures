import React from 'react'
import {setItem} from "../../redux/actions/currentItemActions";
import {Link} from "react-router-dom";
import AddToCardButton from "../../components/Buttons/AddToCardButton";
import {useDispatch, useSelector} from "react-redux";

export const StoreItem = (props)=>{

    const dispatch = useDispatch()

    return(
        <div
            className="storeItem"
            id={props.item.id}
            onClick={(e) => {
                dispatch(setItem(props.item.id))
            }}>
            <div className="storeItem-image" style={{ backgroundImage: `url(${props.item.image})`}}>

            </div>
            <Link to={"/products/" + props.item.id}>
                <div className="storeItem-title">
                    <p>{props.item.title}</p>
                </div>
            </Link>
            <div className="storeItem-price">
                <p>${props.item.offerPrice}</p>
            </div>
            <AddToCardButton/>
        </div>
    )
}

export default StoreItem