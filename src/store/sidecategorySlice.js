import { createSlice } from '@reduxjs/toolkit';


const sidecategorySlice = createSlice({
  name: 'sidecategory',
  initialState: { sidecategory: false},
  reducers: {

    opensidecategory: (state ) => {
      state.sidecategory = true;
    },
    closesidecategory: (state ) => {
      state.sidecategory = false;
    },
    
  },
});


export const  {closesidecategory,opensidecategory}  = sidecategorySlice.actions
export default sidecategorySlice.reducer;

