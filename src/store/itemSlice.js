import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//getitems
export const getitems = createAsyncThunk(
  'item/getitems',
  async(_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
  try {
    const res = await fetch('https://grocery-db.onrender.com/item');
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


// //filteritem (category)
export const filtersubcategory = createAsyncThunk(
  'item/filtersubcategory',
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
//

export const currentSearchResult = createAsyncThunk(
  'item/currentSearchResult',
  async(written, thunkAPI) => {
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
  initialState: {items: [] ,showMoreState: false, isLoading: false, error: null , readitem:null ,filteredItems: [],targetedsearchword: ''},
  reducers: {
  
    setSearchQuery: (state, action) => {
       state.targetedsearchword = action.payload;

      state.filteredItems = state.items.filter((item) =>
    item.name.toLowerCase().includes(state.targetedsearchword.toLowerCase())
  )},


  emptythesearch: (state, action) => {
    state.targetedsearchword = "";
  },

  
  showMorebtn: (state, action) => {
    state.showMoreState = true
  },
  hideMorebtn: (state, action) => {
    state.showMoreState = false
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
      state.showMoreState = false    

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
      state.showMoreState = false    
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
export const { setSearchQuery, FilteredItems ,emptythesearch ,showMorebtn ,hideMorebtn } = itemSlice.actions;


export default itemSlice.reducer