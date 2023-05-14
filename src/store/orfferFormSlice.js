import { createSlice } from '@reduxjs/toolkit';


const orfferFormSlice = createSlice({
  name: 'form',
  initialState: { fullNameState: '', adressState: "",emailState: '', phoneState: 0,stateState: '',apertState: '',dateState: '', zipState:'' },
  reducers: {

    setuserinfo: (state , action) => {
      state.fullNameState = action.payload;
    }, 

    setuserAdress: (state , action) => {
      state.adressState = action.payload;
    },

    setuserEmail: (state , action) => {
      state.emailState = action.payload;
    },
    
    setuserPhone: (state , action) => {
      state.phoneState = action.payload;
    },

    setuserApert: (state , action) => {
      state.apertState = action.payload;
    },

    setuserDate: (state , action) => {
      state.dateState = action.payload;
    },

    setuserState: (state , action) => {
      state.stateState = action.payload;
    },

    setuserZip: (state , action) => {
      state.zipState = action.payload;
    },


  }

});


export const  {setuserinfo,setuserAdress,setuserEmail,setuserPhone,setuserApert,setuserDate,setuserState,setuserZip}  = orfferFormSlice.actions
export default orfferFormSlice.reducer;




