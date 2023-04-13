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
//   'item/deleteitems',
//   async(item, thunkAPI) => {
//     const {rejectWithValue} = thunkAPI
//   try {
//    await fetch(`http://localhost:3005/item/${item.id}`,{
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
  reducers: {},
  extraReducers: {
    //getitems
    
    // insertitem
    [insertitem.pending]: (state, action) => {
      state.isLoading = true
      state.error = false      
    },
    [insertitem.fulfilled]: (state, action) => {
      state.isLoading = false
      
    
      state.cart.push(action.payload);
      console.log(action.payload);

    },
    [insertitem.rejected]: (state, action) => {
      state.isLoading = false
      console.log(action.payload);
      state.error = action.payload
    },
    //


    //     // deleteitems
    //     [deleteitems.pending]: (state, action) => {
    //       state.isLoading = true
    //       state.error = false      
    //     },
    //     [deleteitems.fulfilled]: (state, action) => {
    //       state.isLoading = false
    //       state.items = state.items.filter((el) => el.id !== action.payload.id)
    //     },
    //     [deleteitems.rejected]: (state, action) => {
    //       state.isLoading = false
    //       state.error = action.payload
    //     },



  }
})


export default cartSlice.reducer