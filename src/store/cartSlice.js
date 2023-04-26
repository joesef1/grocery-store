import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {toast } from 'react-toastify';


const items = localStorage.getItem

export const insertitem = createAsyncThunk(
  'cart/insertitem',
  async(product, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        await fetch(`http://localhost:3007/item/${product.id}`,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            },
          });
          return product;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {cart: JSON.parse(localStorage.getItem("cart") || "[]"), isLoading: false, error: null , readitem:null},

  reducers: {

    deleteitems: (state, action) => {
    state.cart = state.cart.filter((el) => el.id!== action.payload.id)
    },

    clear:(state, action) => {
      state.cart = []
      localStorage.clear()
    },
    increaseQuantity: (state, action) => {  
      const foundeditem = state.cart.find((product)=> product.id === action.payload.id)
      if (foundeditem) {
        foundeditem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {  
      const foundeditem = state.cart.find((product)=> product.id === action.payload.id)
      if (foundeditem) {
        if (foundeditem.quantity > 1) {
            foundeditem.quantity -= 1;
        }else{
          state.cart = state.cart.filter((product)=> product.id!== action.payload.id)
        }
      }
    },

  },
  extraReducers: {  
    // insertitem
    [insertitem.pending]: (state, action) => {
      state.isLoading = true
      state.error = false      
    },

    [insertitem.fulfilled]: (state, action) => {
      state.isLoading = false
      const foundeditem = state.cart.find((product)=> product.id === action.payload.id)
    if (foundeditem) {
      foundeditem.quantity += 1;
    }else{
      const cloneditem= {...action.payload , quantity: 1}
      state.cart.push(cloneditem);
      localStorage.setItem('cart', JSON.stringify(state.cart));
      toast.success(`${action.payload.name} added to cart`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        // icon: action.payload.image,
        className: 'foo-bar',
        style: { 
          color: '#212121',
        }
      });
      
      

    }
    console.log(action.payload);
    }, 
    
    
    
    [insertitem.rejected]: (state, action) => {
      state.isLoading = false
      console.log(action.payload);
      state.error = action.payload
    },
  }
})
export const {clear, deleteitems,increaseQuantity,decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer



