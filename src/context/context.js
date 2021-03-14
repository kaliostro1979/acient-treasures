import React, {createContext, useEffect, useState} from 'react'
import {fetchAllItems} from "../redux/actions/getAllItems";
import {useDispatch, useSelector} from "react-redux";


export const Context = createContext()

const ContextProvider =({children})=>{

    const [count, setCount] = useState(0)
    const [items, setItems] = useState([])
    const dispatch = useDispatch()
    const allItems = useSelector((state=>state.allItems))

    const handleIncrement = ()=>{
        setCount(count + 1)
    }

    const handleDecrement = ()=>{
        setCount(count - 1)
    }


    useEffect(()=>{
        dispatch(fetchAllItems())
    },[])




    return(
        <Context.Provider value={{ handleIncrement, handleDecrement, count, allItems }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;