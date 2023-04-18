import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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
  initialState: {cart: [] , isLoading: false, error: null , readitem:null},
  reducers: {

    deleteitems: (state, action) => {
    state.cart = state.cart.filter((el) => el.id!== action.payload.id)
    },

    clear:(state, action) => {
      state.cart = []
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
    //getitems
    
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
    }

    },
    [insertitem.rejected]: (state, action) => {
      state.isLoading = false
      console.log(action.payload);
      state.error = action.payload
    },
    //




  }
})

export const {clear, deleteitems,increaseQuantity,decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer