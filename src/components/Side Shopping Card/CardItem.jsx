import React from 'react'
import {hideRemoveIcon, showRemoveIcon} from "../../redux/actions/removeIconAction";
import {handleRemoveItem} from "../../redux/actions/cardItemsControl";
import {Link} from "react-router-dom";
import {closeSideShoppingCard} from "../../redux/actions/sideShoppingCardStatus";
import CardItemsCounter from "../Counter/CardItemsCounter";
import {useDispatch, useSelector} from "react-redux";

const CardItem = (props)=>{

    const removeBtnStatus = useSelector(state=>state.removeIcon)
    const dispatch = useDispatch()


    return(
        <div className="side-card__item"
             key={Math.random()}
             onMouseOver={() => {
                 dispatch(showRemoveIcon())
             }}
             onMouseLeave={() => {
                 dispatch(hideRemoveIcon())
             }}>
            <div className={removeBtnStatus ? "remove-icon remove-icon-show" : "remove-icon"}
                 onClick={() => {dispatch(handleRemoveItem(props.item.id))}}>
                <img src="/assets/images/icons/remove.png" alt=""/>
            </div>
            <div className="side-card__item__pic"
                 style={{backgroundImage: `url(${props.item.image})`}}>
            </div>
            <div className="side-card__item__body">
                <Link className="side-card__item__body__desc" to={"/product/" + props.item.id}
                      onClick={()=>{dispatch(closeSideShoppingCard())}}>
                    {props.item.title}
                </Link>
                <div className="side-card__item__body__price">
                    <div className="side-card__item__body__price__offer">
                        <span>$</span>
                        <span>{props.item.calculatedPrice}</span>
                    </div>
                    <div className="side-card__item__body__price__real">
                        <span>$</span><span>{props.item.price}</span>
                    </div>
                </div>

                <CardItemsCounter id={props.item.id} item={props.item}/>

            </div>
        </div>
    )
}

export default CardItem