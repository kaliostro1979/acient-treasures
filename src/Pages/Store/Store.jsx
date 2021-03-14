import React, {useContext} from 'react'
import {Context} from "../../context/context";
import {useDispatch, useSelector} from "react-redux";
import {getItem} from "../../redux/actions/getCurrentItem";
import {Link} from "react-router-dom";

const Store = () => {

    const {allItems} = useContext(Context)
    const current = useSelector(state => state.currentItem)
    const dispatch = useDispatch()

    return (
        <div className="store">
            {
                allItems.map((item) => {
                    return (
                        <Link to={"/products/" + current.id} key={Math.random()}>
                            <div
                                className="storeItem"
                                id={item.id}
                                onClick={(e) => {
                                    dispatch(getItem(item.id))
                                }}>
                                <div className="storeItem-image" style={{ backgroundImage: `url(${item.image})`}}>

                                </div>
                                <div className="storeItem-title">
                                    <p>{item.title}</p>
                                </div>
                                <div className="storeItem-price">
                                    <p>${item.offerPrice}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Store