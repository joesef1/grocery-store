import { createSlice } from '@reduxjs/toolkit';


const searchIconSlice = createSlice({
  name: 'searchIcon',
  initialState: { sidenavstate: false},
  reducers: {

    opensearchIcon: (state ) => {
      state.sidenavstate = true;
    },
    closesearchIcon: (state ) => {
      state.sidenavstate = false;
    },
    
  },
});

export const  {opensearchIcon,closesearchIcon}  = searchIconSlice.actions
export default searchIconSlice.reducer;

