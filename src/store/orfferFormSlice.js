import { createSlice } from '@reduxjs/toolkit';
import { orderSummrize } from "../firebase-config";
import {
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore";



const orfferFormSlice = createSlice({
  name: 'form',
  initialState: { ordersum: [], fullNameState: '', adressState: "",emailState: '', phoneState: 0,stateState: '',apertState: '',dateState: '', zipState:'' },
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

    //
    setordersumfunc: (state , action) => {
      state.ordersum = action.payload;
    },
  }
});

export const  {setordersumfunc,setuserinfo,setuserAdress,setuserEmail,setuserPhone,setuserApert,setuserDate,setuserState,setuserZip}  = orfferFormSlice.actions
const commentsCollectionRef = collection(orderSummrize, "ordersummarize");

export const getorderList = () => async (dispatch) => {
  try {
    const data = await getDocs(commentsCollectionRef);
    const filteredReviewData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));

    dispatch(setordersumfunc(filteredReviewData));
    console.log("filteredReviewData");

  } catch (err) {
    console.error(err);
  }
};

export default orfferFormSlice.reducer;
