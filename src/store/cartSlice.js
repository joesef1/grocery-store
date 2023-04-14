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

//
// //insertitem
// export const insertitem = createAsyncThunk(
//   'cart/insertitem',
//   async(product, thunkAPI) => {
//     const {rejectWithValue, getState} = thunkAPI
//   try {
//     // addedItem.nameofuser = getState().auth.name
//     const res = await fetch('http://localhost:3007/item',{
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json; charset=UTF-8',
//       },
//       body: JSON.stringify(product)  
//     })  
//     const data = await res.json();
//     return data;
    
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// })
// //


// //deleteitems
// export const deleteitems = createAsyncThunk(
//   'cart/insertitem',
//   async(item, thunkAPI) => {
//     const {rejectWithValue} = thunkAPI
//   try {
//    await fetch(`http://localhost:3007/item/${item.id}`,{
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json; charset=UTF-8',
//       },
//     });
//     return item;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// })
// //





export const cartSlice = createSlice({
  name: 'cart',
  initialState: {cart: [] , isLoading: false, error: null , readitem:null},
  reducers: {
    deleteitems: (state, action) => {
          // console.log(action.payload);
          // console.log(state.cart);
          state.cart = state.cart.filter((el) => el.id!== action.payload.id)
          // console.log(state.cart);

    },
    clear:(state, action) => {
      state.cart = []
    }
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

export const {clear, deleteitems} = cartSlice.actions
export default cartSlice.reducer