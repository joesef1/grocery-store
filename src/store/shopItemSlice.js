import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'




export const filtercategoryShop = createAsyncThunk(
  'item/filtercategoryShop',
  async(category, thunkAPI) => {
    const {rejectWithValue, getState} = thunkAPI
  try {
    const res = await fetch('https://grocery-db.onrender.com/item',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      // body: JSON.stringify(category)  
    })  
    const data = await res.json();
    const result = data.filter((item) => item.category === category);
    
    return result;
    
  } catch (error) {
    return rejectWithValue(error.message);
  }
})
//


export const filtersubcategoryShop = createAsyncThunk(
  'item/filtersubcategoryShop',
  async(subcategory, thunkAPI) => {
    const {rejectWithValue, getState} = thunkAPI
  try {
    const res = await fetch('https://grocery-db.onrender.com/item',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      // body: JSON.stringify(category)  
    })  
    const data = await res.json();
    const result = data.filter((item) => item.subcategory === subcategory);
    
    return result;
    
  } catch (error) {
    return rejectWithValue(error.message);
  }
})



export const shopitemslice = createSlice({
  name: 'shopitems',
  initialState: {shopitems: JSON.parse(localStorage.getItem("shopitems") || "[]"), isLoading: false, error: null , readitem:null ,filteredshopitems: [],searchQuery: ''},
  reducers: {},
  extraReducers: {
  

    // filtercategoryShoptitem
    [filtercategoryShop.pending]: (state, action) => {
      state.isLoading = true
      state.error = false      
    },
    [filtercategoryShop.fulfilled]: (state, action) => {
      state.isLoading = false
      // console.log(action.payload);
      state.shopitems = action.payload;      
      localStorage.setItem('shopitems', JSON.stringify(state.shopitems));

    },
    [filtercategoryShop.rejected]: (state, action) => {
      state.isLoading = false
      // console.log(action);
      state.error = action.payload
    },
    //

    
    // filtersubcategoryShop
    [filtersubcategoryShop.pending]: (state, action) => {
      state.isLoading = true
      state.error = false      
    },
    [filtersubcategoryShop.fulfilled]: (state, action) => {
      state.isLoading = false
      console.log(action.payload);
      state.shopitems = action.payload;     
      localStorage.setItem('shopitems', JSON.stringify(state.shopitems));

    },
    [filtersubcategoryShop.rejected]: (state, action) => {
      state.isLoading = false
      console.log(action);
      state.error = action.payload
    },
    //



  }
})

export const { setSearchQuery, setFilteredshopitems } = shopitemslice.actions;


export default shopitemslice.reducer