import { createSlice } from "@reduxjs/toolkit";


const cartReducer = createSlice({
    initialState : [] ,
    name : 'cartReducer',
    reducers:{
       addToCart : (state , action)=>{
          state.push(action.payload)
       }, 
       deleteFromCart : (state , action)=>{
        return state.filter(product => product.id !== action.payload)
       }, 
       clearCart : (state , action)=>{
        return []
       }, 
    }
})

export const {addToCart , deleteFromCart , clearCart} = cartReducer.actions
export default cartReducer.reducer