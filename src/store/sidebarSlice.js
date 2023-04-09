import { createSlice } from '@reduxjs/toolkit';


const sidebarSlice = createSlice({
  name: 'sidenavigation',
  initialState: { sidenavstate: false},
  reducers: {

    opensidenav: (state ) => {
      state.sidenavstate = true;
    },
    closesidenav: (state ) => {
      state.sidenavstate = false;
    },
    
  },
});

export const  {opensidenav,closesidenav}  = sidebarSlice.actions
export default sidebarSlice.reducer;

