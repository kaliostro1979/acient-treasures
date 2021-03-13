import React, {createContext, useState} from 'react'

export const Context = createContext()

const ContextProvider =({children})=>{

    const [count, setCount] = useState(0)

    const handleIncrement = ()=>{
        setCount(count + 1)
    }

    const handleDecrement = ()=>{
        setCount(count - 1)
    }




    return(
        <Context.Provider value={{ handleIncrement, handleDecrement, count }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;