import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {filterAllItems} from "../../redux/actions/getAllItems";
import StoreItem from "./StoreItem";
import ItemsCategoryFilter from "../../components/Filters/ItemsCategoryFilters";
import {Container, Row, Col} from 'react-bootstrap'

const Store = () => {
    const allItems = useSelector(state => state.allItems)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(filterAllItems())
    }, [dispatch])

    return (

        <Row>
            <Col lg={2}>
                <div className="filters-wrapper">
                    <h4>Filter by category</h4>
                    <ItemsCategoryFilter allItems={allItems}/>
                </div>
            </Col>
            <Col lg={10}>
                <Row>
                    {
                        allItems.map((item) => {
                            return (
                                <Col lg={3} key={Math.random()}>
                                    <StoreItem item={item}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Col>
        </Row>
    )
}

export default Store