import { createSlice } from '@reduxjs/toolkit';
import Data from "../Data";

const dataSlice = createSlice({
  name: 'data',
  initialState: { datavalue: Data},
  reducers: {

    showdatastate: (state ) => {
      console.log(state.datavalue); 
    },
    
    
  },
});

export const  {showdatastate}  = dataSlice.actions
export default dataSlice.reducer;

