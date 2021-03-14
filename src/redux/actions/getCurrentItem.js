import {GET_CURRENT_ITEM} from "../types";


export const getItem = (id)=>{

    return async (dispatch)=>{
        let current = {}
        await fetch('http://localhost:3000/items.json',{
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res=>res.json())
            .then(data=>{
                data.forEach((item)=>{
                    if (id === item.id){
                        localStorage.setItem('currentItem', JSON.stringify(item))
                        current = item
                    }
                })
            })
        dispatch(getCurrentItem(current))
    }
}



export const getCurrentItem = (currentItem)=>{
    return({
        type: GET_CURRENT_ITEM,
        payload: currentItem
    })
}