import React from 'react'
import {Link} from "react-router-dom";
import ItemCounter from "../ItemCounter";
import {useDispatch, useSelector} from "react-redux";
import {showRemoveIcon} from "../../redux/actions/showRemoveIcon";
import {hideRemoveIcon} from "../../redux/actions/hideRemoveIcon";

const SideShoppingCardItem = ({item, handleDecrement, handleIncrement, handleCardState})=>{

    const removeBtnStatus = useSelector(state=>state.removeIcon)
    const dispatch = useDispatch()


    return(
        <div className="side-card__item"
             key={Math.random()}
             onMouseOver={()=>{dispatch(showRemoveIcon())}}
             onMouseLeave={()=>{dispatch(hideRemoveIcon())}}>
            <div className={removeBtnStatus ? "remove-icon remove-icon-show" : "remove-icon"}>
                <img src="/assets/images/icons/remove.png" alt=""/>
            </div>
            <div className="side-card__item__pic"
                 style={{backgroundImage: `url(${item.image})`}}>
            </div>
            <div className="side-card__item__body">
                <Link className="side-card__item__body__desc" to={"/product/" + item.id}
                      onClick={handleCardState}>
                    {item.title}
                </Link>
                <div className="side-card__item__body__price">
                    <div className="side-card__item__body__price__offer">
                        <span>$</span>
                        <span>{item.calculatedPrice}</span>
                    </div>
                    <div className="side-card__item__body__price__real">
                        <span>$</span><span>{item.price}</span>
                    </div>
                </div>
                <ItemCounter handleDecrement={handleDecrement} item={item} handleIncrement={handleIncrement}/>
            </div>
        </div>
    )
}


export default SideShoppingCardItem