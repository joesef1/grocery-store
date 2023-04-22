import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getblog = createAsyncThunk(
  'blog/getblog',
  async(_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
  try {
    const res = await fetch('http://localhost:3007/blog');
    const data = await res.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

export const blogSlice = createSlice({
  name: 'blog',
  initialState: {blog: [], isLoading: false, error: null },

  reducers: {},

  extraReducers: {  
    [getblog.pending]: (state, action) => {
      state.isLoading = true
      state.error = false      
    },
    [getblog.fulfilled]: (state, action) => {
      state.isLoading = false
      state.blog = action.payload;      
    },
    [getblog.rejected]: (state, action) => {
      state.isLoading = false
      // console.log(action);
      state.error = action.payload
    },
  }
})

// export const {} = blogSlice.actions
export default blogSlice.reducer



