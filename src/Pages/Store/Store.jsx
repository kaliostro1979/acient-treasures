import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setItem} from "../../redux/actions/currentItemActions";
import {Link} from "react-router-dom";
import {fetchAllItems} from "../../redux/actions/getAllItems";
import AddToCardButton from "../../components/Buttons/AddToCardButton";

const Store = () => {
    const allItems = useSelector(state => state.allItems)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchAllItems())
    }, [dispatch])

    return (
        <div className="store">
            {
                allItems.map((item) => {
                    return (
                            <div
                                key={Math.random()}
                                className="storeItem"
                                id={item.id}
                                onClick={(e) => {
                                    dispatch(setItem(item.id))
                                }}>
                                <div className="storeItem-image" style={{ backgroundImage: `url(${item.image})`}}>

                                </div>
                                <Link to={"/products/" + item.id} key={Math.random()}>
                                <div className="storeItem-title">
                                    <p>{item.title}</p>
                                </div>
                                </Link>
                                <div className="storeItem-price">
                                    <p>${item.offerPrice}</p>
                                </div>
                                <AddToCardButton/>
                            </div>
                    )
                })
            }
        </div>
    )
}

export default Store