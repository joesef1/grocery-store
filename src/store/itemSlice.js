import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//getitems
export const getitems = createAsyncThunk(
  'item/getitems',
  async(_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
  try {
    const res = await fetch('http://localhost:3007/item');
    const data = await res.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})


// //insertitem
// export const insertitem = createAsyncThunk(
//   'item/insertitem',
//   async(dataitem, thunkAPI) => {
//     const {rejectWithValue, getState} = thunkAPI
//   try {
//     dataitem.nameofuser = getState().auth.name
//     const res = await fetch('http://localhost:3005/item',{
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json; charset=UTF-8',
//       },
//       body: JSON.stringify(dataitem)  
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


// //readitem
// export const readitem = createAsyncThunk(
//   'item/readitem',
//   async(item, thunkAPI) => {
//     const {rejectWithValue} = thunkAPI
//   try {
//    await fetch(`http://localhost:3005/item/${item.id}`,{
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json; charset=UTF-8',
//       },
//     });
//     return item;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// })



export const itemSlice = createSlice({
  name: 'items',
  initialState: {items: [] , isLoading: false, error: null , readitem:null},
  reducers: {},
  extraReducers: {
    //getitems
    [getitems.pending]: (state, action) => {
      state.isLoading = true
      state.error = false      
    },
    [getitems.fulfilled]: (state, action) => {
      state.isLoading = false
      state.items = action.payload;      
    },
    [getitems.rejected]: (state, action) => {
      state.isLoading = false
      // console.log(action);
      state.error = action.payload
    },

    // // insertitem
    // [insertitem.pending]: (state, action) => {
    //   state.isLoading = true
    //   state.error = false      
    // },
    // [insertitem.fulfilled]: (state, action) => {
    //   state.isLoading = false
    //   // console.log(action);
    //   state.items.push(action.payload);      
    // },
    // [insertitem.rejected]: (state, action) => {
    //   state.isLoading = false
    //   // console.log(action);
    //   state.error = action.payload
    // },
    // //
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

    //     //  readitems
    //     [readitem.pending]: (state, action) => {
    //       state.isLoading = true
    //       state.error = false      
    //     },
    //     [readitem.fulfilled]: (state, action) => {
    //       state.isLoading = false
    //       state.readitem = action.payload ;
    //       // console.log(readitem());
    //       // console.log(state.readitem);
    //       // console.log(action.payload);

    //     },
    //     [readitem.rejected]: (state, action) => {
    //       state.isLoading = false
    //       state.error = action.payload
    //     },



  }
})


export default itemSlice.reducer