import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchAllItems, filterAllItems} from "../../redux/actions/getAllItems";
import StoreItem from "./StoreItem";
import ItemsCategoryFilter from "../../components/Filters/ItemsCategoryFilters";
import {Row, Col} from 'react-bootstrap'


const Store = () => {
    const allItems = useSelector(state => state.allItems)
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllItems())
    }, [dispatch])

    return (

        <Row>
            <Col lg={2}>
                <div className="filters-wrapper">
                    <h4>Filter by category</h4>
                    <ItemsCategoryFilter allItems={allItems} filter={filter}/>
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