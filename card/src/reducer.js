import React from 'react'
import { act } from 'react-dom/test-utils'

export default function reducer(state,action) {
   if(action.type === 'CLEAR_CART'){
       return {...state , cart:[]}
   }
   if(action.type === 'REMOVE_ITEM'){  
       let elementsOfCart = [...state.cart].filter(element => element.id !== action.payload)
       return {...state, cart:elementsOfCart}
   }
   if(action.type === 'ADD_PRODUCT'){
    let tempCart = state.cart.map((element)=>{
        if(element.id === action.payload){
             return {...element , amount:element.amount++}
        }
        return element
    })
       return {...state, cart:tempCart}
   }

   if(action.type === 'REMOVE'){
       let tempCart = state.cart.map((element)=>{
           if(element.id === action.payload){
               return {...element, amount:element.amount--}
           }
           return element
       }).filter(element => element.amount !== 0)
       return {...state,cart:tempCart}
   }
   if(action.type === 'CHANGETOTAL'){
     let totalAmount = state.cart.reduce((acc,element)=> {
      return  acc += element.price * element.amount
     },0 )
     let totalElements = state.cart.reduce((acc,element)=>{
         return acc += element.amount
     },0)
     console.log(totalAmount)
     return {...state, total:totalAmount, amount: totalElements}
   }
    return state
}
