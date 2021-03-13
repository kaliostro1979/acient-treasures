import React, {createContext, useEffect, useState} from 'react'


export const Context = createContext()

const ContextProvider =({children})=>{

    const [count, setCount] = useState(0)
    const [items, setItems] = useState([])

    const handleIncrement = ()=>{
        setCount(count + 1)
    }

    const handleDecrement = ()=>{
        setCount(count - 1)
    }

   /* const getItems = async ()=>{
        await fetch('./items.json',{
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res=>res.json())
            .then(data=>{
                setItems(data)
            })
    }

    console.log(items.length);

    useEffect(()=>{
        getItems()
    },[])*/




    return(
        <Context.Provider value={{ handleIncrement, handleDecrement, count }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;