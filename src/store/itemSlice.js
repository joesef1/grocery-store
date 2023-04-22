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


// //filteritem (category)
export const filtercategory = createAsyncThunk(
  'item/filtercategory',
  async(category, thunkAPI) => {
    const {rejectWithValue, getState} = thunkAPI
  try {
    const res = await fetch('http://localhost:3007/item',{
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


// //filteritem (category)
export const filtersubcategory = createAsyncThunk(
  'item/filtersubcategory',
  async(subcategory, thunkAPI) => {
    const {rejectWithValue, getState} = thunkAPI
  try {
    const res = await fetch('http://localhost:3007/item',{
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
//

export const currentSearchResult = createAsyncThunk(
  'item/currentSearchResult',
  async(written, thunkAPI) => {
    const {rejectWithValue, getState} = thunkAPI
  try {
    const res = await fetch('http://localhost:3007/item',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      // body: JSON.stringify(category)  
    })  
    const data = await res.json();
    // const result = data.filter((item) => item.title === written);
    const result = written;
    
    return result;
    
  } catch (error) {
    return rejectWithValue(error.message);
  }
})
//


export const itemSlice = createSlice({
  name: 'items',
  initialState: {items: [] , isLoading: false, error: null , readitem:null ,filteredItems: [],targetedsearchword: ''},
  reducers: {
  
    setSearchQuery: (state, action) => {
       state.targetedsearchword = action.payload;

      // console.log(state.targetedsearchword);

      state.filteredItems = state.items.filter((item) =>
    item.name.toLowerCase().startsWith(state.targetedsearchword.toLowerCase())
  );

      

    },




    emptythesearch: (state, action) => {
      state.targetedsearchword = "";
    //  console.log(state.items);
      // console.log(action.payload);
    },



  },
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

    // filtercategorytitem
    [filtercategory.pending]: (state, action) => {
      state.isLoading = true
      state.error = false      
    },
    [filtercategory.fulfilled]: (state, action) => {
      state.isLoading = false
      // console.log(action.payload);
      state.items = action.payload;      
    },
    [filtercategory.rejected]: (state, action) => {
      state.isLoading = false
      // console.log(action);
      state.error = action.payload
    },
    //

    
    // filtercategorytitem
    [filtersubcategory.pending]: (state, action) => {
      state.isLoading = true
      state.error = false      
    },
    [filtersubcategory.fulfilled]: (state, action) => {
      state.isLoading = false
    ////  console.log(action.payload);
      state.items = action.payload;      
    },
    [filtersubcategory.rejected]: (state, action) => {
      state.isLoading = false
    ////  console.log(action);
      state.error = action.payload
    },
    //



    [currentSearchResult.pending]: (state, action) => {
      state.isLoading = true
      state.error = false      
    },
    [currentSearchResult.fulfilled]: (state, action) => {
      state.isLoading = false
    ////  console.log("action.payload");
      // state.items = action.payload;      
    },
    [currentSearchResult.rejected]: (state, action) => {
      state.isLoading = false
    ////  console.log(action);
      state.error = action.payload
    },

  }
})

// export const {currentSearchResults} = itemSlice.actions
export const { setSearchQuery, FilteredItems ,emptythesearch } = itemSlice.actions;


export default itemSlice.reducer