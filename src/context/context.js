import React, {createContext, useEffect} from 'react'
import {fetchAllItems} from "../redux/actions/getAllItems";
import {useDispatch, useSelector} from "react-redux";


export const Context = createContext()

const ContextProvider =({children})=>{

    const dispatch = useDispatch()
    const allItems = useSelector((state=>state.allItems))

    useEffect(()=>{
        dispatch(fetchAllItems())
    },[dispatch])



    return(
        <Context.Provider value={{ allItems }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;