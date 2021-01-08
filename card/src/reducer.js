import React from 'react'

export default function reducer(state,action) {
   if(action.type === 'CLEAR_CART'){
       return {...state , cart:[]}
   }
   if(action.type === 'REMOVE_ITEM'){  
       let elementsOfCart = [...state.cart].filter(element => element.id !== action.payload)
       return {...state, cart:elementsOfCart}
   }
    return state
}
