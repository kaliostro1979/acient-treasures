import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchAllItems, filterAllItems} from "../../redux/actions/getAllItems";
import StoreItem from "./StoreItem";
import ItemsCategoryFilter from "../../components/Filters/ItemsCategoryFilters";
import {Row, Col} from 'react-bootstrap'
import Search from "../../components/Search field/Search";


const Store = () => {
    const allItems = useSelector(state => state.allItems)
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()
    console.log(allItems);
    useEffect(() => {
        dispatch(fetchAllItems())
    }, [dispatch])

    return (
        <Row>

            <Col lg={2}>
                <div className="filters-wrapper">
                    <Search/>
                    <ItemsCategoryFilter allItems={allItems} filter={filter}/>
                </div>
            </Col>
            {allItems.length > 0 ? <Col lg={10}>
                <Row>
                    {
                        allItems.map((item) => {
                            return (
                                <Col md={3} sm={4} sm="4" key={Math.random()}>
                                    <StoreItem item={item}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Col> : <Col lg={10}><h3>Sorry no results</h3></Col>}
        </Row>
    )
}

export default Store