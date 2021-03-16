import React, {useMemo} from 'react'
import ItemCounter from "../../components/Counter/ItemCounter";
import {useDispatch, useSelector} from "react-redux";
import {getItem} from "../../redux/actions/currentItemActions";
import AddToCardButton from "../../components/Buttons/AddToCardButton";
import ProductGallery from "./ProductsGallery";
import ProductTitle from "./ProductTitle";
import ProductSelectBox from "./ProductSelectBox";
import ProductPrices from "./ProductPrices";
import ProductDescription from "./ProductDescription";


const Product = () => {

    const current = useSelector(state => state.currentItem)
    const dispatch = useDispatch()

    useMemo(() => {
        dispatch(getItem())
    }, [dispatch])


    if (current) {
        return (
            <div className="product-main">
                <ProductGallery current={current}/>
                <div className="product-info">
                    <ProductTitle current={current}/>
                    <div className="product-control__wrapper">
                        <ProductSelectBox/>
                        <ProductPrices current={current}/>
                        <div className="product-info__control">
                            <ItemCounter current={current}/>
                            <AddToCardButton/>
                        </div>
                    </div>
                    <ProductDescription current={current}/>
                </div>
            </div>
        )
    }


}

export default Product