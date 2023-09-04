import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('productsReducer/fetchProducts' , async()=>{
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return data
})

const productsReducer = createSlice({
    initialState : [],
    name :'productsReducer',
    reducers : {},
    extraReducers :( builder )=>{
       builder.addCase(fetchProducts.pending , ( state , action )=>{
        //  show
       })
       builder.addCase(fetchProducts.fulfilled , (state , action)=>{
           return action.payload
       }) 
    }
})

// export const {} = productsReducer.actions
export default productsReducer.reducer