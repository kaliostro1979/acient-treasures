import {GET_CURRENT_ITEM, SET_CURRENT_ITEM} from "../types";

let current = {}

export const setItem = (id)=>{
    return async (dispatch)=>{
       await fetch('http://localhost:3000/items.json',{
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res=>res.json())
            .then(data=>{
                data.map((item)=>{
                    if (id === item.id){
                        localStorage.setItem('currentItem', JSON.stringify(item))
                        current = item
                    }
                })
            })
        dispatch(setCurrentItem(current))
    }
}

export const getItem = ()=>{
    return (dispatch)=>{
        const currentItemFromLocalStorage = localStorage.getItem('currentItem')
        const currentItem = JSON.parse(currentItemFromLocalStorage)
        dispatch(getCurrentItem(currentItem))
    }
}



export const getCurrentItem = (currentItem)=>{
    return({
        type: GET_CURRENT_ITEM,
        payload: currentItem
    })
}


export const setCurrentItem = (currentItem)=>{
    return({
        type: SET_CURRENT_ITEM,
        payload: currentItem
    })
}

